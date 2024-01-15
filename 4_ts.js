function osszesOszto(num) {
    var divisors = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
function parosDarab(nums) {
    var evenNumbers = nums.filter(function (num) { return num % 2 === 0; });
    var numberOfEvenNumbers = evenNumbers.length;
    return numberOfEvenNumbers;
}
function fuggvenyhivasPalindrom(textFunction) {
    var text = textFunction();
    var reversedText = text.split('').reverse().join('');
    var isPalindrome = text === reversedText;
    return isPalindrome;
}
