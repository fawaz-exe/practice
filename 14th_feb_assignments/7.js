var temp1 = '';
console.log(`0 * 9 + 8 = 8`)
for(var i = 9 ; i>=2 ; i--){
    temp1 += i;
    console.log(`${temp1} * 9 + ${i - 2} = ${temp1 * 9 + i-2}`);
}