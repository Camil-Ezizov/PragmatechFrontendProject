//3) Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olmasini dövr ilə yoxlamaq. true ve ya false qaytarmaq
//meselen: [7, 8] => false
  //  [9, 3, 7, 8] => true
  const arr=[9, 4, 1, 8,8];

  for(i=0;i<arr.length;i++){
   if(arr[i]==1 || arr[i]==3){
       console.log("true");
    }
    else{
       console.log("false");
    }
 }

