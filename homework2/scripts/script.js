//111Напишите функцию checkString(arg), который принимает аргумент строкового типа. Функция должна вывести в консоль первую букву аргумента.
// function checkString(arg){
//     console.log(arg[0]);
// }
// checkString('Olena')
//222Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
//* Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части
//   function checkMiddleValue(num1, num2) {
//     let avg = (num1 + num2) / 2; 
//     return Math.round(avg * 10) / 10; 
//   }
//   let result = checkMiddleValue(10, 22);
// console.log(result); 
//333Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) должна изменить число по следующему правилу: 
//В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.
// function changeValue(arg1, arg2) {
//     if (arg1) {

//       return arg2 * arg2
//     } else {

//       return Math.sqrt(arg2); 
//     }
//   }

//   console.log(changeValue(true, 4)); 
// console.log(changeValue(false, 16)); 
//444Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
//* Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)
// function countString(arg) {
//     let count = 0;
//     for (let index = 0; index < arg.length; index++) {
//         let char = arg[index].toLowerCase();
//         if (char !== 'a' && char !== 'o' && char !== 'c' && char !== 'u') {
//             count++;
//         }

//     }
//     return count;
// }
// console.log(countString("HALLO Cat"));
// console.log(countString("USA, Canada, Russia, Spain"));
//55 Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента по следующему примеру:
	
	// function createQuence(num){
    //     for (let i = 0; i <= num; i++) {
    //        let stars = "";
    //        for (let j = 0; j <= i; j++) {
    //         stars += "*";
            
    //        }
    //        console.log(stars); 
    //     }
    // }
    //

	// createQuence(5);
    // createQuence(2);
 
    //1 Напишите функцию checkEven(array,callback), которая получает в качестве аргумента массив и колбек-функцию. Функция должна проверить,
    // удовлетворяют ли все элементы массива указанному условию колбека. Если найдется хотя бы 1 элемент, который не будет удовлетворять условию, 
     //функция должна вернуть сообщение “Не все элементы удовлетворяют указанному условию”, в противном случае “Все элементы удовлетворяют указанному условию”.
      //Колбек в качестве аргумента должен передавать значение элемента.
// function checkEven(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       if (!callback(array[i])) {
//         return "Не все элементы удовлетворяют указанному условию";
//       }
//     }
//     return "Все элементы удовлетворяют указанному условию";
//   }
  
//   let array = [1, 2, 3, 4, 5];
//   console.log(checkEven(array, (elem) => elem > 0));
//   console.log(checkEven(array, (elem) => elem < 0));
  
//   Напишите функцию checkSome(array,callback), которая получает в качестве аргумента массив и колбек-функцию.
//    Функция должна проверить, удовлетворяют ли хотя бы 1 элемент массива указанному условию колбека. Если все элементы не будут 
//    удовлетворять условию, функция должна вернуть сообщение “Ни один элемент не удовлетворяют указанному условию”, в противном случае
//     “Минимум 1 элемент удовлетворяет указанному условию”. Колбек в качестве аргумента должен передавать значение элемента.
// function checkSome(array,callback){
// const result = array.some(callback);
// if(result){
//     return "Минимум 1 элемент удовлетворяет указанному условию";
// }else{
//     return "Ни один элемент не удовлетворяют указанному условию";
// }
// }
// const array = [1, 18, 3, 4, 9];
// console.log(checkSome(array,(elem) => elem === 4));
// console.log(checkSome(array,(elem) => elem === 6));