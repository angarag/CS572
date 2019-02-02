import { isConstructorDeclaration } from "typescript";

const f:(number)=> void= function (a){
    console.log(a)
}

class University{
    constructor (public name:String, public dept:String){}
    graduation(year:number){
        console.log( `Graduating ${this.dept} ${year} students`)
    }
}
var mum = new University('MUM','CS')
mum.graduation(2019)
