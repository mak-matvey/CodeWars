function solution(str, ending) {
	return str.slice(str.length - ending.length, str.length) === ending
}
