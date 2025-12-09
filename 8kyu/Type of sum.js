function typeOfSum(a, b) {
	return typeof a === 'string' || typeof b === 'string' ? 'string' : 'number'
}