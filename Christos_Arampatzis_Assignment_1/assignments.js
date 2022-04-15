let assignments=[];
let assignmentName=document.getElementById('AssignmentName');
let assignmentSubject=document.getElementById('AssignmentSubject');
let assignmentDescription=document.getElementById('AssignmentDescription');
let assignmentDate=document.getElementById('AssignmentDate');
let btnSubmit=document.getElementById('add');
btnSubmit.addEventListener('click',submit);
let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divAssignments = document.getElementById('assignments');
function Assignment(name,subject,description,date){
    this.name=name;
    this.subject=subject;
    this.description=description;
    this.date=date;
}
function assignmentToString(assignment){
    return (`${assignment.name} ${assignment.subject} ${assignment.description} ${assignment.date}`);
}
function submit(event){
    event.preventDefault();
    let newAssignment=new Assignment(assignmentName.value,assignmentSubject.value,assignmentDescription.value,assignmentDescription.value);
    assignments.push(newAssignment);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.assignmentIndex = assignments.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(newAssignment, btnEdit);
    btnReset.click();
}
function reset(event) {
    btnSubmit.textContent = 'Add';
}
function edit(event) {
    assignmentName.value = assignments[this.assignmentIndex].name;
    assignmentSubject.value = assignments[this.assignmentIndex].subject;
    assignmentDescription.value = assignments[this.assignmentIndex].description;
    assignmentDate.value = assignments[this.assignmentIndex].date;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.assignmentIndex = this.assignmentIndex;
}
function update(event) {
    event.preventDefault();
    assignments[this.assignmentIndex] = new Assignment(assignmentName.value, assignmentSubject.value, assignmentDescription.value,assignmentDate.value);
    divAssignments.innerHTML = '';
    for(let i = 0; i < assignments.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.assignmentIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(assignments[i], btnEdit);
    }
    btnUpdate.hidden = true;
    submitStudent.hidden = false;
    btnReset.click();
}
function createParagraphElement(assignment, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = assignmentToString(assignment);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divAssignments.append(paragraph);
}