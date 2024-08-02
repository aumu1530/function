// function hello (a, b, c) {
//    console.log(a + b + c);
// }

// hello(10, 20, 30)

// const fn = function(a, b) {
//    console.log(a + b);
// }

// fn(a, b)

// const plus = (a, b) => {
//    console.log(a - b);
// }

// plus(16, 17)

// function fn1(a, b, c) {
//    console.log(a + b + c);
// }
// fn1 (10, 20, 30)

// const fn2 = function(a, b) {
//    console.log(a - b);
// }
// fn2 (10, 5)

// const fn3 = (a, b) => {
//    console.log(a / b);
// }

// fn3 (50, 10)

// const fn4 = (a, b) => a * b

// console.log(fn4 (5, 5));

// const me = (a, b, c) =>  {
//    console.log("Привет меня зовут" + a + b + "мне " + c);
// }

// me(' Махкам ', 'Муслимов ', 15)

// const fn2 = (a) => {
//   if (a == 2) {
//     console.log('Это второй!');
//   } else if (a < 2) {
//     console.log('Да здравствует санкт-питербург');
//   } else if (a > 2) {
//     console.log('Этот город наш');
//   }
// };
// fn2(prompt('введите число'));

const person = (name, surename, age) => {
   
   if(age < 18) {
      console.log("иди домой");
   }else{
      console.log(`привет я ${name} ${surename}, мне ${age} лет` );
   }
}
person('mahkam', 'muslimov', 15)