//Tapşırıq 4:
   // Size mueyyen bir aralig verilir o araligda sade ededleri console-a cixaran proqram
   // yazin
   // Example: Başlanğıc deyer - 1,Bitis deyeri - 50 
   // 1 ile 50 arasindaki sade ededler: 2,3,5,7,11,13,...,47 
   // Bu sekilde olmalidir
  // var a=11;
  //  for(var i=2;i<a;i++){
     //   if(a%i==0){
     //       console.log(a+" sade eded deyil ");
     //       break
     //   }
     //    console.log(a+"  sade ededdir");     
   // }  
   let checkPrimeNum = (num) => {
      for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              return false;
          }
      }
  
      return true;
  }
  
  // //  2 - 50  sade ededleri ekrana cixarmaq isdeyirik
  
  for (let i = 2; i < 50; i++) {
      if (checkPrimeNum(i) === true) {
          console.log(i);
      }
  }