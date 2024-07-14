// ОБЪЕКТЫ
// ЗАДАЧА 1

// let user = {};

// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// ЗАДАЧА 2
function isEmpty(obj) {
    // console.log(Object.keys(obj).length)
    if (Object.keys(obj).length < 1) {
        return true
    }
    else {
        return false
    }
}

// obj1 = {"5": 4}
// obj2 = {}

// console.log(isEmpty(obj1));
// console.log(isEmpty(obj2));

// ЗАДАЧА 3

// const user = {
//     name: "John"
//   };
  
//   // это будет работать?
//   user.name = "Pete";
//   // работает
//   console.log(user)


// ЗАДАЧА 4

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

// function salarySum(salaries) {
//     let result = 0;
//     let tempList = Object.keys(salaries);
//     console.log(tempList)
//     console.log(tempList[0])
//     let peremennaya = String(tempList[0]) 
//     console.log(salaries.peremennaya)
//     for (let i = 0; i < tempList.length; i++) {
//         result += salaries[tempList[i]];
//     }
//     return result
// }

// console.log(salarySum(salaries))

// ЗАДАЧА 5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

// let keys = Object.keys(menu)

// console.log(menu[keys[0]])

function multiplyNumeric(obj) {
    let keys = Object.keys(menu)
    for (let i in keys) {
        
        if (typeof(menu[keys[i]]) == 'number') {
            // console.log(menu[keys[i]])
            menu[keys[i]] *= 2
            // console.log(menu[keys[i]])
            
        }
    }
}

multiplyNumeric(menu)

console.log(menu)