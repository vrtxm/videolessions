var con = 0;

var id = setInterval(func, 1000);
function func() {
    con++;
    console.log(con);

    if (con == 3) { //остановка интервала
        clearInterval(id);
    }
};


//setInterval(function() {
//    con++;
//    console.log(con);
//}, 1500); 

setTimeout(function(){  //таймер
    console.log("таймер прошел");
}, 2000);