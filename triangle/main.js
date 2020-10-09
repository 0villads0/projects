var knownValue = 0

function calculate() {

  function vinkelsum() {
    if (isNaN(vinkel_A) && !isNaN(vinkel_B) && !isNaN(vinkel_C)) {vinkel_A = 180 - vinkel_B - vinkel_C}
    if (isNaN(vinkel_B) && !isNaN(vinkel_A) && !isNaN(vinkel_C)) {vinkel_B = 180 - vinkel_A - vinkel_C}
    if (isNaN(vinkel_C) && !isNaN(vinkel_A) && !isNaN(vinkel_B)) {vinkel_C = 180 - vinkel_A - vinkel_B}
  }

  function sin() {
    var num = NaN;
    if (!isNaN(vinkel_A) && !isNaN(side_a)) {num = side_a/Math.sin(Math.PI * (vinkel_A/180))}
    if (!isNaN(vinkel_B) && !isNaN(side_b)) {num = side_b/Math.sin(Math.PI * (vinkel_B/180))}
    if (!isNaN(vinkel_C) && !isNaN(side_c)) {num = side_c/Math.sin(Math.PI * (vinkel_C/180))}

    if (!isNaN(num)){
      if (!isNaN(vinkel_A) && isNaN(side_a)) {side_a = num*Math.sin(Math.PI * (vinkel_A/180))}
      if (!isNaN(vinkel_B) && isNaN(side_b)) {side_b = num*Math.sin(Math.PI * (vinkel_B/180))}
      if (!isNaN(vinkel_C) && isNaN(side_c)) {side_c = num*Math.sin(Math.PI * (vinkel_C/180))}
      console.log(side_a)
      console.log(side_b)
    }
  }

  var vinkel_A = parseFloat(document.getElementById("vinkel_A").value)
  var vinkel_B = parseFloat(document.getElementById("vinkel_B").value)
  var vinkel_C = parseFloat(document.getElementById("vinkel_C").value)

  var side_a = parseFloat(document.getElementById("side_a").value)
  var side_b = parseFloat(document.getElementById("side_b").value)
  var side_c = parseFloat(document.getElementById("side_c").value)

  vinkelsum()
  sin()



  document.getElementById("vinkel_A").value = vinkel_A
  document.getElementById("vinkel_B").value = vinkel_B
  document.getElementById("vinkel_C").value = vinkel_C
  document.getElementById("side_a").value = side_a
  document.getElementById("side_b").value = side_b
  document.getElementById("side_c").value = side_c
}
