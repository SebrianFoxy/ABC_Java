let now  = new Date();
let date = new Date(2015, 11, 4, 23, 59, 59);

let diff = now.getTime() - date.getTime();
console.log(diff / (1000 * 60 * 60));