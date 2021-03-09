// 2) Elə proqram yazın ki, verilmiş cümlənin əvvəlinə verilmiş simvolları əlavə etsin. Əgər həmin
//simvollar verilmiş cümlənin əvvəlində varsa, verilmiş cümlənin özünü göstərsin.
//Məsələn: proqramlasdirma, proq => proqramlasdirma
//proqramlasdirma, veb => vebproqramlasdirma
const a="proq";
const b="proqramlasdirma";
const c=b.slice(0,a.length);

if(a===c){
    console.log(b);
}
else{
    console.log(a+""+b);
}