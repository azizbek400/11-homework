// 1)))

// let a = "--- + --- +";
// let result = replacePlusWithZero(a);

// function replacePlusWithZero(a) {
//     return a.replace(/\+/g, '0');
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////

//  2)))

// let arr = [5, 10, 15, 20, 25];
// let num = 15;
// let result = remove(arr, num);

// function remove(arr, num) {
//     return arr.filter(x => x <= num);
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////

//  3)))

// let num1 = 1;
// let num2 = 2;
// let result1 = tocall(num1);
// let result2 = tocall(num2);

// function tocall(num) {
//     return num * 5;
// }

// console.log(result1); 
// console.log(result2); 

////////////////////////////////////////////////////////////////////////////////////////

//  4)))

// let num = 8;
// let result = getNumbers(num);

// function getNumbers(num) {
//     let arr = [];
//     for (let i = 1; i < num; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////

//  5)))

// let num = 15;
// let result = getNumbers(num);

// function getNumbers(num) {
//     let arr = [];
//     function calling(n) {
//         if (n <= 1) return false;
//         if (n <= 3) return true;

//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     for (let i = 2; i < num; i++) {
//         if (calling(i)) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }

// console.log(result);

