AOS.init({once: true});

const counterAnimation = (el, initialNum, finalNum, speed) => {
    if (Number.isInteger(finalNum)) {
      let interval = setInterval(function() {
        el.innerHTML = initialNum;
        (initialNum >= finalNum) ? clearInterval(interval) : '';
        initialNum++;
      }, speed);
    }
    else {
      let intInitialNum = Math.floor(initialNum);
      let intFinalNum = Math.floor(finalNum);
      let interval = setInterval(function() {
        el.innerHTML = intInitialNum;
        if (intInitialNum >= intFinalNum) {
          clearInterval(interval);
          el.innerHTML = `${finalNum.toString()}`;
        }
        intInitialNum++;
      }, speed);
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

var bar = new ProgressBar.Circle(container, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    color: '#11BAE9',
    trailColor: '#E2E2E2',
    trailWidth: 7,
    svgStyle: null
});

const box1 = document.querySelector('#animate-stats1');
const box2 = document.querySelector('#animate-stats2');

document.addEventListener('scroll', function () {
    if (isInViewport(box1) && document.querySelector('#nbr1').innerHTML == 0 ) {
        // counterAnimation(document.querySelector('#nbr1'), 0, 95, 10);
        // counterAnimation(document.querySelector('#nbr2'), 0, 200, 5);
        // counterAnimation(document.querySelector('#nbr3'), 0, 2.4, 200);
    }
    // if (isInViewport(box2) && document.querySelector('#nbr4').innerHTML == 0 ) {
      if (isInViewport(box2)) {
        // counterAnimation(document.querySelector('#nbr4'), 0, 60, 20);
        bar.animate(0.6);  // Number from 0.0 to 1.0
    }
});