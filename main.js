
let h11 = document.getElementById('h11')
let h12 = document.getElementById('h12')
let h13 = document.getElementById('h13')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')


window.addEventListener("scroll", (event) => {
var a = Math.round(window.pageYOffset)
h11.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${a}, 1, 1)`
h12.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${a/2}, 1, 1)`
h13.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${a/4}, 1, 1)`
p1.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${a/6}, 1, 1)`
p2.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${a/7}, 1, 1)`

});



