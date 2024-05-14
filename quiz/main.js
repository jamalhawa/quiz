//variables for elements
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");

var correction1 = document.getElementById("correction1");
var correction2 = document.getElementById("correction2");
var correction3 = document.getElementById("correction3");
var correction4 = document.getElementById("correction4");
var correction5 = document.getElementById("correction5");

var indicator1 = document.getElementById("indicator1");
var indicator2 = document.getElementById("indicator2");
var indicator3 = document.getElementById("indicator3");
var indicator4 = document.getElementById("indicator4");
var indicator5 = document.getElementById("indicator5");

var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

var button = document.getElementById("button");

//event listener
button.addEventListener("click", Mark);

//funtionS
function Mark() {
  var score = 0;

  input1.value.toLowerCase();
  input2.value.toLowerCase();
  input3.value.toLowerCase();
  input4.value.toLowerCase();
  input5.value.toLowerCase();
  // question 1
  if (input1.value == 10 || input1 == "ten") {
    indicator1.innerHTML = "Correct";
    indicator1.style.color = "green";
    input1.style.borderColor = "green";
    score = score + 1;
  } else {
    correction1.innerHTML = "The correct answer is 10";
    indicator1.innerHTML = "Incorrect";
    indicator1.style.color = "red";
    input1.style.borderColor = "red";
  }
  // question 2
  if (input2.value == 2 || input1 == "two") {
    indicator2.innerHTML = "Correct";
    indicator2.style.color = "green";
    input2.style.borderColor = "green";
    score = score + 1;
  } else {
    correction2.innerHTML = "The correct answer is 2";
    indicator2.innerHTML = "Incorrect";
    indicator2.style.color = "red";
    input2.style.borderColor = "red";
  }
  // question 3
  if (input3.value == 3 || input1 == "three") {
    indicator3.innerHTML = "Correct";
    indicator3.style.color = "green";
    input3.style.borderColor = "green";
    score = score + 1;
  } else {
    correction3.innerHTML = "The correct answer is 3";
    indicator3.innerHTML = "Incorrect";
    indicator3.style.color = "red";
    input3.style.borderColor = "red";
  }
  // question 4
  if (input4.value == "center" || input4 == "big") {
    indicator4.innerHTML = "Correct";
    indicator4.style.color = "green";
    input4.style.borderColor = "green";
    score = score + 1;
  } else {
    correction4.innerHTML = "The correct answer is 'Center'";
    indicator4.innerHTML = "Incorrect";
    indicator4.style.color = "red";
    input4.style.borderColor = "red";
  }
  // question 5
  if (input5.value == "fouled") {
    indicator5.innerHTML = "Correct";
    indicator5.style.color = "green";
    input5.style.borderColor = "green";
    score = score + 1;
  } else {
    correction5.innerHTML = "The correct answer is 'Fouled'";
    indicator5.innerHTML = "Incorrect";
    indicator5.style.color = "red";
    input5.style.borderColor = "red";
  }
  output1.innerHTML = `${score}/5`;
  output2.innerHTML = `(${Math.round((score / 5) * 100)}%)`;

  if (score > 3) {
    output3.innerHTML = "Great Job!";
  } else {
    output3.innerHTML = "Keep learning about basketball...";
  }
}
