// Basic Calculator by JavaScript
const output = document.querySelector('.output')
const keys = ["*", "/", "+", "-", "9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "="]
const spec = ["*", "/", "+", "-"]


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



function addOutput(val) {
    main.value += val
}