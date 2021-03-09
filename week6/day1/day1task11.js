//javaSCRIPT sözün son 3 hərfini kiçik hərflə, VA hissəsini böyük hərflə yazmaq
const a="javaSCRIPT";
const b=a.slice(-3);
const c=b.toLowerCase();
const d=a.slice(2,4).toUpperCase();
console.log(a.slice(0,2)+d+a.slice(4,-3)+c);