const yourAge = prompt("Введите ваш возраст");
const age = prompt("Введите возраст вашего соседа слева");
const yourAge1 = Number.parseInt(yourAge);
const age1 = Number.parseInt(age);
alert("Если ему больше 12 лет, то вы увидете сумму ваших возрастов");
if (age > 12) {
    alert(yourAge1 + age1);
}