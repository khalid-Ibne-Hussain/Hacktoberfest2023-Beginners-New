var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }

    }
    return arr;
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0]

console.log(duplicateZeros(arr));
