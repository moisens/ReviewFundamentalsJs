//Conditional Statements
//>, <, >=, <=, ==, ===, !=, !==
//else if and !

const vals = false;
console.log(typeof vals);

if(vals){
    console.log('Hello world');
    
}else{
    console.log('Hello little fella');
    
}

const nums1 = 6;
const nums2 = 6;
const resultts = nums1 >= nums2;

if(nums1 > nums2){
    console.log('first number is bigger than second');
    
}else if(resultts){
    console.log('first number equal to the second');
    
}else{
    console.log('second number is bigger than first');
}


const laVal = false;
if(!laVal){
    console.log('Condition match');
    
}

const nums3 = 6;
const nums4 = 6;

const valeurs = nums3 == nums4;
const valeurs2 = nums3 ===  nums4;
console.log(valeurs);
console.log(valeurs2);

const nums5 = 6;
const nums6 = '6';

const valeurs3 = nums5 == nums6;
const valeurs4 = nums5 ===  nums6;
console.log(valeurs3);
console.log(valeurs4);
console.log('---------------------------');

const lenums = 6;
const lenums2 = '6';


const losValues = lenums != lenums2
const losValues1 = lenums !== lenums2
console.log(losValues);
console.log(losValues1);


//Logical Operator
//|| &&

const hisName = 'Bob';
const ages = 24;

if(hisName === 'Bob' && ages === 24){
    console.log('Hello there ' + hisName);
    
}else{
    console.log('Wrong value');
    
}

// Switch statement
// dice values : 1 - 6

const dice = 2;

switch(dice){
    case 1:
        console.log('You got One');
        break;
    case 2:
        console.log('You got Two');
        break;
    case 3:
        console.log('You got Three');
        break;
    default:
        console.log('You did not roll the dice');
}



