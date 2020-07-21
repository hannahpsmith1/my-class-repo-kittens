function Algo() {}

Algo.prototype.reverse = function(str) {
    const newString = this.str.split('').reverse().join('')
        return new Algo (newString);
     };
       


Algo.prototype.isPalindrome = function(str) {

};

Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
