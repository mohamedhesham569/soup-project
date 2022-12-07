var down=document.querySelectorAll(".fa-solid.fa-chevron-down");
down.forEach(element=>{
    element.onclick=e=>{
        if(e.target.className="fa-solid fa-chevron-down"){
            e.target.classList.add("down");
        }
    }
    });
down.forEach(element=>{
    element.onclick=e=>{
        if(e.target.className="fa-solid fa-chevron-down down"){
            e.target.classList.remove("down");
        }
    }});
