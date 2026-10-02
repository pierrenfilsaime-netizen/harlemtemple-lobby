/* =====================================================================
   HARLEM TEMPLE LOBBY DISPLAY  ·  SETTINGS
   This is the only file you need to edit. Change the text between the
   quotes, save, and refresh the screen.
   ===================================================================== */

window.LOBBY = {

  /* ---------- Identity (left side of the lower third) ---------- */
  corpsName: "Harlem Temple Corps",
  orgLine:   "The Salvation Army · 540 Lenox Avenue",
  logo:      "media/logo.png",        // optional. Drop your logo in /media with this name. If missing, the "HT" badge shows instead.

  /* ---------- The three QR codes (right side of the lower third) ---------- */
  // Golden Volunteer links (Salvation Army Eastern Territory).
  volunteerSignup: {
    label: "Volunteer Sign-Up",
    hint:  "Join the team",
    url:   "https://volunteer.eastern.salvationarmyusa.org/opportunities/WUpNn7fMpd"
  },
  volunteerCheckin: {
    label: "Volunteer Check-In",
    hint:  "Here today?",
    // NOTE: Golden check-in links are made for one day and expire. Paste a fresh one when it changes.
    // When this link expires, the screen automatically swaps the code for "See the front desk" instead of showing a dead code.
    url:   "https://checkin.eastern.salvationarmyusa.org/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJaLWpqWFFsbTBzNGM3UzB5eEhlLXc2ZWVOdGN4M2ptOTdEdE1QblUzIiwiZGF5T2ZUaW1lc2xvdHMiOiIyMDI2LTEwLTAyIiwib3JnYW5pemF0aW9uIjoidmtpQ3VKZ3ZqTCIsImlzQ2hlY2tpbiI6dHJ1ZSwiaWF0IjoxNzkwOTU1MDQyLCJleHAiOjE3OTEzMDA2NDJ9.E1xUHYPKXl8hmjsnOUnZ8RyGCzxqlURD5JV-ET2Jarc?dayOf=true",
    expiredHint: "See the front desk"
  },
  // Scanning this one saves the Corps as a contact in the visitor's phone.
  contactCard: {
    label:   "Save Our Contact",
    hint:    "Save to your phone",
    name:    "Harlem Temple Corps",
    org:     "The Salvation Army",
    phone:   "(212) 862-3900",
    email:   "gnyharlemtemple.rfg@use.salvationarmy.org",
    website: "",                       // e.g. "https://..."
    street:  "540 Lenox Avenue",
    city:    "New York",
    state:   "NY",
    zip:     "10037"
  },

  /* ---------- Scrolling ticker (red strip above the lower third) ---------- */
  ticker: [
    "Welcome to The Salvation Army Harlem Temple Corps",
    "All are welcome here",
    "Volunteers needed: scan the code below to sign up",
    "Christmas Toy Distribution registration information available at the front desk"
  ],

  /* ---------- Timing ---------- */
  defaultDuration: 12,       // seconds each slide stays up (videos play to the end)
  sheetRefreshMinutes: 5,    // how often to re-check the Google Sheet for new content
  reloadEveryHours: 6,       // full refresh to pick up any changes to this file

  /* ---------- Optional: run the slides from a Google Sheet ---------- */
  // Paste the "Publish to web > CSV" link here and the screen will follow the sheet.
  // Leave blank to use the slides listed below. See README for the column names.
  sheetCsvUrl: "",

  /* ---------- Slides ---------- */
  // Types: "text", "event", "image", "video", "youtube", "scripture"
  // Optional on any slide: duration (seconds), start / end ("2026-11-01") to auto show and hide.
  // Themes for text slides: "cream", "navy", "red"
  slides: [
    {
      type: "text", theme: "cream",
      kicker: "Welcome",
      title: "Welcome to Harlem Temple",
      body: "Worship, community, and care for every neighbor on Lenox Avenue and beyond."
    },
    {
      type: "event",
      weekly: "Sunday",          // for a one-time event use  date: "2026-10-18"  instead (it hides itself after that day)
      title: "Sunday Holiness Meeting",
      time: "11:00 AM",
      place: "Main Chapel",
      body: "Come as you are. Children's ministry available during service."
    },
    {
      type: "text", theme: "red",
      kicker: "Christmas Toy Distribution",
      title: "Registration is open",
      body: "Families can pick up an application at the front desk. Bring ID for each parent or guardian and proof of each child's age."
    },
    {
      type: "scripture",
      text: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
      cite: "Matthew 25:40"
    },
    {
      type: "text", theme: "navy",
      kicker: "Get Involved",
      title: "Serve with us",
      body: "Food pantry, youth programs, holiday drives and more. Scan the Volunteer Sign-Up code below to get started."
    }

    /* ---- Examples for photos and video. Put the files in /media, remove the slashes and stars. ----
    ,{ type: "image", media: "media/food-pantry.jpg", title: "Food Pantry", subtitle: "Every Tuesday and Thursday" }
    ,{ type: "image", media: "media/flyer.png", fit: "contain" }               // shows the whole image, good for flyers
    ,{ type: "video", media: "media/youth-night.mp4", title: "Youth Night" }   // plays muted, moves on when it ends
    ,{ type: "youtube", media: "https://www.youtube.com/watch?v=XXXXXXXXXXX", duration: 60 }
    ,{ type: "text", theme: "navy", media: "media/choir.jpg", kicker: "This Sunday", title: "Songster Brigade", body: "..." }
    ---------------------------------------------------------------------------------------------- */
  ]
};
