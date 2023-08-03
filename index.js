let h1 = document.querySelector("h1")
input = document.querySelector("input")


input.addEventListener('input', ()=>{
    h1.style.color = input.value
    h1.style.fontFamily = input.value
    h1.style.fontSize = input.value
})
