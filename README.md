# Lobby display data (not published by Netlify)

The lobby screen reads `checkin.json` from this branch every 10 minutes to get the current
Golden volunteer check-in link. Updating it here changes the QR code without a Netlify publish,
so it uses no Netlify credits.

config.js: the lobby screen's settings (slides, ticker, schedule, closures, flyers, verses, QR links). The screen reads this
copy first and checks it every 10 minutes, so editing it here costs no Netlify credits. New images can go in media/ on this
branch and be referenced by their full raw URL:
https://raw.githubusercontent.com/pierrenfilsaime-netizen/harlemtemple-lobby/data/media/<file>
(Images already on the site, like media/captains.jpg, keep their short paths.) config.js on main is only a fallback.
