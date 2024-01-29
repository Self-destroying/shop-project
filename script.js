const blackSalomon = document.querySelector("#black-salomon");
const greenSalamon = document.querySelector("#green-salomon");
const redSalomon = document.querySelector("#red-salomon");
const image = document.querySelector("#image-salomon");
const btn = document.querySelector("#add-salomon");
const show = document.querySelector("#show-info-salomon");
const bill = document.querySelector("#bill-salomon");
const billList = document.querySelector("#close-bill-salomon");
const showBill = document.querySelector("#show-bill-salomon")

blackSalomon.addEventListener("click", changeBlackSalomon);
function changeBlackSalomon() {
  image.src = "image/salomon/salomon-black.png";
}
greenSalamon.addEventListener("click", changeGreenSalomon);
function changeGreenSalomon() {
  image.src = "image/salomon/salomo-green.png";
}
redSalomon.addEventListener("click", changeRedSalomon);
function changeRedSalomon() {
  image.src = "image/salomon/salomon-red.png";
}
btn.addEventListener("click", addInfo);
function addInfo() {
  bill.style.display = "block";
}
bill.addEventListener("click", showInfo);
function showInfo() {
  show.style.display = "flex";
}
billList.addEventListener("click", closeBill);
function closeBill() {
  showBill.style.display = "none";
}
