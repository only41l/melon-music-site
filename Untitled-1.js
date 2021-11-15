/*var x, y;
x = prompt("Enter x:", x);
if (Math.log(x) + Math.pow(x, 2) < 0) {
    y = Math.cos(Math.pow(x, 2) + Math.log(x));
    debugger
}
else if (Math.log(x) + Math.pow(x, 2) == 0) {
    y = 1/(Math.pow(x, 2) + Math.log(x));
    debugger
}
else {
    y = Math.cos(x);
    debugger
}
debugger
alert(y.toFixed(2));*/
var num = 0; 
var summ = 0;
while(num != null){
    num = prompt("Enter number", num);
    if (num > 9 && num < 100) summ += Number(num);
    debugger
}
debugger
alert("Сума двоцифрових чисел: " + summ);