// Is the Harlem Temple YouTube channel live right now?
// Called by the lobby screen: /.netlify/functions/live?channel=@YourHandle  (or a UC... channel ID)
// Returns { live: true, videoId: "..." } while a stream is on air, otherwise { live: false }.
// It reads the channel's public /live page on YouTube (no API key needed).
// A stream that is only scheduled ("upcoming", people waiting) does NOT count as live.

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json",
    "access-control-allow-origin": "*",
    "cache-control": "public, max-age=0, must-revalidate",
    "netlify-cdn-cache-control": "public, s-maxage=30"   // several screens share one answer for 30 seconds
  }
});

// Pull the JSON object that starts at `marker` out of the page (brace matching, string aware).
function extractObject(html, marker){
  const at = html.indexOf(marker);
  if (at < 0) return null;
  const start = html.indexOf("{", at);
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < html.length; i++) {
    const c = html[i];
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) { try { return JSON.parse(html.slice(start, i + 1)); } catch { return null; } } }
  }
  return null;
}

// Find the first value stored under `key` anywhere inside a nested object.
function findKey(obj, key, depth = 0){
  if (!obj || typeof obj !== "object" || depth > 40) return null;
  if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
  for (const v of Array.isArray(obj) ? obj : Object.values(obj)) { const f = findKey(v, key, depth + 1); if (f) return f; }
  return null;
}

export default async (req) => {
  const url = new URL(req.url);
  const channel = (url.searchParams.get("channel") || process.env.YOUTUBE_CHANNEL || "").trim();
  if (!/^(@[\w.\-]{3,100}|UC[\w-]{22})$/.test(channel)) return json({ live: false, error: "Set a YouTube @handle or UC channel ID" }, 400);

  const path = channel.startsWith("@") ? channel : "channel/" + channel;
  try {
    const r = await fetch("https://www.youtube.com/" + path + "/live", {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
        "cookie": "CONSENT=YES+1; SOCS=CAI"
      },
      redirect: "follow"
    });
    const html = await r.text();
    const player = extractObject(html, "ytInitialPlayerResponse = ") || extractObject(html, "ytInitialPlayerResponse=");
    const vd = (player && player.videoDetails) || {};
    const lbd = (((player || {}).microformat || {}).playerMicroformatRenderer || {}).liveBroadcastDetails || {};
    const ps = ((player || {}).playabilityStatus || {}).status;

    // 1) Main signal: YouTube's player data says this is a live broadcast on air now (not merely scheduled).
    const playerLive = !!(vd.videoId && vd.isLive === true && vd.isUpcoming !== true && lbd.isLiveNow !== false && ps === "OK");

    // 2) Backup when YouTube withholds player data (e.g. "login required" bot check): the watch page's
    //    view counter reads "N watching now" during a live stream and "N waiting" for a scheduled one.
    const data = extractObject(html, "ytInitialData = ") || extractObject(html, "ytInitialData=");
    const primary = findKey(data, "videoPrimaryInfoRenderer");
    const vvc = primary && primary.viewCount && primary.viewCount.videoViewCountRenderer;
    const counter = vvc ? JSON.stringify(vvc.viewCount || vvc.originalViewCount || "") : "";
    const pageVideoId = (((data || {}).currentVideoEndpoint || {}).watchEndpoint || {}).videoId || vd.videoId || null;
    const pageLive = !!(pageVideoId && vvc && vvc.isLive === true && /watching/i.test(counter) && !/waiting/i.test(counter) && vd.isUpcoming !== true);

    const live = ps === "OK" ? playerLive : pageLive;
    const videoIdOut = live ? (vd.videoId || pageVideoId) : null;

    return json({ live, videoId: videoIdOut, checked: new Date().toISOString() });
  } catch (e) {
    return json({ live: false, error: "Could not reach YouTube" }, 502);
  }
};
