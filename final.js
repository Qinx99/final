var one = document.getElementById('codeOne');
var two = document.getElementById('codeTwo');
var three = document.getElementById('codeThree');
var four = document.getElementById('codeFour');

function check() {
  if (one.value === '2') {
    if (two.value === '7') {
      if (three.value === '2') {
        if (four.value === '8') {
          location.reload();
        } else {
          four.value = " ";
        }
      } else {
        three.value = " ";
      }
    } else {
      two.value = " ";
    }
  } else {
    one.value = " ";
  }
}
