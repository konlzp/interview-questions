function quickSort(array) {
    partition(array, 0, array.length - 1);
}

function partition(array, start, end) {
    if (start >= end) {
        return;
    }
    var i, j;
    for (i = start, j = start; i < end; ++i) {
        if (array[i] < array[end]) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end, j);

    partition(array, start, j - 1);
    partition(array, j + 1, end);
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var a = [3,5,1,2,6,12,8];
quickSort(a);
console.log(a);