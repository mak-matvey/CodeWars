function findOdd(A) {
	for (let i = 0; i < A.length; i++) {
		const element = A[i]
		const elementCount = A.filter(el => el === element).length
		if (elementCount % 2 === 1) {
			return element
		}
	}
}