// Домашнее задание № 5.3

const showResume = {
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

console.log(showResume);

// Домашнее задание № 5.4

let car = {
  brand: "Ваз",
  model: 2107,
  year: 2011,
  color: "Чёрный",
  gearbox:"Механическая"
}

car.owner = showResume;

console.log(car);

// Домашнее задание № 5.5

function checkMaxSpeed(auto) { 
  if (!car.hasOwnProperty('maxSpeed')) {
    car.maxSpeed = 150;
    console.log('maxSpeed');
  } else {
    console.log(maxSpeed);
      return auto;
  };
}

checkMaxSpeed(car);
console.log(car);

// Домашнее задание № 5.6

function getPropertyValue(obj, key) {
    console.log(obj[key]);
}

getPropertyValue(showResume, "name");

// Домашнее задание № 5.7
const showListFruits = [ "яблоко", "груша", "апельсин", "лимон", "киви" ]

console.log(showListFruits);

// Домашнее задание № 5.8

const showCarsVaz = [
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

showCarsVaz.push (
  {
    brand: "Ваз",
    model: 2107,
    year: 2011,
    color: "Чёрный",
    gearbox:"Механическая"
  }
);

console.log(showCarsVaz);

// Домашнее задание № 5.9

const showCarsLada = [
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
]

console.log(showCarsLada);

const showAllCars = [ ...showCarsVaz, ...showCarsLada ]

console.log(showAllCars);

// Домашнее задание № 5.10

function markRareCars(carsArray) {
  return carsArray.map(car => {
    return {
      ...car,
      isRare: car.year < 2000
    };
  });
}

const carsWithStatus = markRareCars(showAllCars)

console.log(carsWithStatus);