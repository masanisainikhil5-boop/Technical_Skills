var a = 10
a=20
console.log(a);

//a - Identifier
//= - operator
//10 - literal

//Difference between let, var and const
//var - Function Scope
var b = 10; //--Global Scope
console.log(b);

//Definition of function
function hellovar(){
    var b = 20 //--local scope
    console.log(b)
    console.log("The Testing Academy!")
    if(true){
        var b=50;
        console.log(b);        
    }
    console.log("var Function scoped -> ",b);
    
}
//This is the problem of var(function scoped), if we redeclare the identifier,
//the new value will print.

//Calling of function
hellovar()

//Let - Block Scope
let c = 60; //--Global Scope
console.log(c);

//Definition of function
function hellolet(){
    let c = 70 //--local scope
    console.log(c)
    console.log("The Testing Academy!")
    if(true){
        let c=100;
        console.log(c);        
    }
    console.log("let Block scoped -> ",c);
    
}
//This is the problem of var(function scoped), if we redeclare the identifier,
//the new value will print.

//Calling of function
hellolet()

//const - Block Scope
const d = 80; //--Global Scope
console.log(d);

//Definition of function
function helloconst(){
    const d = 90 //--local scope
    console.log(d)
    console.log("The Testing Academy!")
    if(true){
        const d=120;
        console.log(d);        
    }
    console.log("const Block scoped -> ",d);
    
}
//This is the problem of var(function scoped), if we redeclare the identifier,
//the new value will print.

//Calling of function
helloconst()
