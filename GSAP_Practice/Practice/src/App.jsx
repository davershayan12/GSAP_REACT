import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'

function App() {
  useGSAP(()=>{
    gsap.to('#bluebox',{
      x:250,
      duration:2,
      repeat:-1,
      yoyo:true,
      ease:'power1.in'
    })
  },[])
  const timeline=gsap.timeline({repeat:-1,yoyo:true,repeatDelay:0})
  useGSAP(()=>{
    timeline.to("#redbox",{
      x:300,
      borderRadius:20,
      duration:2,
      ease:'back.inOut'

    })
  })
  useGSAP(()=>{
    timeline.to("#redbox",{
      x:600,
      borderRadius:0,
      duration:2,
      ease:'back.inOut'
      
    })
  })


  return (
    <>
    <div id="bluebox"></div>
    <button onClick={()=>{
      if(timeline.paused()){
        timeline.play();
      }
      else{
        timeline.pause();
      }
    }}> play/pause</button>
    <div id="redbox"></div>
    </>
  )
}

export default App
