function add(value) {
    var input = document.getElementById("input");
    input.value += value;
}

function calculate() {
    var input = document.getElementById("input");

    if (input.value && isNaN(input.value)){
        var history = document.getElementById("history");
        var result = eval(input.value);

        history.innerHTML += input.value + " = " + result + "<br>";
        input.value = "";        
    }
}