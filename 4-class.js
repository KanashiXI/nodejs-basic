class Calculate {
    static sum(x, y) {
        return x + y;
    }

    sum2(x, y) {
        return x + y;
    }

    multiply(x, y) {
        return x * y;
    }
}
const calculateObject = new Calculate();
console.log(Calculate.sum(1, 2));
console.log(calculateObject.sum2(2, 3));
console.log(calculateObject.multiply(10, 20));