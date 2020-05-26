let day = prompt("Enter today day please");
let weekday;
switch (day) {
    case 'Monday':
        weekday = "the worst day of the week";
        break;
    case 'Tuesday':
        weekday = "a bit better workday at week";
        break;
    case 'Wednesday':
        weekday = "a workday so it's a small Friday";
        break;
    case 'Thursday':
        weekday = "a strange workday";
        break;
    case 'Friday':
        weekday = "the best workday";
        break;
    case 'Saturday':
    case 'Sunday':
        weekday = "holiday";
        break;
    default:
        alert('Invalid entered data');
        weekday = "invalid data";
};
alert(`${day} is ${weekday}`);