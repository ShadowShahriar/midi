/** @format */

const path = require('path')
const fs = require('fs')

const ReadmeFileName = 'Readme.md'
const ReadmePath = path.resolve(__dirname, ReadmeFileName)

const ReadmeTemplate = path.resolve(__dirname, '.template', ReadmeFileName)
let ReadmeMask = fs.readFileSync(ReadmeTemplate, 'utf8')

// * read 'sources' and 'songs' keys from JSON file
const { sources, songs } = require('./sources.json')

// TODO replace these fields in Readme.md
const patterns = {
	sources: '${{sources}}',
	table: '${{table}}',
	date: '${{lastUpdated}}'
}

// * for Songs table
const TableHeader = [
	'| Title | Artist | Original Source | MIDI | Sheets |',
	'|---|---|---|---|---|'
].join('\n')

// * initiate the Songs table
let SongsTable = TableHeader + '\n'

let SourcesObject = {}
function readSourcesObject() {
	for (key in sources)
		SourcesObject[key] = {
			name: key,
			link: sources[key],
			count: 0 // * count is 0 when no MIDI reference is found from this source
		}
}

let SourcesObjectClone = {}
let SourcesMarkdown = ''
function addSourceLinks() {
	for (key in SourcesObjectClone) {
		let item = SourcesObjectClone[key]

		// * expected result: - [name](link) `count`
		SourcesMarkdown += `- [${item.name}](${item.link}) \`${item.count}\`\n`
	}

	ReadmeMask = ReadmeMask.replace(patterns.sources, SourcesMarkdown.trimEnd())
}

// * add song information to table from the 'songs' key
function addSongsTable() {
	for (key in songs) {
		let song = songs[key]

		// TODO enumerate the song's artist(s)
		let artists = song.artists
		let artistsarray = []
		for (artist in artists) {
			// if the 'artist' property have no value, it can't be hyperlinked
			// we'll add it as plain text
			if (!artists[artist]) artistsarray.push(artist)
			// else the 'artist' property must have a value
			// it'd be hyperlinked
			else artistsarray.push(`[${artist}](${artists[artist]})`)
		}

		// TODO enumerate the sources from where we have got the song
		let sources = song.source
		let sourcesarray = []
		for (source in sources) {
			sourcesarray.push(`[${source}](${sources[source]})`)
		}

		// TODO enumerate the sources from where we have got the MIDI files
		let midi = song.midi
		let midiarray = []
		for (item in midi) {
			// each item's value (midi[item]) is another array consisting
			// two items. The former is an ambiguous 'action'
			// e.g. "Converted with", "by", etc. and the latter one is the
			// link to the MIDI source.
			let info = midi[item]
			midiarray.push(`_${info[1]}_ [${item}](${info[0]})`)
			// if the SourceObject shares the key from the 'midi' object and
			// has the same value in the 'name' property, we have got a MIDI
			// reference from this source. Hence, we count how many
			// we have got.
			if (SourcesObject[item] && SourcesObject[item].name === item) {
				SourcesObject[item].count += 1
			}
		}

		// TODO enumerate sheets (PDF scores) for the MIDI files
		let sheets = song.sheets
		let sheetsresolve = ''
		let sheetsarray = []

		// if 'sheets' is a boolean, it means sheets are/ain't
		// available from this source.
		if (typeof sheets === 'boolean') sheetsresolve = sheets ? '✅ Available' : '❌ N/A'
		// else 'sheets' must be an object. We itemize the array in the
		// same way we did for 'midi' object.
		else {
			for (sheet in sheets) {
				let info = sheets[sheet]
				sheetsarray.push(`_${info[1]}_ [${sheet}](${info[0]})`)
				if (SourcesObject[sheet] && SourcesObject[sheet].name === sheet) {
					SourcesObject[sheet].count += 1
				}
			}
			sheetsresolve = sheetsarray.join('<br>')
		}

		// TODO print the Songs table
		SongsTable += [
			song.title,
			artistsarray.join('<br>'),
			sourcesarray.join('<br>'),
			midiarray.join('<br>'),
			sheetsresolve,
			'\n'
		].join(' | ')
	}

	ReadmeMask = ReadmeMask.replace(patterns.table, SongsTable.trimEnd())
}

function sortSourcesObject() {
	// ? from https://stackoverflow.com/a/1069840
	// ? CC BY-SA 4.0
	// ? https://creativecommons.org/licenses/by-sa/4.0/
	const sorted = Object.entries(SourcesObject)
		.sort(([, a], [, b]) => b.count - a.count)
		.reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

	SourcesObjectClone = sorted
}

function generateReadme() {
	try {
		fs.writeFileSync(ReadmePath, ReadmeMask)
		console.log('\n', '🎉 Generated Readme.json')
	} catch (e) {
		console.log(e)
	}
}

function start() {
	readSourcesObject()
	addSongsTable()
	sortSourcesObject()
	addSourceLinks()

	ReadmeMask = ReadmeMask.replace(patterns.date, new Date())

	generateReadme()
}

start()
