


    const blink1 = $('.blink-1');
    const blink2 = $('.blink-2');
    const blink3 = $('.blink-3');

    const tlBlink1 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink1
    .to(blink1, 1, {opacity: 0}, 1)
    .to('#cloud-1', 2, {ease: Power4.easeInOut, x:30}, 1)
    .to('#cloud-1', 2, {opacity: 0}, 1)
    .to('#cloud-4', 2, {ease: Power4.easeInOut, x:-20}, 1)
    .to('#cloud-4', 2, {opacity: 0}, 1)
    .to('#cloud', 2, {ease: Power4.easeInOut, x:-50}, 1)
    .to('#cloud', 2, {opacity: 0}, 1)
    .play();

    const tlBlink2 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink2
    .to(blink2, 1, {opacity: 0}, 2)
    .to('#cloud-2', 2, {ease: Power4.easeInOut, x:-20}, 2)
    .to('#cloud-2', 2, {opacity: 0}, 2)
    .to('#cloud-6', 2, {ease: Power4.easeInOut, x:30}, 2)
    .to('#cloud-6', 2, {opacity: 0}, 2)
    .play();

    const tlBlink3 = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBlink3
    .to(blink3, 1, {opacity: 0}, 3)
    .to('#cloud-3', 2, {ease: Power4.easeInOut, x:-30}, 3)
    .to('#cloud-3', 2, {opacity: 0}, 3)
    .to('#cloud-5', 2, {ease: Power4.easeInOut, x:30}, 3)
    .to('#cloud-5', 2, {opacity: 0}, 3)
    .play();