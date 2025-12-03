const fs = require('fs')
const example = ['3221326322223112223252226442121132123233513132423222212223424224223542223321323211212225421221242243', '987654321111111', '811111111111119', '234234234234278', '818181911112111']

function findMaxJoltage(bank) {
	let max = 0
	for (let i = 0; i < bank.length - 1; i++) {
		for (let j = i + 1; j < bank.length; j++) {
			const candidate = Number(bank[i] + bank[j])
			if (candidate > max) { max = candidate }
		}
	}
	return max
}

function partOne() {
	const inputStr = fs.readFileSync('./3-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	let totalJoltage = 0
	for (const bank of input) {
		const joltage = findMaxJoltage(bank)
		totalJoltage += joltage
	}
	console.log({ totalJoltage });
}

partOne()

function findMaxJoltage2(bank) {
	let candidate = ''
	let start = 0
	for (let i = 0; i < 12; i++) {
		const end = bank.length - 11 + i
		const candidates = bank.slice(start, end).split('')
		let max = 0
		let maxIndex = 0
		for (const [index, value] of candidates.entries()) {
			if (value - max > 0) {
				max = value
				maxIndex = index
			}
		}
		start = start + maxIndex + 1
		candidate += String(max)
	}
	return Number(candidate)
}


function partTwo() {
	const inputStr = fs.readFileSync('./3-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	let totalJoltage = 0
	for (const bank of input) {
		const joltage = findMaxJoltage2(bank)
		totalJoltage += joltage
	}
	console.log({ totalJoltage });
}

partTwo()