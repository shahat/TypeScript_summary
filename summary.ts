/*
================================
[00] => Y we need typeScript ? 
 
  - Detect Errors without Running the Code "Statis Type Checking "; 
  - Analyze the code As you type
    بمعنى لو عندك اي ايرور تقدر تتجنبه 
  - Save some unit tests as the errror show while writing .  
  - every js file is valid ts file . 
  - will help you when you write the React Vue and angular apps  .  
  - gives the missing feature in js like "interface and the Generics and Decorators " .

================================
*/



/*
================================
[01] => How ts works ? 

 - ts compiler compile ts code into js code "this is called transpilation" ; 
 - How about the new feature ? Workround . 

================================
 */



 /*
================================

[02] => steps to work with the Ts 

 [1] - Install Node js 
 [2] - Be node js installed "check for Tirminal node" . 
 [3] - Install TS  => npm i -g typeScript
 [4] - Be TS its installed "check for Tirminal tcs " .
 [5] - create Ts file 
 [6] - compile js file  
 [7] - check Ts playground 

 ================================  
*/

/*
================================

[03] => create config and watch the files  

- tsc -w index.ts   => this will make watch the changes and compile the ts file
- tsc --init        => this will make tsconfig.json file 
     in this file you can edit the config for the rootDir which is mean that 
     - the ts code will be compiled in which distenation  .
     - you can also remove comments may be its note for hackers or can be miss used  

     
================================
*/


/*
================================

[04] => Statically typed Language List [ Rust ,  C , C++ ] ; 

 - Variables Types Are Statis , once  you Declare You can not change . 
 - type of A Variable is known at compile time "Do type checking at the compile time " ; 
 ---- Have a better performance at the run time Due to not needing to check types Dynamically 
 - error Detected earliar 

 => Dynamically Typed Language Like " php , pyton , Javascript ";
    - Variable types are dynamic and you can always change it . 
    - type checking at the execution time .
    - Error can Be Detected After the Execution .  

================================
*/


/*
================================

[05] => type anotations || fignature 

--- Indicate the Data Type of Variables 
--- Indicate the Data Type of functions  Input/output 
--- objects , etc 

- why we use It ? 
- Is it Mandatory ? 
- What Happens if we Dont use it ? 

================================
*/

let theName: string = "string";
let theNumber: number = 45;
let theboolean: boolean = true;

theName = "medo";
console.log(theName);


// if delete the string word the variable can accep any value 
// -  there is another thing called any 
// -  any is used to variable 

let anyvar;
 anyvar = "mohamed";
 anyvar = 25 ; // this will work here with any 
 
 function addnumbers(num1:number , num2:number){
  return num1 + num2  ;
 }
 console.log(addnumbers(10,20));
 //console.log(addnumbers(10,"20")); // this is error bcz of the type of 20 should be number
 
 let alltypes: string | number | Boolean = "mohamed" ;

 //let myFamily: string[] = ["mom" , "dad" , "sister" , 25] ; // this cause  error bcz the 25 is a string .
  

 let array: (string | number)[] = [ 1 ,2 , 4, 7, "medo" ];
 let malty: (string | number | (string | number)[])[]
 = [ 1, "2", [1 , 5, "mm"]] // this how to implement thhe type anotation into malti dimensional array 


/*
================================






================================
*/










/*
================================
================================
================================
================================

*/
