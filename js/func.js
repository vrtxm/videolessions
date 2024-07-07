function info() {       //функция название(параметр)
    console.log("Привет");
    console.log("!");
}

function info1(word) {      //функция с параметром
    console.log(word + "??");
    console.log("!");
}

function summ(a, b) {       // функция с двумя параметрами
    var res = a + b;
    console.log(res);
    info(res);
}

info();
info1("Hello world");
summ(5, 7);

function massiv(arr) { // функция которая складывает значения всех ячеек массива
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
         }

    console.log(sum);
}

var array = [6, 8, 1, 5];
massiv(array);

var nun = 10; // глобальная переменная

function nin() {
    var non = 15 // локальная переменная
    console.log(non);
}

nin();