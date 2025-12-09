function highAndLow(numbers) {
	const numbersCopy = numbers.split(' ').map(number => Number(number))
	const max = Math.max(...numbersCopy)
	const min = Math.min(...numbersCopy)

	return `${max} ${min}`
}
