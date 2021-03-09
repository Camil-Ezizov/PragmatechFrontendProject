/*<h1>Keçdiyimiz hazır funksiyaları sıfırdan yazmaq</h1>

<ol>
	<li>Substr</li>
	<li>Slice (array, string)</li>
	<li>Substring</li>
	<li>IndexOf</li>
	<li>Replace</li>
	<li>Concat</li>
	<li>Trim</li>
	<li>toString</li>
	<li>Pop</li>
	<li>Push</li>
	<li>Shift</li>
	<li>Unshift</li>
	<li>Splice</li>
	<li>Split</li>
	<li>Join</li>
</ol>
*/
/*
//Substr
const a="salam Camil";
const b=2;
const c=10;

for(i=b;i<=c;i++){
console.log(a[i]);
}

*/
//Slice (array, string)

const str="salam Camil";
let start=-5;
let end=-1;
let netice=''
for(i=start;i<str.length;i++){
	if(start>0 && end>0){
	   netice+=str[i];
	} else if(start<0 && end<0){
		netice+=str[str.length+start]
	}
	
}console.log(netice);

