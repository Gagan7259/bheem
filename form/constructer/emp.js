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
}
let g1=new Employee
g1.setid(23);
g1.setname("moumika");
console.log(g1);
console.log(g1.getid());
console.log(g1.getname());
