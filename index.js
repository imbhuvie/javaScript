// const number = prompt("Enter a number");
// if(number%5==0){
//     alert(number + " is multiple of 5");
// }
// var k=90;
// console.log("hello"+ k +"afd");

// ===================================
// let name = "BhupendraVerma";
// name = (name.toLowerCase());
// console.log(name.trim());
// console.log(`@${name}${name.length}`);
// ======================================
// var a=[10,20,30,40,50];
// let sum=0;
// a.forEach(value => {
//     sum=sum+value;
// });console.log(sum/a.length);
// ======================================
// var price =[250,645,300,900,50]
// for(let i=0;i<price.length;i++){
//     price[i]=price[i]-price[i]/10;
// }
// price.forEach(element => {
//     console.log(element)
// });
// =======================================
var comp=["bloomberg","ms","uber","google","IBM","Netflilx"];
// comp.shift();
// comp.forEach(element => {
//     console.log(element)
// });
comp.splice(2,1,"Ola");
comp.forEach(element => {
    console.log(element)
});