/** @format */

const path = require('path')
const fs = require('fs')

const midi_dir = 'media'
const json_file = 'index.json'

const directory = path.resolve(__dirname, midi_dir)
const output = path.resolve(__dirname, json_file)
const entries = fs.readdirSync(directory, { withFileTypes: true })

const array = []

for (const entry of entries) {
	if (entry.isFile() && entry.name.slice(-4) === '.mid') {
		array.push(entry.name)
	}
}

const object = {
	lastUpdated: new Date(),
	directory: midi_dir,
	length: array.length,
	entries: array
}

const json = JSON.stringify(object, null, '\t')
console.log(json)

// delete existing JSON
try {
	fs.unlinkSync(output)
} catch (e) {}

try {
	fs.writeFileSync(output, json, {
		encoding: 'utf-8',
		mode: 0o666
	})

	console.log('\n', '🎉 Generated index.json')
} catch (e) {
	console.log(e)
}
