
function display(val) {
    document.getElementById('result') .value += val
}
function solve() {
    const x= document.getElementById('result').value
    const y= eval(x)
    document.getElementById('result').value =y
}
function clearScreen() {
    document.getElementById('result').value=''
}