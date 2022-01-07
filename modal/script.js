let btnModalGiris   = document.getElementById("btnModal");
let modal           = document.getElementById("modal");
let enter           = document.getElementById("btnUserEntrance");

btnModalGiris.addEventListener("click", () => {
    modal.style.display = "block";
})

enter.addEventListener("click", ()=>{
    modal.style.display = "none";
})