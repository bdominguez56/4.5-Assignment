// to concatenate
let name = "name1";
let age = 25;
let location = "New York";

// cocncentrate using + operator
let message = name + " is " + age + " years old and lives in " + location + ".";

// or template literals
let message = `${name} is ${age} years old and lives in ${location}.`;

// output
console.log(message);


let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// string method to uppercase and reverse
function manipulateString(str) {
    //  string to uppercase
    let upperStr = str.toUpperCase();
    
    // Reverse the string
    let reversedStr = upperStr.split('').reverse().join('');
    
    return reversedStr;
}

// exampke
let result = manipulateString("helloooo");
console.log(result);  


// check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;  //  less than or equal to 1 are not prime
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  // divisor, so not prime
        }
    }
    return true;  // number is prime
}

// example usage:
let number = 17;
let result = isPrime(number);
console.log(result);  // Output: true (since 17 is prime)
