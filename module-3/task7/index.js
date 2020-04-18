const random = Math.round(Math.random() * (5 - 1) + 1);
alert(`Загаданое число ${random}, посмотрим угадает ли программа`)
switch (random) {
    case 1:
        alert("Число 1");
        break;
    case 2:
        alert("Число 2");
        break;
    case 3:
        alert("Число 3");
        break;
    case 4:
        alert("Число 4");
        break;
    case 5:
        alert("Число 5");
        break;
}