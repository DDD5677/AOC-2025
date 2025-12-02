const fs = require('fs')

function findInvalid(range) {
	const [start, end] = range.split('-')
	if (start.length == end.length && start.length % 2 != 0) return []
	const invalids = []
	for (let i = +start; i <= +end; i++) {
		const length = String(i).length
		if (length % 2 != 0) { continue }
		const first = String(i).slice(0, length / 2)
		const second = String(i).slice(length / 2)
		if (first == second) { invalids.push(i) }
	}
	return invalids
}

function partOne() {
	const inputStr = fs.readFileSync('./2-day/input.txt', 'utf-8')
	const input = inputStr.split(',')
	let invalidIdSumm = 0
	for (const range of input) {
		const invalids = findInvalid(range)
		const summ = invalids.reduce((a, b) => a + b, 0)
		invalidIdSumm += summ
	}
	console.log({ invalidIdSumm });
}

partOne()

function findInvalid2(range) {
	const [start, end] = range.split('-')
	const invalids = []

	for (let i = +start; i <= +end; i++) {
		const length = String(i).length
		for (let divider = 1; divider < length; divider++) {
			if (length % divider != 0) { continue }
			const powerTen = 10 ** divider
			let num = i
			const candidates = []
			while (num) {
				const candidate = num % powerTen
				if (!candidates.includes(candidate)) { candidates.push(candidate) }
				num = Math.floor(num / powerTen)
			}
			if (candidates.length == 1 && !invalids.includes(i)) { invalids.push(i) }
		}
	}
	return invalids
}

function partTwo() {
	const inputStr = fs.readFileSync('./2-day/input.txt', 'utf-8')
	const input = inputStr.split(',')
	let invalidIdSumm = 0
	for (const range of input) {
		const invalids = findInvalid2(range)
		const summ = invalids.reduce((a, b) => a + b, 0)
		invalidIdSumm += summ
	}
	console.log({ invalidIdSumm });
}

partTwo()