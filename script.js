const splitTextInstances = [];

document.fonts.ready.then(() => {

  const split1 = new SplitText("#heading1", { type: "chars" });
  splitTextInstances.push(split1);

  const split2 = new SplitText("#page4-heading-1", { type: "chars" });
  splitTextInstances.push(split2);


  tl.from(split1.chars, {
    opacity: 0,
    skewY: 10,
    y: 60,
    stagger: 0.02,
    ease: "slow.out"
  }, "anim");

  gsap.from(split2.chars, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 0.8,
    }
  });
});

window.addEventListener("resize", () => {
  splitTextInstances.forEach((split, index) => {
    split.revert();
    const newSplit = new SplitText(split.elements[0], { type: split.vars.type });
    splitTextInstances[index] = newSplit;
  });
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

Shery.mouseFollower({
    skew: false,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("#left-nav, #right-nav a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.8,
    strength: 2,
    ease: 0.1,
    scale: 1.4
});

const btn = document.querySelector("#btn");

btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
        borderRadius: "clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);",
        ease: "Expo.out",
        duration: 1
    })
});
btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
        borderRadius: "",
        ease: "Expo.out",
        duration: 1
    })
});

const btn2 = document.querySelector("#page3-btn");

btn2.addEventListener("mouseenter", () => {
    gsap.to(btn2, {
        borderRadius: "clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);",
        ease: "Expo.out",
        duration: 1
    })
});
btn2.addEventListener("mouseleave", () => {
    gsap.to(btn2, {
        borderRadius: "",
        ease: "Expo.out",
        duration: 1
    })
});

gsap.to("#page1", {
    y: "25%",
    border: "none",
    scale: 0.85,
    skewY: -10,
    rotate: "12deg",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top top",
        end: "bottom 0%",
        scrub: 0.2
    }
});

gsap.to("#heading5-b",{
    width: "100%",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 30%",
        end: "top 120%",
        scrub: 3
    }
});
gsap.to("#heading6-b",{
    width: "100%",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 30%",
        end: "top 150%",
        scrub: 3
    }
});
gsap.from("#heading7",{
    width: "0%",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 20%",
        end: "top 180%",
        scrub: 3.5
    }
});
gsap.to("#heading8-b",{
    width: "100%",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 10%",
        end: "top 150%",
        scrub: 3
    }
});
gsap.to("#heading9-b",{
    width: "100%",
    ease: "scale.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 5%",
        end: "top 150%",
        scrub: 3
    }
});

const tl = gsap.timeline();
const video = document.querySelector("#video-container video");

tl.from("#heading2",{
    opacity: 0,
    ease: "slow.out",
    y: 60,
},"anim");
tl.from("#heading3",{
    opacity: 0,
    ease: "slow.out",
    y: 20,
    skewY: -20
},"anim");
tl.from("#heading4",{
    opacity: 0,
    ease: "slow.out",
    y: 20,
    skewY: -10
},"anim");
tl.from("#btn",{
    opacity: 0,
    ease: "slow.out",
    y: 20,
    skewY: -10
},"anim");
tl.pause();

video.addEventListener("ended", () => {
    tl.play();
});

gsap.from("#page4-heading-2",{
    width: "0%",
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
    }
});

gsap.from("#page5-heading-3",{
    width: "0%",
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 40%",
        end: "top -40%",
        scrub: 2.5
    }
});
gsap.from("#page5-heading-4",{
    width: "0%",
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 30%",
        end: "top -70%",
        scrub: 2.5
    }
});
gsap.from("#page5-heading-5",{
    width: "0%",
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 50%",
        end: "top -70%",
        scrub: 2.5
    }
});
gsap.from("#page5-heading-6",{
    width: "0%",
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 80%",
        end: "top -70%",
        scrub: 2.5
    }
});

gsap.to("#clip-container",{
    ease: "power2.out",
    clipPath: "circle(75% at 50% 50%)",
    scrollTrigger: {
        trigger: "#clip-container",
        scroller: "body",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 3,
    }
});

document.getElementById("can-container-1").addEventListener("mouseenter",() => {
    gsap.to("#can-1",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#brown-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-1").addEventListener("mouseleave",() => {
    gsap.to("#can-1",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#brown-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});
document.getElementById("can-container-2").addEventListener("mouseenter",() => {
    gsap.to("#can-2",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#pink-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-2").addEventListener("mouseleave",() => {
    gsap.to("#can-2",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#pink-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});
document.getElementById("can-container-3").addEventListener("mouseenter",() => {
    gsap.to("#can-3",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#blue-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-3").addEventListener("mouseleave",() => {
    gsap.to("#can-3",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#blue-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});
document.getElementById("can-container-4").addEventListener("mouseenter",() => {
    gsap.to("#can-4",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#orange-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-4").addEventListener("mouseleave",() => {
    gsap.to("#can-4",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#orange-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});
document.getElementById("can-container-5").addEventListener("mouseenter",() => {
    gsap.to("#can-5",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#biege-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-5").addEventListener("mouseleave",() => {
    gsap.to("#can-5",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#biege-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});
document.getElementById("can-container-6").addEventListener("mouseenter",() => {
    gsap.to("#can-6",{
        rotate: "7deg",
        ease: "power2.out"
    })
    gsap.to("#black-crumbs",{
        opacity: 1,
        y: 20,
        ease: "power2.out"
    })
});
document.getElementById("can-container-6").addEventListener("mouseleave",() => {
    gsap.to("#can-6",{
        rotate: "0deg",
        ease: "power2.out"
    })
    gsap.to("#black-crumbs",{
        opacity: 0,
        y: "",
        ease: "power2.out"
    })
});

const tl2 = gsap.timeline({ paused: true });

tl2.set("#overlay", { 
  visibility: "visible", 
  clipPath: "inset(100% 0% 0% 0%)", 
  webkitClipPath: "inset(100% 0% 0% 0%)" 
});

tl2.to("#overlay", {
  clipPath: "inset(0% 0% 0% 0%)",
  webkitClipPath: "inset(0% 0% 0% 0%)",
  duration: 1.5,
  ease: "power3.out"
}, "anim");

tl2.to("#right-nav a", {
  opacity: 0,
  ease: "power3.out"
}, "anim");

tl2.from("#hover-preview", {
  top: "100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "anim+=0.4");

tl2.from("#navbar", {
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
}, "anim+=0.8");

const openBtn = document.querySelector("#right-nav a");

openBtn.addEventListener("click", () => {
    tl2.play();
});

const tl3 = gsap.timeline({ paused: true });

tl3.to("#navbar", {
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
},"bye");

tl3.to("#social-media a", {
  opacity: 0,
  ease: "power3.out"
},"bye");

tl3.to("#overlay-img", {
  opacity: 0,
  ease: "power3.out"
},"bye");

tl3.to("#close-icon", {
  opacity: 0,
  ease: "power3.out"
},"bye");

tl3.to("#hover-preview", {
  opacity: 0,
  duration: 0.4,
  ease: "power2.inOut"
}, "bye");

tl3.to("#overlay", {
  clipPath: "inset(100% 0% 0% 0%)",
  webkitClipPath: "inset(100% 0% 0% 0%)",
  duration: 1.5,
  ease: "power3.inOut"
}, "bye");

tl3.set("#overlay", { visibility: "hidden" });

tl3.to("#right-nav a", {
  opacity: 1,
  ease: "power2.out"
}, "bye");

tl3.eventCallback("onComplete", () => {
  tl3.pause().seek(0);
  tl2.pause().seek(0);
});

const closeBtn = document.querySelector("#close-icon i");

closeBtn.addEventListener("click", () => {
    tl3.play();
});

const links = document.querySelectorAll("#navbar a");

links.forEach(link => {
  const originalText = link.textContent;

  if (!link.querySelector("span")) {
    link.innerHTML = `<span>${originalText}</span>`;
  }

  const span = link.querySelector("span");

  link.addEventListener("mouseenter", () => {
    gsap.to(span, {
      duration: 1,
      scrambleText: {
        text: originalText,
        chars: "XO",
        revealDelay: 0.5,
        speed: 0.5
      }
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(span, {
      duration: 1,
      scrambleText: {
        text: originalText,
        chars: "",
        revealDelay: 0.5,
        speed: 0.5
      }
    });
  });
});

const hoverLinks = document.querySelectorAll("#navbar a");
const hoverImg = document.getElementById("hover-img");

hoverLinks.forEach(link => {
  const imgSrc = link.getAttribute("data-image");

  link.addEventListener("mouseenter", () => {
    hoverImg.src = imgSrc;
    gsap.to(hoverImg, {
      opacity: 1,
      duration: 0.5,
      ease: "Expo.inOut"
    })
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(hoverImg, {
      opacity: 0,
      duration: 0.5,
      ease: "Expo.inOut"
    });
  });
});

const slidingVideo = document.querySelector("#page7-video video");
slidingVideo.pause();
slidingVideo.loop = false;

let played = false;

ScrollTrigger.create({
  trigger: "#page7",
  start: "top 40%",
  onEnter: () => {
    if (!played) {
      slidingVideo.play();
      played = true;
    }
  }
});

const loaderCounter = document.getElementById("loader-counter");
const loader = document.getElementById("loader");

let count = { val: 0 };

gsap.to(count, {
    val: 100,
    duration: 1.8,
    ease: "power1.inOut",
    onUpdate: () => {
      loaderCounter.textContent = `${Math.round(count.val)}%`;
    },
    onComplete: () => {
      gsap.to(loader, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          loader.style.display = "none";
        }
      });
    }
});