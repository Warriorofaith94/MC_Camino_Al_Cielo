function openNav(){
  document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
