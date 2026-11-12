const daysOfWeek = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// Start date of radio programming, UTC for accurate/local time, arbitrary hour/minute/second
const startDate = new Date("November, 24 2026 9:00:00 GMT-6:00");
log(`Starting date: ${startDate}`);

// To skip certain days of the week, change skipDays to include those days
// const skipDays = [ "monday", "tuesday", "wednesday", "thursday", "friday" ];
const skipDays = [ "sunday", "saturday" ];
log(`Skipping days ${skipDays}\n\n`);

// Date offset to skip non programming days
let offset = 0;
