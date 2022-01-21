let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobile-menu");
const dm = document.getElementsByClassName("dm");
let cm = document.getElementsByClassName("cm");
let toggler = true;

function openMenu(p) {
  if (getComputedStyle(cm[p], null).display === `none`) {
    for (let i = 0; i < cm.length; i++) {
      cm[i].style.display = `none`;
    }
    cm[p].style.display = `block`;
  } else {
    cm[p].style.display = `none`;
  }
}

console.log(getComputedStyle(cm[1], null).display);

function openClose() {
  if (toggler === true) {
    mobileMenu.style.display = `block`;
    hamburger.src = `../images/icon-close.svg`;
    toggler = false;
  } else {
    mobileMenu.style.display = `none`;
    hamburger.src = `../images/icon-hamburger.svg`;
    toggler = true;
  }
}
