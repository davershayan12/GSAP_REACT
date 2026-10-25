import gsap from "gsap";
import "./App.css"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const ScrollTrigger = () => {
  const scrollRef = useRef();
    useGSAP(()=>{

    })
  return <>
  <div>
    <div id="pinkbox"></div>
    <div id="orangebox"></div>
  </div>
  </>;
};
