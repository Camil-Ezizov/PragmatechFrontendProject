//Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq <br>
//	Məsələn: anar => aNAr
const a="camil";
const b=a.slice(1,3);
console.log(a.slice(0,1)+b.toUpperCase()+a.slice(3));