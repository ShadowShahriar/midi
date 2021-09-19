<!-- @format -->
<!-- @lastUpdated Sun Sep 19 2021 10:19:16 GMT+0000 (Coordinated Universal Time) -->

# MIDI files

These are the MIDI files of some of my favorite songs I'm using to experiment with a [Tone.js][1] project. I _borrowed_ these from the YouTube channels that provided free MIDI files. I do not own any of them. With that said, here is the list of sources where these files were collected from.

## Sources

- [AsdKeys](https://www.youtube.com/c/AsdKeys)
- [Cosmic PIANO](https://www.youtube.com/c/CosmicPIANO)
- [Gluton](https://www.youtube.com/c/GlutonOfficial)
- [Allerlei von Nicolai - No Copyright Music](https://www.youtube.com/channel/UC_bcboyEwTxpEyM-fuCjLkA)
- [Free Piano Tutorials](https://www.youtube.com/channel/UCBlE6pjsULp5gA7vl8-4F4A)
- [FMM Music](https://www.youtube.com/channel/UC6wnnyFjmPc4KJU1n_mFBDw)
- [Kendrik Kanata](https://www.youtube.com/channel/UCG3c_BxX3MmCIQnEjkJiX8Q)
- [Misha Kokh](https://www.youtube.com/c/MishaKokh)
- [sakura swann](https://www.youtube.com/user/sevenseven31)
- [tastyFrMusic](https://www.youtube.com/channel/UC4Z7BlEROblloYmTKEU1Zew)
- [PIANO MIDI](https://www.youtube.com/channel/UC3mb8-iIHpSEE8aCzMDgeTg)
- [Piano Tutorial](https://www.youtube.com/channel/UCMlZ4aOHBJnPGJAM5s-7b4w)
- [BGP Harmony](https://www.youtube.com/c/BGPHarmony)

## Songs

| Title | Artist | Original Source | MIDI | Sheets |
|---|---|---|---|---|
| Way Back Home (Sam Feldt Edit) | [SHAUN](https://www.youtube.com/c/SHAUNthehuman)<br>[Conor Maynard](https://www.youtube.com/c/ConorMaynard) | [Official Lyric Video](https://youtu.be/amOSaNX7KJg)<br>[WaveMusic (Lyrics)](https://youtu.be/1kehqCLudyg) | _Converted with_ [MuseScore](https://musescore.org) | _by_ [Piano Tutorial](https://youtu.be/3Sp4dW-JdJE) |
| Jackpot (Jackpot EP Track 1) | [TheFatRat](https://www.youtube.com/c/TheFatRat) | [Official Audio](https://youtu.be/kL8CyVqzmkc) | _by_ [tastyFrMusic](https://youtu.be/A13Sa_bIuKY) | ✅ Available |
| Permission to Dance | BTS (방탄소년단)<br>[HYBE LABELS](https://www.youtube.com/c/HYBELABELS) | [Official Music Video](https://youtu.be/CuklIb9d3fI) | _by_ [PIANO MIDI](https://youtu.be/7MHfb9HB3GA) | ❌ N/A |
| Dynamite | BTS (방탄소년단)<br>[HYBE LABELS](https://www.youtube.com/c/HYBELABELS) | [Official Music Video](https://youtu.be/gdZLi9oWNZg) | _by_ [Free Piano Tutorials](https://youtu.be/KyYaCtLsAAk) | ✅ Available |
| Memories | [Maroon 5](https://www.youtube.com/user/Maroon5) | [Official Music Video](https://youtu.be/SlPhMPnQ58k) | _by_ [Free Piano Tutorials](https://youtu.be/TdacNfWymGQ)<br>_by_ [Cosmic PIANO](https://youtu.be/5OwchavoI0s)<br>_by_ [Kendrik Kanata](https://youtu.be/YBGUnu6Iog8)<br>_by_ [Misha Kokh](https://youtu.be/_3MNRYZWpmU) | ✅ Available |
| Firefly pt II | [Jim Yosef](https://www.youtube.com/c/JimYosef)<br>[STARLYTE](https://www.youtube.com/c/Starlyte) | [Official Music Video](https://youtu.be/0fB4-xDgVc4)<br>[Official NCS Release](https://youtu.be/Q7E4Hiqe1s4) | _by_ [BGP Harmony](https://youtu.be/sBnPmRPAyBI) | ✅ Available |
| Where We Started | [Lost Sky](https://soundcloud.com/lostskydiary)<br>[Jex](https://soundcloud.com/jordanmillermusic-1) | [Official NCS Release](https://youtu.be/U9pGr6KMdyg) | _by_ [FMM Music](https://youtu.be/Kg8zA6sM85U) | ❌ N/A |
| Sparkle (from: Your Name) | [Your Name (album)](https://en.wikipedia.org/wiki/Your_Name_(album)) | [English Cover](https://youtu.be/0FW6ddWwhy0) | _by_ [Cosmic PIANO](https://youtu.be/AbHJ1BokCnI) | ✅ Available |
| You | [Alex Skrindo](https://www.youtube.com/c/AlexSkrindo)<br>[Axol](https://www.youtube.com/c/Axolmusic) | [Official Audio](https://youtu.be/jWE4FSlECUg)<br>[Official NCS Release](https://youtu.be/sA_p0rQtDXE) | _by_ [Gluton](https://youtu.be/V7dy35ovtj0) | ❌ N/A |

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
