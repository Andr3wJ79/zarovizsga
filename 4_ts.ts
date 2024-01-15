
function osszesOszto(num:number):number[]{
    var divisors: number[] = [];

    for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
  
    return divisors;
}

function  parosDarab(nums:number[]):number{
    var evenNumbers = nums.filter(num => num % 2 === 0);
    var numberOfEvenNumbers = evenNumbers.length;
    return numberOfEvenNumbers;
}

function  fuggvenyhivasPalindrom(textFunction:() => string): boolean{
        var text: string = textFunction();

        var reversedText: string = text.split('').reverse().join('');
        var isPalindrome: boolean = text === reversedText;

        return isPalindrome;
}