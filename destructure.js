const person = {name: 'karim', age: '23', job:'facebooker'};

const {age, job} = person;
// console.log(age, job);

const friends = ['tabij', 'khobij', 'mobij', 'chobij'];
const [choto, muta, ...restFri] = friends;
// console.log(restFri);

const complexObject = {
  name: 'abc',
  info: {
    address: 'kola bagan',
    email: 'kola-bagan@gmail.com',
  }
}

const {email} = complexObject.info;
console.log(email);