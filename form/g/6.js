const employee = {
  name: 'gagan',
  salary: 45000,
}
const new_employee = Object .assign({}, employee)
console.log(new_employee)
console.log(employee);

new_employee.name="manoj"
console.log(new_employee.name);
console.log(employee.name);
