const numbers = [10, 500, 20, 105, 25, 30];
const maxNumber = numbers.reduce((max, current) => {
    return max > current ? max : current;
});
console.log(maxNumber);
