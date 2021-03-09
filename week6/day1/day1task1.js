//<li>Hazırkı(текущий) tarixi bu formatlarda yazın: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.

//2115-dən hazırki(текущий) ili çıxmaq(вычитать). Hazırki ili JS (JS Date) ilə tapmaq lazımdır.
// const d= new Date();
// const e=2115
// console.log(e-d.getFullYear());
// console.log(d.getFullYear());

//2115-dən hazırki(текущий) ili çıxmaq(вычитать). Hazırki ili JS (JS Date) ilə tapmaq lazımdır.
// const d= new Date();
// const e=2115
// console.log(e-d.getFullYear());
// console.log(d.getFullYear());

//Verilmiş faylın genişlənməsini tapmaq
//Məsələn: pic.jpeg => jpeg, music.mp3 => mp3
// const a="pic.jpeg";
// const b=a.lastIndexOf(".");
// console.log(b);
// console.log(a.slice(b+1));

//Adınızın 2-ci hərfini silib, yeni sözü göstərmək. <br>
	//Məsələn: fatima => ftima ||| hamid, 2 => hmid
    // const a="hamid";
    // const b=a.slice(0,1);
    // const c=a.slice(2);
    // console.log(b+c);

//JavaScript sözünün ilk və son hərfinin yerini dəyişmək. <br>
//Məsələn: javascript => tavascripj
// const a="javascript";
// console.log(a.slice(-1)+a.slice(1,-1)+a.slice(0,1));

//Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq <br>
//	Məsələn: anar => aNAr
// const a="camil";
// const b=a.slice(1,3);
// console.log(a.slice(0,1)+b.toUpperCase()+a.slice(3));

//"azerbaycan" sözündə random sırada çıxmış bir hərfi böyük hərflə əvəzləmək. <br>
	//Məsələn: random çıxan rəqəm 4 oldu, onda belə olur "azeRbaycan" <br>
	//random çıxan rəqəm 7 olsa, onda belə olur "azerbaYcan"

    // const a=Math.floor(Math.random()*10+1);
    // console.log(a);
    // const c="azerbaycan";
    // const b=c.slice(a-1,a);
    // console.log(b);
    // console.log(c.slice(0,a-1)+""+b.toUpperCase()+""+c.slice(a));

    //JavaScript sözünün ilk hərfini sözün əvvəl və sonuna birləşdirmək <br>
//Məsələn: javascript => jjavascriptj
// const a="javascript";
// const b=a.slice(0,1);
// console.log(b);
// console.log(b+""+a.slice(0)+""+b);

//JavaScript sözünün ilk hərfini sözün əvvəl və sonuna birləşdirmək <br>
//Məsələn: javascript => jjavascriptj
// const a="javascript";
// const b=a.slice(0,1);
// console.log(b);
// console.log(b+""+a.slice(0)+""+b);

//'adada adamlar var' cümləsində a hərfi neçə dəfə istifadə olunub tapmaq. Cavab: 7
// const a="adada adamlar var";
// console.log(a);
// const b=a.replace(/a/g,"");
// console.log(a.length-b.length);

//javaSCRIPT sözün son 3 hərfini kiçik hərflə, VA hissəsini böyük hərflə yazmaq
// const a="javaSCRIPT";
// const b=a.slice(-3);
// const c=b.toLowerCase();
// const d=a.slice(2,4).toUpperCase();
// console.log(a.slice(0,2)+d+a.slice(4,-3)+c);

//Ad gününüzə neçə gün qalıb? bunu tapmaq üçün proqram yazmaq (JS Date)
// const today=new Date();
// console.log(today);
// const mybirthday=new Date(2021,11,20);
// console.log(Math.ceil(mybirthday-today)/24/60/60/1000); //24 - sutkada saat, 60 - saatda deqiqe, 60 - deqiqe saniye, 1000 - saniyede millisaniye 

//Sözün hərflərini Azərbaycan əlifbasında ondan sonra gələn hərflə əvəzləmək.
// const alphabet = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz';
// const a="kitab";
// const c=a.length;
// console.log(c);
// for(i=1;i<=5;i++){
//     console.log(alphabet.indexOf(a[3]));
// }