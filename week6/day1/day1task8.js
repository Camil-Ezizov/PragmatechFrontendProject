//"azerbaycan" sözündə random sırada çıxmış bir hərfi böyük hərflə əvəzləmək. <br>
	//Məsələn: random çıxan rəqəm 4 oldu, onda belə olur "azeRbaycan" <br>
	//random çıxan rəqəm 7 olsa, onda belə olur "azerbaYcan"

    const a=Math.floor(Math.random()*10+1);
    console.log(a);
    const c="azerbaycan";
    const b=c.slice(a-1,a);
    console.log(b);
    console.log(c.slice(0,a-1)+""+b.toUpperCase()+""+c.slice(a));
