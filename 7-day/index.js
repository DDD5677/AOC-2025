const fs = require('fs')
const example =
	`.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`
const example2 = `......................................................................S......................................................................
.............................................................................................................................................
......................................................................^......................................................................
.............................................................................................................................................
.....................................................................^.^.....................................................................
.............................................................................................................................................
....................................................................^...^....................................................................
.............................................................................................................................................
...................................................................^.^...^...................................................................
.............................................................................................................................................`

function partOne() {
	const inputStr = fs.readFileSync('./7-day/input.txt', 'utf-8')
	const input = inputStr.split('\n')
	const length = input[0].length + 1;
	let fallBalls = [length / 2 - 1]
	let sum = 0
	for (let i = 1; i < input.length; i++) {
		const newFallBaals = []
		for (const j of fallBalls) {
			if (input[i][j] == '^') {
				sum++
				fallBalls = fallBalls.filter(e => e != j)
				if (!newFallBaals.includes(j - 1)) newFallBaals.push(j - 1)
				if (!newFallBaals.includes(j + 1)) newFallBaals.push(j + 1)
			}
		}
		if (newFallBaals.length) {
			const all = [...fallBalls, ...newFallBaals];
			const uniqueElements = new Set(all);
			fallBalls = [...uniqueElements];
		}
	}
	console.log({ sum });
}

// partOne()

function partTwo() {
	const inputStr = fs.readFileSync('./7-day/input.txt', 'utf-8')
	// const inputStr = example
	const input = inputStr.split('\n')
	const length = input[0].length + 1;
	let fallBalls = [{ path: String(length / 2 - 1), index: length / 2 - 1 }]
	let sum = 0
	for (let i = 1; i < input.length; i++) {
		const newFallBaals = []
		for (const element of fallBalls) {
			const j = element.path
			const index = element.index
			// console.log({ i, j, index });
			if (input[i][index] == '^') {
				sum++
				// fallBalls = fallBalls.filter(e => e != j)
				newFallBaals.push({ path: j + '_' + (index - 1), index: index - 1 })
				newFallBaals.push({ path: j + '_' + (+index + 1), index: +index + 1 })
			} else {
				newFallBaals.push(element)
			}
		}
		if (newFallBaals.length) {
			fallBalls = newFallBaals;
			// console.log(i, fallBalls);
		}
		console.log({ i, length: fallBalls.length });
	}
	total = fallBalls.length
	console.log({ sum, total });

}

partTwo()