let product = {
  product_id: 100,
  product_name: 'iophone 12',
  price: 45000,
  color: 'gray',
}
let no_of_props = 0
for (props in product) {
  ++no_of_props
}
console.log(no_of_props)

//example

let employee = {
  emp_id: 200,
  emp_name: 'gagan',
  salary: 65000,
}
let no_of_props = 0
for(employee in props){
    ++no_of_props;
}
console.log(no_of_props);
