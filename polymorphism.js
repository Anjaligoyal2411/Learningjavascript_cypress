class empdetails{

    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    printdetails(){
        console.log('I am a employeee')
    }
}
class fellow extends empdetails{
    printdetails(){
        super.printdetails();
        console.log('I am a fellow employeee')

    }

}

let obj=new fellow('Anjali',30);
obj.printdetails();