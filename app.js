function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;

    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  console.log(targetPosition);
  requestAnimationFrame(animation);
}

var contact = document.querySelector(".btn-contact");

contact.addEventListener("click", function () {
  smoothScroll(".contact", 2000);
});
var contact = document.querySelector(".btn-project");

contact.addEventListener("click", function () {
  smoothScroll(".projects", 1000);
});

var contact = document.querySelector(".btn-about");

contact.addEventListener("click", function () {
  smoothScroll(".about", 1000);
});
