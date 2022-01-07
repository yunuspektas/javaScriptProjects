
var numberOne   = 0;
var numberTwo   = 0;
var result      = 0;
var operant     = null;
var num0        = document.getElementById('num0');
var num1        = document.getElementById('num1');
var num2        = document.getElementById('num2');
var num3        = document.getElementById('num3');
var num4        = document.getElementById('num4');
var num5        = document.getElementById('num5');
var num6        = document.getElementById('num6');
var num7        = document.getElementById('num7');
var num8        = document.getElementById('num8');
var num9        = document.getElementById('num9');
var plus        = document.getElementById('plus');
var minus       = document.getElementById('minus');
var divide      = document.getElementById('divide');
var multiple    = document.getElementById('multiple');
var clear       = document.getElementById('clear');
var screen      = document.getElementById('input');
var equal       = document.getElementById('equal');
var dot         = document.getElementById('dot');



clear.addEventListener('click', function(){
    screen.value= 0;
    numberOne=0;
    numberTwo=0;
    operant=null;
});

num0.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +0
    }else screen.value=0;
});
num1.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +1
    }else screen.value=1;
});
num2.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +2
    }else screen.value=2;
});
num3.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +3
    }else screen.value=3;
});
num4.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +4
    }else screen.value=4;
});
num5.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +5
    }else screen.value=5;
});
num6.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +6
    }else screen.value=6;
});
num7.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +7
    }else screen.value=7;
});
num8.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +8
    }else screen.value=8;
});
num9.addEventListener('click', function(){
    if(screen.value!=0){
        screen.value=screen.value +9
    }else screen.value=9;
});
plus.addEventListener('click', function(){
    operant = "plus";
    
        numberOne= numberOne+Number(screen.value);
        screen.value=0;
});
minus.addEventListener('click', function(){
    operant = "minus";
        if(numberOne!=0){
            numberOne= numberOne-Number(screen.value);
        } else numberOne=screen.value;
        
        screen.value=0;
});
multiple.addEventListener('click', function(){
    operant = "multiple";
        if(numberOne!=0){
            numberOne= numberOne*Number(screen.value);
        } else numberOne=screen.value;
        
        screen.value=0;
});
divide.addEventListener('click', function(){
    operant = "divide";
        if(numberOne!=0){
            numberOne= numberOne/Number(screen.value);
        } else numberOne=screen.value;
        
        screen.value=0;
});
equal.addEventListener('click', function(){
    numberTwo = Number(screen.value);
    console.log(numberOne);
    console.log(numberTwo);
    console.log(operant);
    switch(operant){
        case "plus" : 
            screen.value=numberOne+numberTwo;
            break;
        case "minus" :
            screen.value=numberOne-numberTwo;
            break;
        case "multiple" :
            screen.value=numberOne*numberTwo;
            break;
        case "divide" :
            screen.value=numberOne/numberTwo;
            break;
    }
    numberOne=0;
    numberTwo=0;
    operant=null;
});
