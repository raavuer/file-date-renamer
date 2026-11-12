/* External variables:
- daysOfWeek : array (Days of the week)
- startDate : Date (Starting date for radio programming)
- skipDays : array (Days of week that will be skipped)
- daysOfWeek : object (Days of the week and their Date().getDay() counterpart)
- offset : integer (Date offset to account for weekends)
*/

log(`File Name: ${item.name} | File Index: ${index} | Weekend Offset: ${offset}`);

const fileDate = new Date(startDate);
fileDate.setDate(fileDate.getDate() + index);
log(`Added index ${index}: ${fileDate}`);
fileDate.setDate(fileDate.getDate() + offset);
log(`Added offset ${offset}: ${fileDate}`);

while (skipDays.includes(daysOfWeek[fileDate.getDay()])) {
log(`Day is ${daysOfWeek[fileDate.getDay()]}, updating offset by 1`);
fileDate.setDate(fileDate.getDate() + 1);
offset += 1;
}

log(`\nFinal date: ${fileDate}`);


// Convert from Date object to standard file date format
const formattedFileDate = fileDate.toISOString().substring(0, 10).replaceAll("-", "");
log(`Formatted date: ${formattedFileDate}`);

const filePrefix = item.name.substring(0, 2);
const fileSuffix = item.name.substring(10);
const newFileName = filePrefix + formattedFileDate + fileSuffix;
log(`New file name: ${newFileName}`);


log("\n");
return newFileName;
