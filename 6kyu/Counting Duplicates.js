function duplicateCount(text) {
	let duplicates = []
	const textCopy = text.toLowerCase()

	for (let i = 0; i < textCopy.length; i++) {
		const letterLength = textCopy.split('').filter(item => {
			return item === textCopy[i]
		}).length

		if (letterLength >= 2) {
			duplicates.push(textCopy[i])
		}
	}

	const duplicatesSet = new Set(duplicates)

	return Array.from(duplicatesSet).length
}
