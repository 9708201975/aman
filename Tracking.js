
let icon=document.querySelector(".icon")
let container=document.querySelector(".container")
let cross_icon=document.querySelector(".cross-icon")
container.style.display="none"
let list_grp=document.querySelector(".list-group");

icon.addEventListener("click",()=>{
    container.style.display="block"
    icon.style.rotate="45deg"
    list_grp.style.display="none"
})
cross_icon.addEventListener("click",()=>{
    container.style.display="none"
    icon.style.rotate="90deg"
    list_grp.style.display="block"
})




let down_icon = document.querySelector(".work-dwon-angle");
let work=document.querySelector(".work")

let work_click=document.querySelector(".work_hover");
down_icon.addEventListener("click",()=>{
work_click.style.display="block";
// work.style.display="none";


})
down_icon.addEventListener("dblclick",()=>{
work_click.style.display="none";
})
let h1=document.querySelector("#h1");
let h2=document.querySelector("#h2");
let h3=document.querySelector("#h3");
let h4=document.querySelector("#h4");
let process=document.querySelector("#process");
let hel=document.querySelector("#hel");

h1.addEventListener("click",()=>{
h4.innerText = h1.innerText;
process.innerText="STITCHING";
work_click.style.display="none";
})
h2.addEventListener("click",()=>{
h4.innerText = h2.innerText;
process.innerText="STITCHING";
work_click.style.display="none";
})
h3.addEventListener("click",()=>{
h4.innerText = h3.innerText;
process.innerText="FINISHING";
work_click.style.display="none";
})
let work_center=document.querySelector(".work_center")
let  base_application=document.querySelector(".base_application");
let Operation_hover2=document.querySelector(".Operation_hover2");
let hw1=document.querySelector("#hw1");
let hw2=document.querySelector("#hw2");
let hw3=document.querySelector("#hw3")

base_application.addEventListener("click",()=>{
     
 Operation_hover2.style.display="block";

         work_center.style.display="none";
})
hw1.addEventListener("click",()=>{
 hw3.innerText=hw1.innerText;
 Operation_hover2.style.display="none";
 work_center.style.display="block";
})
hw2.addEventListener("click",()=>{
 hw3.innerText=hw2.innerText;
 Operation_hover2.style.display="none";
 work_center.style.display="block";
})
// this secetion is for text
let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");
let d=document.querySelector("#d");
let e=document.querySelector("#e");
let f=document.querySelector("#f");
let g=document.querySelector("#g");
let h=document.querySelector("#h");
let a1=document.querySelector("#a");
let b1=document.querySelector("#b");
let c1=document.querySelector("#c");
let d1=document.querySelector("#d");
let e1=document.querySelector("#e");
let f1=document.querySelector("#f");
let g1=document.querySelector("#g");
let as=document.querySelector("#as");
let bs=document.querySelector("#bs");
let cs=document.querySelector("#cs");
let ds=document.querySelector("#ds");
let es=document.querySelector("#es");
let fs=document.querySelector("#fs");
let gs=document.querySelector("#gs");
let hs=document.querySelector("#hs");
let imagebox=document.querySelector(".imagebox");
// imagebox.style.display="none"
let imagestyle=document.querySelector("#imagestyle");
let cheker_list=document.querySelector(".cheker-list")
let style_list=document.querySelector(".style-list")
let checker=document.querySelector(".checker");

let  checker2=document.querySelector(".checker2");
let ch5=document.querySelector(".ch5")

checker2.addEventListener("click",()=>{
style_list.style.display="block"
})

checker.addEventListener("click",()=>{
 cheker_list.style.display="block"
 
})
as.addEventListener("click",()=>{
    checker2.innerText=as.innerText;
     imagestyle.innerText="white"
    style_list.style.display="none"
    imagebox.style.display="block";
   })
bs.addEventListener("click",()=>{
 checker2.innerText=bs.innerText;
 style_list.style.display="none"
 imagestyle.innerText="IdyllicWoodsLONDON FOG Print (--)"
 imagebox.style.display="block";
})
cs.addEventListener("click",()=>{
 checker2.innerText=innerText;
 style_list.style.display="none"
 imagestyle.innerText="FEDERAL BLUE (--)"
 imagebox.style.display="block";

})
ds.addEventListener("click",()=>{
 checker2.innerText=ds.innerText;
 style_list.style.display="none"
 imagestyle.innerText="FEDERAL BLUE (--)"
 imagebox.style.display="block";
})
es.addEventListener("click",()=>{
 checker2.innerText=es.innerText;
 style_list.style.display="none"
 imagestyle.innerText="Cavier (--)"
 imagebox.style.display="block";
})
fs.addEventListener("click",()=>{
 checker2.innerText=fs.innerText;
 style_list.style.display="none"
 imagestyle.innerText="RED CHECKS(1001) (--)"
 imagebox.style.display="block";
})
gs.addEventListener("click",()=>{
    checker2.innerText=gs.innerText;
    style_list.style.display="none"
    imagestyle.innerText="WHITE (3)"
    imagebox.style.display="block";
   })
   hs.addEventListener("click",()=>{
    checker2.innerText=hs.innerText;
    cancelstyle_list.style.display="none"
    imagestyle.innerText="WHITE (3)"
    imagebox.style.display="block";
   })
a.addEventListener("click",()=>{
 checker.innerText="3100590";
 cheker_list.style.display="none"
})

b.addEventListener("click",()=>{
 checker.innerText="3100592";
 cheker_list.style.display="none"
})
c.addEventListener("click",()=>{
 checker.innerText="3100598";
 cheker_list.style.display="none"
})
d.addEventListener("click",()=>{
 checker.innerText="3100595";
 cheker_list.style.display="none"
})
e.addEventListener("click",()=>{
 checker.innerText="3100592";
 cheker_list.style.display="none"
})
f.addEventListener("click",()=>{
 checker.innerText="3100599";
 cheker_list.style.display="none"
})
g.addEventListener("click",()=>{
    checker.innerText="3100592";
    cheker_list.style.display="none"
   })
   h.addEventListener("click",()=>{
    checker.innerText="3100592";
    cheker_list.style.display="none"
   })
let Tracker=document.querySelector(".Tracker");
let trackerul=document.querySelector("trackerul");

Tracker.addEventListener("click",()=>{
 trackerul.style.display="none"
})
// let leftangle=document.querySelector("fa-angle-left");

let po5=document.querySelector(".po5");
let po6=document.querySelector(".po6");
let po=document.querySelector(".po");
// checker.addEventListener("click",()=>{
    
//     po.style.display="block"
//    })
  
let po7=document.querySelector(".po7");
let leftangle=document.querySelector(".leftangle");
let sidebar=document.querySelector(".first");
let po9=document.querySelector("#po9");
po5.addEventListener("click",()=>{
    po.style.display="block";
 po9.innerText="PO#"
 list_grp.style.display="none"
 
   })
po6.addEventListener("click",()=>{
 po.style.display="block";
 po9.innerText="po completition status"
 list_grp.style.display="none"
})
po7.addEventListener("click",()=>{
 po.style.display="block";
 po9.innerText="Style select"
 list_grp.style.display="none"
})
leftangle.addEventListener("click",()=>{

po.style.display="none";
sidebar.style.display="block";
list_grp.style.display="block"
})





let first=document.querySelector(".first")
let Roving=document.querySelector(".Roving");
let Defect=document.querySelector(".Defect");

let History=document.querySelector(".history");
History.addEventListener("click",()=>{
    list_grp.style.display="none"
    Roving.style.width="1390px"
})
Defect.addEventListener("click",()=>{
    list_grp.style.display="none"
    Roving.style.width="1390px"
})
let submit=document.querySelector(".Submit");
submit.addEventListener("click",()=>{
    list_grp.style.display="block"
    Roving.style.width="1100px"
    
})

let cancel=document.getElementById("cancel");
let allstyle=document.querySelector(".allstl");
let box=document.querySelector(".box");
   cancel.addEventListener("click",()=>{
    allstyle.style.display="none";
})
box.addEventListener("click",()=>{
    allstyle.style.display="none";
})



po5.addEventListener("click",()=>{
    po.style.display="block";
   list_grp.style.display="none"
    po9.innerText="PO#"
    allstyle.style.display="none";
   })
   