let product={
    product_id:100,
    product_name:"iophone 12",
    price:45000,
    color:"gray"
};
console.log(Object.keys(product));
console.log(Object.values(product));


let no_of_props;
if(product in props){
    ++no_of_props;
    
}
console.log(no_of_props);