
document.body.addEventListener("mousemove", (e) => {
	cursorPoint(e);
});
document.querySelector(".guitarSVG").addEventListener("touchmove", (e) => {
	cursorPoint(e);
});

const pt = new DOMPoint();

function cursorPoint(e) {
	switch (e.type) {
		case "touchstart":
		case "touchmove":
		case "touchend":
		case "touchcancel":
			let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
			let touch = evt.touches[0] || evt.changedTouches[0];
			pt.x = touch.pageX;
			pt.y = touch.pageY;
			break;
		case "mousedown":
		case "mouseup":
		case "mousemove":
		case "mouseover":
		case "mouseout":
		case "mouseenter":
		case "mouseleave":
		default:
			pt.x = e.clientX;
			pt.y = e.clientY;
	}
	// Get point in global SVG space
	let loc = pt.matrixTransform(e.target.getScreenCTM().inverse());
	let x = loc.x;
	let y = loc.y;
	let mouse = document.querySelector(".guitarPick");
	let boxes = document.querySelectorAll(".strumTrigger");
	let mh = mouse.getAttribute("height") * 1;
	let mw = mouse.getAttribute("width") * 1;
	let mxPos = (x * 1 - mw / 2) * 1;
	let myPos = (y * 1 - mh / 2) * 1;

	mouse.setAttribute("x", mxPos);
	mouse.setAttribute("y", myPos);

	let mouseRect = {
		top: myPos,
		bottom: myPos + mh,
		left: mxPos,
		right: mxPos + mw
	};

	for (let j = 0; j < boxes.length; j++) {
		let bh = boxes[j].getAttribute("height") * 1;
		let bw = boxes[j].getAttribute("width") * 1;
		let bx = boxes[j].getAttribute("x") * 1;
		let by = boxes[j].getAttribute("y") * 1;
		let b = {
			top: by,
			bottom: by + bh,
			left: bx,
			right: bx + bw
		};
		let collided = checkCollisions(mouseRect, b);

		// twang the string if the trigger box is collided with the
		if (collided) {
			let gString = document.querySelector(`.string${j + 1}`);
			let stringAnim = document.querySelectorAll(".string")[j];
			stringAnim.classList.add("playing");
			if (stringAnim.classList.contains("playing")) {
				audio.play();
				let path = gString.getAttribute("d");
				let regex = /\d+/g;
				let ds = path.match(regex);

				// the position of the x curve (middle x position of the twang)
				let xCurveVal = ds[2] * 1;
				let lTwang = [];
				let rTwang = [];
				for (let i = 6; i >= 0; i--) {
					lTwang.push(xCurveVal + i * 10);
					rTwang.push(xCurveVal - i * 10);
				}
				if (x > bx - bw / 2) {
					[rTwang, lTwang] = [lTwang, rTwang];
				}

				let newPath = ``;

				// add the twang to the animation
				for (let i = 0; i < lTwang.length; i++) {
					newPath += `M ${ds[0]} ${ds[1]} 
				Q ${lTwang[i]} ${y} ${ds[4]} ${ds[5]} 
				L ${ds[6]} ${ds[7]}; 
				M ${ds[0]} ${ds[1]} 
				Q ${rTwang[i]} ${y} ${ds[4]} ${ds[5]} 
				L ${ds[6]} ${ds[7]};`;
				}

				stringAnim.setAttribute(
					"values",
					`M ${ds[0]} ${ds[1]} 
				Q ${ds[2]} ${y} ${ds[4]} ${ds[5]} 
				L ${ds[6]} ${ds[7]}; 
				${newPath}
				M ${ds[0]} ${ds[1]} 
				Q ${ds[2]} ${y} ${ds[4]} ${ds[5]} 
				L ${ds[6]} ${ds[7]}`
				);
				setTimeout(() => {
					stringAnim.beginElement();
				}, 20);
				setTimeout(() => {
					stringAnim.classList.remove("playing");
				}, 500);
			}
		}
	}
}

function checkCollisions(r1, r2) {
	return !(
		r2.left > r1.right ||
		r2.right < r1.left ||
		r2.top > r1.bottom ||
		r2.bottom < r1.top
	);
}

let audio;

function loadedAudio(audio) {
	console.log('loaded!');
	audio.play();
}


function preloadAudio(url)
{
  console.log("trying to preload " + url);
  audio = new Audio(url);
  // once this file loads, it will call loadedAudio()
  // the file will be kept by the browser as cache
  audio.addEventListener('canplaythrough', () => {
		loadedAudio(audio)
	}, false);

  audio.addEventListener('error', function failed(e)
  {
    console.log("COULD NOT LOAD AUDIO");
  });
  audio.src = url;

  audio.load();  // add this line
}

preloadAudio('')