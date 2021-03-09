//6) Hazırki tarixi götürüb yoxlayın ki, həftəsonu-durmu. Əgər həftəsonudursa true, əks halda false yazın.

const d = new Date();
const gun=d.getDay()
if(gun==6 || gun==0){
    console.log("true");
}
else{
    console.log("false");
}