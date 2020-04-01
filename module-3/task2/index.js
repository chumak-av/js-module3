const fulldate = prompt("Какое сегодня число и месяц?");
const date = Number.parseInt(fulldate);
const result = date % 2 === 0 ? fulldate : "upppss";
alert(result);