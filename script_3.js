// 1)Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. 
// Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

test = [1,2,3,4,5]

function evenNumbersSum(numbers) {
    result = 0
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) == 0) {
            result += numbers[i]
        }
    }
    return result
}

console.log(evenNumbersSum(test));

function oddNumbersSum(numbers) {
    result = 0
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) !== 0) {
            result += numbers[i]
        }
    }
    return result
}

console.log(oddNumbersSum(test));

function maximumOfTwo(a,b) {
    if (a < b) {
        return b
    }
    else {
        return a
    }
}

console.log(maximumOfTwo(oddNumbersSum(test), evenNumbersSum(test)))


function maximum(numbers) {
    // a = oddNumbersSum(numbers)
    // b = evenNumbersSum(numbers)

    if (oddNumbersSum(numbers) < evenNumbersSum(numbers)) {
        return evenNumbersSum(numbers)

    }
    return oddNumbersSum(numbers)
}

console.log(maximum(test))

// ЗАДАЧА 2

// 2)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. 
// Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”]
function copyString(inString, number) {
    result = []
    while  (number-- > 0) {
        result.push(inString)
    } 
    return result
}

console.log(copyString("abcde", 5))

// ЗАДАЧА 3

// 3)Реализуйте функцию, которая принимает на вход массив объектов с информацией о книгах (название, автор, количество страниц и т.д.) и возвращает объект с информацией о самой толстой книге (наибольшее количество страниц).


const books = []
book_1 = {
    title : "book1",
    author : "author1",
    pages : 100,
}

book_2 = {
    title : "book2",
    author : "author2",
    pages : 300,
}

book_3 = {
    title : "book3",
    author : "author3",
    pages : 400,
}

books.push(book_1)
books.push(book_2)
books.push(book_3)

function maxPages(books) {
    let result = {}
    let pages = 0
    
       for (let i = 0; i < books.length;) {
        if ((books[i].pages) > pages) {
            result = books[i]
            pages = books[i].pages
        }
        i++

    }

    return result

}

console.log(maxPages(books))
