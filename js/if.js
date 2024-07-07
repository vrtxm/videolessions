var num = 15;
var bob = true;

if (num != 15 || !bob) { //иф елсе с двойным условием иф
    console.log("ok");
} else if (num > 10) {
    console.log("ельсиф")
} else {
    console.log("елсе")
}


var str = "test";

switch(str) { //проверка по кейсам только на определенное значение
    case "4": 
        console.log("есть 4");
        break;
    case "test": 
        console.log("test");
        break;
    default: //если ни один из кейсов не подошел
        console.log("нихуя")
        break;
}