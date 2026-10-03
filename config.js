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
    url:   "https://x.gldn.io/e/The_Salvation_Army_New_York_Harlem_Temple_Corps_Community_Center"
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
    { name: "Sunday School",            days: "Sun",                start: "10:00 AM", end: "11:00 AM" },
    { name: "Holiness Service",         days: "Sun",                start: "11:00 AM" },  // no end time given, shows for 1 hour
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

  /* ---------- Verse of the Week (NIV) ---------- */
  // Changes every Monday on its own, working down this list and starting over at the end.
  // Add a "week" (the Monday date) to pin a verse to a holiday week; pinned verses only show that week.
  verseOfWeek: {
    startWeek: "2026-09-28",
    verses: [
      { week: "2026-11-23", ref: "Psalm 100:4", text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name." },
      { week: "2026-12-14", ref: "Isaiah 9:6", text: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." },
      { week: "2026-12-21", ref: "Luke 2:10-11", text: "But the angel said to them, “Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.”" },
      { week: "2026-12-28", ref: "Lamentations 3:22-23", text: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
      { ref: "Jeremiah 29:11", text: "“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”" },
      { ref: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
      { ref: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
      { ref: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
      { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
      { ref: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
      { ref: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
      { ref: "Matthew 11:28", text: "“Come to me, all you who are weary and burdened, and I will give you rest.”" },
      { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
      { ref: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
      { ref: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing." },
      { ref: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
      { ref: "1 Corinthians 13:13", text: "And now these three remain: faith, hope and love. But the greatest of these is love." },
      { ref: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
      { ref: "Romans 12:12", text: "Be joyful in hope, patient in affliction, faithful in prayer." },
      { ref: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
      { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
      { ref: "Matthew 5:16", text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
      { ref: "James 1:22", text: "Do not merely listen to the word, and so deceive yourselves. Do what it says." },
      { ref: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
      { ref: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
      { ref: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
      { ref: "Hebrews 13:2", text: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it." },
      { ref: "Proverbs 19:17", text: "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done." },
      { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
      { ref: "John 13:34", text: "A new command I give you: Love one another. As I have loved you, so you must love one another." },
      { ref: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law." },
      { ref: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
      { ref: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
      { ref: "1 John 4:19", text: "We love because he first loved us." },
      { ref: "Deuteronomy 31:8", text: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged." },
      { ref: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
      { ref: "Luke 6:31", text: "Do to others as you would have them do to you." },
      { ref: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
      { ref: "Psalm 37:4", text: "Take delight in the Lord, and he will give you the desires of your heart." },
      { ref: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
      { ref: "1 Thessalonians 5:16-18", text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus." },
      { ref: "Psalm 133:1", text: "How good and pleasant it is when God’s people live together in unity!" },
      { ref: "Romans 12:10", text: "Be devoted to one another in love. Honor one another above yourselves." },
      { ref: "1 Peter 4:10", text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms." },
      { ref: "Psalm 9:9", text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble." },
      { ref: "John 1:5", text: "The light shines in the darkness, and the darkness has not overcome it." },
      { ref: "Matthew 5:9", text: "Blessed are the peacemakers, for they will be called children of God." },
      { ref: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world." },
      { ref: "Proverbs 16:3", text: "Commit to the Lord whatever you do, and he will establish your plans." },
      { ref: "Ephesians 4:32", text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." },
      { ref: "1 John 3:18", text: "Dear children, let us not love with words or speech but with actions and in truth." },
      { ref: "Psalm 145:18", text: "The Lord is near to all who call on him, to all who call on him in truth." },
      { ref: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." }
    ]
  },

  /* ---------- Timing ---------- */
  defaultDuration: 12,       // seconds each slide stays up (videos play to the end)
  sheetRefreshMinutes: 5,    // how often to re-check the Google Sheet for new content
  updateCheckSeconds: 60,    // how often the screen checks for a newly published version and reloads itself
  reloadEveryHours: 6,       // extra full refresh as a safety net

  /* ---------- Optional: run the slides from a Google Sheet ---------- */
  // Paste the "Publish to web > CSV" link here and the screen will follow the sheet.
  // Leave blank to use the slides listed below. See README for the column names.
  sheetCsvUrl: "",

  /* ---------- Slides ---------- */
  // Types: "text", "event", "image", "video", "youtube", "scripture"
  // Optional on any slide: duration (seconds), start / end ("2026-11-01") to auto show and hide.
  // Themes for text slides: "cream", "navy", "red"
  slides: [
    { type: "verseofweek", duration: 15 },
    {
      type: "text", theme: "cream",
      kicker: "Welcome",
      title: "Welcome to Harlem Temple",
      body: "Worship, community, and care for every neighbor on Lenox Avenue and beyond."
    },
    {
      type: "event",
      weekly: "Sunday",          // for a one-time event use  date: "2026-10-18"  instead (it hides itself after that day)
      title: "Holiness Service",
      time: "11:00 AM",
      body: "Sunday School begins at 10:00 AM. All are welcome."
    },
    { type: "image", media: "media/music-arts-26-27.jpg", fit: "contain", duration: 15 },
    { type: "image", media: "media/christmas-toy-distribution.jpg", fit: "contain", duration: 15, end: "2026-12-19" },
    {
      type: "scripture",
      text: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
      cite: "Matthew 25:40 (NIV)"
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
