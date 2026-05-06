const displayP = document.getElementById("display")
const resultDisp = document.getElementById("result")

// the text to display
let displayText = ""

function getButtonValue(value) {
    displayText = displayText + value
    // show result on the screen
    updateDisplay()
}

function updateDisplay() {
    displayP.innerHTML = displayText
}

function clearDisplay() {
    displayText = ""

    resultDisp.innerHTML = ""// reset the result
    updateDisplay()
}

function getResult() {
    console.log(displayText)
    try {
        // Convert UI symbols to valid JavaScript math operators.
        const expression = displayText.replaceAll("x", "*")
        const result = eval(expression)
        resultDisp.innerHTML = `=${result}`
    } catch (error) {

    }
}
