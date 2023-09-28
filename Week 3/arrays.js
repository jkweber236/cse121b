// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

//example 2
const grades = ["A", "B", "A"];
function computeGPA(grades) {
    let score = 0;
    if (grade === "A") {
        score = 4;
      } else if (grade === "B") {
        score = 3;
      }
      return score;
}
const gpa = grades.map(computeGPA);

//example 3
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const letterGrade = pointsTotal / gpaPoints.length;

// example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

// example 5
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
