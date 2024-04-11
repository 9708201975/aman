let icon=document.querySelector(".icon");
let body=document.querySelector(".body");
body.style.display="none";
let Defect=document.querySelector(".Defect")
let welcome=document.querySelector("#welcome")
 let defect=document.querySelector("#defect")
 let menu=document.querySelector("#menu")
  menu.style.display="none"
 let search_icon=document.getElementById("search_icon")
 let search_bar=document.getElementById("search_bar")

 search_icon.addEventListener("click", ()=>{
    search_bar.style.display="block"
    search_icon.style.display="none"
 });
 search_icon.addEventListener("click", ()=>{
    search_bar.style.display="block"
    search_icon.style.display="none"
 });

 search_icon.addEventListener("dblclick", ()=>{
   search_bar.style.display="none"
   search_icon.style.display="block"
});


icon.addEventListener("click",()=>{
   body.style.display="flex"
   body.style.transtion="all 0.5s ease-in-out"
   icon.style.rotate="45deg"
   Defect.style.display="none"
   welcome.style.display="none"
   menu.style.display="block"
  
   
   // defect.innerText="menu"
   search_icon.style.display="none"
   
});
// icon.addEventListener('dblclick',()=>{
//      body.style.display="none"
//     icon.style.rotate="45deg"
// })
icon.addEventListener("dblclick", () => {
    body.style.display = "none";
    welcome.style.display="block";
    icon.style.rotate="-45deg"
    icon.style.transform = "rotate(45deg)"; // Resetting rotation
    Defect.style.display="block";
    menu.style.display="none";
});
let style=document.getElementById("Style");
style.addEventListener('click',()=>{
   body.style.display="none";
   menu.style.display="none";
   Defect.style.display="none";
  icon.style.rotate="45deg";


})
 let list_style =document.querySelector(".list_style");
let ul=document.createElement("ul");
let l1=document.createElement("li")
let l2=document.createElement("li")
let l3=document.createElement("li")
let l4=document.createElement("li")
let l5=document.createElement("li")
let l6=document.createElement("li")
ul.appendChild(l1)
l1.innerText ="Style"
ul.appendChild(l2)
l2.innerText ="create"
ul.appendChild(l3)
l3.innerText ="Print"
ul.appendChild(l4)
l4.innerText ="Upload"
ul.appendChild(l5)
l5.innerText ="Action"
console.log(ul)
list_style.appendChild(ul);
list_style.style.display="none"
style.addEventListener("click",()=>{
   list_style.style.display="inline"
   // icon.rotate="45deg"
})


let transition=document.querySelector(".transition")

let Transition=document.getElementById("Transition")
let lt1=document.createElement("li")
let lt2=document.createElement("li")
let lt3=document.createElement("li")
let ult=document.createElement("ul")
transition.style.display="none"
Transition.addEventListener("click",()=>{
   transition.style.display="block"
   lt1.innerText="RoutingOperationBreakdown";
   lt2.innerText="Create"
   lt3.innerText="Action"
   ult.appendChild(lt1)
   ult.appendChild(lt2)
   ult.appendChild(lt3)
   
   transition.appendChild(ult)
   menu.style.display="none"
   console.log(transition)
   body.style.display="none"
  
})

//! This is the master section and this is last section of body first section  i am leaving becouse of second last have _blank target and ladning page is also not same for second last section ok developer
let Operations=document.querySelector("#Operations")
let operation1=document.querySelector(".operation1");
let lo1=document.createElement("li")
let lo2=document.createElement("li")
let lo3=document.createElement("li")
let lo4=document.createElement("li")
let ulo=document.createElement("ul")


Operations.addEventListener("click",()=>{
   lo1.innerText="Operations";
lo2.innerText="Add";
lo3.innerText="Edit";
lo4.innerText="Action";
ulo.appendChild(lo1);
ulo.appendChild(lo2);
ulo.appendChild(lo3);
ulo.appendChild(lo4);
   body.style.display="none";
   menu.style.display="none";
   operation1.appendChild(ulo)
   ulo.style.listStyleType="none";
   ulo.style.display="flex"
   ulo.style.gap="35%"
   ulo.style.fontSize="22px"

   
})
let Defect_grp=document.querySelector("#Defect_grp")
let defect_grp=document.querySelector(".defect_grp")
 let ld1=document.createElement("li")
 let ld2=document.createElement("li")
 let ld3=document.createElement("li")
 let uld1=document.createElement("ul")
 Defect_grp.addEventListener("click",()=>{
  
   body.style.display="none";
   menu.style.display="none";
   ld1.innerText="DefectGroup"
   ld2.innerText="Create"
   ld3.innerText="Action"
   uld1.appendChild(ld1)
   uld1.appendChild(ld2)
   uld1.appendChild(ld3)
   defect_grp.appendChild(uld1)
   uld1.style.listStyleType="none";
   uld1.style.display="flex"
   uld1.style.gap="35%"
   uld1.style.fontSize="26px"
   


 })

icon.addEventListener("click",()=>{


   list_style.style.display="none"
  transition.style.display="none"
  ulo.style.display="none"
  uld1.style.display="none"
  
 
   
})


let cross_icon=document.getElementsByClassName("cross-icon");
let container=document.getElementsByClassName("container");
let icon_bar=document.getElementsByClassName("icon-bar");
let icon_1=document.getElementsByClassName("icon")
 container.style.display="none";
icon_bar.addEventListener("click",()=>{
   container.style.display="block"
})
cross-icon.addEventListener("click",()=>{
        container.style.display="none"
})
