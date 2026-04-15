import { socialComments } from "./comments.js";

// Домашнее задание Уровень 1: № 7.2

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);

// Домашнее задание Уровень 1: № 7.3

const kitchenTools = [ 'Ложка', 'Вилка', 'Нож' ];

const hasKnife = kitchenTools.includes('Нож');

console.log(hasKnife);

// Домашнее задание Уровень 1: № 7.4

const reversedNumbers = numbers.reverse(number => number);

console.log(reversedNumbers);

const reversedKitchenTools = kitchenTools.reverse(tool => tool);

console.log(reversedKitchenTools);

// Домашнее задание Уровень 2: № 7.7

const comEmails = socialComments.filter(comment => comment.email.includes('.com'));

console.log(comEmails);

// Домашнее задание Уровень 2: № 7.8

const getComments = socialComments.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1};
});

console.log(getComments);

// Домашнее задание Уровень 2: № 7.9

const simplifiedComments = socialComments.map(comment => {
  return { id: comment.id , name: comment.name };
});

console.log(simplifiedComments);

// Домашнее задание Уровень 2: № 7.10

const validatedComments = socialComments.map(comment => {
  return { ...comment,isInvalid: comment.body.length > 180 };
});

console.log(validatedComments);

// Домашнее задание Уровень 3: № 7.11

const getEmailsCommentsReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(getEmailsCommentsReduce);

const getEmailsCommentsMap = socialComments.map(comment => comment.email);

console.log(getEmailsCommentsMap);

// Домашнее задание Уровень 3: № 7.12

const emailsString = getEmailsCommentsReduce.toString();

console.log(emailsString);

const emailsJoin = getEmailsCommentsMap.join(' | ');

console.log(emailsJoin);