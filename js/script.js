const content = document.querySelector('.rotation-content')
const imgList = document.querySelectorAll('.rotation-content img')

function changeStyle(i) {
    content.style.transform = `rotateY(${90 * i}deg)`
    imgList[0].style.transform = `translateZ(300px) rotateY(${-90 * i}deg)`
    imgList[1].style.transform = `translateX(300px) rotateY(${-90 * i}deg)`
    imgList[2].style.transform = `translateZ(-300px) rotateY(${-90 * i}deg)`
    imgList[3].style.transform = `translateX(-300px) rotateY(${-90 * i}deg)`
    imgList[2].style.opacity = i === 0 ? '0' : '1'
    imgList[1].style.opacity = i === 1 ? '0' : '1'
    imgList[0].style.opacity = i === 2 ? '0' : '1'
    imgList[3].style.opacity = i === 3 ? '0' : '1'
    // console.log(1);
}
changeStyle(1)
let i = 2
setInterval(() => {
    changeStyle(i)
    i++
}, 3000)
const prices = [30, 10, 25, 50, 30]

const buys = document.querySelectorAll('.buy')
const money = document.querySelector('.money')
const mask = document.querySelector('.mask')
const tip = document.querySelector('.tip')
const success = document.querySelector('.success')
const cancel = document.querySelector('.cancel')
const confirmBtn = document.querySelector('.confirm')

let timer = null
buys.forEach((item, index) => {
    item.addEventListener('click', () => {
        clearTimeout(timer)
        money.innerText = prices[index]
        mask.style.display = 'flex'
        
    })
})

cancel.addEventListener('click', () => {
    mask.style.display = 'none'
})

confirmBtn.addEventListener('click', () => {
    tip.style.display = 'none'
    success.style.display = 'block'
    timer = setTimeout(() => {
        mask.style.display = 'none'
    }, 600)
})


