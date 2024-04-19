const number = document.querySelector(".number");

const increment = (delay) => {
  if (parseInt(number.textContent) < 100) {
    setTimeout(() => {
      number.textContent = parseInt(number.textContent) + 1;

      increment(delay);
    }, delay);
  } else {
    number.textContent += " Level";
  }
};

console.log(increment(100));
