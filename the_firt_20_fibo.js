let number = +prompt("Nhập vào dãy cần ")
document.getElementById("number").innerHTML = +number+ " số đầu tiên của dãy fibonacci là:"
for (let i = 0; i < number; i++) {
    let fib = findFibonacciN(i+1)
    document.write(fib+"<br>")
}


/*function findFibonacciN(n) {
    if(n==1||n==2) {
        return 1;
    }else return findFibonacciN(n-1)+findFibonacciN(n-2)
}*/
function findFibonacciN(n) {
    let a = 1
    let b = 1
    let c
    if (n < 3) {
        return 1
    } else {
        for (let i = 0; i < n-2; i++) {
            c = a + b;
            a = b
            b = c
        }
        return c
    }
}