// <!-- // Домашнее задание № 9.6 Уровень 2: Создайте внешнюю переменную user и присвойте ей этот объект

let user;

// <!-- // Домашнее задание № 9.4 Уровень 1:
// К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
// Кнопка "Подписаться" и есть "отправкой формы",
// при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' }

const emailForm = document.getElementById('email-form');

emailForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.querySelector('.subscription-input');
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    alert('Поле email не должно быть пустым!');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert('Введите корректный email адрес (например, vip777@icloud.com)!');
    return;
  }
  const result = {email: emailValue};
  console.log(result);
  emailInput.value = '';
});

// <!-- // Домашнее задание № 9.5 Уровень 2: Логика такая: 
// при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).   -->

const registrationButton = document.getElementById('registration-button');
const modalExitButton = document.getElementById('modal-exit-button');
const modalWindow = document.getElementById('modal-window');
const modalOverlay = document.getElementById('modal-overlay');

registrationButton.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
  modalWindow.classList.add('modal-showed');
});
modalExitButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalWindow.classList.remove('modal-showed');
});

// <!-- // Домашнее задание № 9.6 Уровень 2: Если пользователь ввел два разных пароля или форма невалидна
// (используем метод checkValidity()) - мы должны предупредить его о том, что регистрация отклонена.
// Если регистрация успешна - выводим значения формы в лог, как в задании №4.
// Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()).

const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = registrationForm.querySelector('.name');
  const surnameInput = registrationForm.querySelector('.surname');
  const birthDateInput = registrationForm.querySelector('.birth-date');
  const loginInput = registrationForm.querySelector('.login');
  const passwordInput = registrationForm.querySelector('.password');
  const passwordConfirmInput = registrationForm.querySelector('.password-confirm');
    if (!registrationForm.checkValidity()) {
    alert('Регистрация отклонена: Заполните все поля корректно!')
    return;
  }
  if (passwordInput.value !== passwordConfirmInput.value) {
    alert('Регистрация отклонена: Введенные пароли не совпадают!');
    return;
  }
  const registrationData = {
    name: nameInput.value.trim(),
    surname: surnameInput.value.trim(),
    birthDate: birthDateInput.value,
    login: loginInput.value.trim(),
    password: passwordInput.value,
    createdOn: new Date ()
  };

user = registrationData;

console.log(user);

registrationForm.reset();

modalOverlay.style.display = 'none';
modalWindow.classList.remove('modal-showed');

alert('Регистрация успешно завершена!');
});