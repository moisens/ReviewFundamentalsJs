console.log('--------------Math Object-----------');
//Math
//Standard build-in objects - always available

const leNombre = 4.56789;
const leResult = Math.floor(leNombre);
const leResult2 = Math.ceil(leNombre);
const anum = 4;
const leResult3 = Math.sqrt(anum);
const leResult4 = Math.PI;
const leResult5 = Math.min(1,2,3,4,5,6,7,8,9);
const leResult6 = Math.max(1,2,3,4,5,6,7,8,9);

const leResult7 = Math.floor(Math.random() * 10 + 1)


console.log(leResult);
console.log(leResult2);
console.log(leResult3);
console.log(leResult4);
console.log(leResult5);
console.log(leResult6);
console.log(leResult6);
console.log(leResult7);

console.log('-------------Date-------------');

//Date
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const senteceDate = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
console.log(senteceDate);