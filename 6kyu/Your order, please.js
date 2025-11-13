function order(words) {
	const arrayOfWords = words.split(' ')
	let newWords = []
	let value = 1

	for (let i = 0; i < arrayOfWords.length; i++) {
		arrayOfWords.forEach(element => {
			if (element.includes(value.toString())) {
				newWords.push(element)
			}
		})

		value += 1
	}

	return newWords.join(' ')
}