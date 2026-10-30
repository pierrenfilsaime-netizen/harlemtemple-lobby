# Adding or updating a flyer on the lobby screen

Neek wants every Harlem Temple flyer finished in any Claude chat to go on the lobby screen
automatically, and the screen copy replaced whenever the flyer is revised.

Work ONLY on this `data` branch. Never commit flyers to `main`: every change there triggers a
Netlify publish that costs 15 credits. The screen reads `config.js` from this branch every
10 minutes, so changes here are free and show up on their own.

1. Clone: `git clone --depth 1 -b data https://github.com/pierrenfilsaime-netizen/harlemtemple-lobby lobby-data`
2. Save the flyer as a JPG in `media/`, about 2000 px tall, quality 90, with a short dated name
   (for example `media/christmas-show-concert-2026.jpg`). For a revision, overwrite the same file.
3. In `config.js`, add (or update) a slide in the `slides` list, next to the other flyers:
   ```js
   { type: "image",
     media: "https://raw.githubusercontent.com/pierrenfilsaime-netizen/harlemtemple-lobby/data/media/FILE.jpg",
     fit: "contain", duration: 15,
     date: "YYYY-MM-DD",        // event day, if there is one
     end:  "YYYY-MM-DD",        // last day to show it (usually the event day)
     start: "YYYY-MM-DD",       // optional: first day to show it, for events far away
     ticker: "Event · Day, Mon DD, Time · short detail" },   // optional ticker line, shown 3 business days ahead
   ```
   Ongoing programs (no single date) get no date/end/ticker.
4. Check it loads: `node -e "global.window={};require('./config.js');console.log(window.LOBBY.slides.length)"`
5. Commit with a clear message and `git push origin data`.
6. Tell Neek it's on the lobby screen, when it starts and stops showing, and that it cost no Netlify credits.
