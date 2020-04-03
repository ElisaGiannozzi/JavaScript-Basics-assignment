// Request a length of a side of a square from a user and display the perimeter of the square in the console.

let lenght = prompt ('Lenght of the side of a square'); 
let perimeter = lenght * 4; 
console.log (perimeter); 


// Request a user’s year of birth, count their age, and display the result to the console. Store the current year as a constant.

let birthYear = prompt ('What is your year of birth?'); 
const currentYear = 2020; 
let age = currentYear - birthYear; 
console.log (age); 


// Request a distance in kilometers between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

let distance = prompt ('Distance between Malmö and Gothenburg (in km)'); 
let time = prompt ('How long do you want your trip to be (in hours)?'); 
let speed = distance / time; 
console.log (speed); 


// Create a simple currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant. Then display the result in the console.

let USD = prompt ('What is the value you want to convert?'); 
const exchangeRate = 0.93; 
let EUR = USD * exchangeRate; 
console.log (EUR); 

// A user types in the values of a and b for the formula a * x + b = 0 . The program has to calculate the x and display it in the console.

let a = prompt ('Value of A'); 
let b = prompt ('Value of B'); 
let x = - b / a; 
console.log (x); 

// Request current time from a user in format HH:mm (HH is hour in a day from 00 to 23, mm are minutes in hour) and display how many hours and minutes are left until tomorrow.

let time = prompt ('What time is it? (in format HH:mm)');
let hours = time.slice(0, time.indexOf(':'));
let minutes = time.slice(time.indexOf(':') + 1);
let hoursNumber = parseInt(hours); 
let minutesNumber = parseInt(minutes); 
let dailyHours = 23; 
let hourlyMinutes = 60; 
console.log ('remainingTime' + (dailyHours - hoursNumber) + ':' + (hourlyMinutes - minutesNumber)); 

