//7) Verilmiş ədədin 1-10 arasında çıxarılmış random ədəd ilə uyğun gəlib-gəlməmisini yoxlamaq. 
//Əgər uyğundursa “uygundur”, deyilsə “uygun deyil” yazılsın
const a=3;
const b=Math.floor(Math.random()*10);
console.log(b);
if(a==b){
    console.log("uygundur");
}
else{
    console.log("uygun deyil");
}