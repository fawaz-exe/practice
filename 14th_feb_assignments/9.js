for(var row = 5; row >=1 ; row--){
    var temp = '* ';
    console.log(temp.repeat(row) )
}

for (var row = 5 ; row >= 1 ; row--){
    var temp = '';
    for(var i =1; i<=row ; i++){
        temp += '* ';
    }
    console.log(temp);
}