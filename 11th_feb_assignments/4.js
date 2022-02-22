
// for (var j = 5; j = 1  ; j--){

// for(var j = 5; j>=1;j--){
//         var temp = " "
//         for (var i =1; i<=j; i++){
//             temp += i;
//             }
//             console.log(temp)
//         }

var row = ''
var spaces = ''
for (var i = 1; i<=5; i++){
    row += i;
    for(var j = 1; j<=5-i; j++){
    spaces += ' ';
    }
    console.log(spaces + row);
    spaces = '';
}

