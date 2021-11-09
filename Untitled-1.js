var x, y;
x = prompt("Enter x:", x);
if (Math.log(x) > Math.pow(x, 2)) 
    y = Math.cos(Math.pow(x, 2) + Math.log(x));
else if (Math.log(x) == Math.pow(x, 2)) 
    y = 1/(Math.pow(x, 2) + Math.log(x));
else 
    y = Math.cos(x);
document.write(y.toFixed(2));