class Employee{
    id;
    name;
    salaray;
    
    setid(id){
       this.id=id
    }
    getid(){
        return this.id
    }
    setname(name){
        this.name=name;
    }
    getname(){
        return this.name
    }
    setsalary(salary){
        this.salaray=salary;
    }
    getsalary(){
        return this.salary
    }
}
let g1=new Employee
g1.setid(23);
g1.setname("moumika");
g1.salary(45000)
console.log(g1);
console.log(g1.getid());
console.log(g1.getname());