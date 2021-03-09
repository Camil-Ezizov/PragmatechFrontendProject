//Ad gününüzə neçə gün qalıb? bunu tapmaq üçün proqram yazmaq (JS Date)
const today=new Date();
console.log(today);
const mybirthday=new Date(2021,11,20);
console.log(Math.ceil(mybirthday-today)/24/60/60/1000); //24 - sutkada saat, 60 - saatda deqiqe, 60 - deqiqe saniye, 1000 - saniyede millisaniye 
