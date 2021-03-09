//10) Verilmiş sözün, verilmiş hərfindən əvvəlki hərfini tapıb, Azərbaycan əlifbasında ondan sonra gələn hərfi göstərmək. 
//Əgər əlifbada sonuncu hərfdirsə, elə özünü göstərmək
//Məsələn: salam, l => b ,  nizam, a => z ,  elman, a => n

const alphabet="abcdefgh";
const soz="salam";
const herf="l";
const index=soz.lastIndexOf(herf);
const tap=soz.slice(index-1,index);
console.log(tap);
if(tap==alphabet){
    
}
