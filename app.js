const output = document.querySelector('.output')
const elMaker = (elType, elParent, elClass) => {
    const ele = document.createElement(elType)
    elParent.append(ele)
    ele.classList.add(elClass)
    return ele
}

const addText = (text, elTarget) => {
    elTarget.textContent = text
}

const div1 = elMaker('div', output, "div1")
addText("Total Bill=", div1)
const totalBill = elMaker('input', div1, "myInput")
const div2 = elMaker('div', output, 'div2')
addText("Tip Percentage %", div2)
const totalPerc = elMaker('input', div2, "myInput")

totalBill.setAttribute("type", 'number')
totalBill.setAttribute('min', '0')
totalPerc.setAttribute("type", 'number')
totalPerc.setAttribute("max", 100)

totalPerc.value = 15
totalBill.value = 100


const btn = elMaker('button', output, 'btn')
btn.textContent = "Get total"
const total = elMaker('div', output, 'total')
total.textContent = "_"

btn.addEventListener('click', e => {
    const tb = totalBill.value
    let tp = totalPerc.value
    tp = (tp > 100) ? 100 : tp
    const tip = (tb * (tp / 100)).toFixed(2)
    console.log(tip)
    total.textContent = `Tip Should be $${tip}`
})

