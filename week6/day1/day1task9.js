//JavaScript sözünün ilk hərfini sözün əvvəl və sonuna birləşdirmək <br>
//Məsələn: javascript => jjavascriptj
const a="javascript";
const b=a.slice(0,1);
console.log(b);
console.log(b+""+a.slice(0)+""+b);