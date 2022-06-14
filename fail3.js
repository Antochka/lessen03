'use strict';

let money = prompt('Ваш месячный доход?', '40000');
console.log('type money: ', typeof money);
let income = 'фриланс';
console.log('type income: ', typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'интернет, такси, коммуналка');
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);
let mission = 1000000; 
console.log('addExpenses: ', addExpenses.length);
let period = 12; 
console.log(`Период равен ${period} месяцев.
 Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(addExpenses.toLocaleLowerCase().split(', '));
let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = prompt('Во сколько это обойдется?', '20000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'бензин, транспорт');
let amount2 = prompt('Во сколько это обойдется?', '1500');
let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
if (isNaN(budgetMonth)) {
    console.log('Упс! Где-то закралась ошибка... Дальнейшее выполнение остановлено.');
} else {
    console.log('Бюджет на месяц: ', budgetMonth);
    console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);
    let budgetDay = budgetMonth / 30;
    console.log('Бюджет на день: ', Math.floor(budgetDay));
    if (budgetDay === 1200) {
        console.log('У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!');
    } else if (budgetDay === 600) {
        console.log('У вас почти средний уровень дохода, но немного не хватает...');
    } else if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay < 1200 && budgetDay > 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 0) {
        console.log('Что то пошло не так');
    } else {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
    console.log(isNaN(budgetDay) ? 'Упс! Где-то закралась ошибка...' :
        (budgetDay < 0) ? 'Что то пошло не так' :
        (budgetDay < 600) ? 'Что то пошло не так' :
        (budgetDay === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
        (budgetDay < 1200) ? 'У вас средний уровень дохода' :
        (budgetDay === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
        'У вас высокий уровень дохода');
}