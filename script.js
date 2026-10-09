const inputColor= document.getElementById("input-color")
const colorScheme = document.getElementById("color-scheme")
const colorBtn = document.getElementById("get-color-btn")

function render(colorsArr){
    for (let color in colorsArr){
            document.getElementById(`${color}-color`).style.backgroundColor = colorsArr[color].hex.value
            document.getElementById(`${color}-color-hexcode`).textContent = colorsArr[color].hex.value
        }
    }

colorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.replace('#','')}&mode=${colorScheme.value}&count=8`)
    .then(res => res.json())
    .then(data => {
        render(data.colors)
    })  
})

document.addEventListener('click', e => {
    if (e.target.dataset.hexcode) {
        navigator.clipboard.writeText(document.getElementById(`${e.target.dataset.hexcode}`).textContent);
        alert("Color hexcode copied successfully " + document.getElementById(`${e.target.dataset.hexcode}`).textContent)
    }
    else if (e.target.dataset.color) {
            navigator.clipboard.writeText(document.getElementById(`${e.target.dataset.color}-hexcode`).textContent)
            alert("Color hexcode copied successfully " + document.getElementById(`${e.target.dataset.color}-hexcode`).textContent)
        }
        // else if (e.target.dataset.color){
        //     navigator.clipboard.writeText(window.getComputedStyle(document.getElementById(`${e.target.dataset.color}`)).backgroundColor)
        // }
})