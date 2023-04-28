// Basic Calculator by JavaScript
const output = document.querySelector('.output')
const keys = ["*", "/", "+", "-", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "=", "C"]

// bellow are placed sepecfiic buttons
const spec = ["*", "/", "+", "-"]
let boo = true
let dec = false

output.style.maxWidth = "300px"
output.style.margin = "auto"
output.style.border = '1px solid black'


const main = document.createElement('input')
main.setAttribute('type', 'text')
main.classList.add('main')
output.append(main)


const container = document.createElement('div')
output.append(container)
container.classList.add('container')


keys.forEach((key) => {
    btnMaker(key, container)
})



function btnMaker(val, parent) {
    const btn = document.createElement('button')
    parent.append(btn)
    btn.classList.add('btn')
    btn.textContent = val
    btn.val = val
    btn.addEventListener('click', e => {
        addOutput(btn.val)
    })
    return btn
}



// isNaN() is a function which determines whether a value is Nan or not. it returns a boolean.

// eval()=> it evalueates JavaScript code represented as a string eval("2+2")



function addOutput(val) {
    let boo = true
    let temp = main.value
    // Sometimes we need to get the last chatracter
    // charAt returns a cahracter at a specified index
    let lastOne = temp.charAt(temp.length - 1)

    if (val === 'C') {
        main.value = "";
        boo = false
    }
    // if the last char and the one left to the end isNan , then boo must set to be false
    else if (val === "=") {
        evalOutput(lastOne)
        boo = false
    } else if (val === '.') {
        if (dec) {
            boo = false
        } else {
            dec = true
        }

    }
    if (isNaN(val) && lastOne.length === 0) {
        boo = false
    }
    if (isNaN(val) && isNaN(lastOne)) {
        boo = false
    }

    if (boo) {
        // if boo was true add something to the input screen
        main.value += val
        dec = true
    }

}


function evalOutput(lastOne) {

    if (!isNaN(lastOne)) {
        main.value = eval(main.value)
    }


}