/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//https://stackoverflow.com/questions/11810874/how-to-get-an-input-text-value-in-javascript
var txt1;
function onload() {
    txt1 = document.getElementById('txt1');
}

function btn1Click() {
    var flickerAPI = "http://10.10.1.80:8080/ft/number_checker";
    $.getJSON(flickerAPI, {
            num:"100SF001-1705000377"
    }).done(function (data) {
        console.log(data);
        console.log(data.number);
        console.log(data.result);
        console.log(data.description);
        document.getElementById("number").textContent = data.number;
        document.getElementById("result").textContent = data.result;
        document.getElementById("description").textContent = data.description;
    });

}


function btn2Click() {
    var flickerAPI = "http://10.10.1.80:8080/ft/number_checker";
    $.getJSON(flickerAPI, {
            num:"100XF001-1705000377"
    }).done(function (data) {
        console.log(data);
        console.log(data.number);
        console.log(data.result);
        console.log(data.description);
        document.getElementById("number").textContent = data.number;
        document.getElementById("result").textContent = data.result;
        document.getElementById("description").textContent = data.description;
    });

}

function btn3Click() {
    document.getElementById("number").textContent = "...";
    document.getElementById("result").textContent = "...";
    document.getElementById("description").textContent = "...";

}



function reply_click(obj)
{
//    alert(obj.id);
    if (obj.id == "btn1") {
        var flickerAPI = "http://10.10.1.80:8080/ft/number_checker";
        alert(flickerAPI + "?num=" + txt1.value);

        $.getJSON(flickerAPI, {
//            num:"100SF001-1705000377"
            num: txt1.value

        }).done(function (data) {
            console.log(data);
            console.log(data.number);
            console.log(data.result);
            console.log(data.description);
            document.getElementById("number").textContent = data.number;
            document.getElementById("result").textContent = data.result;
            document.getElementById("description").textContent = data.description;
        });
    }
    if (obj.id === "btn2") {
        document.getElementById("number").textContent = "";
        document.getElementById("result").textContent = "";
        document.getElementById("description").textContent = "";
    }

}


$(document).ready(function () {
    $("btn2").click(function () {
        alert("reset");

    });

    $("btn1").click(function () {
        var flickerAPI = "http://10.10.1.80:8080/ft/number_checker";
        $.getJSON(flickerAPI, {
            num: "100SF001-1705000377"
        })
                .done(function (data) {
                    console.log(data);
                    console.log(data.number);
                    console.log(data.result);
                    console.log(data.description);
                    document.getElementById("number").textContent = data.number;
                    document.getElementById("result").textContent = data.result;
                    document.getElementById("description").textContent = data.description;
                });
    });
});