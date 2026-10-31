import { ScrollTrigger } from "./Scrolltrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

// Declare the timeline outside the component so it persists across re-renders
const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });

function App() {
  useGSAP(() => {
    // Blue box animation
    gsap.to("#bluebox", {
      x: 250,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.in",
    });

    // Red box timeline animations
    timeline.to(
      "#redbox",
      {
        x: 300,
        borderRadius: 20,
        duration: 2,
        ease: "back.inOut",
      },
      [],
    );

    timeline.to("#redbox", {
      x: 600,
      borderRadius: 0,
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  useGSAP(() => {
    gsap.to(".staggerbox", {
      y: 2,
      x: 50,

      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.5,
        axis: "x",
        grid: [2, 1],
        ease: "power.in",
        from: "center",
      },
    });
  });

  return (
    <>
      <div id="divbox">
        <div id="bluebox"></div>

        <button onClick={() => timeline.paused(!timeline.paused())}>
          play/pause
        </button>

        <div id="redbox"></div>
        <div id="staggerboxes">
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
          <div className="staggerbox"></div>
        </div>
      </div>

      <ScrollTrigger />
      <div id="nextdiv"></div>
    </>
  );
}

export default App;
