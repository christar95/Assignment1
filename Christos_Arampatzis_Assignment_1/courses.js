let courses=[];
let courseName=document.getElementById('CourseName');
let courseType=document.getElementById('CourseType');
let courseDescription=document.getElementById('CourseDescription');
let courseHours=document.getElementById('CourseHours');
let btnSubmit=document.getElementById('add');
btnSubmit.addEventListener('click',submit);
let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divCourses = document.getElementById('courses');
function Course(name,type,description,hours){
    this.name=name;
    this.type=type;
    this.description=description;
    this.hours=hours;
}
function courseToString(course){
    return (`${course.name} ${course.type} ${course.description} ${course.hours}`);
}
function submit(event){
    event.preventDefault();
    let newCourse=new Course(courseName.value,courseType.value,courseDescription.value,courseHours.value);
    courses.push(newCourse);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.courseIndex = courses.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(newCourse, btnEdit);
    btnReset.click();
}
function reset(event) {
    btnSubmit.textContent = 'Add';
}
function edit(event) {
    courseName.value = courses[this.courseIndex].name;
    courseType.value = courses[this.courseIndex].type;
    courseDescription.value = courses[this.courseIndex].description;
    courseHours.value = courses[this.courseIndex].hours;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.courseIndex = this.courseIndex;
}
function update(event) {
    event.preventDefault();
    courses[this.courseIndex] = new Course(courseName.value, courseType.value, courseDescription.value,courseHours.value);
    divCourses.innerHTML = '';
    for(let i = 0; i < courses.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.courseIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(courses[i], btnEdit);
    }
    btnUpdate.hidden = true;
    submitStudent.hidden = false;
    btnReset.click();
}
function createParagraphElement(course, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = courseToString(course);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divCourses.append(paragraph);
}