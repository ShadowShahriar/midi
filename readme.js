/** @format */

const path = require('path')
const fs = require('fs')

const ReadmeFileName = 'Readme.md'
const ReadmeTemplate = path.resolve(__dirname, '.template', ReadmeFileName)
const ReadmePath = path.resolve(__dirname, ReadmeFileName)

const patterns = {
	sources: '${{sources}}',
	table: '${{table}}'
}

const TableHeader = [
	'| Title | Artist | Original Source | MIDI | Sheets |',
	'|---|---|---|---|---|'
].join('\n')

const { sources, songs } = require('./sources.json')
let ReadmeMask = fs.readFileSync(ReadmeTemplate, 'utf8')

let SourcesMarkdown = ''

function addSourceLinks() {
	for (key in sources) SourcesMarkdown += `- [${key}](${sources[key]})\n`
	ReadmeMask = ReadmeMask.replace(patterns.sources, SourcesMarkdown.trimEnd())
}

let SongsTable = TableHeader + '\n'

function addSongsTable() {
	for (key in songs) {
		let song = songs[key]

		let artists = song.artists
		let artistsarray = []
		for (artist in artists) {
			artistsarray.push(`[${artist}](${artists[artist]})`)
		}

		let sources = song.source
		let sourcesarray = []
		for (source in sources) {
			sourcesarray.push(`[${source}](${sources[source]})`)
		}

		let midi = song.midi
		let midiarray = []
		for (item in midi) {
			midiarray.push(`_${midi[item][1]}_ [${item}](${midi[item][0]})`)
		}

		let sheets = song.sheets
		let sheetsresolve = ''
		let sheetsarray = []

		if (typeof sheets === 'boolean') {
			sheetsresolve = sheets ? '✅ Included' : '❌ N/A'
		} else {
			for (sheet in sheets) {
				sheetsarray.push(`_${sheets[sheet][1]}_ [${sheet}](${sheets[sheet][0]})`)
			}
			sheetsresolve = sheetsarray.join('<br>')
		}

		SongsTable += `| ${song.title} | ${artistsarray.join('<br>')} | ${sourcesarray.join(
			'<br>'
		)} | ${midiarray.join('<br>')} | ${sheetsresolve} |\n`
	}

	ReadmeMask = ReadmeMask.replace(patterns.table, SongsTable.trimEnd())
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
	addSourceLinks()
	addSongsTable()
	generateReadme()
}

start()
