
btnEqualls.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  let opperator = (inptOpp.value)
if (opperator === '+') {
  lblAnswer.value = num1 + num2
} else if (opperator === '-') {
  lblAnswer.value = num1 - num2
} else if (opperator === '*') {
  lblAnswer.value = num1 * num2
  } else if (opperator === '/') {
  lblAnswer.value = num1 / num2
  }
}

btnClear.onclick=function(){
  lblAnswer.value = " "
}
