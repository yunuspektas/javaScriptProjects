var parentDiv = document.querySelector('.noteList');

function addNote() {

    var not1 = document.getElementById("txt").value;
    var note = document.createElement("div");
    var btn = document.createElement("button");
    var span = document.createElement("span");

    note.className = "note";
    span.className = "spanNot";
    span.innerHTML = not1;    
    btn.className = "delete";
    btn.innerText = "x";
    btn.onclick = function () {
        btn.parentNode.parentNode.removeChild(btn.parentNode);
    };

    parentDiv.appendChild(note);
    note.appendChild(span);
    note.appendChild(btn);
    document.getElementById("txt").value = " ";

}

