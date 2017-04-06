function menuAnimation() {
	document.querySelector(".menu").classList.add("menuAnimation");
	document.querySelector(".shade").classList.add("shadeAnimation");
}

function menuRemove() {
	document.querySelector(".menu").classList.remove("menuAnimation");
	document.querySelector(".shade").classList.remove("shadeAnimation");
}

function confirmWeather() {
  document.querySelector(".confirm").classList.toggle("displaynone");
}

function removeConfirm() {
  document.querySelector(".confirm").classList.remove("displaynone");
}

function removeareaConfirm() {
  document.querySelector(".confirm-area").classList.remove("displaynone");
}

function confirmareaWeather() {
  document.querySelector(".confirm-area").classList.toggle("displaynone");
}

function reload() {
  location.reload();
}
