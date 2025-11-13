function getCount(str) {
	let num = 0
	let vowels = ['a', 'e', 'i', 'o', 'u']

	str.split('').forEach(letter => {
		vowels.includes(letter) ? num++ : ''
	})

	return num
}