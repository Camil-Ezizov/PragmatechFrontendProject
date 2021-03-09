

//verilmis array-in icinde tek ve cut reqemleri ayriliqda taplayib, birlesdirmek
//[1,2,3,4,5] => tek(1+3+5) + cut(2+4) = 96

//const arr=[1,2,3,4,5];
//let sum1=0;
//let sum2=0;
//for(i=0;i<arr.length;i++){
  // if(arr[i]%2==1){
    //   sum1 +=arr[i];    
   //}  
  // else{
    //   sum2 +=arr[i]
   //}
//}console.log(sum1+""+sum2);


//1) Verilmiş sözü əks istiqamətə çevirmək. hazir
//Məsələn: veb => bev
/*const str="vebe";
let netice='';
for(i=str.length-1;i>=0;i--){
 netice+=str[i];
} console.log(netice);
*/

//2) (Loop) Verilmiş sözün hərflərini Azərbaycan əlifbasında ondan sonra gələn hərflə əvəzləmək.
//Məsələn: ace => bçə
/*const alph = "abcçdeəfgğhxıijkqlmnoöprsştuüvyz";
const word="abc";
let cem='';
for(var i=0;i<word.length;i++){
  for(var j=0;j<alph.length;j++){
    if(word[i]===alph[j]){
      cem+=alph[i+1];
    }
  }
}console.log(cem);
*/
//baxilacaq
/*
3) Reqemlerden ibaret verilmis array-in en boyuk reqemini tapib, diger butun reqemleri onunla evezlemek
meselen: [12, 10, 3] => [12, 12, 12]
    	 [10, 3, 29, 15] => [29, 29, 29, 29]

const arr=[12,10,3,20];
let max=arr[0];
let netice='';
for(i=0;i<arr.length;i++){
  if(max<arr[i+1]){
    max=arr[i+1]
    netice+=max;
  }
}console.log(netice);
*/


/*
//4) Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olMAMAsini yoxlamaq. true ve ya false qaytarmaq
//meselen: [7, 8] => true
//[9, 3, 7, 8] => false


const arr=[7,8,9];

for(i=0;i<arr.length;i++){
    if(arr[i]==1 || arr[i]==3){
       console.log("true");
    }else{
        console.log("false");
    }
}
*/


/*
baxilacaq
5) Reqemlerden ibaret verilmis array-in icinde axtarilan reqemin 2 defe olmasini yoxlamaq. true ve ya false qaytarmaq
meselen: [53, 90, 30, 21, 30] axtar 30 => true
    [53, 90, 21, 30] axtar 30 => false
*/
/*
const arr= [53, 90, 30, 21, 30];
const a=30;
let count=0;

for(i=0;i<arr.length;i++){
    
    if(arr[i]==a ){
      
  console.log("true");
 
  
    }else{
        console.log("false");
    }
}*/
/* 
//6) Verilmiş rəqəmin ədədlərini tək-tək toplamaq(сложить).
//Məsələn: 555 => 15, 51 => 6, 1234 => 10
const a=155;
let b=a.toString();
let netice=0;
for(let i=0;i<b.length;i++){
  netice+=parseInt(b[i]);
}
console.log(netice);
*/
/* 
//7) Verilmiş array-in içində ən uzun olan string-i tapmaq
//Məsələn: [pro, p, proqr, pr, proqram, proq, proqra] => proqram
const str=['p',' proqr', 'pr', 'proqram',' proqmmmmmmmmmmmmmmmm', 'proqra'] ;
let max=str[0].length;
let ad=str[0];
for(let i=0;i<str.length-1;i++){
  if(max<str[i+1].length){
    max=str[i+1].length;
    ad=str[i+1];
  }
}console.log(ad);
*/
/*
8) Verilmiş array-in içində tək və cüt rəqəmləri ayrılıqda toplayıb, birləşdirmək
Məsələn: [1, 2, 3, 4, 5] => tək (1+3+5) + cüt(2+4) = 96
const arr=[1,2,3,4,5];
let sum1=0;
let sum2=0;
for(i=0;i<arr.length;i++){
   if(arr[i]%2==1){
       sum1 +=arr[i];    
   }  
   else{
       sum2 +=arr[i]
   }
}console.log(sum1+""+sum2);
*/
/*
//10) Verilmiş 2 array-ın rəqəmlərin hər ikisində olub-olmadığını yoxlamaq.
//Məsələn: [12, 10, 3] və [10, 3, 29, 15] => false
    //	 [10, 3, 29, 15] və [15, 10, 3, 29] => true
    const a=[12, 10, 3];
    const b=[10, 3, 29, 15];

    for(i=0;i<a.length;i++){
      for(j=0;j<b.length;j++){
        if(a[i]===b[j]){
          console.log("var");
        }else {
          console.log("yoxdur");
        }
      }
    }
    */

   /*
   baxilacaq
   12) Verilmiş sözdəki qoşa yazılmış hərfləri yazmaq
Məsələn: abbas => b, bass => s, abbas teyyarede => yb

const str="abbas teyyarede";
let netice=''

for(i=0;i<str.length;i++){
  if(str[i]===str[i+1]){
    netice=str[i];  
  }console.log(netice);
}
*/