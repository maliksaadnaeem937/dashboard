let button =document.querySelector('#menu_bar');
let side=document.querySelector('aside');
let closeBtn=document.querySelector(".close")
let light=document.querySelector(".light");
let dark=document.querySelector(".dark");
let body=document.querySelector('body');
let anchors=document.querySelectorAll(".side-bar a")
console.log(dark)
console.log(light)

button.addEventListener("click",
()=>{


  side.style.display="block";
  side.style.paddingBlock="0"
  closeBtn.style.display="inline";
})
closeBtn.addEventListener("click",
()=>{
  side.style.display="none";
  closeBtn.style.display="none";

})




light.addEventListener("click",
()=>{

  light.classList.add("active");
  body.style.backgroundColor="white";
  body.style.color="black";
  if(dark.classList.contains('active')) dark.classList.remove('active');
})
dark.addEventListener("click",
()=>{

  dark.classList.add("active");
  body.style.backgroundColor="black";
  body.style.color="blue";
  if(light.classList.contains('active')) light.classList.remove('active');
})
anchors.forEach((element) => {
  element.addEventListener("click", (evt) => {
      // Remove "active" class from all elements
      anchors.forEach((el) => {
          el.classList.remove("active");
      });
      
      // Add "active" class to the clicked element
      element.classList.add("active");
  });
});
