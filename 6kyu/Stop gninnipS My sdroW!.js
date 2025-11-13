function spinWords(string) {
	const words = string.split(' ')
	let result = []
	debugger

	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= 5) {
			result.push(reverseString(words[i]))
		} else {
			result.push(words[i])
		}
	}

	return result.join(' ')
}

function reverseString(string = '') {
	return string.split('').reverse().join('')
}