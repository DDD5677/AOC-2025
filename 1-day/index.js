const fs = require('fs')
function rotate(point, command) {
	const direction = command[0]
	const distance = Number(command.slice(1))

	if (direction == 'R') {
		point = (point + distance) % 100
	} else {
		const a = (point - distance) % 100
		point = a >= 0 ? a : a + 100
	}
	return point
}

function partOne() {
	let point = 50
	let password = 0
	const inputStr = fs.readFileSync('./1-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	for (const command of input) {
		point = rotate(point, command)
		if (point == 0) {
			password++
		}
	}
	console.log({ password });
}

partOne()

function rotate2(point, command) {
	const direction = command[0]
	const distance = Number(command.slice(1))
	let crosses = 0
	if (direction == 'R') {
		crosses = Math.floor((point + distance) / 100)
		point = (point + distance) % 100
	} else {
		crosses = point == 0 ? Math.floor(Math.abs(point - distance) / 100) : Math.floor(Math.abs(point - distance - 100) / 100)
		const a = (point - distance) % 100
		point = a >= 0 ? a : a + 100

	}
	return { point, crosses }
}

function partTwo() {
	let point = 50
	let password = 0
	const inputStr = fs.readFileSync('./1-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	for (const command of input) {
		const res = rotate2(point, command)
		point = res.point
		password += res.crosses
	}
	console.log({ password });
}

partTwo()