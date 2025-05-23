// Registration button code
// const reg = document.getElementById("reg");
const martic = document.getElementsByClassName("martic");
const asideHead = document.getElementsByTagName("h4");
function changeColor(asideelm){
    asideelm.style.color = "red";
}
asideHead.addEventListener("mouseover", () => asideHead.classList.add ("highlight"));
