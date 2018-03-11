var CheckPalindrome = require("../chapter2/2.6");
var LinkedList = require("../utils/linkedList");

describe('CheckPalindrome', () => {
    it('check palindrome 1', () => {
        var linkedList = new LinkedList([1,2,3,3,2,1]);

        expect(CheckPalindrome.checkPalindrome(linkedList)).toBe(true);
    });

    it('check palindrome 2', () => {
        var linkedList = new LinkedList([1,2,3,2,1]);

        expect(CheckPalindrome.checkPalindrome(linkedList)).toBe(false);
    });

    it('check palindrome 3', () => {
        var linkedList = new LinkedList([1,2,3,4,2,1]);

        expect(CheckPalindrome.checkPalindrome(linkedList)).toBe(false);
    });
});