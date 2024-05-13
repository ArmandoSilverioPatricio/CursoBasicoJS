// Methods

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }


//Getter method
get area(){
    return this.calcArea();
}

//Method calcArea
calcArea() {
    return this.height * this.width;
}

}// end class rectangle