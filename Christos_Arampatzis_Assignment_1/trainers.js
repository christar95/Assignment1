let trainers=[];
let trainerName=document.getElementById('TrainerName');
let trainerSurname=document.getElementById('TrainerSurname');
let trainerEmail=document.getElementById('TrainerEmail');
let trainerBirthday=document.getElementById('TrainerBirthday');
let btnSubmit=document.getElementById('add');
btnSubmit.addEventListener('click',submit);
let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divTrainers = document.getElementById('trainers');
function Trainer(name,surname,email,birthday){
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.birthday=birthday;
}
function trainerToString(trainer){
    return (`${trainer.name} ${trainer.surname} ${trainer.email} ${trainer.birthday}`);
}
function submit(event){
    event.preventDefault();
    let newTrainer=new Trainer(trainerName.value,trainerSurname.value,trainerEmail.value,trainerBirthday.value);
    trainers.push(newTrainer);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.trainerIndex = trainers.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(newTrainer, btnEdit);
    btnReset.click();
}
function reset(event) {
    btnSubmit.textContent = 'Add';
}
function edit(event) {
    trainerName.value = trainers[this.trainerIndex].name;
    trainerSurname.value = trainers[this.trainerIndex].surname;
    trainerEmail.value = trainers[this.trainerIndex].email;
    trainerBirthday.value = trainers[this.trainerIndex].birthday;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.trainerIndex = this.trainerIndex;
}
function update(event) {
    event.preventDefault();
    trainers[this.trainerIndex] = new Trainer(trainerName.value, trainerSurname.value, trainerEmail.value,trainerBirthday.value);
    divTrainers.innerHTML = '';
    for(let i = 0; i < trainers.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.trainerIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(trainers[i], btnEdit);
    }
    btnUpdate.hidden = true;
    submitStudent.hidden = false;
    btnReset.click();
}
function createParagraphElement(trainer, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = trainerToString(trainer);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divTrainers.append(paragraph);
}