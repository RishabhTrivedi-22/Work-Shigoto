const main = document.querySelector("#main");
const cursor1 = document.querySelector("#cursor1");
const pg2Links = document.querySelector(".pg2Links");


function navbarScrollAnimation() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      main.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !main.classList.contains("scroll-down")) {
      main.classList.remove("scroll-up");
      main.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && main.classList.contains("scroll-down")) {
      main.classList.add("scroll-up");
      main.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  });
}

function cursor1Animation() {
  document.addEventListener('mousemove', (e) => {
    cursor1.style.left = e.x + "px";
    cursor1.style.top = e.y + "px";
  });


}



navbarScrollAnimation();
cursor1Animation();