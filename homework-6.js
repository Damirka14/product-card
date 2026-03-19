// Домашнее задание № 5.3

const user = {
  name: "Ислам",
  surname: "Исламов",
  email: "islam@icloud.com",
  work: "Мечеть Аль-Фатах",
  job: "Имам",
  age: 44,
  country: "Казахстан",
  city: "Астана",
  status: "В браке"
}

console.log(user);

// Домашнее задание № 5.4

let car = {
  brand: "Ваз",
  model: 2107,
  year: 2011,
  color: "Чёрный",
  gearbox:"Механическая"
}

car.owner = user;

console.log(car);

// Домашнее задание № 5.5

function addMaxSpeed(carObj) { 
  if (!carObj.hasOwnProperty('maxSpeed')) {
      carObj.maxSpeed = 150;
  } else {
      console.log(carObj.maxSpeed);
  }
  return carObj;
}

addMaxSpeed(car);
console.log(car);

// Домашнее задание № 5.6

const person = {
  name: "Ислам",
  age: 44
}

function getPropertyValue(obj, key) {
    console.log(obj[key]);
}

getPropertyValue(person, "name");

// Домашнее задание № 5.7

const fruits = [ "яблоко", "груша", "апельсин", "лимон", "киви" ];

console.log(fruits);

// Домашнее задание № 5.8

const carsVaz = [
  {
    brand: "Ваз",
    model: 2101,
    year: 1987,
    color: "Синий",
    gearbox:"Механическая"
  },

  {
    brand: "Ваз",
    model: 2105,
    year: 1992,
    color: "Красный",
    gearbox:"Механическая"
  },

  {
    brand: "Ваз",
    model: 2106,
    year: 1996,
    color: "Белый",
    gearbox:"Механическая"
  }
]

carsVaz.push (
  {
    brand: "Ваз",
    model: 2107,
    year: 2011,
    color: "Чёрный",
    gearbox:"Механическая"
  }
);

console.log(carsVaz);

// Домашнее задание № 5.9

const carsLada = [
  {
    brand: "Лада",
    model: "Приора",
    year: 2010,
    color: "Серебристый",
    gearbox:"Механическая"
  },

  {
    brand: "Лада",
    model: "Гранта",
    year: 2015,
    color: "Бордовый",
    gearbox:"Механическая"
  },

  {
    brand: "Лада",
    model: "Веста",
    year: 2020,
    color: "Серый",
    gearbox:"Автомат"
  },
];

console.log(carsLada);

const allCars = [ ...carsVaz, ...carsLada ];

console.log(allCars);

// Домашнее задание № 5.10

function getRareCars(carsArray) {
  return carsArray.map(car => {
    return {
      ...car,
      isRare: car.year < 2000
    };
  });
}

const carsWithStatus = getRareCars(allCars);

console.log(carsWithStatus);