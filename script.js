let darkMode = false;

function appendValue(value) {
    if(document.getElementById("input").value == "Invalid input"){
        clearDisplay();
    }
    document.getElementById("input").value += value;
}

function clearDisplay() {
    document.getElementById("input").value = "";
}

function deleteCharacter() {
    let input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let input = document.getElementById("input").value;
    try {    
        let result = eval(input);
        document.getElementById("input").value = result;
        output.innerText = "";
    } catch (error) {
        document.getElementById("input").value = "Invalid input";
    }
}

function toggleMode() {
    let calculator = document.querySelector(".calculator");

    darkMode = !darkMode;

    if(darkMode) {
        calculator.classList.add("dark-mode");
    } else {
        calculator.classList.remove("dark-mode");
    }
}