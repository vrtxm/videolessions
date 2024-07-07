for(var i = 1; i <= 10; i++){ // начало цикла с созданием переменной 
    console.log(i);         //(созданная в цикле переменная может быть только строкой)
} 

for(var i = 100; i > 5; i/=2){
    console.log(i);
} 

var j = 1000;
while(j >= 100) {
    console.log(j);
    j -= 100;
}

//var is = true; //бесконечный цикл
//while(is) {
//
//}

var x = 0;
do {
    console.log(x);
    x++;
} while(x < 10);

for(var ii = 10; ii <= 20; ii += 2) {
    if(ii > 15)
        break; // прерывание цикла

    console.log(ii);
}

for(var ii = 10; ii <= 20; ii ++) {
    if(ii % 2 == 0) //если четное
        continue; //пропуск итерации
        

    console.log(ii);
}

var arr = [1, 2, "хех", true, -4.3];    // перебор массива с выводом значений элементов
for (var iii = 0; iii < arr.length; iii++) {
    console.log("Элемент " + iii + ": " + arr[iii]);
    
}