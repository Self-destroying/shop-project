const black = document.querySelector("#black-uptempo");
const pink = document.querySelector("#pink-uptempo");
const red = document.querySelector("#red-uptempo");
const image = document.querySelector("#image-uptempo");
const btn = document.querySelector("#add-uptempo");
const show = document.querySelector("#show-info");
const bill = document.querySelector("#bill-uptempo");
const billList = document.querySelector("#close-bill");
const showBill = document.querySelector("#show-bill")

black.addEventListener("click", changeBlackUptempo);
function changeBlackUptempo() {
  image.src = "image/uptempo/air-uptempo-black_prev_ui (1).png";
}
pink.addEventListener("click", changePinkUptempo);
function changePinkUptempo() {
  image.src = "image/uptempo/air-uptempo-pink_prev_ui (2).png";
}
red.addEventListener("click", changeRedUptempo);
function changeRedUptempo() {
  image.src = "image/uptempo/air-uptempo-white_prev_ui (2).png";
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
