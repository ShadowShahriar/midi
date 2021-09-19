<!-- @format -->
<!-- @lastUpdated ${{lastUpdated}} -->

# MIDI files

These are the MIDI files of some of my favorite songs I'm using to experiment with a [Tone.js][1] project. I _borrowed_ these from the YouTube channels that provided free MIDI files. I do not own any of them. With that said, here is the list of sources where these files were collected from.

## Sources

${{sources}}

## Songs

${{table}}

# Contribute

As I mentioned earlier, I am collecting midi files to work with a [Tone.js][1] extension. The more diversity we get, the better. This is why I need your help.

If you encounter freeware or shareware midi, you can contribute to this project. Place the `.mid` file to `midi` directory.

You also need to put an entry to `sources.json` file to save the original sources. The JSON file is structured like the one below.

```JSON
{
	"sources": {
		[key]: [value],
		...
	},
	"songs": [
		...
	]
}
```

Use the following object shape in the `songs` key:

```JSON
{
	"songs": [
				{
			"title": "${song_title}",
			"artists": {
				"${artist_name_1}": "${artist_link_1}",
				["${artist_name_2}": "${artist_link_2}"],
				...
			},
			"source": {
				"Official Lyric Video": "${link}",
				["Official Music Video": "${link}"],
				["Official Audio": "${link}"],
				["Official NCS Release": "${link}"],
				["${provider_or_channel_name}": "${link}"],
				...
			},
			"midi": {
				"${provider_or_channel_name}": ["${link}", "by"],
				...
			},
			"sheets": {
				"${provider_or_channel_name}": ["${link}", "by"],
				...
			}
		}
	]
}
```

-   `${property_or_value}` are variables and would be replaced manually with their appropriate meaning.

-   The properties of `artists` can have `null` value if there is no direct link.

-   `sheets` can be a `boolean` or an `object`.

-   `["property": "value"]` entries are optional, yet all keys are required to have at least one object, as shown.

If the source doesn't exist in the `sources` key, you might put an entry after its name:

```JSON
{
	"sources": {
		"${provider_or_channel_name}": "${link}",
		...
	}
}
```

## Naming convention

We rename the `*.mid` files using the following outline...

```
${source_acronym}_${artists}_${title}.mid
```

...and it is done so we can skim through the list, knowing where to look for.

# License

-   The source code is licensed under [MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
-   MIDI files (`media/*.mid`) belong to their original authors as listed in the [Songs table](#songs). I am using these for a [Tone.js][1] project for educational purposes that falls under the terms of [fair use](https://en.wikipedia.org/wiki/Fair_use).

[1]: https://github.com/Tonejs/Tone.js
