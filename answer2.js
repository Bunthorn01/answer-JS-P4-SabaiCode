function filterUniqueValues(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 9, 5];
const uniqueNumbers = filterUniqueValues(numbers);
console.log(uniqueNumbers);
