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