function isPangram(string) {
	const charactersToRemove = [
		' ',
		'!',
		'.',
		',',
		';',
		':',
		'?',
		'@',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
	]
	let stringCopy = string
		.toLowerCase()
		.split('')
		.map(character => (charactersToRemove.includes(character) ? '' : character))
		.filter(element => element !== '')

	const letters = Array.from(new Set(stringCopy))

	return letters.length === 26
}
