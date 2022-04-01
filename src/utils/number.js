export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const calculationInt = (number1, number2, cal) => {
  switch (cal) {
    case '+': {
      return number1 + number2;
    }
    case '-': {
      return number1 - number2;
    }
    case 'x': {
      return number1 * number2;
    }
    case '/': {
      return number1 / number2;
    }
    default: {
      return 0;
    }
  }
};
