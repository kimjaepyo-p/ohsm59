for(let x =0; x < 10; x++ )
    {
        console.log("하나씩", x);

    }

    for(let x =0; x < 10; x+= 2 )
        {
            console.log("두개씩", x);
    
        }

const countlist = ['a','b','c'];
const countobj = {
    "nm" : "돌돌이",
    "age" : 7

}

for( x in countlist )
    {
        console.log(`${x} 번째의 값은 ${countlist[x]} 입니다`);
    }

    for( x in countobj )
        {
            console.log(`${x} 번째의 값은 ${countobj[x]} 입니다`);
        }



    