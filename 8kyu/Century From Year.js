function century(year) {
	return year % 10 == 0 ? year / 100 : Math.trunc(year / 100) + 1
}
// alternate
// function century = (year) => Math.ceil(year / 100)
