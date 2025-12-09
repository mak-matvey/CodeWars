function moveZeros(arr) {
	let zerosArray = []
	let anotherOneArray = []

	arr.forEach(element => {
		if (element === 0) {
			zerosArray.push(element)
		} else {
			anotherOneArray.push(element)
		}
	})

	return anotherOneArray.concat(zerosArray)
}