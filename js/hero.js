document.addEventListener('DOMContentLoaded', function () {
    // Define animation targets
    const heroTitleOne = document.querySelector('.hero-a-one');
    const heroTitleTwo = document.querySelector('.hero-a-two');
    const heroTitleThree = document.querySelector('.hero-a-three');
    const imageWrap = document.querySelector('.image-wrap-hero-home-a');
    const subtitleOverlay = document.querySelector('.overlay-hero-home');
  
    // Initialize animations
    anime.timeline({
      easing: 'easeOutExpo',
    })
      .add({
        targets: heroTitleOne,
        opacity: 1,
        translateY: 0,
        duration: 1000,
      })
      .add({
        targets: heroTitleTwo,
        opacity: 1,
        translateY: 0,
        duration: 1000,
      }, 200)
      .add({
        targets: heroTitleThree,
        opacity: 1,
        translateY: 0,
        duration: 1000,
      }, 400)
      .add({
        targets: imageWrap,
        opacity: 1,
        translateY: 0,
        duration: 1000,
      }, 600)
      .add({
        targets: subtitleOverlay,
        scaleY: 0,
        duration: 1000,
      }, 800);
  });
  