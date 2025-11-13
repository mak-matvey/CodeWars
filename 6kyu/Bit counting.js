function countBits(n) {
	let count = 0

	const binary = n
		.toString(2)
		.split('')
		.forEach(item => {
			if (item.includes('1')) {
				count++
			}
		})

	return count
}
