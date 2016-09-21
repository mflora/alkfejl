"use strict"

const cim = {

    varos: 'Budapest',
    utca: "Pazmany Péter sétány",
    hazszam: `1/c`,
    toString: function () {
        return `${this.varos}, ${this.utca}`;
    }

};

//console.log(cim);
//console.log(cim.toString());

class Point{

    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    seX(value){
        this._x = value;
        //p1.setX(100); akkor ez fut le
    }

    set x(value){
        this._x = value;
        //p1.x = 100; akkor ez fut le
    }
}

class Circle extends Point{
    constructor(x, y, r){
        super(x, y);
        this._r = r;
    }
}

const p1 = new Point(10, 20);
const c1 = new Circle(100, 200, 5);
console.log(typeof Point);
console.log(p1);
console.log(c1);

//toString(){}  ~~~metódus... szóval nem kell a function.

