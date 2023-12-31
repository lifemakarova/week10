//Задание 1
// Напишите функцию firstFunction, которая при нажатии кнопки выводит в консоль переменную first.
let first = 8;

function firstFunction() {

console.log(first);
}

//Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.

let a = 5;
let b = 3;

function sum(a, b) {
  return a + b;
}

console.log(sum(a, b));
 

//Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
let x = 4;
let y = 2;

function multiply(x, y) {
	return x * y;
}

console.log(multiply(x, y));


//Задание 4
// Напишите функцию greet, которая принимает один параметр name и выводит в консоль приветствие с этим именем.
let firstName = 'Alice';

function greet(name) {
	console.log('Привет, ' + name + '!');
}

greet(firstName);

//Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
let width = 6;
let height = 4;

function calculateArea(w, h) {
	return w * h;
}

console.log(calculateArea(width, height));

//Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".
function printMessage(message = "Сообщение отсутствует") {
	console.log(message);
  }
  printMessage();
  
//Задание 7
// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
let c = 5;
let d = 10;
function secondFunction(c = 5, d = 10) {
	console.log(c + d);
}
console.log(secondFunction()); //Выведет 15

//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и secondFunction подставит их на место параметров соответственно, перемножит их и вернёт результат.
console.log(secondFunction(2, 3)); //Выведет 5 */

//Задание 8
// Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если только одно значение передано, используйте его как оба параметра функции. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.
let f = 2;
let g = 3;

function thirdFunction(f = 2, g = 3) {
	console.log(f * g);
}

console.log(thirdFunction()); //Выведет 6
//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и thirdFunction подставит их на место параметров соответственно (если пармаметр не задан, то он подставится по умлочанию), перемножит их и вернёт результат.
console.log(thirdFunction(4)); //Выведет 12
console.log(thirdFunction(5, 6)); //Выведет 30

//Задание 9
// Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.

function greetGuest(guestName = "Котик") {
	return "Привет, " + guestName + "!";
  }
  
  console.log(greetGuest());

//Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
// Ваш код

const calculateDifference = function(a, b) {
	return a - b;
  };
  
  const result = calculateDifference(5, 3);
  
  console.log(result); //Выведет 2

//Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.

const calculateProduct = function(a, b) {
	return a * b;
  };
  const total = calculateProduct(5, 3);
  console.log(total); //Выведет 15

//Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.
const calculateSquare = (num) => {
	let result = num ** 2;
	return result;
  };

const squaredNumber = calculateSquare(5);

console.log(squaredNumber); // Выведет 25

//Задание 13
// Напишите  стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"
const sayThree = () => {
	console.log("Три!");
  };
  
  sayThree();

//Задание 14
// Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.
let rabbit = "Кролик";

function findAnimal() {
  let cat = "Кот";
  console.log(cat);
  console.log(rabbit);
}

findAnimal();

//Задание 15
// Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония. Подсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.
const lastOlympicsYear = 2021;
const currentYear = new Date().getFullYear();

function calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) {
	return currentYear - lastOlympicsYear;
}

console.log(
	'С момента летней олимпиады в Токио прошло ' + calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) + ' года',
);

//Задание 16
// Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
const friendYearOfBirth = 1985;

function calculateAge() {
	const currentYear = new Date().getFullYear();
  const age = currentYear - friendYearOfBirth;
  return age;
}
console.log("Твой возраст:", calculateAge());
//Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст. Обратите ваше внимание, что в глобальной зоне видимости есть переменная с текущим годом.
const currentYear = new Date().getFullYear();

function calculateAge(yearOfBirth) {
  const age = currentYear - yearOfBirth;
  return age;
}

const myYearOfBirth = 1989;
console.log("Мой возраст:", calculateAge(myYearOfBirth));
//Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);
function raiseToPower(number, power) {
	const result = Math.pow(number, power);
	console.log("Результат: " + result);
  }
  
  raiseToPower(2, 3);