//  <!-- // Домашнее задание № 10.5
//  Создать файл Form.js и реализовать класс для формы под названием Form.
//  Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//  I. Для получения всех значений формы.
//  II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы. -->

export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
    if (!this.formElement) {
      console.log(`Форма с id "${formId}" не найдена.`);
    }
  }
  getValues() {
    if(!this.formElement) return {};
    const formData = new FormData(this.formElement);
    const values = {};
    formData.forEach((value, key) => {
      values[key] = typeof value === 'string' ? value.trim() : value;
    });
    return values;
  }
  isValid() {
    if (!this.formElement) return false;
    return this.formElement.checkValidity();
  }
  reset() {
    if (this.formElement) {
      this.formElement.reset();
    }
  }
}