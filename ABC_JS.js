let now = new Date();

let midnight = new Date();
midnight.setHours(24, 0, 0, 0);

let diff = midnight.getTime() - now.getTime();

let hoursLeft = Math.round(diff / (1000*60*60));

console.log(hoursLeft);