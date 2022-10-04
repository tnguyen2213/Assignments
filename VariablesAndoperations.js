//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 10;
		
//create a variable to hold the cost of groceries at checkout
var groceriesCost = 25.50;

//create a variable to hold a person's middle initial
var middleInitial = 'T';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = false;

//create a variable to hold a customer's first name
var customerFistName = 'Jim';

//create a variable to hold a street address
var streetAddress = "82 Seatle St";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(groceriesCost);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFistName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);
//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
groceriesCost = groceriesCost + 2.15;
console.log(groceriesCost);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'W';

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = true;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFistName + ' ' + middleInitial + ' Turner';
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hello, my name is ' + fullName + ' and I live at ' + streetAddress + '.');