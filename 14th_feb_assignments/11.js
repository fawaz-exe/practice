var counter = 1;
for (var row = 1; row <= 10; row++){
    var temp = ''
    for (var i = 1; i<=row ; i++){
        temp += `${counter} `;
        counter++;
    }
    console.log(temp);
}