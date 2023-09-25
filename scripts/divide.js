const option1 = document.getElementById('option1'),
  option2 = document.getElementById('option2'),
  option3 = document.getElementById('option3'),
  correct = document.getElementById('audioCorrect'),
  fail = document.getElementById('audioFail');
var answer = 0;

function generate_equation() {
  var num1 = Math.floor(Math.random() * 10) + 1,
    num2 = Math.floor(Math.random() * 10) + 1,
    aux1 = Math.floor(Math.random() * 10) / 10,
    aux2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

  if (num1 > num2) {
    answer = eval(num1 / num2);
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
  } else {
    answer = eval(num2 / num1);
    document.getElementById('num1').innerHTML = num2;
    document.getElementById('num2').innerHTML = num1;
  }

  if (Number.isInteger(answer) == false) {
    answer = answer.toFixed(1);
  }

  allAnswers = [answer, aux1, aux2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

option1.addEventListener('click', function () {
  if (option1.innerHTML == answer) {
    correct.play();
    generate_equation();
  } else {
    fail.play();
  }
});

option2.addEventListener('click', function () {
  if (option2.innerHTML == answer) {
    correct.play();
    generate_equation();
  } else {
    fail.play();
  }
});

option3.addEventListener('click', function () {
  if (option3.innerHTML == answer) {
    correct.play();
    generate_equation();
  } else {
    fail.play();
  }
});

generate_equation();
