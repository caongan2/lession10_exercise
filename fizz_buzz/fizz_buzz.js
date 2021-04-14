let n = +prompt("Nhập vào N")
let count = 0
while (count < n) {
    let div3 = count % 3 == 0
    let div5 = count % 5 == 0
    if (div3 && div5) {
        document.write("FizzBuzz<br>")
    } else {
        if (!div3 && div5) {
            document.write("Buzz<br>")
        } else {
            if (div3 && !div5) {
                document.write("Fizz<br>")
            } else {
                document.write(count+"<br>")
            }
        }
    }
    count++
}
