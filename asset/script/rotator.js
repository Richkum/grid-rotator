// const btn = document.querySelectorAll('.btn');
const rotateBtn = document.querySelector('.rotatebtn')
console.log(rotateBtn)
const arr = [1, 2, 3, 6, 9, 8, 7, 4]

const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
// const btn5 = document.getElementById('5')s
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')

function clockwise (arr) {
  arr.unshift(arr.pop())
}
function anticlock (arr) {
  arr.push(arr.shift())
}
function update (arr) {
  btn1.innerHTML = arr[0]
  btn2.innerHTML = arr[1]
  btn3.innerHTML = arr[2]
  btn4.innerHTML = arr[7]
  btn6.innerHTML = arr[3]
  btn7.innerHTML = arr[6]
  btn8.innerHTML = arr[5]
  btn9.innerHTML = arr[4]
}
rotateBtn.addEventListener('click', () => {
  clockwise(arr)
  update(arr)
})
btn1.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
  console.log(btn1)
})
btn7.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn2.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn3.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn4.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn6.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn8.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
btn9.addEventListener('click', () => {
  anticlock(arr)
  update(arr)
})
