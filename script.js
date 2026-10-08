const inputColor= document.getElementById("input-color")
const colorScheme = document.getElementById("color-scheme")
const colorBtn = document.getElementById("get-color-btn")

// let colorsArr = [
//     {hex:{value:"#F55A5A"}},
//     {hex:{value:"#2B283A"}},
//     {hex:{value:"#FBF3AB"}}, 
//     {hex:{value:"#AAD1B6"}}, 
//     {hex:{value:"#A626D3"}}]

function render(colorsArr){
    for (let color in colorsArr){
            document.getElementById(`${color}-color`).style.backgroundColor = colorsArr[color].hex.value
            document.getElementById(`${color}-color-hexcode`).textContent = colorsArr[color].hex.value
        }
    }

colorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.replace('#','')}&mode=${colorScheme.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        render(data.colors)
    })
    
})