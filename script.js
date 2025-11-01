gsap.registerPlugin(ScrollTrigger);


function lokomotiveJS(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  
  // --- PURPLE/GREEN PANEL ---



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
function navbar_animation() {
  let menuIcon = document.querySelector(".menu_bar");
  let isopen = false;
  let navbartimeline = gsap.timeline({ paused: true });

  gsap.to("nav .nav_part1 .inside", {
    y: "-55%",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      scrub: 1,
      start: "top -10%",
      end: "top -9%",
      // markers: true,
    },
  });
  gsap.to(".hide_div ", {
    y: "-100%",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      scrub: 1,
      start: "top -10%",
      end: "top -9%",
      // markers: true,
    },
  });
  navbartimeline
    .to("nav .nav_part1 h1",{
      color: "white",
    })
    .to("#parent_nav", {
      duration: 0.2,
      top: 0,
    })
    .to("nav .nav_part2", {
      color: "white",
    })
    .from(
      ".right_div h4",
      {
        y: "20",
        opacity: 0,
        stagger: 0.07,
        duration: 0.5,
      },
      "<"
    )
    .from(".left_div_parts", {
      y: 10,
      opacity: 0,
      x: 10,
      delay: -0.5,
      stagger: -0.1,
      duration: 0.2,
    });

  menuIcon.addEventListener("click", function () {
    if (!isopen) {
      isopen = true;
      gsap.to(".bar:nth-child(1)", {
        //   color: "white",
        y: -3,
        duration: 0.1,
        x: 0,
        //   transformOrigin: "center center",
        rotate: "45deg",
      });
      gsap.to(".bar:nth-child(2)", {
        //   color: "white",
        duration: 0.1,
        y: 3,
        x: -3,
        //   transformOrigin: "center center",
        rotate: "-45deg",
      });
      navbartimeline.play();
    } else {
      gsap.to(".bar:nth-child(1)", {
        y: 0,
        duration: 0.1,
        delay: 0.2,
        x: 0,
        trasformOrigin: "center center",
        rotate: "0deg",
      });
      gsap.to(".bar:nth-child(2)", {
        delay: 0.2,
        duration: 0.1,
        y: 0,
        x: 0,
        trasformOrigin: "center center",
        rotate: "0deg",
      });
      navbartimeline.reverse();
      isopen = false;
    }
  });
}


function _3rdPAGE_scroll_anime(){
  gsap.to(".parent_text_content", {
    y: 300,
    scrollTrigger: {
      trigger: ".page3_next_part",
      scroller: "#main",
      start: "top 74%", // when the top of the trigger hits the top of the viewport
      // end: "bottom 20%", 
      // markers: true,
      // pin: true, // pin the trigger element while active
      scrub: 1,
    },
  });
}

function page4_animation() {
  let page4_part2 = document.querySelector("#page4 .part2");

  page4_part2.addEventListener("mousemove", function (dets) {
    console.log("hello");
    gsap.to("#page4 .part2 .overhead", {
      scale: 1.5,
      x: dets.x - 100,
      y: dets.y -50 ,
    });
  });
  page4_part2.addEventListener("mouseleave", function (dets) {
    console.log("hello");
    gsap.to("#page4 .part2 .overhead", {
      scale: 0,
    });
  });
}

lokomotiveJS();
navbar_animation();
_3rdPAGE_scroll_anime();
page4_animation();