name = 'Kuddus';

function add(num1, num2){
    window.result = num1 + num2;
    console.log('name inside', name);
    function double(number){
        return number * 2;
    }
    var total = double(result);
    return total;
}
console.log('name outside', name);
var sum = add(13, 29);
console.log(sum);