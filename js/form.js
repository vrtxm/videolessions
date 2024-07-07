var text = document.getElementById('Text');
text.title = "New text";
console.log(text.id);
console.log(text.title);

text.style.color = "white";
text.style.backgroundColor = "red";
text.innerHTML = "New<br>String";

//document.getElementById('Text').style.color = "blue";

var spans = document.getElementsByTagName('span'); //поиск по тэгу

for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

var simple = document.getElementsByClassName('simple'); //поиск по классу

for (var i = 0; i < simple.length; i++) {
    console.log(simple[i].innerHTML);
}


function Form(element) {
    
    //var name = document.getElementById('name').value;
    var name = element.name.value;
    var pass = element.pass.value;
    var repass = element.repass.value;
    var state = element.state.value;

    var fail = "";

    if (name == "" || pass == "" || state == "") //проверки значений формы
        fail = "Заполните все поля";
    else if(name.length <= 2 || name.length > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароли не совпадают";
    else if(pass.split("&").length > 1)
        fail = "Не используй &";

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;

        return false;
    } else {
        alert("Все кайф");
        window.location = 'https://t.me/checkitonbot'
        return false;
    }

    console.log(name + state + pass + repass);
}