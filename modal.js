//  <!-- // Домашнее задание № 10.4 Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal.
//  Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
//  I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
//  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener)и вызывать в конструкторе-->

export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.overlayElement = document.getElementById('modal-overlay');
    this.closeButton = this.modalElement ? this.modalElement.querySelector('#modal-exit-button') : null;
    this.init();
  }
  open() {
    if (this.modalElement) {
      this.modalElement.classList.add('modal-showed')
    }
    if (this.overlayElement) {
      this.overlayElement.style.display = 'block';
    }
  }
  close() {
    if (this.modalElement) {
      this.modalElement.classList.remove('modal-showed');
    }
    if (this.overlayElement) {
      this.overlayElement.style.display = 'none';
    }
  }
  isOpen () {
    if (!this.modalElement) return false;
    return this.modalElement.classList.contains('modal-showed');
  }
  init() {
    if (this.closeButton){
      this.closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}