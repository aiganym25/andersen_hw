const num1 = prompt("Введите первое число: ");
const num2 = prompt("Введите второе число: ");
console.log(convertNum(num1, num2));

function convertNum(num1, num2) {
  let resNum1 = Number(num1);
  let resNum2 = Number(num2);
  if (Number.isNaN(resNum1) || Number.isNaN(resNum2)) {
    return "Некорректный ввод!";
  }
  return resNum1.toString(resNum2);
}
