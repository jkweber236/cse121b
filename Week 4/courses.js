// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26,
            day: 'TTh', 
            instruction: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        },
    ],
    // Method to the object that will allow us to add a student to a section.
    // The method takes the section number we are enrolling the student in as an argument.
    // Finds the section that was given in this.sections.
    enrollStudent: function(sectionNum) {
        // find the right section. Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        // If the section exists, then add 1 to the enrolled, and then call the renderSections function 
        // to show our change. 
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    // Method called dropStudent(section). Subtract 1 from enrolled if the section passed in is found.
    dropStudent: function (sectionNum) {
        // find the right section. Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNUm == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    }, 
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNUm}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("$sections").innerHTML = html.join("");
}

// Add two even listeners to your code. One for #enrollStudent button that will call out enrollStudent method,
// and another the #dropStudent button. The event handler function in each case should grab the contents of the 
// #sectionNumber input and pass it into the appropriate function. 
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value; 
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);