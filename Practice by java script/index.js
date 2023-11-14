console.log('Practice Of JavaScript');  
//Variables in js
//Var , Let and Const.
var name = 'Ali Raza';
var helooo = 'ToqueerAhmad@@888';
var mark = 34+66;
var marks = '34+66';
console.log(name );
console.log(helooo,mark);
console.log(marks);

function sum(a,b){
    add = a+b;
    console.log(add);
}
sum(25,25);



// Subtraction funtion id

function sub(){
    let x = Number(document.getElementById('demo').value);
    let y = Number(document.getElementById('demoo').value);
    const output1 = x - y;
    document.getElementById("output").innerHTML = output1;
}

// Addition fuction id
    function adding(){
        let x = Number(document.getElementById('demo').value);
        let y = Number(document.getElementById('demoo').value);
        const output1 = x + y;
        document.getElementById("output").innerHTML = output1;
    }

    // Tables Logic of loop 
    function Table(){
    let num = 56;
    for (var x = 0; x <= 10; x++) {
        console.log(x +"*" +num + " "  +" " + "="+ x*num);
       document.getElementById('results').innerHTML = x;
    }
}
var namee = "Raza Ali";
console.log(namee);

var ya = "Desi health advisor";
ya = "Go to my Website";
document.write(ya);
document.write("<br>");
document.write(typeof ya);
document.write("<br>");
var yah = 50;
document.write(yah);
document.write("<br>");
document.write(typeof yah);
document.write("<br>");
yah = true ;
document.write("<br>");

