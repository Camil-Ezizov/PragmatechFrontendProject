//Verilmiş faylın genişlənməsini tapmaq
//Məsələn: pic.jpeg => jpeg, music.mp3 => mp3
const a="pic.jpeg";
const b=a.lastIndexOf(".");
console.log(b);
console.log(a.slice(b+1));