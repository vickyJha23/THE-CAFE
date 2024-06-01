console.log("har har mahadev");
const btns = document.querySelectorAll(".row a");
btns.forEach((btn) => {
      btn.addEventListener("click", function(e){
            let active = document.querySelector(".active");
            active.className = "";
             e.target.classList.add("active");
             let id = e.target.id.toUpperCase();
            //   console.log(id);
              displayMenu(id);          
      });
});

function displayMenu(id){
    let menu = document.querySelectorAll(".menu");
    for(let i  = 0; i < menu.length; i++){
         menu[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}