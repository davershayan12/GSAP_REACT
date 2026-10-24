import { useGsap } from "@gsap/react"
import gsap from "gsap"
import './App.css'

function App() {
  useGsap(() => {
    gsap.to(".box", {
      x: 300,
      rotation: 360,
      backgroundColor: "orange",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
  }, [])

  return (
    <div className="box"></div>
  )
}

export default App
