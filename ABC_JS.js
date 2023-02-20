let date = new Date(); 
let month = date.getMonth();

let months = [
'янв', 'фев', 'мар', 'апр', 'май', 'июн',
'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

while (month > 11) {
    month -= 12; 
}

console.log(months[month]);