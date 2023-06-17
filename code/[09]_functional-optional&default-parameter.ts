/* Funtion 
  - Optional and Default parameters 
  
  - In js , every Parameter is optional => "undefined" If you didnt use it ;
  - "?" optional parameter 
  - the optional parameter use ? 
  - optional parameter comes last 
  - the optional parameter cant have both  default value and optional at the same time 
  - default value means this parameter is optional 
*/

function showproduct(name:string , number:number , category:string="electric"){
 
    return `${name} - ${number} - ${category} `
}
console.log(showproduct("fan", 123));
