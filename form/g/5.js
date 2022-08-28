let employee = {
  emp_id: 200,
  emp_name: 'gagan',
  salary: 65000,
}
let no_of_props = 0
for (props in employee) {
  ++no_of_props
}
console.log(no_of_props)
