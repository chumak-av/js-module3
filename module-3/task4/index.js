const age = prompt('Введите ваш возраст');
if (age <= 16 && age >= 0) {
    alert("дети");
} else if (age >= 17 && age <= 60) {
    alert("взрослые");
} else if (age >= 61 && age <= 100) {
    alert("пенсионеры");
} else if (age > 100) {
    alert("вы слишком старый");
} else if (age < 100) {
    alert("вас еще нет");
}