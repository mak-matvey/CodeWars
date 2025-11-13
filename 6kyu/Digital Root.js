function digitalRoot(n) {
	let sum = n

	while (sum > 9) {
		let digits = sum.toString().split('')
		let newSum = 0

		for (let i = 0; i < digits.length; i++) {
			newSum += parseInt(digits[i])
		}

		sum = newSum
	}

	return sum
}
