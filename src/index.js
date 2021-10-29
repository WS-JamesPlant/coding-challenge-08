
function getAllPhoneCombinations(inputStr, startString) {
    const keys = [
        '',         // 0
        '',         // 1
        'abc',      // 2
        'def',      // 3
        'ghi',      // 4
        'jkl',      // 5
        'mno',      // 6
        'pqrs',     // 7
        'tuv',      // 8
        'wxyz'      // 9
    ];

    // If no start string, create an empty string
    startString = startString === undefined ? '' : startString;

    // Get the first character of the input string
    const first = parseInt(inputStr[0]);

    // Start creating the result
    let result = [];

    // Split each letter in the key and add each combination, if there are more characters continue
    // to walk through the keys by passing a shortened string to this function using recursion
    keys[first].split('').forEach(function (letter) {
        if (inputStr.length > 1) {
            result = result.concat(getAllPhoneCombinations(inputStr.slice(1), startString + letter));
        } else {
            result.push(startString + letter);
        }
    });

    return result;
}


console.log(getAllPhoneCombinations('23'));
console.log(getAllPhoneCombinations('532'));