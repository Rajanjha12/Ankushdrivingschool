var crsr=document.querySelector("#cursor")
var dam=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
     crsr.style.left=dets.x+"px"/*dets ko apne taraf sa liya ya use esliya jab mouse ko move karenga left and top ma toh cursor mouse x and y movement karvata toh toh esliya aisa kiya*/ 
     crsr.style.top=dets.y+"px"
     dam.style.left=dets.x-5+"px"/* blur cursor ko cursor ka sath ma chalena kaliya -150 kiya ha*/
     dam.style.top=dets.y-5+"px"
      
}

)
 


/* gsap ka use color change when scroll down*/
gsap.to("#nav",{
    backgroundColor:"#333",/* color change ho jyga jab scrolling*/
    height:"100px",
    duration:1.5,
    scrollTrigger:
    {
        trigger:"#nav",/* ham nav bar to body direction then nav baar */
        scroller:"body",
        //markers:true,// iska kaam tha batna used every where when its used //
        start:"top -10%",/* use esliya kiya ja raha jab ham scroll karenga nav ka color change hoga its marker*/
        end:"top -11%",
        scrub:1/* iska use isliya kiya jab vapas aaya toh same color ho jya jo phela tha nav bar ka motion kaliya true rakho  ya integer value for speed comeback to navbar show color spped  integer value 1 to 5*/

    }    
})
/* color change when scroll down whe go to main */
gsap.to("#main",{
     backgroundColor:"#333",
     scrollTrigger:
     {
        trigger:"#main",/* main to body*/
        scroller:"body",
        start:"top -25%",/* starting color change*/
        end:"top -75",/* ending change color*/
        scrub:3
     }

})
