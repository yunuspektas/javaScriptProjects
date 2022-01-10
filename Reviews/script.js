let avatar = document.getElementsByClassName("avatar");
var nameSurname = document.getElementsByClassName("nameSurname");
var job = document.getElementsByClassName("job");
var info = document.getElementsByClassName("info");



function goBack() {
    
    for (let i = 0; i < person.length; i++) {

        if (nameSurname[0].textContent == person[i].nameSurname) {
            avatar[0].style.backgroundImage = person[i - 1].avatar;
            nameSurname[0].innerHTML = person[i - 1].nameSurname;
            job[0].innerHTML = person[i - 1].job;
            info[0].innerHTML = person[i - 1].info;
            break;
        }
    }

}

function goForward() {
   
    for (let i = 0; i < person.length; i++) {

        if (nameSurname[0].textContent == person[i].nameSurname) {
            avatar[0].style.backgroundImage = person[i + 1].avatar;
            nameSurname[0].innerHTML = person[i + 1].nameSurname;
            job[0].innerHTML = person[i + 1].job;
            info[0].innerHTML = person[i + 1].info;
            break;
        }
    }



}

function supriseMe() {
    //alert("Suprise Me");
    var number = Math.floor(Math.random() * (person.length + 1));
    avatar[0].style.backgroundImage = person[number].avatar;
    nameSurname[0].innerHTML = person[number].nameSurname;
    job[0].innerHTML = person[number].job;
    info[0].innerHTML = person[number].info;

}