var count = 0;
var n = 1;
var numberOfSelectedSeat = document.getElementById("numberOfSelected");
var totalPrice = document.getElementById("totalPrice");

function operation(n) {
  if (document.getElementById(n).style.backgroundColor == 'red') {
    document.getElementById(n).style.backgroundColor = 'white';
    count -= 1;
  } else {
    document.getElementById(n).style.backgroundColor = 'red';
    count += 1;
    numberOfSelectedSeat.innerHTML = count;

  }
  numberOfSelectedSeat.innerHTML = "  " + count;
  totalPrice.innerHTML = "  " + count * 25 + " TL";
  //alert(count) ;
}

function accept() {
  for (n = 1; n++; n < 72) {
    var a = "btnSeat"+n;
    if(n!=36){
      if (document.getElementById(a).style.backgroundColor == 'red') {
        document.getElementById(a).style.backgroundColor = 'orange';
        document.getElementById(a).disabled=true;
        count = 0;
        numberOfSelectedSeat.innerHTML = count;
        totalPrice.innerHTML = "  " + count * 25 + " TL";
        
      }
    }
    
  }
}

function reject() {
  for (n = 1; n++; n < 72) {
    var a = "btnSeat"+n;
    if(n!=36){
      if (document.getElementById(a).style.backgroundColor == 'red') {
        document.getElementById(a).style.backgroundColor = 'white';
        
        count = 0;
        numberOfSelectedSeat.innerHTML = count;
        totalPrice.innerHTML = "  " + count * 25 + " TL";
        
      }
    }
    
  }

}