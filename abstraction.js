function employeedetail(name,age,basicsalary){
    this.name=name;
    this.age=age;
    this.basicsalary=basicsalary;

    let bonus=1000;
    let finalsalary=function(){
        finalsalary=basicsalary+ bonus;
        console.log('the final slary is: '+finalsalary);
    }

    this.printempdetail=function(){
        console.log(this.name);
        console.log(this.age);
        finalsalary();

    }
}
 let obj=new employeedetail('anjali',30,20000)
 obj.printempdetail();