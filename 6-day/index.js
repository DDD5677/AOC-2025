const fs = require('fs')

function partOne() {
	const inputStr = fs.readFileSync('./6-day/input.txt', 'utf-8')
	const input = inputStr.split('\n').map(e => e.split(' ').filter(e => e != ""))
	let sum = 0
	for (let i = 0; i < input[0].length; i++) {
		const operation = input[input.length - 1][i]
		let value = +input[0][i]
		for (let j = 1; j < input.length - 1; j++) {
			const element = +input[j][i];
			switch (operation) {
				case '+': value += element; break;
				case '*': value *= element; break;
			}
		}
		sum += value
	}

	console.log({ sum });
}

partOne()

function findOperation(index, operations) {
	let operation = ''
	do {
		operation = operations[index]
		index--
	} while (operation == ' ');
	return operation
}

function partTwo() {
	const inputStr = fs.readFileSync('./6-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	const operations = input[input.length - 1]

	let sum = 0
	let box
	for (let j = input[0].length - 1; j >= 0; j--) {
		let element = ''
		for (let i = 0; i < input.length - 1; i++) {
			element += input[i][j]
		}
		if (element.trim() == '') {
			sum += box
			box = undefined
			continue
		}
		const value = Number(element.trim())
		if (!box) { box = value }
		else {
			const operation = findOperation(j, operations)
			if (operation == '+') { box += value }
			else { box *= value }
		}
	}

	console.log({ sum: sum + box });
}

partTwo()