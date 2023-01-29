let ring = document.querySelector('#ring'),
smR = document.querySelectorAll('.sm-reflect path'),
turb = document.querySelectorAll('#filter-ripple-2 feImage')[0],
feD = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];

TweenLite.set(turb, {
  attr: {
    width: 0,
    height: 0 } });



function sceneOne() {
  var pl = new TimelineMax();

  pl.add('begin');
  pl.fromTo(ring, 1, {
    x: 0,
    y: 0 },
  {
    x: 30,
    y: 10,
    ease: Sine.easeOut });

  pl.to(ring, 12, {
    x: -170,
    y: -80,
    ease: Power1.easeOut });

  pl.staggerTo('#reflection path', 4, {
    cycle: {
      x: [-45, -40, -50, -30],
      y: [15, 20, 25, 30],
      skewX: ['-10deg', '10deg', '-20deg', '15deg'] },

    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut },
  0.001, 'begin');
  pl.to(turb, 8, {
    attr: {
      width: 600,
      height: 600,
      x: -100,
      y: -100 } },

  'begin+=0.4');
  pl.fromTo(feD, 8, {
    attr: {
      scale: 30 } },

  {
    attr: {
      scale: 0,
      transformOrigin: '50% 50%' } },

  'begin+=0.4');

  return pl;
}

const master = new TimelineMax();
master.add(sceneOne(), 'scene1');