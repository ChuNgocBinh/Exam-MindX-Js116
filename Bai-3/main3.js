let color = ['#f3d7ff', '#da95ff', '#bb54ff', '#f9869d', '#e4fc9a'];
let colorHex = document.querySelector("#colorHex");
let colorSeclect = document.querySelector("#colorSeclect");
colorSeclect.addEventListener("click", e => {
    e.preventDefault()
    let randomColor = Math.floor(Math.random() * color.length);
    for (let i = 0; i < color.length; i++) {
        colorHex.innerText = color[randomColor]
        document.body.style.background = `${color[randomColor]}`
    }
})
// let copyCode = document.getElementById('copyHex');
// copyCode.addEventListener("click", e => {
    // e.preventDefault()
    // copyCode.select();
    // document.execCommand("copy");
// 
// })



