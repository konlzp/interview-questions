// String Compression. aaabbcccd -> a3b2c3d1

class Compress {
    static compress(str) {
        var onGoingChar = null;
        var onGoingLength = 0;
        var compressed = "";
        for (var i in str) {
            if (!onGoingChar || onGoingChar !== str[i]) {
                compressed = addToCompressString(
                    compressed, onGoingChar, onGoingLength);
                onGoingChar = str[i];
                onGoingLength = 0;
            }

            onGoingLength ++;
        }

        compressed = addToCompressString(
            compressed, onGoingChar, onGoingLength);

        if (compressed.length >= str.length) {
            return str;
        }

        return compressed;
    }
}

function addToCompressString(compressed, onGoingChar, onGoingLength) {
    if (!onGoingChar || !onGoingLength) {
        return compressed;
    }
    
    return compressed + onGoingChar + onGoingLength;
}

module.exports = Compress;