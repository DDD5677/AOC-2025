const fs = require('fs')

function isFresh(ingredient, range) {
	const start = range.split('-')[0]
	const end = range.split('-')[1]
	if (end - ingredient >= 0 && ingredient - start >= 0) { return true }
	return false
}

function partOne() {
	const inputStr = fs.readFileSync('./5-day/input.txt', 'utf-8')
	const inputRanges = inputStr.split("\n\n")[0].split('\n')
	const inputIngredients = inputStr.split("\n\n")[1].split('\n')
	let count = 0
	for (const ingredient of inputIngredients) {
		for (const range of inputRanges) {
			if (isFresh(ingredient, range)) {
				count++
				break
			}
		}
	}
	console.log({ count });
}

partOne()

function partTwo() {
	const inputStr = fs.readFileSync('./5-day/input.txt', 'utf-8')
	const inputRanges = inputStr.split("\n\n")[0].split('\n')
	let freshList = []
	let count = 0
	for (let i = 0; i < inputRanges.length; i++) {
		const range = inputRanges[i]
		if (!range) { continue }
		let start = +range.split('-')[0]
		let end = +range.split('-')[1]
		let j = 0;
		while (j < inputRanges.length) {
			const nextRange = inputRanges[j]
			if (!nextRange) { j++; continue }
			const nextStart = +nextRange.split('-')[0]
			const nextEnd = +nextRange.split('-')[1]
			let isMerged = false
			if (end - nextStart >= 0 && nextEnd - end >= 0) { end = nextEnd; isMerged = true }
			if (nextEnd - start >= 0 && start - nextStart >= 0) { start = nextStart; isMerged = true }
			if (nextStart - start >= 0 && end - nextEnd >= 0) { isMerged = true }
			if (isMerged) {
				inputRanges[j] = '';
				j = i
			}
			j++
		}
		freshList.push({ start, end })
	}
	for (const fresh of freshList) {
		count += fresh.end - fresh.start + 1
	}
	console.log(count);
}

partTwo()