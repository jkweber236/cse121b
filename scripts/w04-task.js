/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {

/* Populate Profile Object with placesLive objects */
    name: "Jennifer Weber",
    photo: "images/myphoto.jpg",
    favoriteFoods: [
        "Spaghetti", 
        "Brownies",
        "Fried Rice",
        "Lasagna",
        "Potatoes"
    ],
    hobbies: [
        "Music",
        "Crochet",
        "Painting",
        "Tennis",
    ],
    placesLived: []
}

myProfile.placesLived.push(
    {
        place: "Nampa, ID",
        length: "19 years"
    },
    {
        place: "Rexburg, ID",
        length: "1.5 years"
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo")
imageElement.setAttribute("src", myProfile.photo) 

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

