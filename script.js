/******************** Variables and data types *******************/
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable naming rules
// var $3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;

/*******************Variable mutation and type coercion ************/
// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);

// // Variable Mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/***************************Basic Operators *********************/
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/********************Operator Procedence **************************/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

/************************Coding Challenge 1 ************************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a highter BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's> true").
*/

// Mark's and John's Mass & Height
// var massMark = 70;
// var massJohn = 85;
// var heightMark = 1.7;
// var heightJohn = 1.8;

// // Both their BMIs
// var bmiMark = massMark / (heightMark^2);
// console.log(bmiMark);

// var bmiJohn = massJohn / (heightJohn^2);
// console.log(bmiJohn);

// // Is Mark's BMI more than John's?
// moreBmi = bmiMark > bmiJohn;
// console.log('Is Mark\'s BMI highter than John\'s? ' + moreBmi);

/******************If / Else Statements ****************************/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 70;
// var massJohn = 85;
// var heightMark = 1.7;
// var heightJohn = 1.8;

// // Both their BMIs
// var bmiMark = massMark / (heightMark^2);
// console.log(bmiMark);

// var bmiJohn = massJohn / (heightJohn^2);
// console.log(bmiJohn);

// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }

// Is Mark's BMI more than John's?
// moreBmi = bmiMark > bmiJohn;
// console.log('Is Mark\'s BMI highter than John\'s? ' + moreBmi);

/**************************Boolean Logic ***************************/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/*******The Ternary Operator and Switch Statements *****************/

var firstName = 'John';
var age = 14;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement
var job = 'instructor'
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful webistes.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/***********Truthy and Falsy values and equality operators *********/

// falsy values: undefined, null, 0 , '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if(height == '23') {
    console.log('The == operator does type coercion!');
}

/********************* CODING CHANLLENGE 2 *************************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like beofre, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

var johnTeamScoreAverage = (89 + 120 + 103) / 3;
var markTeamScoreAverage = (116 + 94 + 123) / 3;
var maryTeamScoreAverage = (97 + 134 + 105) / 3;
var winner;

if (johnTeamScoreAverage > markTeamScoreAverage) {
    console.log('John\'s Team Won with a higher score of ' + johnTeamScoreAverage + ' points');
    } else if (markTeamScoreAverage > johnTeamScoreAverage) {
    console.log('Mark\'s Team Won with a higher score of ' + markTeamScoreAverage + ' points');
    } else if (maryTeamScoreAverage > johnTeamScoreAverage) {
        console.log('Mary\'s Team Won with a higher score of ' + maryTeamScoreAverage + ' points');
    } else if (maryTeamScoreAverage > markTeamScoreAverage) {
        console.log('Mary\'s Team Won with a higher score of ' + maryTeamScoreAverage + ' points');
    } else (johnTeamScoreAverage == markTeamScoreAverage == maryTeamScoreAverage)
        console.log('Looks like there is a draw! As the 3 teams have the same score of ' + johnTeamScoreAverage + ' ' + markTeamScoreAverage + ' ' + maryTeamScoreAverage + ' respectively');


/****Answer to above *****/

if (johnTeamScoreAverage > markTeamScoreAverage && johnTeamScoreAverage > maryTeamScoreAverage) {
    console.log('John\'s Team Won with an average of ' + johnTeamScoreAverage);
} else if (markTeamScoreAverage > johnTeamScoreAverage && markTeamScoreAverage > maryTeamScoreAverage) {
    console.log('Mark\'s Team Won with an average of ' + markTeamScoreAverage);
} else if (maryTeamScoreAverage > johnTeamScoreAverage && maryTeamScoreAverage > markTeamScoreAverage) {
    console.log('Mary\'s Team Won with an average of ' + maryTeamScoreAverage)
} else {
    console.log('There is a draw');
}

/**************************Functions *******************************/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

function pointsScored(points) {
    return 999 - points;
}

var pointsJohn = pointsScored(555);
var pointsMike = pointsScored(832);
var pointsJane = pointsScored(1001);
console.log(pointsJohn, pointsMike, pointsJane);

function BMI(weight,height){
    return (weight * height) / 2;
}

var bmiJohn = BMI(65,1.72);
var bmiMike = BMI(78,1.76);
var bmiJane = BMI(46,1.51);
console.log(('John\'s BMI is ' + bmiJohn + ', ' + 'Mike\'s BMI is ' + bmiMike + ', ' + 'Jane\'s BMI is ' + bmiJane + ', '));

function profit(income,expenditure){
    return income - expenditure;
}

var balance = profit(15000,8888);
console.log('Account Available Balance is: ' + balance + '. ');

//Personal Practice

// function testExample(a) {
//     var greeting = 'Hi! My name is ' + a;
//     return greeting;
// }

// var name = "Ameer";
// console.log(testExample(name));

// var testExample = function(a){
//     var greeting = 'Hi! My name is ' + a;
//     return greeting;
// }

// var a = 'Ameer';
// console.log(testExample(a));

// (function() {
//     var greeting = 'Hi! My name is Ameer';
//     console.log(greeting);
// }())

// testExample()

// function testExample(a){
//     var greeting = 'Hi! My name is ' + a;
//     return greeting;
// }
// var name = "Ameer"
// console.log(testExample(name));

// var testExample = function(a) {
//     var greeting = 'Hi! My name is ' + a;
//     return greeting;
// }

// var a = 'Ameer';
// console.log(testExample(a));

(function(){
    var greeting = 'Hi! My name is Ameer';
    console.log(greeting);
}())

function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1969,'Jane');

function calculatePoints(pointsEarned){
    return 9999 - pointsEarned;
}

var pointsJohn = calculatePoints(1879);
var pointsMike = calculatePoints(8899);
var pointsJane = calculatePoints(10001);

function totalPoints (firstName, points){
    var earned = calculatePoints(points);
    var earnedPoints = 9999 - earned;

    if(earnedPoints > 1000){
        console.log(firstName + ' has earned ' + earnedPoints + '. ');
    } else {
        console.log(firstName + ' is the winner!.')
    }
}

totalPoints('John',1879);
totalPoints('Mike',8899);
totalPoints('Jane',10001);

/***************Function Statements and Expressions ****************/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

var totalPoints = function(firstName, points){
    return 999 - points;
}

console.log(totalPoints('John', 555),totalPoints('Mike', 832),totalPoints('Jane', 1001));

//Function declaration
// function whatDoYouDo(job, firstName){}

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));

/************************** Arrays *********************************/

var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

// Initialize new array
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1968, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.')
console.log(john);

john.pop()
john.pop()
john.shift()
console.log(john);

console.log(john.indexOf(23));


var isDesigner = john.indexOf('desginer') === -1 ? 'John is NOT a designer':'John IS a designer';
console.log(isDesigner);

/************************* Coding Challenge 3 **********************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills where $124, $48 and $268.

To top the waiter a fair amout, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
*/

function tipCalculator(bills){
    var percentage;
    if (bills < 50) {
        return percentage = bills * 0.2;
    } else if (bills > 50 && bills < 200) {
        return percentage = bills * 0.15;
    } else {
        return percentage = bills * 0.10;
    }
}

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues =   [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips,finalValues);

/******************** Objects and Properties ***********************/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/************************ Objects and Methods **********************/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age =  2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

/************************* Coding Challenge 4 **********************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMi to the objecty and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
};

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark,john);

if (john.BMI > mark.BMI) {
    console.log(john.firstName + ' has a higher BMI of ' + john.BMI);
} else if (mark.BMI > john.BMI){
    console.log(mark.firstName + ' has a higher BMI of ' + mark.BMI);
} else {
    console.log('They hve the same BMI');
}