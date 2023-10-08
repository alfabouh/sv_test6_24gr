var but1;
var field1;
var items1;
var message;

document.addEventListener("DOMContentLoaded", function () {
    var q_all = document.querySelectorAll("#items1 option");
    but1 = document.getElementById("button_ac1");
    field1 = document.getElementById("field1");
    items1 = document.getElementById("items1");

    q_all.forEach(function (e) {
        e.textContent += " - " + e.value + "$";
    });

    but1.addEventListener("click", action1);
});

function setMessage(value, value2) {
    var anchor1 = document.getElementById("anchor_1");
    var check = document.getElementById("fill_1");
    var l1 = (
        value2 === true
        ? "success"
        : "warn"
    );
    message = document.createElement("div");
    message.id = "fill_1";

    if (value !== null) {
        message.className = l1 + " my-1 px-1";
        message.innerHTML = "<h5>" + value + "</h5>";
    } else {
        if (anchor1.contains(check)) {
            anchor1.removeChild(check);
        }
    }

    if (anchor1.contains(check)) {
        anchor1.replaceChild(message, check);
    } else {
        anchor1.appendChild(message);
    }
}

function calcAction1(value_it1, value_it2) {
    var result1 = value_it1 * value_it2;
    var rs = "Стоимость заказа: " + result1 + "$";
    if (value_it1 === null) {
        setMessage("Не выбран товар", false);
        return;
    }
    setMessage(rs, true);
}

function getSelectedValue() {
    var sel_o = items1.selectedIndex;
    var c1 = (
        (sel_o === -1)
        ? null
        : items1.options[sel_o].value
    );
    return c1;
}

function action1() {
    var l1 = checkField(field1.value);
    if (l1 === -1) {
        setMessage("Строка пуста", false);
    } else if (l1 === 0) {
        setMessage("Строка содержит неправильные символы", false);
    } else {
        calcAction1(getSelectedValue(), parseInt(field1.value));
    }
}

function checkField(field) {
    var f1 = field.trim();
    var regex = /^\d+$/;
    var c2 = (
        regex.test(f1) === true
        ? 1
        : 0
    );
    var c1 = (
        f1 === ""
        ? -1
        : c2
    );
    return c1;
}