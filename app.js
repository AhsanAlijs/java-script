var names = prompt("Enter Your Name");
var mathsNumber = +prompt("Enter Your Number");
var islamiatNumber = +prompt("Enter Your Number");
var englishNumber = +prompt("Enter Your Number");
var urduNumber = +prompt("Enter Your Number");
var totalNumber = (650);
var studentTotalMarks = (mathsNumber + englishNumber + urduNumber + islamiatNumber);
var studentPercantage = (studentTotalMarks*100/totalNumber);
console.log(studentPercantage);

