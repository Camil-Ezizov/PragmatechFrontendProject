//8) Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək
//Məsələn: SALAM => SAlam,  AT => AT,  at => AT

const a="SALAM";
const b=a.slice(-3);
const c=a.slice(0,-3);
if(a.length>3){
    const d=b.toLowerCase()
    console.log(c.concat(d));
}
else if(a.length<=3){
    console.log(a.toUpperCase());

}
