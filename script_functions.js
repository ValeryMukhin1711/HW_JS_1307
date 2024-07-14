// learn.javascript.ru
// ФУНКЦИИ
// ЗАДАЧА 1


// функция проверки без else
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }


// console.log(checkAge(4));
// console.log(checkAge(5));
// console.log(checkAge(100));

// вариант без else работает корректно:
// выдача console.log:
// ответ "да": script.js:16 true
// ответ "нет": script.js:17 false
// script.js:18 true

// функция с else
// function checkAge_2(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

// console.log(checkAge_2(1));
// console.log(checkAge_2(6));
// console.log(checkAge_2(100));


// вариант c else тоже работает корректно:
// выдача console.log:
// ответ "да": script.js:16 true
// ответ "нет": script.js:17 false

// ответ "да": script.js:16 true
// ответ "нет": script.js:17 false
// script.js:18 true


// ЗАДАЧА 2

// через ? оператор
function checkAge_3(age) {
    let answer = (age > 18) ? true : confirm('Родители разрешили? ')
    return answer
    }


// console.log(checkAge_3(1));
// console.log(checkAge_3(6));
// console.log(checkAge_3(100));

// через оператор ||

function checkAge_4(age) {
    let answer = (age > 18) || confirm('Родители разрешили? ')
    return answer
    }



// ЗАДАЧА 3

function min (a,b) {
    let a_ = +a;
    let b_ = +b;
    if (a_ < b_) {
        return a_;
    }
    if (a_ > b_) {
        return b_;
    }else {
        return ("числа равны")
    }

}

// возник вопрос: в строках 76 и 77 я сначала допустил ошибку, не объявив переменные через let, но при этом функция работала корректно. Скажите, пожалуйста, почему при неправильном объявлении переменных без let она всё равно работала?
console.log(min(1,2));
console.log(min(4,5));
console.log(min(7,7));

// ЗАДАЧА 4
// function pow(x,n) {
//     let x_ = +x;
//     let n_ = +n;
//     let result = 1;
//     for (let i=0; i < n_; i++) {
//         result = result * x_;  
//     }
//     return result;    
// }

// console.log(pow(2,3));
// console.log(pow(3,2));
// console.log(pow(5,2));
// console.log(pow(0,7));
// console.log(pow(100,0));