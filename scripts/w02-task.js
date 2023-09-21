/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jennifer Weber"
let currentYear = "2023"
let profilePicture = "images/myphoto.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */
const favFoods = ["Spaghetti", "Chicken Pot Pie", "Brownies", "Fried Rice"]
foodElement.innerHTML = `${favFoods}`;
const addItem = favFoods.push("Lasagna");
foodElement.innerHTML += `<br>${favFoods}`;
const removeFirst = favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
const removeLast = favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





