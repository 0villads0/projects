function generateRandomNumber() {
  var num1 = document.getElementById("firstNumber").value
  var num2 = document.getElementById("secondNumber").value

  var max = parseInt(num2)
  var min = parseInt(num1)

  var randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;

  document.getElementById("numDisplay").innerHTML = randomNum
}

