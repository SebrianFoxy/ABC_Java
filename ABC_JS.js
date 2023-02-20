let date = new Date();
let day = date.getDay();

if (day == 6 || day == 7){
    console.log('Выходной')
}
else{
    console.log('Рабочий день')
}

