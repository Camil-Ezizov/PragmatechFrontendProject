//1) Verilmiş 2 rəqəmin birinin mənfi olacağı təqdirdə true, əks halda false qaytarsın.
//Məsələn: 5, 5 => false ||| 5, -5 => true ||| -5, 5 => true ||| -5, -5 => true

// const a=10;
// const b=-8;
// if(a<0 || b<0){
//     console.log("true");
// }
// else{
// console.log("false");
// }

// 2) Elə proqram yazın ki, verilmiş cümlənin əvvəlinə verilmiş simvolları əlavə etsin. Əgər həmin
//simvollar verilmiş cümlənin əvvəlində varsa, verilmiş cümlənin özünü göstərsin.
//Məsələn: proqramlasdirma, proq => proqramlasdirma
//proqramlasdirma, veb => vebproqramlasdirma
// const a="proq";
// const b="proqramlasdirma";
// const c=b.slice(0,a.length);

// if(a===c){
//     console.log(b);
// }
// else{
//     console.log(a+""+b);
// }

//3) Verilmiş ədəd 3 və ya 7-yə tam bölünürsə(делить) true, əks halda false cavabı göstərsin.

// const a=28;
// if(a%3==0 || a%7==0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//4)//) Verilmiş 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və
//ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.
// const a=89;
// const b=1;
// if(a>30 && a<70 && b>30 && b<70){
//     console.log("bunlar her iksi 30 ve 70 araligindadir");
// }
//  else if(a>30 && a<70 && b<30 && b>70){
//     console.log("yalniz a deyiseni bu araliqdadir");
// }
// else if(b>30 && b<70 && a<30 && a>70){
//     console.log("yalniz b deyiseni bu araliqdadir");
// }
// else{
//     console.log("hec biri bu araliqda deyil")
// }

//5) Verilmiş 2 ədədin hansının 50-yə daha yaxın olduğunu tapmaq. Mümkün şərtləri proqramda
//nəzərə alın və uyğun mesajı(yaxin və ya uzaq) çıxarın

// const a=20;
// const b=-35;
// if(50-(a)>50-(b)){
//     console.log("b daha yaxindir");
// }
// else{
//     console.log("a daha yaxindir");
// }

//6) Hazırki tarixi götürüb yoxlayın ki, həftəsonu-durmu. Əgər həftəsonudursa true, əks halda false yazın.

// const d = new Date();
// const gun=d.getDay()
// if(gun==6 || gun==0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//7) Verilmiş ədədin 1-10 arasında çıxarılmış random ədəd ilə uyğun gəlib-gəlməmisini yoxlamaq. 
//Əgər uyğundursa “uygundur”, deyilsə “uygun deyil” yazılsın
// const a=3;
// const b=Math.floor(Math.random()*10);
// console.log(b);
// if(a==b){
//     console.log("uygundur");
// }
// else{
//     console.log("uygun deyil");
// }

//8) Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək
//Məsələn: SALAM => SAlam,  AT => AT,  at => AT

// const a="SALAM";
// const b=a.slice(-3);
// const c=a.slice(0,-3);
// if(a.length>3){
//     const d=b.toLowerCase()
//     console.log(c.concat(d));
// }
// else if(a.length<=3){
//     console.log(a.toUpperCase());

// }

//9) Verilmiş 2 rəqəmin biri 5 və ya bu iki rəqəmin fərqi 5-dirsə true, əks halda false qaytarsın
//Məsələn: 33, 5 => true,  21,16 => true,  33, 16 => false

// const a=15;
// const b=20;
// if(a==5 || Math.abs(a-b)==5 || b==5){
//     console.log("true");
// }
// else{
//     console.log("false")
// }

//10) Verilmiş sözün, verilmiş hərfindən əvvəlki hərfini tapıb, Azərbaycan əlifbasında ondan sonra gələn hərfi göstərmək. 
//Əgər əlifbada sonuncu hərfdirsə, elə özünü göstərmək
//Məsələn: salam, l => b ,  nizam, a => z ,  elman, a => n

// const alphabet="abcdefgh";
// const soz="salam";
// const herf="l";
// const index=soz.lastIndexOf(herf);
// const tap=soz.slice(index-1,index);
// console.log(tap);
// if(tap==alphabet){
    
// }

