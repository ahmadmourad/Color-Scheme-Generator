const inputColor= document.getElementById("input-color")
const colorScheme = document.getElementById("color-scheme")
const colorBtn = document.getElementById("get-color-btn")
// let selectedColor = "#F55A5A"
// inputColor.addEventListener("input", function(e){
//     console.log(e.target)
//     selectedColor = e.target.value
// })
// console.log(inputColor)

colorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.replace('#','')}&mode=${colorScheme.value}&count=5`)
    .then(res => res.json())
    .then(data => console.log(data))
    
})