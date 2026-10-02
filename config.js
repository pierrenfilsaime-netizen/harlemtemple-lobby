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

  /* ---------- Weekly schedule (gold "Happening Now" tag on the ticker) ---------- */
  // During these hours the tag shows the program live. Between programs it shows what's "Up Next".
  // calendar: "gains" means the program follows the G.A.I.N.S. calendar below instead of the Corps holidays.
  // days: any mix like "Mon, Tue, Thu, Fri", or "Weekdays", or "Daily".  Times like "9:30 AM".
  // place is optional (shows as "Lower Hall · until 11:30 AM").
  schedule: [
    { name: "Food Pantry",              days: "Mon, Tue, Thu, Fri", start: "9:30 AM",  end: "11:30 AM" },
    { name: "Soup Kitchen",             days: "Weekdays",           start: "11:00 AM", end: "12:30 PM" },
    { name: "Afterschool",              days: "Weekdays",           start: "2:00 PM",  end: "6:00 PM", calendar: "gains" },
    { name: "Bible Study",              days: "Wed",                start: "6:30 PM",  end: "7:30 PM" },
    { name: "Prayer Meeting",           days: "Wed",                start: "7:30 PM",  end: "8:00 PM" },
    { name: "Youth Music and Arts",     days: "Fri",                start: "6:00 PM",  end: "8:30 PM" },
    { name: "Beginners Band",           days: "Sun",                start: "1:25 PM" },   // no end time given, shows for 1 hour
    { name: "Harlem Haven for Seniors", days: "Wed",                start: "10:00 AM", end: "1:00 PM" }
  ],

  /* ---------- Closed days, early closings and special hours ---------- */
  // calendar "corps" = Harlem Temple holiday schedule, applies to every program except Afterschool.
  // calendar "gains" = Harlem G.A.I.N.S. Afterschool calendar, applies to Afterschool only.
  // closed: true  |  closesAt: "1:00 PM"  |  start + end: special hours for that day.  until: "YYYY-MM-DD" for a range.
  exceptions: [
    // Harlem Temple (2027 holiday schedule)
    { date: "2027-01-01", calendar: "corps", closed: true, label: "New Year's Day" },
    { date: "2027-01-15", calendar: "corps", closesAt: "1:00 PM", label: "Martin Luther King Jr. Weekend" },
    { date: "2027-01-18", calendar: "corps", closed: true, label: "Dr. Martin Luther King Jr. Day" },
    { date: "2027-02-12", calendar: "corps", closesAt: "1:00 PM", label: "Presidents' Day Weekend" },
    { date: "2027-02-15", calendar: "corps", closed: true, label: "Presidents' Day" },
    { date: "2027-03-26", calendar: "corps", closed: true, label: "Good Friday" },
    { date: "2027-05-28", calendar: "corps", closesAt: "1:00 PM", label: "Memorial Day Weekend" },
    { date: "2027-05-31", calendar: "corps", closed: true, label: "Memorial Day" },
    { date: "2027-06-18", calendar: "corps", closed: true, label: "Juneteenth" },
    { date: "2027-07-05", calendar: "corps", closed: true, label: "Independence Day" },
    { date: "2027-09-03", calendar: "corps", closesAt: "1:00 PM", label: "Labor Day Weekend" },
    { date: "2027-09-06", calendar: "corps", closed: true, label: "Labor Day" },
    { date: "2027-10-08", calendar: "corps", closesAt: "1:00 PM", label: "Columbus Day Weekend" },
    { date: "2027-10-12", calendar: "corps", closed: true, label: "Columbus Day" },
    { date: "2027-11-11", calendar: "corps", closed: true, label: "Veterans Day" },
    { date: "2027-11-24", calendar: "corps", closesAt: "12:00 PM", label: "Day before Thanksgiving" },
    { date: "2027-11-25", until: "2027-11-26", calendar: "corps", closed: true, label: "Thanksgiving" },
    { date: "2027-12-23", calendar: "corps", closesAt: "12:00 PM", label: "Christmas Eve" },
    { date: "2027-12-24", calendar: "corps", closed: true, label: "Christmas Day (observed)" },
    { date: "2027-12-31", calendar: "corps", closed: true, label: "New Year's Day (observed)" },

    // Harlem G.A.I.N.S. Afterschool (2026-2027)
    { date: "2026-10-12", calendar: "gains", closed: true, label: "Indigenous Peoples' Day" },
    { date: "2026-11-03", calendar: "gains", start: "8:00 AM", end: "6:00 PM", label: "Election Day" },
    { date: "2026-11-05", calendar: "gains", closed: true, label: "DOE Parent Teacher Conference" },
    { date: "2026-11-11", calendar: "gains", start: "8:00 AM", end: "6:00 PM", label: "Veterans Day" },
    { date: "2026-11-26", until: "2026-11-27", calendar: "gains", closed: true, label: "Thanksgiving Recess" },
    { date: "2026-12-24", until: "2027-01-01", calendar: "gains", closed: true, label: "Winter Recess" },
    { date: "2027-01-18", calendar: "gains", closed: true, label: "Dr. Martin Luther King Jr. Day" },
    { date: "2027-02-15", calendar: "gains", closed: true, label: "Presidents' Day" },
    { date: "2027-02-16", until: "2027-02-19", calendar: "gains", start: "8:00 AM", end: "6:00 PM", label: "Midwinter Recess" },
    { date: "2027-03-03", calendar: "gains", closed: true, label: "DOE Parent Teacher Conference" },
    { date: "2027-03-09", calendar: "gains", closed: true, label: "Eid al-Fitr" },
    { date: "2027-03-26", calendar: "gains", closed: true, label: "Good Friday" },
    { date: "2027-04-22", until: "2027-04-30", calendar: "gains", start: "8:00 AM", end: "6:00 PM", label: "Spring Recess" },
    { date: "2027-05-17", calendar: "gains", closed: true, label: "Eid al-Adha" },
    { date: "2027-05-31", calendar: "gains", closed: true, label: "Memorial Day" },
    { date: "2027-06-08", calendar: "gains", closed: true, label: "DOE Clerical Day" },
    { date: "2027-06-10", calendar: "gains", closed: true, label: "DOE Chancellor's Conference Day" },
    { date: "2027-06-12", until: "2027-09-30", calendar: "gains", closed: true, label: "Summer break" }
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
    { type: "image", media: "media/music-arts-26-27.jpg", fit: "contain", duration: 15 },
    { type: "image", media: "media/christmas-toy-distribution.jpg", fit: "contain", duration: 15, end: "2026-12-19" },
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

    /* ---- Holiday notices: each appears 3 business days before (lead: 3) and disappears after its last date ---- */
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for New Year's Day", "date": "2027-01-01", "lead": 3, "rows": [{ "date": "2027-01-01", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Martin Luther King Jr. Weekend", "date": "2027-01-15", "until": "2027-01-18", "lead": 3, "rows": [{ "date": "2027-01-15", "status": "Closes at 1:00 PM", "tone": "early" }, { "date": "2027-01-18", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Presidents' Day Weekend", "date": "2027-02-12", "until": "2027-02-15", "lead": 3, "rows": [{ "date": "2027-02-12", "status": "Closes at 1:00 PM", "tone": "early" }, { "date": "2027-02-15", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for Good Friday", "date": "2027-03-26", "lead": 3, "rows": [{ "date": "2027-03-26", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Memorial Day Weekend", "date": "2027-05-28", "until": "2027-05-31", "lead": 3, "rows": [{ "date": "2027-05-28", "status": "Closes at 1:00 PM", "tone": "early" }, { "date": "2027-05-31", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for Juneteenth", "date": "2027-06-18", "lead": 3, "rows": [{ "date": "2027-06-18", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for Independence Day", "date": "2027-07-05", "lead": 3, "rows": [{ "date": "2027-07-05", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Labor Day Weekend", "date": "2027-09-03", "until": "2027-09-06", "lead": 3, "rows": [{ "date": "2027-09-03", "status": "Closes at 1:00 PM", "tone": "early" }, { "date": "2027-09-06", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Columbus Day Weekend", "date": "2027-10-08", "until": "2027-10-12", "lead": 3, "rows": [{ "date": "2027-10-08", "status": "Closes at 1:00 PM", "tone": "early" }, { "date": "2027-10-12", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for Veterans Day", "date": "2027-11-11", "lead": 3, "rows": [{ "date": "2027-11-11", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Thanksgiving Holiday", "date": "2027-11-24", "until": "2027-11-26", "lead": 3, "rows": [{ "date": "2027-11-24", "status": "Closes at 12 noon", "tone": "early" }, { "date": "2027-11-25", "until": "2027-11-26", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Christmas Holiday", "date": "2027-12-23", "until": "2027-12-24", "lead": 3, "rows": [{ "date": "2027-12-23", "status": "Closes at 12 noon", "tone": "early" }, { "date": "2027-12-24", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "cream", "kicker": "Harlem Temple Corps · Holiday Schedule", "title": "Closed for New Year's Day (observed)", "date": "2027-12-31", "lead": 3, "rows": [{ "date": "2027-12-31", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Indigenous Peoples' Day", "date": "2026-10-12", "lead": 3, "rows": [{ "date": "2026-10-12", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Parent Orientation", "date": "2026-10-15", "lead": 3, "rows": [{ "date": "2026-10-15", "status": "Starts 5:30 PM", "tone": "event" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Election Day: Full Day Program", "date": "2026-11-03", "lead": 3, "rows": [{ "date": "2026-11-03", "status": "Open 8 AM to 6 PM", "tone": "open" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Parent Teacher Conferences", "date": "2026-11-05", "lead": 3, "rows": [{ "date": "2026-11-05", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Veterans Day: Full Day Program", "date": "2026-11-11", "lead": 3, "rows": [{ "date": "2026-11-11", "status": "Open 8 AM to 6 PM", "tone": "open" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Thanksgiving Recess", "date": "2026-11-26", "until": "2026-11-27", "lead": 3, "rows": [{ "date": "2026-11-26", "until": "2026-11-27", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Winter Recess", "date": "2026-12-24", "until": "2027-01-04", "lead": 3, "rows": [{ "date": "2026-12-24", "until": "2027-01-01", "status": "Closed", "tone": "closed" }, { "date": "2027-01-04", "status": "Back 2 PM to 6 PM", "tone": "open" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Dr. Martin Luther King Jr. Day", "date": "2027-01-18", "lead": 3, "rows": [{ "date": "2027-01-18", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Presidents' Day and Midwinter Recess", "date": "2027-02-15", "until": "2027-02-19", "lead": 3, "rows": [{ "date": "2027-02-15", "status": "Closed", "tone": "closed" }, { "date": "2027-02-16", "until": "2027-02-19", "status": "Open 8 AM to 6 PM", "tone": "open" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Parent Teacher Conferences", "date": "2027-03-03", "lead": 3, "rows": [{ "date": "2027-03-03", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Eid al-Fitr", "date": "2027-03-09", "lead": 3, "rows": [{ "date": "2027-03-09", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Good Friday", "date": "2027-03-26", "lead": 3, "rows": [{ "date": "2027-03-26", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Spring Recess: Full Day Program", "date": "2027-04-22", "until": "2027-04-30", "lead": 3, "rows": [{ "date": "2027-04-22", "until": "2027-04-30", "status": "Open 8 AM to 6 PM", "tone": "open" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Eid al-Adha", "date": "2027-05-17", "lead": 3, "rows": [{ "date": "2027-05-17", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "Closed for Memorial Day", "date": "2027-05-31", "lead": 3, "rows": [{ "date": "2027-05-31", "status": "Closed", "tone": "closed" }]}
    ,{ "type": "notice", "theme": "navy", "kicker": "Harlem G.A.I.N.S. Afterschool", "title": "End of the School Year", "date": "2027-06-08", "until": "2027-06-11", "lead": 3, "rows": [{ "date": "2027-06-08", "status": "Closed", "tone": "closed" }, { "date": "2027-06-10", "status": "Closed", "tone": "closed" }, { "date": "2027-06-11", "status": "Last day, 2 PM to 6 PM", "tone": "open" }]}
  ]
};
