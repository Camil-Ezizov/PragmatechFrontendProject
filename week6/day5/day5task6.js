// Tapşırıq 6:
//     Size soz verilir ve o sozde kicik herfleri boyuk herfe boyuk herfleri ise kicik 
// herfe cevirmek teleb olunur
//Example: 'SaLam' Cavab=> sAlAM

let alphaSmall=[a,b,c,d,e,f,g,s,l,m];
let alphaBig=[A,B,C,D,E,F,G,S,L,M];

for(i=0;i<alphaSmall.length;i++){
    for(j=0;j<alphaBig.length;j++){
        if(alphaSmall[i].length===alphaBig[j].length){
            console.log(alphaBig)
        }
    }
}
