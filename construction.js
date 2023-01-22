var canvas = document.querySelector(".canvas")

gsap.registerPlugin(MotionPathPlugin)

function getBBoxDiff(element, withoutTransforms, toElement) {
  
  var svg = element.ownerSVGElement;
  
  if (!svg) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
    
  if (withoutTransforms) {
    return element.getBBox();
  }
  
  var p = svg.createSVGPoint();
  var r = element.getBBox();     
      
  var matrix = (toElement || svg).getScreenCTM().inverse().multiply(element.getScreenCTM()); 

  p.x = r.x;
  p.y = r.y;
  var a = p.matrixTransform(matrix);

  p.x = r.x + r.width;
  p.y = r.y;
  var b = p.matrixTransform(matrix);

  p.x = r.x + r.width;
  p.y = r.y + r.height;
  var c = p.matrixTransform(matrix);

  p.x = r.x;
  p.y = r.y + r.height;
  var d = p.matrixTransform(matrix);

  var minX = Math.min(a.x, b.x, c.x, d.x);
  var maxX = Math.max(a.x, b.x, c.x, d.x);
  var minY = Math.min(a.y, b.y, c.y, d.y);
  var maxY = Math.max(a.y, b.y, c.y, d.y);
    
  var width = maxX - minX;
  var height = maxY - minY;
  
  return {
    x: minX,
    y: minY,
    width: width,
    height: height,        
    cx: minX + width / 2,
    cy: minY + height / 2
  };
}

var letters = {
  A: document.querySelector("#A"),
  w: document.querySelector("#w"),
  e1: document.querySelector("#e1"),
  s: document.querySelector("#s"),
  o: document.querySelector("#o"),  
  m: document.querySelector("#m"),
  e2: document.querySelector("#e2")
}
var destinations = {
  A: document.querySelector("#final_A"),
  w: document.querySelector("#final_w"),
  e1: document.querySelector("#final_e1"),
  s: document.querySelector("#final_s"),
  o: document.querySelector("#final_o"),  
  m: document.querySelector("#final_m"),
  e2: document.querySelector("#final_e2")
}

const Deck = document.querySelector("#Deck")
var Helicopter = document.querySelector("#Helicopter")
var Blades = document.querySelector("#Blades")
var Dumper = document.querySelector("#Dumper")
var Bucket = document.querySelector("#Dumper-Bucket")
var Crane = document.querySelector("#Crane")
var CraneBody = document.querySelector("#Crane-Body")
var CraneBoom = document.querySelector("#Crane-Boom")
const CraneHook = document.querySelector("#Crane-Hook")
const CraneCable = document.querySelector("#Crane-Winch")

var DUMPER_W = Dumper.getBBox().width
var HELI_W = Helicopter.getBBox().width

var dumperTimeline = () => {
  var tl = gsap.timeline({ repeat: Infinity })
  tl.addLabel("standA")

  const Ax = destinations.A.getBBox().x + A.getBBox().width
  
  tl.add(gsap.to(A, {
    duration: 2,
    x: -(A.getBBox().x - Ax + 10)
  }), "standA")
  
  tl.add(gsap.to(Dumper, {
    duration: 2, x: -(Dumper.getBBox().x - Ax) + 40
  }), "standA")
  
  tl.add(gsap.to(A, {
    duration: 0.6,
    rotation: -65,
    ease: 'linear'
  }), "standA+=1")
  
  tl.add(gsap.to(A, {
    duration: 0.3,
    rotation: -110,
    ease: 'power1.in'
  }), "standA+=1.6")
  
  tl.add(gsap.to(Bucket, {
    rotation: 45,
    duration: 0.6,
    ease: 'linear'
  }), "standA+=1")
  
  tl.addLabel("prepareE1")
  
  tl.add(gsap.to(Dumper, {
    duration: 2.5,
    x: -50,
    ease: "power1.inOut"
  }), "prepareE1")
  
  tl.add(gsap.to(Bucket, {
    rotation: 0,
    duration: 1,
    ease: 'linear'
  }), "prepareE1+=0.5")
  
  tl.addLabel("enterE1")
  tl.add(gsap.to(Bucket, {
    rotation: 20,
    duration: 0.5,
    ease: 'linear'
  }), "enterE1")
  
  tl.add(gsap.to(letters.e1, {
    y: -18,
    duration: 0.5,
    ease: 'linear'
  }), "enterE1")
  
  const Ex = destinations.e1.getBBox().x + e1.getBBox().width
  
  tl.add(gsap.to(Dumper, {
    duration: 2.5,
    x: -350,
    ease: "power1.out"
  }), "enterE1+=0.5")
  
  tl.add(gsap.to(letters.e1, {
    duration: 2.5,
    x: 5,
    ease: "power1.out"
  }), "enterE1+=0.5")
  
  tl.addLabel("placeE1")
  tl.add(gsap.to(Bucket, {
    rotation: 0,
    duration: 0.4,
    ease: 'linear'
  }), "placeE1")
  
  tl.add(gsap.to(letters.e1, {
    y: -1,
    duration: 0.4,
    ease: 'linear'
  }), "placeE1")
  
  // Move to pickup m
  
  tl.add(gsap.to(Dumper, {
    duration: 2.5,
    x: -50,
    ease: "power1.inOut"
  }), "placeE1+=0.5")
  
  tl.addLabel("enterM")
  
  const Mx = destinations.m.getBBox().x + m.getBBox().width
  
  tl.add(gsap.to(Dumper, {
    duration: 3.5,
    x: -400,
    ease: "power1.inOut"
  }), "enterM+=0.5")
  
  tl.add(gsap.to(letters.m, {
    duration: 3.5,
    y: "-=2",
    x: -(letters.m.getBBox().x - Mx - 20),
    ease: "power1.inOut"
  }), "enterM+=0.5")
  
  // Move to roll in e
  tl.add(gsap.to(Dumper, {
    duration: 2.5,
    x: -250,
    ease: "power1.inOut"
  }), "enterM+=3.5")
  
  tl.addLabel("enterE2", "+=1")
  
  tl.add(gsap.to(letters.e2, {
    duration: 0.8,
    repeat: 3,
    rotation: -360,
    ease: "linear"
  }), "enterE2")
  
  tl.add(gsap.to(letters.e2, {
    duration: 4,
    x: destinations.e2.getBBox().x - letters.e2.getBBox().x - 8,
    ease: "power2.inOut"
  }), "enterE2")
  
  tl.add(gsap.to(Dumper, {
    duration: 3.75, // Manually sync
    x: -50,
    ease: "power2.inOut"
  }), "enterE2")
  
  // Animate final roll separately
  tl.add(gsap.to(letters.e2, {
    duration: 1,
    rotation: -360,
    ease: "power2.in"
  }), "enterE2+=3.8")
  
  tl.add(gsap.to(Dumper, {
    x: 0,
    duration: 4,
    ease: "power1.inOut"
  }), "enterE2+=4.5")
  
  return tl
}

var helicopterTimeline = () => {
  var tl = gsap.timeline({ repeat: 0 })
  tl.addLabel("lowerW")
  
  let destX = destinations.w.getBBox().x
  let destY = destinations.w.getBBox().y
  
  tl.add(gsap.to(Helicopter, {
    motionPath: {
      path: [{
        x: -(Helicopter.getBBox().x - (destX + 120)),
        y: -(Helicopter.getBBox().y - (destY - 220))
      }, {
        x: -(Helicopter.getBBox().x - (destX - 7)),
        y: -(Helicopter.getBBox().y - (destY - 76))
      }]
    },
    duration: 5,
    ease: "power1.inOut"
  }), "lowerW")
  
  tl.add(gsap.to(w, {
    motionPath: {
      path: [{
        x: -(Helicopter.getBBox().x - (destX + 120)),
        y: -(Helicopter.getBBox().y - (destY - 220))
      }, {
        x: -(w.getBBox().x - destX),
        y: -(w.getBBox().y - destY)
      }]
    },
    duration: 5,
    ease: "power1.inOut"
  }), "lowerW")
  
  tl.add(gsap.to(Helicopter, {
    delay: 1,
    motionPath: {
      path: [{
        x: -(Helicopter.getBBox().x - (destX + 40)),
        y: -(Helicopter.getBBox().y - (destY - 220))
      }, {
        x: 0,
        y: 0
      }]
    },
    duration: 4,
    ease: "power1.in"
  }))
  
  const oHeliOffsetX = 22
  const oHeliOffsetY = 78
  
  tl.add(gsap.to(Helicopter, {
    motionPath: {
      path: [{
        x: 0,
        y: 0
      }, {
        x: -(Helicopter.getBBox().x - (letters.o.getBBox().x - oHeliOffsetX)),
        y: -(Helicopter.getBBox().y - (letters.o.getBBox().y - oHeliOffsetY))
      }]
    },
    duration: 3,
    ease: "power1.out"
  }))
  
  destX = destinations.o.getBBox().x - 6 // Manually fix position
  destY = destinations.o.getBBox().y - 150
  
  tl.addLabel("moveO")
  
  tl.add(gsap.to(o, {
    motionPath: {
      path: [{
        x: -(o.getBBox().x - (destX + 120)),
        y: -(o.getBBox().y - destY)
      }, {
        x: -(o.getBBox().x - destX),
        y: -(o.getBBox().y - destY)
      }]
    },
    duration: 5,
    ease: "power1.inOut"
  }), "moveO")
  
  tl.add(gsap.to(Helicopter, {
    motionPath: {
      path: [{
        x: -(Helicopter.getBBox().x - (destX + 120 - oHeliOffsetX + 4)),
        y: -(Helicopter.getBBox().y - (destY - oHeliOffsetY))
      }, {
        x: -(Helicopter.getBBox().x - (destX - oHeliOffsetX + 4)),
        y: -(Helicopter.getBBox().y - (destY - oHeliOffsetY))
      }]
    },
    duration: 5,
    ease: "power1.inOut"
  }), "moveO")
  
  tl.addLabel("dropO")
  
  tl.add(gsap.to(o, {
    x: -(o.getBBox().x - destX),
    y: -(o.getBBox().y - (destinations.o.getBBox().y - 2)),
    duration: 1,
    ease: "bounce.out"
  }), "dropO+=0.25")
  
  // Pause and just hover around
  
  tl.addLabel("heliHover")
  
  tl.add(gsap.to(Helicopter, {
    rotation: -10,
    duration: 0.5,
    ease: "power1.inOut"
  }), "heliHover")
  
  tl.add(gsap.to(Helicopter, {
    x: "-=180",
    y: "-=40",
    duration: 2,
    ease: "power1.inOut"
  }), "heliHover+=0.2")
  
  tl.add(gsap.to(Helicopter, {
    rotation: 0,
    duration: 0.5,
    ease: "power1.inOut"
  }), "heliHover+=1.2")
  
  // Move back, still just hovering
  tl.add(gsap.to(Helicopter, {
    rotation: 10,
    duration: 0.5,
    ease: "power1.inOut"
  }), "heliHover+=3")
  
  tl.add(gsap.to(Helicopter, {
    x: "+=180",
    y: "-=30",
    duration: 2,
    ease: "power1.inOut"
  }), "heliHover+=3.2")
  
  tl.add(gsap.to(Helicopter, {
    rotation: 0,
    duration: 0.5,
    ease: "power1.inOut"
  }), "heliHover+=4.2")
  
  tl.add(gsap.to(Helicopter, {
    y: "-=100",
    opacity: "0",
    duration: 2,
    ease: "power1.inOut"
  }), "heliHover+=6")
  
  return tl
}

var craneTimeline = () => {
  var tl = gsap.timeline({ repeat: Infinity })
  tl.addLabel("enterS")
  
  const bindCraneCable = () => {
    const cable = getBBoxDiff(CraneCable)
    const hook = getBBoxDiff(CraneHook)
    
    let dx = hook.cx - cable.cx
    let dy = hook.cy - cable.y
      
    gsap.set(CraneCable, {
      x: `+=${dx}`,
      y: `+=${dy}`,
    })
  }
  
  const bindCraneLetter = (target) => {
    const cable = getBBoxDiff(CraneCable)
    const hook = getBBoxDiff(CraneHook)
    const letter = getBBoxDiff(target)
      
    let dx = hook.cx - letter.cx
    let dy = hook.cy - letter.y + cable.height - 7

    gsap.set(target, {
      x: `+=${dx}`,
      y: `+=${dy}`,
    })
  }
  
  tl.add(gsap.to(Crane, {
    x: -255,
    duration: 6,
    ease: "sine.inOut",
    onStart: function() {
      bindCraneCable()
      bindCraneLetter(letters.s)
    },
    onUpdate: function() {
      bindCraneCable()
      bindCraneLetter(letters.s)
    }
  }), "enterS")
  
  tl.add(gsap.to(CraneBoom, {
    rotation: -38.5,
    duration: 4,
    ease: "sine.inOut",
    onUpdate: function() {
      bindCraneCable()
      bindCraneLetter(letters.s)
    }
  }), "enterS+=7")
  
  tl.add(gsap.to(CraneBoom, {
    rotation: -20,
    duration: 4,
    ease: "sine.inOut",
    onUpdate: function() {
      bindCraneCable()
    }
  }))
  
  tl.add(gsap.to(Crane, {
    x: -76,
    duration: 5,
    ease: "sine.inOut"
  }), "enterS+=11")
  
  // After dumper has moved in m (enterM + 4), move it
  tl.addLabel("collectM", "enterM-=1")
  
  tl.add(gsap.to(CraneBoom, {
    rotation: -38.5,
    duration: 2,
    ease: "sine.inOut",
    onUpdate: function() {
      bindCraneCable()
    }
  }), "collectM")
  
  tl.add(gsap.to(CraneBoom, {
    rotation: -30,
    duration: 1.5,
    ease: "sine.inOut",
    onUpdate: function() {
      bindCraneCable()
      bindCraneLetter(letters.m)
    }
  }), "collectM+=2.25")
  
  tl.addLabel("moveM")
  
  tl.add(gsap.to(Crane, {
    x: -160,
    duration: 2,
    ease: "sine.inOut",
    onUpdate: function() {
      bindCraneLetter(letters.m)
    }
  }), "moveM")
  
  // Lower m into proper position
  tl.add(gsap.to(CraneBoom, {
    rotation: -38.5,
    duration: 1.5,
    ease: "sine.inOut",
    onUpdate: function() {
      // Bind cable to crane hook
      const cable = getBBoxDiff(CraneCable)
      const hook = getBBoxDiff(CraneHook)

      let dx = hook.cx - cable.cx
      let dy = hook.cy - cable.y

      gsap.set(CraneCable, {
        x: `+=${dx}`,
        y: `+=${dy}`,
      })
      
      // Bind letter to bottom of crane cable
      const letter = getBBoxDiff(letters.m)
      
      dx = hook.cx - letter.cx
      dy = hook.cy - letter.y + cable.height - 7
      
      gsap.set(letters.m, {
        x: `+=${dx}`,
        y: `+=${dy}`,
      })
    }
  }), "moveM+=1.5")
  
  // Crane exits scene
  
  tl.add(gsap.to(CraneBoom, {
    rotation: 0,
    duration: 5,
    ease: "sine.inOut",
    onUpdate: function() {
      // Bind cable to crane hook
      const cable = getBBoxDiff(CraneCable)
      const hook = getBBoxDiff(CraneHook)

      let dx = hook.cx - cable.cx
      let dy = hook.cy - cable.y

      gsap.set(CraneCable, {
        x: `+=${dx}`,
        y: `+=${dy}`,
      })
    }
  }), "moveM+=3")
  
  tl.add(gsap.to(Crane, {
    x: 0,
    duration: 5,
    ease: "sine.inOut"
  }), "moveM+=3")
  
  return tl

}

const showControls = () => {
  var tl = gsap.timeline({ repeat: 0 })
  tl.addLabel("showControls")
  
  tl.add(gsap.to(ReplyButton, {
    opacity: 1,
    duration: 0.5
  }), "showControls")
  
  tl.add(gsap.to(Deck, {
    opacity: 0,
    duration: 0.5
  }), "showControls")
  
  return tl
}

// Setup scene

gsap.set(A, { transformOrigin: "bottom left" })
gsap.set(Bucket, { transformOrigin: "top right" })
gsap.set(Helicopter, { transformOrigin: "bottom center" })
gsap.set(CraneBoom, { transformOrigin: "90% 90%" })
gsap.set(CraneCable, { transformOrigin: "0% 50%" })
gsap.set(e2, { transformOrigin: "50% 50%" })

var master = gsap.timeline({ repeat: 0 })
master.add(dumperTimeline(), 0)
master.add(helicopterTimeline(), 0)
master.add(craneTimeline(), 0)

master.add(showControls())

master.play()
