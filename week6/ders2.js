//<p>Adınızın 2-ci hərfini silib, yeni sözü göstərmək.</p>
const a="camil";
const b=a.slice(0,1);
const c=a.slice(2);
console.log(b+""+c);

//JavaScript sözünün ilk və son hərfinin yerini dəyişmək.
const ad="javascript"
const ilkherf=ad.slice(0,1);
const sonherf=ad.slice(-1);
const qalan=ad.slice(1,-1);
console.log(sonherf+""+qalan+""+ilkherf);

//Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq
const adim="camil";
const boyuk=adim.slice(1,3);
console.log(adim.slice(0,1)+""+boyuk.toUpperCase()+""+adim.slice(3));

//JavaScript sözünün ilk hərfini sözün əvvəl və sonuna birləşdirmək <br>
const adiniz="Javascript";
console.log(adiniz.slice(0,1)+""+adiniz+""+adiniz.slice(0,1));

//'adada adamlar var' cümləsində a hərfi neçə dəfə istifadə olunub tapmaq.
const cumle="adada adamlar var";
console.log(cumle.search("a"));

const reqem=1456;
const tap=(1456%10);
console.log(tap);









