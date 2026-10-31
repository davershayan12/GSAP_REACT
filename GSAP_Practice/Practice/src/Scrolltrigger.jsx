import gsap from "gsap";
import { ScrollTrigger as ScrollTriggerPlugin } from "gsap/ScrollTrigger";
import "./App.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTriggerPlugin);
export const ScrollTrigger = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150*(boxes.indexOf(box)+5),
        rotation: 360,
        borderRadius: 20,
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          markers: true,
          start: "bottom bottom",
          end: "top 20%",
          scrub: 2,
        },
      });
    }, {scope:scrollRef});
  });
  return (
    <>
      <div id="scroll" ref={scrollRef}>
        <div id="pinkbox"></div>
        <div id="orangebox"></div>
      </div>
    </>
  );
};
