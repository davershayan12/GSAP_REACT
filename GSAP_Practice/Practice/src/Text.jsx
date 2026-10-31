import { useGSAP } from "@gsap/react"

export const Text=()=>{
useGSAP(()=>{
    gsap.to('#text',{
        opacity:1,
        y:0
    })
},[])
    return<>
    <div>
        <h1 id="text">hello brother</h1>
        </div></>
}