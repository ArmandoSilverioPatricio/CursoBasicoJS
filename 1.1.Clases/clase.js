/*const bigDay = new Date(2024, 1, 16);
console.log(bigDay.toLocaleDateString());
if(bigDay.getTime() < Date.now()){
    console.log("Once upon a time ...");
};

class MyClass {
    //Constructor
    constructor() {
        //Constructor body
    }// end constructor
    //instance field
    myField = "foo";
    //Instance method
    myMethod(){
        //myMethod body
    }//end instance method
    //Static field
    static myStaticField = "bar";
    //Static method
    static myStaticMethod(){
        //myStaticMethod body
    }//end static method
    //Static block
    static {
        // Static initialization code
    }
    //Fields, methods, static fields, and static methods all have
    //"private" forms 
    #myPrivateField = "bar";
}// End MyClass class


function MyClasses(){
    this.myField = "foo";
    //constructor body
}

MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function(){
    //MyStaticMethod body
}

MyClass.prototype.myMethod = function(){
    // myMethod body
};

(function (){
    // Static initialization code
})();


// Constructing a class

const myInstance = new MyClass();
console.log(myInstance.myField);
myInstance.myMethod();
*/

/*
// Instance methods
class Color {
    constructor(r, g, b){
        //Assign the RGB values as a property of `this`.
        this.values = [r, g, b];
    }
    getRed(){
        return this.values[0];
    }
}

const red = new Color(255, 0 , 0);
console.log(red.getRed());
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed);
*/
class Color {
    constructor(r, g, b){
        this.values = [r, g, b];
        this.getRed = function(){
            return this.values[0];
        };
    }
}//end class Color

console.log(new Color().getRed === new Color().getRed);



