var count = 0;

function button(el) {
    count++;
    el.innerHTML = count;
    el.style.background = "red";
    el.style.color = "blue";
    
    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;"

    console.log(count);
}

function input(ele) {
    
    if (ele.value == "привет") {
        alert("дарова");
    }

    console.log(ele.value);
}

