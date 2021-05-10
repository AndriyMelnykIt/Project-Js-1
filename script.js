let months = document.getElementsByClassName("month");
let j;

function listVies() {
    for (let j = 0; j < months.length; j++) {
        months[j].style.width = "100%";
    }
}function gridView() {
    for (let j = 0; j < months.length; j++) {
        months[j].style.width = "50%";
    }
}
let container = document.getElementById("btnContainer");
let btns = container.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (){
        let current = document.getElementsByClassName("active")
        current[0].className=current[0].className.replace("active", "");
        this.className +=" active";
    })
    
}