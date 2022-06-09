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

const box2 = document.querySelector('#animate-stats2');
const juggle = document.querySelector('#animate-juggle')

document.addEventListener('scroll', function () {
  if (isInViewport(juggle) && juggle.classList.value ==('') ) {
    let img = new Image();
    img.src = '/c/dam/m/en_us/solutions/enterprise-networks/nb-06-cloud-managed-catalyst/images/Juggler_white.gif';
    img.className = 'gif';
    juggle.classList.add('hasGif');
    setTimeout(()=> {
      juggle.prepend(img);
    }, 50)
    
  }
  if (isInViewport(box2)) {
    bar.animate(0.6);  // Number from 0.0 to 1.0
}
});