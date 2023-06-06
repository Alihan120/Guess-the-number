let tutulanSayi = Math.trunc(Math.random() * 100);
console.log(tutulanSayi);
let sayilar = [0,1,2,3,4,5,6,7,8,9]
const input = document.querySelector("#input");
const button = document.getElementById("button");
const pWrite = document.querySelector("#write");
const hakkim = document.querySelector("#hak");
let counter = 5;
let eski = "0";
let yeni = "100"
button.addEventListener("click", (e) => {
  
  counterr();

  if (input.value > 100 || input.value < 0) {
    alert("istenilen aralıkta bir sayı giriniz");
  } else if (input.value == tutulanSayi) {
    pWrite.innerHTML = `YOU WIN`;
    input.disabled = true;
  } else if (input.value > tutulanSayi) {
      yeni = input.value
    pWrite.innerHTML = `Please enter numbers between ${eski} and ${yeni}`;
  } else if (input.value < tutulanSayi) {
      eski = input.value
    pWrite.innerHTML = `Please enter numbers between ${eski} and ${yeni}`;
  }
  input.value = "";
});

const counterr = () => {
  counter--;
  if (counter > 0) {
    hakkim.innerHTML = `You have ${counter} left`;
    input.focus();
  } else {
    hakkim.innerHTML = `You have used all your rights`;
    input.disabled = true;
  }
};

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    button.click();
  }
  input.value = "";
});