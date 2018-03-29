/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var pos = [0, 0];
    for (var i = 0; i < moves.length; ++i) {
        switch(moves[i]) {
            case 'U':
                pos[0] --;
                break;
            case 'D':
                pos[0] ++;
                break;
            case 'L':
                pos[1] --;
                break;
            case 'R':
                pos[1] ++;
                break;
        }
    }

    return pos[0] === 0 && pos[1] === 0;
};