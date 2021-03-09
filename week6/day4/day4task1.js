//1) Array-dəki dəyərləri bu formada dövr ilə çıxarmaq: BMW - Fiat - Mercedez - Audi - Opel - Bentley
//["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"]

const arr = ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"];
 var res = '';

 for (var i = 0; i <= arr.length - 1; i++) {
     if (i == arr.length - 1) {
         res += arr[i];
                  break;
   }
        res += arr[i] + '-';
 }
 console.log(res);