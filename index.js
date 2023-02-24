let displayBox = document.getElementById('displayBox');
function keyDisplay(e) {
    displayBox.append(e.value)
    displayBox.value += e.value;
    globalThis.displayBoxValue = displayBox.value;
}
function result() {
    let arithemetic = eval(displayBoxValue);
    displayBox.value = arithemetic;
}
function clearDisplayBox() {
    displayBox.value="";
}

