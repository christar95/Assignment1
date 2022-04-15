let spots= [];
let spotAssignment = document.getElementById('AssignmentName');
let spotCourse = document.getElementById('CourseName');
let btnSubmit = document.getElementById('add');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divList = document.getElementById('list');
function Spot(assignment, course) {
    this.assignment = assignment;
    this.course = course;
}
function spotToString(spot) {
        return (`${spot.assignment} ${spot.course}`);
}
function submit(event){
        event.preventDefault();
        let newSpot=new Spot(spotAssignment.value,spotCourse.value);
        spots.push(newSpot);
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.spotIndex = spots.length - 1;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(newSpot, btnEdit);
        btnReset.click();
}
function reset(event) {
        btnSubmit.textContent = 'Add';
}
function edit(event) {
        spotAssignment.value = spots[this.spotIndex].assignment;
        spotCourse.value = spots[this.spotIndex].course;
        btnSubmit.hidden = true;
        btnUpdate.hidden = false;
        btnUpdate.spotIndex = this.spotIndex;
}
function update(event) {
        event.preventDefault();
        spots[this.spotIndex] = new Spot(spotAssignment.value, spotCourse.value);
        divList.innerHTML = '';
        for(let i = 0; i < spots.length; i++) {
            let btnEdit = document.createElement('button');
            btnEdit.textContent = 'Edit';
            btnEdit.spotIndex = i;
            btnEdit.addEventListener('click', edit);
            createParagraphElement(spots[i], btnEdit);
        }
        btnUpdate.hidden = true;
        btnSubmit.hidden = false;
        btnReset.click();
}
function createParagraphElement(spot, editButton) {
        let paragraph = document.createElement('p');
        paragraph.innerText = spotToString(spot);
        let spanSpace = document.createElement('span');
        spanSpace.innerHTML = '&nbsp;';
        paragraph.append(spanSpace, editButton);
        divList.append(paragraph);
}