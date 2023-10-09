var items2;
var field2;
var but2;

var it_input;
var form_message;
var form_input;
var prop_input;
var add_input;

var constructors = [];
const DEFAULT = 0;

document.addEventListener("DOMContentLoaded", function () {
    it_input = document.createElement("input");
    form_message = document.createElement("div");
    form_message.id = "fill_2";
    form_message.className ="result my-1 px-1";
    setConstructors();

    but2 = document.getElementById("button_ac2");
    field2 = document.getElementById("field2");
    items2 = document.getElementById("items2");

    checkSelectionAction(items2.value);

    but2.addEventListener("click", function() {
        location.reload(true);
    });

    items2.addEventListener("change", function() {
        var v2 = items2.value;
        it_input.value = "";
        checkSelectionAction(v2);
    });
});

function setConstructors() {
    var cons0;
    var cons1;
    var cons2;
    var rad1_c = document.createElement("div");
    var inp1 = document.createElement("input");
    var lab1 = document.createElement("label");
    var rad2_c = document.createElement("div");
    var inp2 = document.createElement("input");
    var lab2 = document.createElement("label");
    var rad3_c = document.createElement("div");
    var inp3 = document.createElement("input");
    var lab3 = document.createElement("label");
    var check1_c = document.createElement("div");
    var inp4 = document.createElement("input");
    var lab4 = document.createElement("label");
    var check2_c = document.createElement("div");
    var inp5 = document.createElement("input");
    var lab5 = document.createElement("label");

    cons0 = document.createElement("div");
    cons0.id = "ANC";
    cons0.className = "no_val";
    cons0.innerHTML = "<Цена диагностики 1 устройства: 1$>";


    cons1 = document.createElement("div");
    cons1.id = "ANC";
    cons1.className = "row row-cols-auto my-1";

    //+++++

    rad1_c.className = "col-12";


    inp1.type = "radio";
    inp1.name = "option_1";
    inp1.id = "option1";
    inp1.value = "49";
    inp1.checked = true;

    lab1.setAttribute("for", "option1");
    lab1.textContent = ("Замена" + " - " + inp1.value + "$");

    rad1_c.appendChild(inp1);
    rad1_c.appendChild(lab1);
    //+++++

    //+++++
    rad2_c.className = "col-12";

    inp2.type = "radio";
    inp2.name = "option_1";
    inp2.id = "option2";
    inp2.value = "69";

    lab2.setAttribute("for", "option2");
    lab2.textContent = ("Ремонт" + " - " + inp2.value + "$");
    //+++++

    //+++++
    rad3_c.className = "col-12";

    inp3.type = "radio";
    inp3.name = "option_1";
    inp3.id = "option3";
    inp3.value = "99";

    lab3.setAttribute("for", "option3");
    lab3.textContent = ("Обновление" + " - " + inp3.value + "$");
    //+++++

    rad1_c.appendChild(inp1);
    rad1_c.appendChild(lab1);
    rad2_c.appendChild(inp2);
    rad2_c.appendChild(lab2);
    rad3_c.appendChild(inp3);
    rad3_c.appendChild(lab3);

    cons1.appendChild(rad1_c);
    cons1.appendChild(rad2_c);
    cons1.appendChild(rad3_c);

    cons2 = document.createElement("div");
    cons2.id = "ANC";
    cons2.className = "row row-cols-auto my-1";

    check1_c.className = "col-12";

    inp4.type = "checkbox";
    inp4.name = "check_1";
    inp4.id = "check1";
    inp4.value = "19";

    lab4.htmlFor = "check1";
    lab4.textContent = ("SSD 512 GB" + "(+" + inp4.value + "$)");

    check2_c.className = "col-12";

    inp5.type = "checkbox";
    inp5.name = "check_1";
    inp5.id = "check2";
    inp5.value = "39";

    lab5.htmlFor = "check2";
    lab5.textContent = ("OLED Display" + "(+" + inp5.value + "$)");

    check1_c.appendChild(inp4);
    check1_c.appendChild(lab4);
    check2_c.appendChild(inp5);
    check2_c.appendChild(lab5);

    cons2.appendChild(check1_c);
    cons2.appendChild(check2_c);

    constructors.push(cons0);
    constructors.push(cons1);
    constructors.push(cons2);

    cons1.querySelectorAll("input[type=\"radio\"][name=\"option_1\"]")
        .forEach(function(e) {
        e.addEventListener("change", function() {
            checkRadioAction(e);
        });
    });

    cons2.querySelectorAll("input[type=\"checkbox\"][name=\"check_1\"]")
        .forEach(function(e) {
        e.addEventListener("change", function() {
            var c1 = 0;
            cons2.querySelectorAll("input[type=\"checkbox\"][name=\"check_1\"]")
                .forEach(function(e) {
                if (e.checked) {
                    c1 += parseInt(e.value);
                }
            });
            add_input = c1;
            setMesInt(form_input, prop_input, add_input);
        });
    });
}

function onSelectionClick(sel_opt) {
    var anchor1 = document.getElementById("anchor_2");
    var anchor2 = document.getElementById("prop_anchor_1");
    var anchor3 = document.getElementById("prop_anchor_2");
    var inp_check = document.getElementById("field2");
    var fill_check = document.getElementById("fill_2");
    var anc_1 = document.getElementById("ANC");
    var a1 = constructors[sel_opt];

    if (sel_opt >= 0 && sel_opt < constructors.length) {
        anchor2.appendChild(a1);

        it_input.type = "text";
        it_input.id = "field2";
        it_input.placeholder = "Количество устройств";

        switch (parseInt(sel_opt)) {
            case 2: {
                form_input = DEFAULT;
                a1.querySelectorAll
                ("input[type=\"checkbox\"][name=\"check_1\"]")
                    .forEach(function(e) {
                    e.addEventListener("change", function() {
                        var c1 = (
                            e.checked
                            ? 1
                            : -1
                        );
                        add_input += e.value * c1;
                    });
                });
                prop_input = 199;
                break;
            }
            case 1: {
                form_input = DEFAULT;
                a1.querySelectorAll("input[type=\"radio\"][name=\"option_1\"]")
                    .forEach(function(e) {
                    checkRadioAction(e);
                });
                add_input = 0;
                break;
            }
            default: {
                form_input = DEFAULT;
                add_input = 0;
                prop_input = 1;
            }
        }

        it_input.addEventListener("keydown", function (e) {
            if (!(["1","2","3","4","5","6","7","8","9","0"]
                  .indexOf(e.key) !== -1)) {
                if (e.key !== "Backspace" && e.key !== "Delete") {
                    e.preventDefault();
                }
            }
        });

        it_input.addEventListener("input", function(e) {
            var v1 = it_input.value;
            form_input = checkField(v1);
            setMesInt(form_input, prop_input, add_input);
        });

        if (!anchor3.contains(inp_check)) {
            anchor3.appendChild(it_input);
        }

        if (anchor2.contains(anc_1)) {
            anchor2.removeChild(anc_1);
        }

        if (!anchor1.contains(fill_check)) {
            anchor1.appendChild(form_message);
        }

        setMesInt(form_input, prop_input, add_input);
    } else {
        if (anchor3.contains(inp_check)) {
            anchor3.removeChild(inp_check);
        }
        if (anchor2.contains(anc_1)) {
            anchor2.removeChild(anc_1);
        }
        if (anchor1.contains(fill_check)) {
            anchor1.removeChild(fill_check);
        }
    }
}

function checkField(field) {
    var inp = (
        field !== ""
        ? parseInt(field)
        : DEFAULT
    );
    return inp;
}

function setMesInt(form, prop, add) {
    form_message.innerHTML = "<h5> Итоговая цена: " +
        (parseInt(form) * (parseInt(add) + parseInt(prop))) + "$</h5>";
}

//============================================================

function checkRadioAction(e) {
    if (e.checked) {
        onRadioClick(e);
    }
}

function checkSelectionAction(sel_opt) {
    onSelectionClick(sel_opt);
}

//============================================================

function onRadioClick(butt) {
    prop_input = butt.value;
    setMesInt(form_input, prop_input, add_input);
}

