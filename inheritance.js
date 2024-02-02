class parentcar{

    setName(name){
    this.name=name;
    }

    startEngine()
    {
        console.log('my startengine name is '+this.name);
    }

    stopEngine(){
        console.log('my stop enginename is '+this.name);

    }
}

class childcar extends parentcar{
 
    speedcar(speed){
        console.log('my start name is '+this.name+'is ' +speed);

    }

}


let obj1= new childcar();
obj1.setName('Anjali');
obj1.stopEngine();
obj1.startEngine();
obj1.speedcar(10);