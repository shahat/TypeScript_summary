/*
Function 

- Rest Parameter 
- What About Floats => all under type number 

*/

function addAll(...nums:number[]):number{
    let result: number  = 0 ; 
    for(let i = 0 ; i<nums.length ; i++){
        result += nums[i];
    }
    return result ;
}
console.log(addAll(10,20,30, +true));
// we put the unary operator to convert thre boolean into number 