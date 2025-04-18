var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function scrollToCenter(event, targetId) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(targetId);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollOffset = window.scrollY + elementTop - (windowHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  }