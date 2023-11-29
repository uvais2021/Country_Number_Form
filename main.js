
const form = document.getElementById('form');
const btn = document.getElementById('btn');
const nameu = document.getElementById('name');
const phone = document.getElementById('phone');
const getphone = document.getElementById('getphone');
var a = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (a == 2) {
        display();
    } else {
        a = 0;
    }
});
function checkInputs() {

    const uname = nameu.value.trim();
    const uphone = phone.value.trim();



    if (uname === '') {
        setErrorFor(nameu, 'Name should be filled')
    }
    else {
        setSuccessFor(nameu);
    }

    if (uphone === '') {
        setErrorFor(phone, 'phone number should be filled')
    }else if(uphone.length<=10){
        setErrorFor(phone,'Please give minimum 10 numbers')
    }
    else {
        setSuccessFor(phone);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'error input'
}
function setSuccessFor(input) {
    a += 1
    const formControl = input.parentElement;
    formControl.className = 'success input'
}
function display() {
    document.write(`<center>`);
    document.write(`<h2>Your Inputs</h2>` + `<br>`);
    document.write(`Name: ${nameu.value}` + `<br>`);

    document.write(`Number: +${getphone.value} ${phone.value}` + `<br>`);


}
console.log('Running');
