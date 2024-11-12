const scrollTxt = document.querySelector('.scroll-txt');
const marquee = document.querySelectorAll('.marquee');
const marqueeWidth = marquee[0].offsetWidth;

function scrollText() {
  scrollTxt.scrollLeft += 1;
  if (scrollTxt.scrollLeft >= marqueeWidth * marquee.length) {
    scrollTxt.scrollLeft = 0;
  }
}

setInterval(scrollText, 50); // adjust speed

