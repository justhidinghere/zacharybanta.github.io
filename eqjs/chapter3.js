// Exercise: Minimum
//
function min(numOne, numTwo) {
	if (numOne > numTwo) {
    	return numTwo;
    } else {
    	return numOne;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Exercise: Recursion
//
function isEven(num) {
	if (num < 0) {
    	num = -num
    }
	var value = num;
	if (num === 0) {
    	return true;
    } else if (num === 1) {
   		return false;
   	} else {
   		num -= 2;
    	return isEven(num);
   	}
}

console.log(isEven(10));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-2));
// → ??


// Exercise: Bean Counting
//
function countBs(string) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
    	if (string[i] === 'B') {
        	count++;
        }
    }
	return count;
}

function countChar(string, char) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
    	if (string[i] === char) {
        	count++;
        }
    }
	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
