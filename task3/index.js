const fruits  = [
  {name: 'mango', color : 'yellow', price: 15},
  {name: 'strawberry', color : 'red', price: 10},
  {name: 'orange', color : 'orange', price: 9},
  {name: 'grapes', color : 'purple', price: 8},
];
const [{name:a, price:pricefirst},
       { name:b,price:pricesecond},
       {name:c,price:pricethird},
       {name:d,price:pricefourth},
      ] = fruits;
console.log(a,pricefirst,
  b,pricesecond,
  c,pricethird,
  d,pricefourth);

