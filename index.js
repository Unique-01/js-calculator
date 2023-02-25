let displayBox = document.getElementById('displayBox');
let resultBox = document.getElementById('resultBox');
// To diplay the number entered on the screen
function keyDisplay(e) {
    displayBox.append(e.value)
    displayBox.value += e.value;
    globalThis.displayBoxValue = displayBox.value;
}
// To display the computed result on the screen
function result() {
    let arithemetic = eval(displayBoxValue);
    resultBox.innerHTML = arithemetic
}
// To clear both input box and the result box
function clearDisplayBox() {
    displayBox.value="";
    resultBox.innerHTML="";
}
// To delete the last input from the input box
function deleteInput() {
    let boxValue = displayBox.value;
    displayBox.value = boxValue.slice(0,-1);
}

