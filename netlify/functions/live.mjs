// Is the Harlem Temple YouTube channel live right now?
// Called by the lobby screen: /.netlify/functions/live?channel=@YourHandle  (or a UC... channel ID)
// Returns { live: true, videoId: "..." } while a stream is on air, otherwise { live: false }.
// It reads the channel's public /live page on YouTube, so no API key is needed.

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json",
    "access-control-allow-origin": "*",
    // let Netlify's CDN reuse an answer for 30 seconds so several screens don't each hit YouTube
    "cache-control": "public, max-age=0, must-revalidate",
    "netlify-cdn-cache-control": "public, s-maxage=30"
  }
});

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
    // When live, /live resolves to the stream's watch page and the player reports isLiveNow:true.
    // When not live it shows the channel page (or a scheduled "upcoming" stream, which has isLiveNow:false).
    const canon = html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})"/);
    const liveNow = /"isLiveNow":\s*true/.test(html);
    const live = !!(canon && liveNow);
    if (url.searchParams.get("debug") === "1") {
      const pick = re => { const m = html.match(re); return m ? m[0].slice(0, 160) : null; };
      return json({ status: r.status, finalUrl: r.url, length: html.length,
        title: pick(/<title>[^<]*<\/title>/), canonical: pick(/<link rel="canonical"[^>]*>/),
        isLiveNow: pick(/"isLiveNow":\s*\w+/), isLive: pick(/"isLive":\s*\w+/), liveContent: pick(/"isLiveContent":\s*\w+/),
        style: pick(/"style":"LIVE"/), videoIdAny: pick(/"videoId":"[\w-]{11}"/), consent: /consent\.youtube|before you continue/i.test(html),
        vd: (() => { const i = html.indexOf('"videoDetails":{'); return i < 0 ? null : html.slice(i, i + 400); })(),
        aroundIsLive: (() => { const i = html.indexOf('"isLive":true'); return i < 0 ? null : html.slice(Math.max(0, i - 300), i + 60); })(),
        countIsLiveTrue: (html.match(/"isLive":true/g) || []).length, hasPlayerResponse: html.includes("ytInitialPlayerResponse") });
    }
    return json({ live, videoId: live ? canon[1] : null, checked: new Date().toISOString() });
  } catch (e) {
    return json({ live: false, error: "Could not reach YouTube" }, 502);
  }
};
