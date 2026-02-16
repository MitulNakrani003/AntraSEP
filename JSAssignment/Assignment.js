
//Question 1
function q1ReverseNumber(inputNumber) {
    let stringNumber = String(inputNumber);
    return Number(stringNumber.split("").reverse().join(""));
}
console.log("Answer 1")
console.log(q1ReverseNumber(32243))
console.log("")

//Quetion 2
function q2CheckPalindrome(inputString) {
    if (inputString.length == 0) {
        return true;
    }
    let reversedString = inputString.split("").reverse().join("");
    return inputString === reversedString;
}
console.log("Answer 2")
console.log(q2CheckPalindrome("madam"))
console.log(q2CheckPalindrome("mitul"))
console.log("")

//Question 3
function q3AllCombinationsOfString(inputString) {
    let combinations = new Set();
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j <= inputString.length; j++) {
            combinations.add(inputString.slice(i, j));
        }
    }
    return combinations;
}
console.log("Answer 3")
console.log(q3AllCombinationsOfString("madam"))
console.log(q3AllCombinationsOfString("dog"))
console.log("")

//Question 4
function q4SortString(inputString) {
    return inputString.split("").sort().join("");
}
console.log("Answer 4")
console.log(q4SortString("webmaster"))
console.log(q4SortString("hello"))
console.log("")

//Question 5
function q5UpperFirstChar(inputString) {
    let res = inputString.split(" ")
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    return res.join(" ")
}
console.log("Answer 5")
console.log(q5UpperFirstChar("the quick brown fox jumps over the lazy fog"))
console.log("")

//Question 6
function q6LongestInString(inputString) {
    let tillMax = 0;
    let maxlenstring = 0;
    let splittedString = inputString.split(" ");
    for (let i = 0; i < splittedString.length; i++) {
        if (splittedString[i].length > tillMax) {
            maxlenstring = splittedString[i]
            tillMax = splittedString[i].length
        }
    }
    return maxlenstring
}
console.log("Answer 6")
console.log(q6LongestInString("Web Development Tutorial"))
console.log("")

//Question 7
function q7CountWovels(inputString) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count = 0
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            count++;
        }
    }
    return count;
}
console.log("Answer 7")
console.log(q7CountWovels("The Quick Brown fox"))
console.log("")

//Question 8
function q8CheckPrime(inputNumber) {
    if (inputNumber < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) return false;
    }
    return true;
}
console.log("Answer 8")
console.log(q8CheckPrime(7))
console.log(q8CheckPrime(2))
console.log(q8CheckPrime(10))
console.log("")

//Question 9
function q9CheckType(argument) {
    return typeof argument
}
console.log("Answer 9")
console.log(q9CheckType("Hello"))
console.log(q9CheckType(2))
console.log(q9CheckType(null))
console.log(q9CheckType(undefined))
console.log("")

//Question 10
function q10IdentityMatrix(rows) {
    let returnMatrix = []
    for (let i = 0; i < rows; i++) {
        let currRow = []
        for (let j = 0; j < rows; j++) {
            if (i === j) {
                currRow.push(1)
            }
            else {
                currRow.push(0)
            }
        }
        returnMatrix.push(currRow)
    }
    return returnMatrix
}
console.log("Answer 10")
console.log(q10IdentityMatrix(6))
console.log("")

//Question 11
function q11SecondLowestAndGreatest(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    return [sortedArray[1], sortedArray[sortedArray.length - 2]];
}
console.log("Answer 11")
console.log(q11SecondLowestAndGreatest([1, 2, 3, 4, 5]))
console.log(q11SecondLowestAndGreatest([10, 20, 30, 40, 50]))
console.log("")

//Question 12
function q12CheckPerfectNumber(inputNumber) {
    let sum = 0;
    for (let i = 1; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            sum += i;
        }
    }
    return sum === inputNumber;
}
console.log("Answer 12")
console.log(q12CheckPerfectNumber(6))
console.log(q12CheckPerfectNumber(28))
console.log(q12CheckPerfectNumber(10))
console.log("")

//Question 13
function q13ComputeFactors(inputNumber) {
    let factors = []
    for (let i = 1; i <= inputNumber/2; i++){
        if (inputNumber % i === 0) {
            factors.push(i)
        }
    }
    factors.push(inputNumber)
    return factors

}
console.log("Answer 13")
console.log(q13ComputeFactors(6))
console.log(q13ComputeFactors(12))
console.log("")

//Question 14
function q14AmountToCoins(inputAmount) {
    let coins = [25, 10, 5, 2, 1]
    let result = []
    for (let i = 0; i < coins.length; i++) {
        while (inputAmount >= coins[i]) {
            result.push(coins[i])
            inputAmount -= coins[i]
        }
    }
    return result
}
console.log("Answer 14")
console.log(q14AmountToCoins(46))
console.log(q14AmountToCoins(23))
console.log("")

//Question 15
function q15CalculateExponent(b,n) {
    return BigInt(b) ** BigInt(n)
}
console.log("Answer 15")
console.log(q15CalculateExponent(2,5))
console.log(q15CalculateExponent(10,2))
console.log("")

//Question 16 
function q16GetUniqueChars(inputString) {
    let uniqueSet = new Set();
    for (let i  = 0; i < inputString.length; i++) {
        if (inputString[i] == " ") {
            continue
        }
        uniqueSet.add(inputString[i])
    }
    return [...uniqueSet].join('')
}
console.log("Answer 16")
console.log(q16GetUniqueChars("Mitul Nakrani"))
console.log(q16GetUniqueChars("the quick brown fox jumps over the lazy dog"))
console.log("")

//Question 17
function q17OccurencesOfLetter(inputstring) {
    let freqmap = new Map();
    for (let i = 0; i < inputstring.length; i++) {
        if (freqmap.has(inputstring[i])) {
            freqmap.set(inputstring[i], freqmap.get(inputstring[i]) + 1)
        }
        else {
            freqmap.set(inputstring[i], 1)
        }
    }
    return freqmap
}
console.log("Answer 17")
console.log(q17OccurencesOfLetter("Mitul Nakrani"))
console.log(q17OccurencesOfLetter("the quick brown fox jumps over the lazy dog"))
console.log("")

//Question 18
function q18BinarySearchArrays(inputArray, searchValue) {
    let sortedArray = inputArray.sort((a,b)=> a-b)
    function recursiveBinarySearch(sortedArr, Value) {
        if (sortedArr.length === 0) return false;
        let midpoint = parseInt(sortedArr.length / 2)
        if (sortedArr[midpoint] === Value) {
            return true
        }
        else if (sortedArr[midpoint] < Value){
            return recursiveBinarySearch(sortedArr.slice(midpoint+1),Value)
        }
        else {
            return recursiveBinarySearch(sortedArr.slice(0,midpoint),Value)
        }
    }
    return recursiveBinarySearch(sortedArray,searchValue)
}
console.log("Answer 18")
console.log(q18BinarySearchArrays([2,3,6,8,1,0,7,10],10))
console.log("")

//Question 19
function q19LargerArrayElements(givenArray, target) {
    let retrunArr = []
    for (let i  = 0; i < givenArray.length; i++) {
        if (givenArray[i]>target){
            retrunArr.push(givenArray[i])
        }
    }
    return retrunArr
}
console.log("Answer 19")
console.log(q19LargerArrayElements([2,3,6,8,1,0,7,10],6))
console.log("")

//Question 20
function q20GenerateRandomString(numberOfChars) {
    let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let sampleArray = sample.split("")
    let returnArray = []
    for (let i = 0 ; i < numberOfChars; i++) {
        returnArray.push(sampleArray[Math.floor(Math.random() * sampleArray.length)])
    }
    return returnArray.join("")
}
console.log("Answer 20")
console.log(q20GenerateRandomString(6))
console.log(q20GenerateRandomString(15))
console.log("")


//Question 21
function q21GetSubSetsOfLen(inputArray, subsetLength) {
    let result = []
    function backtrack(start, path) {
        if (path.length === subsetLength) {
            result.push(path)
            return
        }
        for (let i = start; i < inputArray.length; i++) {
            backtrack(i + 1, path.concat(inputArray[i]))
        }
    }
    backtrack(0, [])
    return result
}  
console.log("Answer 21")
console.log(q21GetSubSetsOfLen([1,2,3,4],2))
console.log(q21GetSubSetsOfLen(['a','b','c'],2))
console.log("")

//Question 22
function q22CountLetterOccurences(inputString, letter) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log("Answer 22")
console.log(q22CountLetterOccurences("Mitul Nakrani", "a"))
console.log(q22CountLetterOccurences("the quick brown fox jumps over the lazy dog", "o"))
console.log("")

//Question 23
function q23FirstnonRepeatedChar(inputString) {
    let charCount = new Map();
    for (let i = 0; i < inputString.length; i++) {
        if (charCount.has(inputString[i])) {
            charCount.set(inputString[i], charCount.get(inputString[i]) + 1)
        }
        else {
            charCount.set(inputString[i], 1)
        }
    }
    for (let [key, value] of charCount) {
        if (value === 1) {
            return key;
        }
    }
    return null;
}
console.log("Answer 23")
console.log(q23FirstnonRepeatedChar("mitulnakrani"))
console.log(q23FirstnonRepeatedChar("thequickbrownfoxjumpsoverthelazydog"))
console.log("")

//Question 24
function q24BubbleSort(inputArray) {
    let arr = inputArray.slice()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log("Answer 24")
console.log(q24BubbleSort([64, 34, 25, 12, 22, 11, 90]))
console.log(q24BubbleSort([5,2,9,1,5,6]))
console.log("")

//Question 25
function q25LongestCountryName(countryNames) {
    let longestName = "";
    for (let i = 0; i < countryNames.length; i++) {
        if (countryNames[i].length > longestName.length) {
            longestName = countryNames[i]
        }
    }
    return longestName
}
console.log("Answer 25")
console.log(q25LongestCountryName(["Australia", "Germany", "United States of America", "India"]))
console.log(q25LongestCountryName(["China", "Brazil", "Russia", "South Africa"]))
console.log("")

//Question 26
function q26LongestSubstringWithoutRepeatingChars(inputString) {
    let start = 0
    let longest = '';
    const seen = new Map();

    for (let end = 0; end < inputString.length; end++) {
        const char = inputString[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);
        if (end - start + 1 > longest.length) {
            longest = inputString.slice(start, end + 1);
        }
    }
    return longest;
}
console.log("Answer 26")
console.log(q26LongestSubstringWithoutRepeatingChars("abcabcbb"))
console.log(q26LongestSubstringWithoutRepeatingChars("bbbbb"))
console.log(q26LongestSubstringWithoutRepeatingChars("pwwkew"))
console.log("")

//Question 27
function q27LongestPalindromeSubstring(inputString) {
    let longest = '';
    for (let i = 0; i < inputString.length; i++) {
        // Odd length palindromes
        let left = i, right = i;
        while (left >= 0 && right < inputString.length && inputString[left] === inputString[right]) {
            if (right - left + 1 > longest.length) {
                longest = inputString.slice(left, right + 1);
            }
            left--;
            right++;
        }
        // Even length palindromes
        left = i, right = i + 1;
        while (left >= 0 && right < inputString.length && inputString[left] === inputString[right]) {
            if (right - left + 1 > longest.length) {
                longest = inputString.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return longest;
}
console.log("Answer 27")
console.log(q27LongestPalindromeSubstring("babad"))
console.log(q27LongestPalindromeSubstring("cbbd"))
console.log(q27LongestPalindromeSubstring("a"))
console.log("")

//Question 28
function q28PassJavascriptFunctionAsParameter(func) {
    return func();
}
console.log("Answer 28")
console.log(q28PassJavascriptFunctionAsParameter(() => "Hello, World!"))
console.log(q28PassJavascriptFunctionAsParameter(() => 60))
console.log("")

//Question 29
function q29GetFunctionName(func) {
    return func.name || "Anonymous function";
}
console.log("Answer 29")
console.log(q29GetFunctionName(function testFunc() { }))
console.log(q29GetFunctionName(() => {}))
console.log("")