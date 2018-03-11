// Rotate a matrix by 90 degrees

class Rotate{
    static rotate(matrix) {
        rotateLayer(matrix, 0);
        return matrix;
    }
}

function swap(matrix, pos1, pos2) {
    matrix[pos1[0]][pos1[1]] = matrix[pos1[0]][pos1[1]] ^ matrix[pos2[0]][pos2[1]];
    matrix[pos2[0]][pos2[1]] = matrix[pos1[0]][pos1[1]] ^ matrix[pos2[0]][pos2[1]];
    matrix[pos1[0]][pos1[1]] = matrix[pos1[0]][pos1[1]] ^ matrix[pos2[0]][pos2[1]];
}

function rotateLayer(matrix, index_offset) {
    var length = matrix.length;

    if (2 * index_offset >= length) {
        return;
    }

    for (var i = index_offset; i < length - index_offset - 1; ++i) {
        var leftUp = [index_offset, i];
        var rightUp = [i, length - index_offset - 1];
        var rightDown = [length - index_offset - 1, length - 1 - i];
        var leftDown = [length - 1 - i ,index_offset];
        swap(matrix, leftDown, leftUp);
        swap(matrix, rightDown, leftDown);
        swap(matrix, rightUp, rightDown);
    }

    rotateLayer(matrix, index_offset + 1);
}

console.log(Rotate.rotate([[1,2,3], [1,2,3], [1,2,3]]));
console.log(Rotate.rotate([[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]]));