var js_obj={
    '+':"add",
    '-':"sub",
    '*':"mult",
    '/':"divide",
    '=':"equal",
};

let input_str=document.getElementById('input_str');
let count=0;
let str="";

var add=document.getElementById('add');
var sub=document.getElementById('sub');
var mult=document.getElementById('mult');
var div=document.getElementById('divide');

var one=document.getElementById('1');
var two=document.getElementById('2');
var three=document.getElementById('3');
var four=document.getElementById('4');
var five=document.getElementById('5');
var six=document.getElementById('6');
var seven=document.getElementById('7');
var eight=document.getElementById('8');
var nine=document.getElementById('9');
var zero=document.getElementById('0');

one.addEventListener('click',()=>{
    str+=one.value;
    input_str.value=str;
})

two.addEventListener('click',()=>{
    str+=two.value;
    input_str.value=str;
})

three.addEventListener('click',()=>{
    str+=three.value;
    input_str.value=str;
})

four.addEventListener('click',()=>{
    str+=four.value;
    input_str.value=str;
})

five.addEventListener('click',()=>{
    str+=five.value;
    input_str.value=str;
})

six.addEventListener('click',()=>{
    str+=six.value;
    input_str.value=str;
})

seven.addEventListener('click',()=>{
    str+=seven.value;
    input_str.value=str;
})

eight.addEventListener('click',()=>{
    str+=eight.value;
    input_str.value=str;
})

nine.addEventListener('click',()=>{
    str+=nine.value;
    input_str.value=str;
})

zero.addEventListener('click',()=>{
    str+=zero.value;
    input_str.value=str;
})

// operation and extra button
add.addEventListener('click',()=>{
    if(str==""){
        return;
    }
    if(js_obj.hasOwnProperty(str.charAt(str.length-1))){
        str="";
        input_str.value="";
        alert('invalid input');
        return;
    }
    str+=add.value;
    input_str.value=str;
})

sub.addEventListener('click',()=>{
    if(str==""){
        return;
    }
    
    if(js_obj.hasOwnProperty(str.charAt(str.length-1))){
        str="";
        input_str.value="";
        alert('invalid input');
        return;
    }
    str+=sub.value;
    input_str.value=str;
})

mult.addEventListener('click',()=>{
    if(str==""){
        return;
    }
    
    if(js_obj.hasOwnProperty(str.charAt(str.length-1))){
        str="";
        input_str.value="";
        alert('invalid input');
        return;
    }
    str+=mult.value;
    input_str.value=str;
})
divide.addEventListener('click',()=>{
    if(str==""){
        return;
    }
    
    if(js_obj.hasOwnProperty(str.charAt(str.length-1))){
        str="";
        input_str.value="";
        alert('invalid input');
        return;
    }
    str+=div.value;
    input_str.value=str;
})

ac.addEventListener('click',()=>{
    str="";
    input_str.value="";
})

equal.addEventListener('click',()=>{
    if(str==""){
        return;
    }
    
    if(js_obj.hasOwnProperty(str.charAt(str.length-1))){
        str="";
        input_str.value="";
        alert('invalid input');
        return;
    }
    input_str.value=eval(str);
    str=input_str.value;
})