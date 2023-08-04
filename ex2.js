const num1 = prompt("Введите первое число: ");
if (!isValidNumber(num1)) {
  console.log("Некорректный ввод!");
} else {
  const num2 = prompt("Введите второе число: ");
  if (!isValidNumber(num2)) {
    console.log("Некорректный ввод!");
  } else {
    const result = calculate(Number(num1), Number(num2));
    console.log(`Ответ: ${result.sum}, ${result.division}.`);
  }
}

function isValidNumber(value) {
  return !isNaN(Number(value));
}

function calculate(num1, num2) {
  return {
    sum: num1 + num2,
    division: num1 / num2,
  };
}
