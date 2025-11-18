function fakeBin(x) {
	x = x.split('')

	const xMappedString = x.map(element => (Number(element) < 5 ? 0 : 1)).join('')

	return xMappedString
}
