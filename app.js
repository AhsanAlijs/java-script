var names = prompt("Enter Your Name");
var englishMArks = +prompt("Enter Your English MArks");
var urduMArks = +prompt("Enter Your Urdu MArks");
var mathMArks = +prompt("Enter Your Math MArks");
var islamiatMArks = +prompt("Enter Your Islamiat MArks");
var pakMArks = +prompt("Enter Your pak MArks");
var scinceMArks = +prompt("Enter Your Scince MArks");
var computerMArks = +prompt("Enter Your Computer MArks");
var toltalMarks = (1150);
var studentTotalMarks = (englishMArks + urduMArks + mathMArks + islamiatMArks + pakMArks + scinceMArks + computerMArks);
var percentage = studentTotalMarks / toltalMarks * 100;
// console.log(englishMArks , urduMArks , mathMArks , islamiatMArks , pakMArks , scinceMArks , computerMArks)
console.log(names + " total marks is " + studentTotalMarks + " out of " + toltalMarks + " and percentage is " + percentage + "%");