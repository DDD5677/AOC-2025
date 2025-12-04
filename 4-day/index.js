const fs = require('fs')

function findAccessedPaper(map) {
	let res = 0
	const length = map.indexOf('\n') + 1
	for (let i = 0; i < map.length; i++) {
		if (map[i] == '.' || map[i] == '\n') continue
		let count = 0
		if (map[i - 1] && map[i - 1] == '@') count++
		if (map[i + 1] && map[i + 1] == '@') count++
		if (map[i - 1 - length] && map[i - 1 - length] == '@') count++
		if (map[i - length] && map[i - length] == '@') count++
		if (map[i + 1 - length] && map[i + 1 - length] == '@') count++
		if (map[i - 1 + length] && map[i - 1 + length] == '@') count++
		if (map[i + length] && map[i + length] == '@') count++
		if (map[i + 1 + length] && map[i + 1 + length] == '@') count++
		if (count < 4) res++
	}
	return res
}

function partOne() {
	const input = fs.readFileSync('./4-day/input.txt', 'utf-8')
	const accessedPaper = findAccessedPaper(input)

	console.log({ accessedPaper });
}

partOne()

function findAccessedPaper2(map) {
	let res = 0
	const removedList = []
	const length = map.indexOf('\n') + 1
	for (let i = 0; i < map.length; i++) {
		if (map[i] == '.' || map[i] == '\n') continue
		let count = 0
		if (map[i - 1] && map[i - 1] == '@') count++
		if (map[i + 1] && map[i + 1] == '@') count++
		if (map[i - 1 - length] && map[i - 1 - length] == '@') count++
		if (map[i - length] && map[i - length] == '@') count++
		if (map[i + 1 - length] && map[i + 1 - length] == '@') count++
		if (map[i - 1 + length] && map[i - 1 + length] == '@') count++
		if (map[i + length] && map[i + length] == '@') count++
		if (map[i + 1 + length] && map[i + 1 + length] == '@') count++
		if (count < 4) {
			res++
			removedList.push(i)
		}
	}
	return { count: res, removedList }
}

function partTwo() {
	const inputStr = fs.readFileSync('./4-day/input.txt', 'utf-8')
	let input = inputStr.split('')
	let count = 0
	let accessedPaper = 0
	do {
		const result = findAccessedPaper2(input)
		for (const index of result.removedList) {
			input[index] = "."
		}
		count = result.count
		accessedPaper += count
	} while (count);

	console.log({ accessedPaper });
}

partTwo()