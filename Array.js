let arr= [1,2, 3, 4,5];

// Insert element 11 at the beginning of the array

arr.unshift(11); 
console.log(arr);

//insert element 11 at index 2
arr.splice (2,0,11); 
console.log(arr);


//insert element at last index
 arr.push(11);
console.log(arr);

//Delete elements at index 3
arr.splice(3,1); 
console.log(arr);

//Sum of all elements in array
let sum-arr.reduce((acc, curr)=>(acc+curr)); 
console.log(sum);

 //Check if all elements in array are>10 
 let allGreater ThanTen arr.every(x=>>>10);
 console.log(allGreater ThanTen);


//Check if either of element in array is 0 
let anyZero-arr, some (x=x===0); 
console.log(anyZero);
