// function hello(){
//     console.log("Hello World!!")
// }
// hello();
// function sum(a,b){
//     console.log(a+b)
//     return (a+b)
// }
// let a=sum(5,10) + 10;
// console.log(a);
// ================================================
// var count=0
// const countVowel=(str)=>{
//     for(let i=0;i<=str.length;i++) {
//         if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//             count++
//         }
//         // return count;
//     };
// }
// countVowel("bhupendraoi");
// console.log(count)
// ====================================================
// var count=0
// const countVowel=(str)=>
// {
//     for (const key of str) 
//     {
//         if(key=="a"||key=="e"||key=="i"||key=="o"||key=="u")
//         {
//             count++
           
//         }
//     }
// }
// countVowel("bhupendraoi");
// console.log(count)

// ==============================================
// console.log(`---------------------------`)
// var ar=["ghffdfshgfh",564,45,45,5];
// ar.forEach((element,index,a) => {
//     console.log(element);
//     console.log(index);
//     console.log('-----------------------')
//     console.log(a);
//     console.log('----------------------------')
// });
// console.log(`--------------------------------`)
// ================================================
// var ar=[10,20,30,40,50];
// var newarr = ar.map((key)=>{
//     return key*key;
// })
// newarr.forEach(element => {
//     console.log(element)
// });
// ======================================
// var ar=[10,22,31,40,51];
// var newarr = ar.filter((key)=>{
//     return (key%2==0);
// })
// newarr.forEach(element => {
//     console.log(element)
// });
// console.log(ar)

// ===========================
var ar=[10,20,80,40,50];
var newarr = ar.reduce((num1,num2)=>{
    return num1>num2  ? num1 : num2;
})

    console.log(newarr)
