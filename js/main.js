console.log('Sample JavaScript HW#1');

var myNum = 10,
    myStr = "строка",
    myBool = true,
    myArr = [1,2,3,4,5],
    myObj = {first: 'First Name', last: 'Last Name'};

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);


console.log(myNum. toFixed (2));
var decimal2 = myNum.toFixed(2);

var i = 13;
console.log(i++);
console.log(i--);
console.log(i);
console.log(++i);
console.log(--i);
console.log(i);


var myTest=20;

    myTest += 20;
    console.log(myTest);
    myTest -= myNum;
    console.log(myTest);
    myTest *= 3;
    console.log(myTest);
    myTest /= 2;
    console.log(myTest);
    myTest %= 75;
    console.log(myTest);


// var myPi = console.log (Math.PI);

// var myRound = 89.279;
// console.log (Math. round(myRound));

// var myRandom = console.log(Math.random()*10);


// var myPow = console.log(Math.pow(3,5));

var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.random() * 10; 
console.log(myRandom);

var myPow = Math.pow(3, 5);
console.log(myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};

strObj.length = strObj.str.length;
console.log('strObj = ', strObj)

var isRamaPos = strObj.str.indexOf('рама');
console.log (isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log(myStr.toUpperCase());
console.log('Просто СтРока'.toLowerCase());