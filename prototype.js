let empdetails = function(name,age){
    this.name=name;
    this.age=age;
}

empdetails.prototype.getname=function(){
    return this.name;
}
empdetails.prototype.getage=function(){
    return this.age;
}

let obj1=new empdetails('john',20);
let obj2=new empdetails('peter',30);

console.log(obj1.getage());
console.log(obj2.getname());
