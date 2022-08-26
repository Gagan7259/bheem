class Employee {
id;
name;
sal;
setid(id){
    this.id=id;
}
getid(){
    return this.id
}
setname(name){
    this.name = name;
}
getname(){
    return this.name
}
}
let e1=new Employee
e1.setid(10);
e1.setname("raj");
console.log(e1);
console.log(e1.getname());
console.log(e1.getid());