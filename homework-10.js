//  <!-- // Домашнее задание № 10.3
//  Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами).
//  Придумайте свою структуру и реализуйте наследуемость классов

class Vehicle {
  constructor (brand, model, speed){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  drive() {
    return `Автомобиль ${this.brand} ${this.model} едет со скоростью ${this.speed} км/ч.`;
  }
}

class RareCar extends Vehicle {
  constructor(brand, model, speed, nitroBoost) {
    super(brand, model, speed);
    this.nitroBoost = nitroBoost;
  }

  useNitro() {
    const totalSpeed = this.speed + this.nitroBoost;
    console.log(`${this.brand} ${this.model} включает нитро! Скорость выросла до ${totalSpeed} км/ч.`);
  }
}

class OffRoadCar extends Vehicle {
  constructor(brand, model, speed, clearance) {
    super(brand, model, speed);
    this.clearance = clearance;
    this.isFourWheelDrive = false;
  }

  toggleFourWheelDrive() {
    this.isFourWheelDrive = !this.isFourWheelDrive;
    const status = this.isFourWheelDrive ? "включён" : "выключен";
    console.log (`Полный привод на ${this.brand} ${this.model} теперь ${status}.`);
  }
}

const ferrari = new RareCar('Ferrari', '488 GTB', 330, 70);
console.log(ferrari.drive());
ferrari.useNitro();

const jeep = new OffRoadCar('Jeep', 'Wrangler', 180, 250);
console.log(jeep.drive());
jeep.toggleFourWheelDrive();

//  <!-- // Домашнее задание № 10.4-5
//  Используя данный класс - переписать логику задания №9, связанной с модальными окнами.
//  Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.
//  Используя данный класс - переписать логику задания №9, связанной с формами.
//  Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.

import { Modal } from "./modal.js";
import { Form } from "./Form.js";

let user;

const registrationModal = new Modal('modal-window');
const registrationForm = new Form('registration-form'); 

const registrationButton = document.getElementById('registration-button');

if (registrationButton) {
  registrationButton.addEventListener('click', () => {
    registrationModal.open();
  });
}

const registrationFormElement = document.getElementById('registration-form');

if (registrationFormElement) {
  registrationFormElement.addEventListener('submit', event => {
    event.preventDefault();
    if (!registrationForm.isValid()) {
      alert('Регистрация отклонена: Заполните все поля корректно!');
      return;
    }
    const formValues = registrationForm.getValues();
    if (formValues['password'] !== formValues['password-confirm']) {
      alert('Регистрация отклонена: Введенные пароли не совпадают!');
      return;
    }
    if (registrationModal.isOpen()) {
      const registrationData = {
        name: formValues['name'],
        surname: formValues['surname'],
        birthDate: formValues['birth-date'],
        login: formValues['login'],
        password: formValues['password'],
        createdOn: new Date()
      };
      user = registrationData;
      console.log(user);
      
      registrationModal.close();
      registrationForm.reset();
      alert('Регистрация успешно завершена!');
    }
  });
}