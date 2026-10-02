# Harlem Temple Lobby Display

A full screen slideshow for the lobby TV: photos, videos, announcements, events and scripture, with a lower third that always shows the Volunteer Sign-Up QR, Volunteer Check-In QR, a "Save Our Contact" QR (adds the Corps to a visitor's phone), a scrolling ticker, and the time and date.

Cost: $0. No subscriptions, no accounts required beyond free ones.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The display itself. You don't need to edit it. |
| `config.js` | **The only file you edit**: names, QR links, contact info, ticker, slides. |
| `qrcode.js` | Makes the QR codes on the screen (works offline). |
| `media/` | Put photos, videos and your logo here. |
| `sheet-template.csv` | Optional: import into Google Sheets to manage slides from your phone. |

## Step 1: Fill in your info (5 minutes)

Open `config.js` in Notepad (or any text editor) and change:

1. **volunteerSignup.url** and **volunteerCheckin.url**: these are your Golden Volunteer links (already filled in).
   - The sign-up link is permanent.
   - **The check-in link is made for a single day and expires** (the current one ends Tue, Oct 6 at 11:30 AM). When it changes, paste the new link between the quotes. Once a link expires, the screen shows "See the front desk" instead of a code that won't work.
2. **contactCard**: add the Corps phone, email and website. Anything left blank is simply left off the contact card.
3. **logo**: save your logo as `media/logo.png`. If it isn't there, the red "HT" badge shows instead.
4. **ticker**: the scrolling lines in the red strip.

## Weekly schedule (the "Happening Now" tag)

In `config.js`, the `schedule` list holds the Corps' regular programs. During those hours, the gold tag on the ticker shows the program with a pulsing dot ("Happening Now: Food Pantry, until 11:30 AM"). Between programs it turns cream and shows "Up Next" with the day and time. If two things run at once, it alternates between them.

```js
{ name: "Food Pantry", days: "Mon, Tue, Thu, Fri", start: "9:30 AM", end: "11:30 AM", place: "Lower Hall" }
```

With the Google Sheet option, add rows with type `schedule`, the program in `title`, days in `weekly`, and the times in `start` and `end`.

## Holidays, closed days and special hours

`exceptions` in `config.js` adjusts the weekly schedule on specific dates:

- `calendar: "corps"` rows come from the Harlem Temple holiday schedule and apply to every program except Afterschool.
- `calendar: "gains"` rows come from the Harlem G.A.I.N.S. calendar and apply to Afterschool only.
- `closed: true` closes for the day, `closesAt: "1:00 PM"` is an early closing, and `start` + `end` set special hours (like full-day 8 AM to 6 PM recess days). Add `until` for a date range.

On a Corps holiday the ticker tag shows "Closed Today" or "Closing Early" and alternates with what's up next.

**Holiday notice slides** use `type: "notice"`. `lead: 3` makes a slide appear 3 business days before its `date`, and it disappears the day after `until` (or `date`). Each row is a date with a status pill: `tone` can be `closed` (red), `early` (gold), `open` (green) or `event` (navy).

## Step 2: Add slides

Each slide in `config.js` is one block between `{ }`. Types:

- **text**: kicker, title, body. `theme` can be `"cream"`, `"navy"` or `"red"`. Add `media: "media/photo.jpg"` to put a photo behind the text.
- **event**: title, time, place, body. Use `date: "2026-11-26"` for a one-time event (it hides itself the day after), or `weekly: "Sunday"` for a recurring one.
- **image**: `media: "media/file.jpg"`, optional title and subtitle caption. Use `fit: "contain"` for flyers so nothing gets cropped.
- **video**: `media: "media/file.mp4"`. Plays muted and moves on when it ends. MP4 (H.264) works everywhere.
- **youtube**: paste the YouTube link in `media` and set `duration` in seconds.
- **scripture**: `text` and `cite`.

Any slide can have `duration` (seconds), `start` and `end` dates (`"2026-12-01"`) so it appears and disappears on its own. A photo or video that can't be found is skipped, so a typo never leaves a blank screen.

## Step 3: Put it online for free

Pick one:

**A. Netlify Drop (easiest, no coding)**
1. Go to app.netlify.com/drop and make a free account.
2. Drag the whole `harlem-temple-lobby` folder onto the page.
3. You get a link. Open it on the lobby TV. To update, drag the folder in again on the same site.

**B. GitHub Pages (free, best for frequent updates)**
1. Make a free GitHub account, create a repository (for example `harlem-lobby`), and upload everything in this folder.
2. Settings, then Pages, then deploy from the `main` branch.
3. Your link will be `https://YOUR-NAME.github.io/harlem-lobby/`. Edit `config.js` right on github.com and the TV picks it up within a few hours (or press F5 on the TV).

**C. No internet at all**
Copy the folder to a USB stick or the lobby PC and double click `index.html`. Everything works offline except YouTube slides, the Google Sheet option and the fancy fonts (it falls back to standard fonts).

## Optional: run the slides from a Google Sheet

Lets anyone on staff update the lobby from a phone, no file editing.

1. In Google Sheets: File, Import, upload `sheet-template.csv`.
2. Edit rows. Put `no` in the `show` column to hide a row. Rows with type `ticker` become the scrolling ticker.
   A row with type `checkin` and the Golden check-in link in the `media` column replaces the check-in QR. This is the easiest way to paste in a new day's link from your phone.
3. File, Share, **Publish to web**, choose the sheet, choose **Comma-separated values (.csv)**, Publish, copy the link.
4. Paste that link into `sheetCsvUrl` in `config.js`.

The screen checks the sheet every 5 minutes. If the internet drops, it keeps showing the last content it loaded.

Photos for the sheet can live in Google Drive: share the photo as "Anyone with the link", copy its file ID (the long code in the link), and use
`https://drive.google.com/thumbnail?id=FILE_ID&sz=w1920` in the `media` column.

## On the TV

- **Click anywhere or press F** for full screen. Arrow keys go forward and back, Space pauses.
- The mouse pointer hides itself after 3 seconds.
- Cheapest reliable setup: any old laptop or mini PC on HDMI, running Chrome in kiosk mode so it opens full screen at startup:
  `chrome.exe --kiosk --autoplay-policy=no-user-gesture-required https://YOUR-LINK`
  Put that shortcut in the Windows Startup folder, and set the PC to never sleep.
- Most smart TV browsers will also work. Fire TV and Android TV sticks can use a kiosk browser app.
- Designed for 1920x1080 and scales to any screen size.

## Tip for QR codes

After you paste the real form links, scan each code with your phone from where visitors will stand before you call it done.
