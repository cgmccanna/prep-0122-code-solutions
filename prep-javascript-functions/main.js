function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('hours exercise:', minutes);

function getGreeting(name) {
  return name + ' ' + 'World!';
}

var name = getGreeting('Hello');
console.log('Greeting exercise:', name);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', result);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var answer = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', answer);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', difference);

function getCircleCircumference(x) {
  return (2 * Math.PI) * x;
}

var circumference = getCircleCircumference(5);
console.log('circumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName exercise:', fullName);

function cube(x) {
  return Math.pow(x, 3);
}

var cubed = cube(5);
console.log('cube exercise:', cubed);
