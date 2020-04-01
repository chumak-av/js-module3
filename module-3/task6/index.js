const name = prompt("Введите свое имя");
const surname = prompt("Введите свою фамилию");
const lengthName = (name.length);
const lengthSurname = (surname.length);
if (lengthName > 4 && lengthSurname > 5) {
    alert(lengthName + lengthSurname);
}