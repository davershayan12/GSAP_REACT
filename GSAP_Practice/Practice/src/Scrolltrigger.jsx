import gsap from "gsap";
import { ScrollTrigger as ScrollTriggerPlugin } from "gsap/ScrollTrigger";
import "./App.css"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTriggerPlugin);
export const ScrollTrigger = () => {
  const scrollRef = useRef();
    useGSAP(()=>{
      const boxes =gsap.utils.toArray()
    })
  return <>
  <div>
    <div id="pinkbox"></div>
    <div id="orangebox"></div>
  </div>
  </>;
};
