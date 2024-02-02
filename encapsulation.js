class employee
{
    setDetail(name, id, phonenumber){
    this.name=name;
    this.id=id;
    this.phonenumber=phonenumber;
    }

    getEmpname()
    {
        return this.name;
    
    }

    getEmpid()
    {
        return this.id;
    }

    getEmpPhonenumber()
    {
        return this.phonenumber;
    }
    
}

let obj= new employee();
obj.setDetail('john',1001,9999999);
console.log(obj.getEmpname());
console.log(obj.getEmpid());
console.log(obj.getEmpPhonenumber());

