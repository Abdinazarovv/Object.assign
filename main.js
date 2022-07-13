let user = { name1: "Shaxzod"};
let userAge = { age: 25 };
let userJob = {job: "javascript developer"};

var objectjon = Object.assign(user, userAge, userJob) /*bu 1 usul*/  //object.assign bu berilgan obyektlardan o'ziga nusxa olib ularni birlashtirib bizga yangi obyektni qaytarib beradi
console.log(objectjon);
// const objectGroup = Object.assign(user, userAge, userJob); //bu usul biz uchun qulay
// console.log(objectGroup);