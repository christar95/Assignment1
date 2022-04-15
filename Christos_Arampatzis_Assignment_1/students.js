let students=[];
let studentName=document.getElementById('StudentName');
let studentSurname=document.getElementById('StudentSurname');
let studentEmail=document.getElementById('StudentEmail');
let studentBirthday=document.getElementById('StudentBirthday');
let submitStudent=document.getElementById('add');
submitStudent.addEventListener('click',addStudent);
let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divStudents = document.getElementById('students');
function Student(name,surname,email,birthday){
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.birthday=birthday;
}
function studentToString(student){
    return (`${student.name} ${student.surname} ${student.email} ${student.birthday}`);
}
function addStudent(event){
    event.preventDefault();
    let newStudent=new Student(studentName.value,studentSurname.value,studentEmail.value,studentBirthday.value);
    students.push(newStudent);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.studentIndex = students.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(newStudent, btnEdit);
    btnReset.click();
}
function reset(event) {
    submitStudent.textContent = 'Add';
}
function edit(event) {
    studentName.value = students[this.studentIndex].name;
    studentSurname.value = students[this.studentIndex].surname;
    studentEmail.value = students[this.studentIndex].email;
    studentBirthday.value = students[this.studentIndex].birthday;
    submitStudent.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.studentIndex = this.studentIndex;
}
function update(event) {
    event.preventDefault();
    students[this.studentIndex] = new Student(studentName.value, studentSurname.value, studentEmail.value,studentBirthday.value);
    divStudents.innerHTML = '';
    for(let i = 0; i < students.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.studentIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(students[i], btnEdit);
    }
    btnUpdate.hidden = true;
    submitStudent.hidden = false;
    btnReset.click();
}
function createParagraphElement(student, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = studentToString(student);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divStudents.append(paragraph);
}
