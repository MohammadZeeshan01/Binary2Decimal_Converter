let binary1 = document.querySelector("#binary");
let result = document.querySelector(".result");
let cont = document.querySelector(".container");

cont.addEventListener("submit", (e) => {
  e.preventDefault();
  let binary = binary1.value;
  if (binary.split("").some((e) => e > 1))
    return alert("This is not a binary Number Please write binary number(1010111)");
  let decimal = parseInt(binary, 2);
  result.textContent = decimal;
});