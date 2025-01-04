var crsr = document.querySelector("#cursor");
var dam = document.querySelector("#cursor-blur");

// Move custom cursors based on mouse position
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    dam.style.left = (dets.x - 5) + "px";
    dam.style.top = (dets.y - 5) + "px";
});

/* Change navbar color and height on scroll */
gsap.to("#nav", {
    backgroundColor: "#333",
    height: "100px",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

/* Change main section background color on scroll */
gsap.to("#main", {
    backgroundColor: "#333",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -75%",
        scrub: 3
    }
});
