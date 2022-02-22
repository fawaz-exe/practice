var temp1 = '';
var temp2 = '8';
console.log(`0 * 9 + 8 = ${temp2}`);
for(var i = 9; i>= 2; i--){
    temp1 += i;
    temp2 += '8';
    console.log(`${temp1} * 9 + ${i -2} = ${temp2}`);
}