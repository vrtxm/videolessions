var mass = new Array(1, 2, 3);
var arr = [4, 5, 6, true, "строка"]; //два способа создания массива
// в массиве может быть несколько типов данных

console.log(arr);
console.log(mass); // вывод всех значений массивов

console.log(arr[4]); // вывод значения массива по индексу (начинается с 0)

arr[1] = "второй индекс";
console.log(arr[1]); // запись информации в определенный индекс

console.log(arr.length); // обращение к массиву с выводом длинны

var matrix = [
    [228, 1337], ["раз", "два"], [true, false]
]; // массивы в массиве

matrix[1][0] = "десять" // изменение значения первого элемента во втором массиве втури массива "matrix"
console.log(matrix);