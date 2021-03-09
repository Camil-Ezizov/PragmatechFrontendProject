//) Verilmiş 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və
//ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.
const a=89;
const b=1;
if(a>30 && a<70 && b>30 && b<70){
    console.log("bunlar her iksi 30 ve 70 araligindadir");
}
 else if(a>30 && a<70 && b<30 && b>70){
    console.log("yalniz a deyiseni bu araliqdadir");
}
else if(b>30 && b<70 && a<30 && a>70){
    console.log("yalniz b deyiseni bu araliqdadir");
}
else{
    console.log("hec biri bu araliqda deyil")
}

