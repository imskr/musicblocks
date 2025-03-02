// Copyright (c) 2016-19 Walter Bender
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the The GNU Affero General Public
// License as published by the Free Software Foundation; either
// version 3 of the License, or (at your option) any later version.
//
// You should have received a copy of the GNU Affero General Public
// License along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA

const POLYCOUNT = 3;

var NOISENAMES = [
    //.TRANS: white noise synthesizer
    [_('white noise'), 'noise1', 'images/synth.svg', 'electronic'],
    //.TRANS: brown noise synthesizer
    [_('brown noise'), 'noise2', 'images/synth.svg', 'electronic'],
    //.TRANS: pink noise synthesizer
    [_('pink noise'), 'noise3', 'images/synth.svg', 'electronic'],
];

var VOICENAMES = [
    //.TRANS: musical instrument
    [_('piano'), 'piano', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('violin'), 'violin', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('cello'), 'cello', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('bass'), 'bass', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('guitar'), 'guitar', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('acoustic guitar'), 'acoustic guitar', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('flute'), 'flute', 'images/voices.svg', 'wind'],
    //.TRANS: musical instrument
    [_('clarinet'), 'clarinet', 'images/voices.svg', 'wind'],
    //.TRANS: musical instrument
    [_('saxophone'), 'saxophone', 'images/voices.svg', 'wind'],
    //.TRANS: musical instrument
    [_('tuba'), 'tuba', 'images/voices.svg', 'wind'],
    //.TRANS: musical instrument
    [_('trumpet'), 'trumpet', 'images/voices.svg', 'wind'],
    //.TRANS: musical instrument
    [_('banjo'), 'banjo', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('koto'), 'koto', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('dulcimer'), 'dulcimer', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('electric guitar'), 'electric guitar', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('bassoon'), 'bassoon', 'images/voices.svg', 'string'],
    //.TRANS: musical instrument
    [_('celeste'), 'celeste', 'images/voices.svg', 'string'],
    //.TRANS: xylophone musical instrument
    [_('xylophone'), 'xylophone', 'images/8_bellset_key_6.svg', 'precussion'],
    //.TRANS: polytone synthesizer
    [_('electronic synth'), 'electronic synth', 'images/synth.svg', 'electronic'],
    //.TRANS: simple monotone synthesizer
    // [_('simple 1'), 'simple 1', 'images/synth.svg', 'electronic'],
    //.TRANS: simple monotone synthesizer
    // [_('simple-2'), 'simple 2', 'images/synth.svg', 'electronic'],
    //.TRANS: simple monotone synthesizer
    // [_('simple-3'), 'simple 3', 'images/synth.svg', 'electronic'],
    //.TRANS: simple monotone synthesizer
    // [_('simple-4'), 'simple 4', 'images/synth.svg', 'electronic'],
    //.TRANS: sine wave
    [_('sine'), 'sine', 'images/synth.svg', 'electronic'],
    //.TRANS: square wave
    [_('square'), 'square', 'images/synth.svg', 'electronic'],
    //.TRANS: sawtooth wave
    [_('sawtooth'), 'sawtooth', 'images/synth.svg', 'electronic'],
    //.TRANS: triangle wave
    [_('triangle'), 'triangle', 'images/synth.svg', 'electronic'],
    //.TRANS: customize voice
    [_('custom'), 'custom', 'images/synth.svg', 'electronic'],
    //.TRANS: vibraphone musical instrument
    [_('vibraphone'), 'vibraphone', 'images/synth.svg', 'electronic'],
];

// drum symbols are from
// http://lilypond.org/doc/v2.18/Documentation/notation/percussion-notes
var DRUMNAMES = [
    //.TRANS: musical instrument
    [_('snare drum'), 'snare drum', 'images/snaredrum.svg', 'sn', 'drum'],
    //.TRANS: musical instrument
    [_('kick drum'), 'kick drum', 'images/kick.svg', 'hh', 'drum'],
    //.TRANS: musical instrument
    [_('tom tom'), 'tom tom', 'images/tom.svg', 'tomml', 'drum'],
    //.TRANS: musical instrument
    [_('floor tom'), 'floor tom tom', 'images/floortom.svg', 'tomfl', 'drum'],
    //.TRANS: a drum made from an inverted cup
    [_('cup drum'), 'cup drum', 'images/cup.svg', 'hh', 'drum'],
    //.TRANS: musical instrument
    [_('darbuka drum'), 'darbuka drum', 'images/darbuka.svg', 'hh', 'drum'],
    //.TRANS: musical instrument
    [_('taiko'), 'japanese drum', 'images/tom.svg', 'hh', 'drum'],
    //.TRANS: musical instrument
    [_('hi hat'), 'hi hat', 'images/hihat.svg', 'hh', 'bell'],
    //.TRANS: a small metal bell
    [_('ride bell'), 'ride bell', 'images/ridebell.svg', 'rb', 'bell'],
    //.TRANS: musical instrument
    [_('cow bell'), 'cow bell', 'images/cowbell.svg', 'cb', 'bell'],
    //.TRANS: musical instrument
    [_('triangle bell'), 'triangle bell', 'images/trianglebell.svg', 'tri', 'bell'],
    //.TRANS: musical instrument
    [_('finger cymbals'), 'finger cymbals', 'images/fingercymbals.svg', 'cymca', 'bell'],
    //.TRANS: musical instrument
    // [_('japanese bell'), 'japanese bell', 'images/cowbell.svg', 'hh', 'bell'],
    //.TRANS: a musically tuned set of bells
    [_('chime'), 'chime', 'images/chime.svg', 'cymca', 'bell'],
    //.TRANS: a musical instrument
    [_('gong'), 'gong', 'images/gong.svg', 'cymca', 'bell'],
    //.TRANS: sound effect
    [_('clang'), 'clang', 'images/clang.svg', 'cymca', 'effect'],
    //.TRANS: sound effect
    [_('crash'), 'crash', 'images/crash.svg', 'cymca', 'effect'],
    //.TRANS: sound effect
    [_('bottle'), 'bottle', 'images/bottle.svg', 'hh', 'effect'],
    //.TRANS: sound effect
    [_('clap'), 'clap', 'images/clap.svg', 'hc', 'effect'],
    //.TRANS: sound effect
    [_('slap'), 'slap', 'images/slap.svg', 'vibs', 'effect'],
    //.TRANS: sound effect
    [_('splash'), 'splash', 'images/splash.svg', 'hh', 'effect'],
    //.TRANS: sound effect
    [_('bubbles'), 'bubbles', 'images/bubbles.svg', 'hh', 'effect'],
    //.TRANS: sound effect
    [_('raindrop'), 'raindrop', 'images/bubbles.svg', 'hh', 'effect'],
    //.TRANS: animal sound effect
    [_('cat'), 'cat', 'images/cat.svg', 'hh', 'animal'],
    //.TRANS: animal sound effect
    [_('cricket'), 'cricket', 'images/cricket.svg', 'hh', 'animal'],
    //.TRANS: animal sound effect
    [_('dog'), 'dog', 'images/dog.svg', 'hh', 'animal'],
    //.TRANS: animal sound effect
    [_('duck'), 'duck', 'images/duck.svg', 'hh', 'animal'],
];

// Some "drums" are sound effects.
var EFFECTSNAMES = [
    'duck', 'dog', 'cricket', 'cat', 'bubbles', 'splash', 'bottle',
];

var SOUNDSAMPLESDEFINES = [
    "samples/violin", "samples/cello", "samples/flute", "samples/guitar",
    "samples/clarinet", "samples/saxophone", "samples/tuba", "samples/trumpet",
    "samples/bass", "samples/bottle", "samples/clap", "samples/darbuka",
    "samples/hihat", "samples/splash", "samples/bubbles", "samples/cowbell",
    "samples/dog", "samples/kick", "samples/tom", "samples/cat",
    "samples/crash", "samples/duck", "samples/ridebell", "samples/triangle",
    "samples/chime", "samples/cricket", "samples/fingercymbal",
    "samples/slap", "samples/clang", "samples/cup", "samples/floortom",
    "samples/snare", "samples/piano", "samples/acguit", "samples/banjo",
    "samples/bassoon", "samples/celeste", "samples/raindrop",
    "samples/koto", "samples/gong", "samples/dulcimer",
    "samples/electricguitar", "samples/xylophone", "samples/vibraphone",
    "samples/japanese_drum", // "samples/japanese_bell",
]


// Some samples have a default volume other than 50 (See #1697)
const DEFAULTSYNTHVOLUME = {
    'flute': 90,
    'electronic synth': 90,
    'piano': 100,
    'banjo': 90,
    'koto': 70,
    'kick drum': 100,
    'tom tom': 100,
    'floor tom': 100,
    'cup drum': 100,
    'darbuka drum': 100,
    'hi hat': 100,
    'ride bell': 100,
    'cow bell': 100,
    'triangle bell': 60,
    'finger cymbals': 70,
    'chime': 90,
    'gong': 70,
    'clang': 70,
    'crash': 90,
    'clap': 90,
    'slap': 60,
    'vibraphone': 100,
    'xylophone': 100,
    'japanese drum': 90,
}


// The sample has a pitch which is subsequently transposed.
// This number is that starting pitch number. Reference function pitchToNumber
const SAMPLECENTERNO = {
    'piano': ['C4', 39], // pitchToNumber('C', 4, 'C Major')],
    'violin': ['C5', 51], // pitchToNumber('C', 5, 'C Major')],
    'cello': ['C3', 27], // pitchToNumber('C', 3, 'C Major')],
    'bass': ['C2', 15], // pitchToNumber('C', 2, 'C Major')],
    'guitar': ['C4', 39], // pitchToNumber('C', 4, 'C Major')],
    'acoustic guitar': ['C4', 39], // pitchToNumber('C', 4, 'C Major')],
    'flute': ['F#5', 57], // pitchToNumber('F#', 57, 'C Major')],
    'saxophone': ['C5', 51], // pitchToNumber('C', 5, 'C Major')],
    'clarinet': ['C4', 39], // pitchToNumber('C', 4, 'C Major')],
    'tuba': ['C4', 39], // pitchToNumber('C', 4, 'C Major')],
    'trumpet': ['C3', 27], // pitchToNumber('C', 3, 'C Major')],
    'banjo': ['C6', 63],  // pitchToNumber('C', 6, 'C Major')],
    'koto': ['C5', 51],  // pitchToNumber('C', 5, 'C Major')],
    'dulcimer': ['C4', 39],  // pitchToNumber('C', 4, 'C Major')],
    'electric guitar': ['C3', 27],  // pitchToNumber('C', 3, 'C Major')],
    'bassoon': ['D4', 41],  // pitchToNumber('C', 5, 'C Major')],
    'celeste': ['C3', 27],  // pitchToNumber('C', 3, 'C Major')],
    'vibraphone': ['C5', 51],
    'xylophone': ['C4', 39],
};


// Validate the passed on parameters in a function as per the default
// parameters values
function validateAndSetParams(defaultParams, params) {
    if (defaultParams && (defaultParams !== null) && params && (params !== undefined)) {
        for (var key in defaultParams) {
            if (key in params && params[key] !== undefined)
                defaultParams[key] = params[key];
        }
    }

    return defaultParams;
};

// This object contains mapping between instrument name and
// corresponding synth object.  The instrument name is the one that
// the user sets in the "Timbre" clamp and uses in the "Set Timbre"
// clamp; There is one instrument dictionary per turtle.

var instruments = {0: {}};

// This object contains mapping between instrument name and its source
// - (0->default, 1->drum, 2->voice, 3->builtin)
// e.g. instrumentsSource['kick drum'] = [1, 'kick drum']

var instrumentsSource = {};

// Effects associated with instruments in the timbre widget

var instrumentsEffects = {0: {}};

// Filters associated with instruments in the timbre widget

var instrumentsFilters = {0: {}};


function Synth() {
    // Isolate synth functions here.

    const BUILTIN_SYNTHS = {
        'sine': 1,
        'triangle': 1,
        'sawtooth': 1,
        'square': 1,
        'pluck': 1,
        'noise1': 1,
        'noise2': 1,
        'noise3': 1,
        'poly': 1,
        'simple 1': 1,
        'simple 2': 1,
        'simple 3': 1,
        'simple 4': 1,
        'custom': 1,
    };

    const CUSTOM_SYNTHS = {
        'amsynth': 1,
        'fmsynth': 1,
        'duosynth': 1,
    };

    // Using Tone.js
    this.tone = new Tone();

    Tone.Buffer.onload = function () {
        console.log('sample loaded');
    };

    this.samples = null;
    this.samplesuffix = '_SAMPLE';
    this.samplesManifest = null;
    this.changeInTemperament = false;
    this.inTemperament = 'equal';
    this.startingPitch = 'C4';
    this.noteFrequencies = {};

    this.temperamentChanged = function(temperament, startingPitch) {
        var startPitch = startingPitch;
        var t = TEMPERAMENT[temperament];
        var len = startPitch.length;
        var number = pitchToNumber(startPitch.substring(0, len - 1), startPitch.slice(-1), 'C major');
        startPitchObj = numberToPitch(number);
        startPitch = (startPitchObj[0] + startPitchObj[1]).toString();

        if (startPitch.substring(1, len - 1) === FLAT || startPitch.substring(1, len - 1) === 'b' ) {
            startPitch = startPitch.replace(FLAT, 'b');
        } else if (startPitch.substring(1, len - 1) === SHARP || startPitch.substring(1, len - 1) === '#' ) {
            startPitch = startPitch.replace(SHARP, '#');
        }
        
        var frequency = Tone.Frequency(startPitch).toFrequency();

        this.noteFrequencies = {
            // note: [octave, Frequency]
            [startingPitch.substring(0, len - 1)]: [Number(startingPitch.slice(-1)), frequency],
            [getNoteFromInterval(startingPitch, 'minor 2')[0]]: [getNoteFromInterval(startingPitch, 'minor 2')[1], t['minor 2'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 1')[0]]: [getNoteFromInterval(startingPitch, 'augmented 1')[1], t['augmented 1'] * frequency],
            [getNoteFromInterval(startingPitch, 'major 2')[0]]: [getNoteFromInterval(startingPitch, 'major 2')[1], t['major 2'] * frequency],
            [getNoteFromInterval(startingPitch, 'minor 3')[0]]: [getNoteFromInterval(startingPitch, 'minor 3')[1], t['minor 3'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 2')[0]]: [getNoteFromInterval(startingPitch, 'augmented 2')[1], t['augmented 2'] * frequency],
            [getNoteFromInterval(startingPitch, 'major 3')[0]]: [getNoteFromInterval(startingPitch, 'major 3')[1], t['major 3'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 3')[0]]: [getNoteFromInterval(startingPitch, 'augmented 3')[1], t['augmented 3'] * frequency],
            [getNoteFromInterval(startingPitch, 'diminished 4')[0]]: [getNoteFromInterval(startingPitch, 'diminished 4')[1], t['diminished 4'] * frequency],
            [getNoteFromInterval(startingPitch, 'perfect 4')[0]]: [getNoteFromInterval(startingPitch, 'perfect 4')[1], t['perfect 4'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 4')[0]]: [getNoteFromInterval(startingPitch, 'augmented 4')[1], t['augmented 4'] * frequency],
            [getNoteFromInterval(startingPitch, 'diminished 5')[0]]: [getNoteFromInterval(startingPitch, 'diminished 5')[1], t['diminished 5'] * frequency],
            [getNoteFromInterval(startingPitch, 'perfect 5')[0]]: [getNoteFromInterval(startingPitch, 'perfect 5')[1], t['perfect 5'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 5')[0]]: [getNoteFromInterval(startingPitch, 'augmented 5')[1], t['augmented 5'] * frequency],
            [getNoteFromInterval(startingPitch, 'minor 6')[0]]: [getNoteFromInterval(startingPitch, 'minor 6')[1], t['minor 6'] * frequency],
            [getNoteFromInterval(startingPitch, 'major 6')[0]]: [getNoteFromInterval(startingPitch, 'major 6')[1], t['major 6'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 6')[0]]: [getNoteFromInterval(startingPitch, 'augmented 6')[1], t['augmented 6'] * frequency],
            [getNoteFromInterval(startingPitch, 'minor 7')[0]]: [getNoteFromInterval(startingPitch, 'minor 7')[1], t['minor 7'] * frequency],
            [getNoteFromInterval(startingPitch, 'major 7')[0]]: [getNoteFromInterval(startingPitch, 'major 7')[1], t['major 7'] * frequency],
            [getNoteFromInterval(startingPitch, 'augmented 7')[0]]: [getNoteFromInterval(startingPitch, 'augmented 7')[1], t['augmented 7'] * frequency],
            [getNoteFromInterval(startingPitch, 'diminished 8')[0]]: [getNoteFromInterval(startingPitch, 'diminished 8')[1], t['diminished 8'] * frequency],
            [getNoteFromInterval(startingPitch, 'perfect 8')[0]]: [getNoteFromInterval(startingPitch, 'perfect 8')[1], t['perfect 8'] * frequency]
        };

        for (var key in this.noteFrequencies) {
            if (key.substring(1, key.length) === FLAT || key.substring(1, key.length) === 'b' ) {
                var note = key.substring(0, 1) + '' + 'b';
                this.noteFrequencies[note] = this.noteFrequencies[key];
                delete this.noteFrequencies[key]; 
            } else if (key.substring(1, key.length) === SHARP || key.substring(1, key.length) === '#' ) {
                var note = key.substring(0, 1) + '' + '#';
                this.noteFrequencies[note] = this.noteFrequencies[key];
                delete this.noteFrequencies[key]; 
            }
        }

        this.changeInTemperament = false;
    };

    this.getFrequency = function(notes, changeInTemperament) {
        return this._getFrequency(notes, changeInTemperament);
    };

    this._getFrequency = function(notes, changeInTemperament, temperament) {
        if (changeInTemperament) {
            if (temperament === undefined) {
                this.temperamentChanged(this.inTemperament, this.startingPitch);
            } else {
                //To get frequencies in Temperament Widget.
                this.temperamentChanged(temperament, this.startingPitch);
            }
            
        }

        if (this.inTemperament === 'equal') {
            if (typeof(notes) === 'string') {
                var len = notes.length;
                var note = notes.substring(0, len - 1);
                var octave = Number(notes.slice(-1));
                return pitchToFrequency(note, octave, 0, null);
            } else if (typeof(notes) === 'number') {
                return notes;
            } else {
                var results = [];
                for (i = 0; i < notes.length; i++) {
                    if (typeof(notes[i]) === 'string') {
                        var len = notes[i].length;
                        var note = notes[i].substring(0, len - 1);
                        var octave = Number(notes[i].slice(-1));
                        results.push(pitchToFrequency(note, octave, 0, null));
                    } else {
                        results.push(notes[i]);
                    }
                }
                return results;
            }
        }

        var that = this;

        var __getFrequency = function (oneNote) {
            var len = oneNote.length;

            for (var note in that.noteFrequencies) {
                if (note === oneNote.substring(0, len - 1)) { 
                    if (that.noteFrequencies[note][0] === Number(oneNote.slice(-1))) {
                        //Note to be played is in the same octave.
                        return that.noteFrequencies[note][1];
                    } else { 
                        //Note to be played is not in the same octave.
                        var power = Number(oneNote.slice(-1)) - that.noteFrequencies[note][0];
                        return that.noteFrequencies[note][1] * Math.pow(2, power);
                    }
                }
            }

        };

        if (typeof(notes) === 'string') {
            return __getFrequency(notes);
        } else if (typeof(notes) === 'object') {
            var results = [];
            for (var i = 0; i < notes.length; i++) {
                if (typeof(notes[i]) === 'string') {
                    results.push(__getFrequency(notes[i]));
                } else {
                    // Hertz?
                    results.push(notes[i]);
                }
            }

            return results;
        } else {
            // Hertz?
            return notes;
        }
    };

    this.getCustomFrequency = function (notes) {

        var __getCustomFrequency = function (oneNote) {
            var octave = oneNote.slice(-1);
            oneNote = getCustomNote(oneNote.substring(0, oneNote.length - 1));
            var pitch = that.startingPitch;
            var startPitchFrequency = pitchToFrequency(pitch.substring(0, pitch.length - 1), pitch.slice(-1), 0, 'C Major');
            if (typeof(oneNote) === 'number') {
                oneNote = oneNote;
            } else {
                for (var pitchNumber in TEMPERAMENT['custom']) {
                    if (pitchNumber !== 'pitchNumber') {
                        if (oneNote == TEMPERAMENT['custom'][pitchNumber][1]) {
                            var octaveDiff = octave - TEMPERAMENT['custom'][pitchNumber][2]
                            return Number(TEMPERAMENT['custom'][pitchNumber][0] * startPitchFrequency * Math.pow(OCTAVERATIO, octaveDiff));
                        }
                    }   
                }
            }

        }

        if (typeof(notes) === 'string') {
            return __getCustomFrequency(notes);
        } else if (typeof(notes) === 'object') {
            var results = [];
            for (var i = 0; i < notes.length; i++) {
                if (typeof(notes[i]) === 'string') {
                    results.push(__getCustomFrequency(notes[i]));
                } else {
                    // Hertz?
                    results.push(notes[i]);
                }
            }

            return results;
        } else {
            // Hertz?
            return notes;
        }
    }

    this.resume = function () {
        this.tone.context.resume();
    };

    this.loadSamples = function () {
        this.samplesManifest = {
            'voice': [
                {'name': 'piano', 'data': PIANO_SAMPLE},
                {'name': 'violin', 'data': VIOLIN_SAMPLE},
                {'name': 'cello', 'data': CELLO_SAMPLE},
                {'name': 'flute', 'data': FLUTE_SAMPLE},
                {'name': 'clarinet', 'data': CLARINET_SAMPLE},
                {'name': 'saxophone', 'data': SAXOPHONE_SAMPLE},
                {'name': 'trumpet', 'data': TRUMPET_SAMPLE},
                {'name': 'tuba', 'data': TUBA_SAMPLE},
                {'name': 'guitar', 'data': GUITAR_SAMPLE},
                {'name': 'acoustic guitar', 'data': ACOUSTIC_GUITAR_SAMPLE},
                {'name': 'bass', 'data': BASS_SAMPLE},
		{'name': 'banjo', 'data': BANJO_SAMPLE},
		{'name': 'koto', 'data': KOTO_SAMPLE},
		{'name': 'dulcimer', 'data': DULCIMER_SAMPLE},
		{'name': 'electric guitar', 'data': ELECTRICGUITAR_SAMPLE},
		{'name': 'bassoon', 'data': BASSOON_SAMPLE},
		{'name': 'celeste', 'data': CELESTE_SAMPLE},
		{'name': 'vibraphone', 'data': VIBRAPHONE_SAMPLE},
		{'name': 'xylophone', 'data': XYLOPHONE_SAMPLE},
            ],
            'drum': [
                {'name': 'bottle', 'data': BOTTLE_SAMPLE},
                {'name': 'clap', 'data': CLAP_SAMPLE},
                {'name': 'darbuka drum', 'data': DARBUKA_SAMPLE},
                {'name': 'hi hat', 'data': HIHAT_SAMPLE},
                {'name': 'splash', 'data': SPLASH_SAMPLE},
                {'name': 'bubbles', 'data': BUBBLES_SAMPLE},
                {'name': 'raindrop', 'data': RAINDROP_SAMPLE},
                {'name': 'cow bell', 'data': COWBELL_SAMPLE},
                {'name': 'dog', 'data': DOG_SAMPLE},
                {'name': 'kick drum', 'data': KICK_SAMPLE},
                {'name': 'tom tom', 'data': TOM_SAMPLE},
                {'name': 'cat', 'data': CAT_SAMPLE},
                {'name': 'crash', 'data': CRASH_SAMPLE},
                {'name': 'duck', 'data': DUCK_SAMPLE},
                {'name': 'ride bell', 'data': RIDEBELL_SAMPLE},
                {'name': 'triangle bell', 'data': TRIANGLE_SAMPLE},
                {'name': 'chime', 'data': CHIME_SAMPLE},
                {'name': 'gong', 'data': GONG_SAMPLE},
                {'name': 'cricket', 'data': CRICKET_SAMPLE},
                {'name': 'finger cymbals', 'data': FINGERCYMBAL_SAMPLE},
                {'name': 'slap', 'data': SLAP_SAMPLE},
                {'name': 'japanese drum', 'data': JAPANESE_DRUM_SAMPLE},
		// {'name': 'japanese bell', 'data': JAPANESE_BELL_SAMPLE},
                {'name': 'clang', 'data': CLANG_SAMPLE},
                {'name': 'cup drum', 'data': CUP_SAMPLE},
                {'name': 'floor tom tom', 'data': FLOORTOM_SAMPLE},
                {'name': 'snare drum', 'data': SNARE_SAMPLE}
            ]
        }

        if (this.samples === null) {
            this.samples = {};
            for (var type in this.samplesManifest) {
                if (this.samplesManifest.hasOwnProperty(type)) {
                    this.samples[type] = {};
                }
            }
        }
    };

    this._loadSample = function (sampleName) {
        for (var type in this.samplesManifest) {
            if (this.samplesManifest.hasOwnProperty(type)) {
                for (var sample in this.samplesManifest[type]){
                    if (this.samplesManifest[type].hasOwnProperty(sample)){
                        var name = this.samplesManifest[type][sample].name;
                        if (sampleName === name) {
                            // Load data returned from samples function.
                            this.samples[type][name] = this.samplesManifest[type][sample].data();
                        }
                    }
                }
            }
        }
    };

    this.samplesQueue = [];  // Samples that need to be loaded at start.

    var that = this;
    require(SOUNDSAMPLESDEFINES, function() {
        that.loadSamples();

        for (var i = 0; i < that.samplesQueue.length; i++) {
            that.__createSynth(0, that.samplesQueue[i][0], that.samplesQueue[i][1], that.samplesQueue[i][2]);
        }
    });

    // Until we fix #1744, disable recorder on FF
    if (!platform.FF) {
	// recoder breaks with Tone.js v13.8.25
        // this.recorder = new Recorder(Tone.Master);
    }

    // Function that provides default parameters for various synths
    this.getDefaultParamValues = function (sourceName) {
        // sourceName may need to be 'untranslated'
        var sourceNameLC = sourceName.toLowerCase();
        if (getOscillatorTypes(sourceNameLC) !== null) {
            sourceNameLC = getOscillatorTypes(sourceNameLC);
        }

        switch(sourceNameLC) {
        case 'amsynth':
            var synthOptions = {
                'harmonicity': 1,
                'detune': 0,
                'envelope': {
                    'attack': 0.01,
                    'decay': 0.01,
                    'sustain': 1,
                    'release': 0.5
                },
                'modulation': {
                    'type': 'square'
                },
                'modulationEnvelope': {
                    'attack': 0.5,
                    'decay': 0,
                    'sustain': 1,
                    'release': 0.5
                }
            };
            break;
        case'fmsynth':
            var synthOptions = {
                'harmonicity': 1,
                'modulationIndex': 10,
                'detune': 0,
                'envelope': {
                    'attack': 0.01,
                    'decay': 0.01,
                    'sustain': 1,
                    'release': 0.5
                },
                'modulation': {
                    'type': 'square'
                },
                'modulationEnvelope': {
                    'attack': 0.5,
                    'decay': 0.0,
                    'sustain': 1,
                    'release': 0.5
                }
            };
            break;
        case 'noise1':
            var synthOptions = {
                'noise': {
                    'type': 'white'
                },
                'envelope': {
                    'attack': 0.005 ,
                    'decay': 0.1 ,
                    'sustain': 1
                }
            };
            break;
        case 'noise2':
            var synthOptions = {
                'noise': {
                    'type': 'brown'
                },
                'envelope': {
                    'attack': 0.005 ,
                    'decay': 0.1 ,
                    'sustain': 1
                }
            };
            break;
        case 'noise3':
            var synthOptions = {
                'noise': {
                    'type': 'pink'
                },
                'envelope': {
                    'attack': 0.005 ,
                    'decay': 0.1 ,
                    'sustain': 1
                }
            };
            break;
        case 'simple 1':
        case 'simple 2':
        case 'simple 3':
        case 'simple 4':
            var synthOptions = {
                'oscillator': {
                    'type': 'sine'
                },
                'envelope': {
                    'attack': 0.03,
                    'decay': 0,
                    'sustain': 1,
                    'release': 0.03
                },
            };
            break;
        case 'duosynth':
            var synthOptions = {
                'vibratoAmount': 0.5,
                'vibratoRate': 5,
                'harmonicity': 1.5,
                'voice0': {
                    'volume': -10,
                    'portamento': 0,
                    'oscillator': {
                        'type': 'sine'
                    },
                    'filterEnvelope': {
                        'attack': 0.01,
                        'decay': 0.0,
                        'sustain': 1,
                        'release': 0.5
                    },
                    'envelope': {
                        'attack': 0.01,
                        'decay': 0.0,
                        'sustain': 1,
                        'release': 0.5
                    }
                },
                'voice1': {
                    'volume': -10,
                    'portamento': 0,
                    'oscillator': {
                        'type': 'sine'
                    },
                    'filterEnvelope': {
                        'attack': 0.01,
                        'decay': 0.0,
                        'sustain': 1,
                        'release': 0.5
                    },
                    'envelope': {
                        'attack': 0.01,
                        'decay': 0.0,
                        'sustain': 1,
                        'release': 0.5
                    }
                }
            };
            break;
        case 'sine':
        case 'triangle':
        case 'square':
        case 'sawtooth':
            var synthOptions = {
                'oscillator': {
                    'type': sourceNameLC
                },
                'envelope': {
                    'attack': 0.03,
                    'decay': 0,
                    'sustain': 1,
                    'release': 0.03
                },
            };
            break;
        case 'pluck':
             var synthOptions = {
                'attackNoise': 1,
                'dampening': 4000,
                'resonance': 0.9
            };
            break;
        case 'poly':
            var synthOptions = {
                polyphony: POLYCOUNT
            };
            break;
        default:
            var synthOptions = {};
            break;
        }

        return synthOptions;
    };

    // Poly synth will be loaded as the default synth.
    this.createDefaultSynth = function (turtle) {
        console.log('create default poly/default/custom synth for turtle ' + turtle);
        var default_synth = new Tone.PolySynth(POLYCOUNT, Tone.AMSynth).toMaster();
        instruments[turtle]['electronic synth'] = default_synth;
        instrumentsSource['electronic synth'] = [0, 'electronic synth'];
        instruments[turtle]['custom'] = default_synth;
        instrumentsSource['custom'] = [0, 'custom'];
    };

    // Function reponsible for creating the synth using the existing
    // samples: drums and voices
    this._createSampleSynth = function (turtle, instrumentName, sourceName, params) {
        if (sourceName in this.samples.voice) {
            instrumentsSource[instrumentName] = [2, sourceName];
            console.log(sourceName + ' ' + SAMPLECENTERNO[sourceName][0]);
            var noteDict = {};
            noteDict[SAMPLECENTERNO[sourceName][0]] = this.samples.voice[sourceName];
            var tempSynth = new Tone.Sampler(noteDict);
        } else if (sourceName in this.samples.drum) {
            instrumentsSource[instrumentName] = [1, sourceName];
            console.log(sourceName);
            var tempSynth = new Tone.Player(this.samples.drum[sourceName]);
        } else {
            // default drum sample
            instrumentsSource[instrumentName] = [1, 'drum'];
            console.log(DEFAULTDRUM);
            var tempSynth = new Tone.Player(this.samples.drum[DEFAULTDRUM]);
        }

        return tempSynth;
    };

    // Function using builtin synths from Tone.js
    this._createBuiltinSynth = function (turtle, instrumentName, sourceName, params) {
        if (sourceName in BUILTIN_SYNTHS) {
            var synthOptions = this.getDefaultParamValues(sourceName);
            synthOptions = validateAndSetParams(synthOptions, params);
        }

        switch (sourceName) {
        case 'simple 1':
        case 'simple 2':
        case 'simple 3':
        case 'simple 4':
            instrumentsSource[instrumentName] = [3, sourceName];
            console.log(sourceName);
            var builtin_synth = new Tone.Synth(synthOptions);
            break;
        case 'sine':
        case 'triangle':
        case 'square':
        case 'sawtooth':
            instrumentsSource[instrumentName] = [3, sourceName];
            console.log(sourceName);
            var builtin_synth = new Tone.Synth(synthOptions);
            break;
        case 'pluck':
            instrumentsSource[instrumentName] = [3, sourceName];
            console.log(sourceName);
            var builtin_synth = new Tone.PluckSynth(synthOptions);
            break;
        case 'poly':
            instrumentsSource[instrumentName] = [0, 'poly'];
            console.log('poly');
            var builtin_synth = new Tone.PolySynth(synthOptions.polyphony, Tone.AMSynth);
            break;
        case 'noise1':
        case 'noise2':
        case 'noise3':
            instrumentsSource[instrumentName] = [4, sourceName];
            console.log(sourceName);
            var builtin_synth = new Tone.NoiseSynth(synthOptions);
            break;
        default:
            instrumentsSource[instrumentName] = [0, 'poly'];
            console.log('poly (default)');
            var builtin_synth = new Tone.PolySynth(POLYCOUNT, Tone.AMSynth);
            break;
        }

        return builtin_synth;
    };


    // Function reponsible for creating the custom synth using the
    // Tonejs methods like AMSynth, FMSynth, etc.
    this._createCustomSynth = function (sourceName, params) {
        // Getting parameters for custom synth
        var synthOptions = this.getDefaultParamValues(sourceName);
        synthOptions = validateAndSetParams(synthOptions, params);

        if (sourceName.toLowerCase() === 'amsynth') {
            var tempSynth = new Tone.AMSynth(synthOptions);
        } else if (sourceName.toLowerCase() === 'fmsynth') {
            var tempSynth = new Tone.FMSynth(synthOptions);
        } else if (sourceName.toLowerCase() === 'duosynth') {
            var tempSynth = new Tone.DuoSynth(synthOptions);
        } else {
            var tempSynth = new Tone.PolySynth(POLYCOUNT, Tone.AMSynth);
        }

        return tempSynth;
    };

    this.__createSynth = function (turtle, instrumentName, sourceName, params) {
        this._loadSample(sourceName);
        if ((sourceName in this.samples.voice) || (sourceName in this.samples.drum)) {
            instruments[turtle][instrumentName] = this._createSampleSynth(turtle, instrumentName, sourceName, null).toMaster();
        } else if (sourceName in BUILTIN_SYNTHS) {
            instruments[turtle][instrumentName] = this._createBuiltinSynth(turtle, instrumentName, sourceName, params).toMaster();
        } else if (sourceName in CUSTOM_SYNTHS) {
            instruments[turtle][instrumentName] = this._createCustomSynth(sourceName, params).toMaster();
            instrumentsSource[instrumentName] = [0, 'poly'];
        } else {
            if (sourceName.length >= 4) {
                if (sourceName.slice(0, 4) === 'http') {
                    instruments[turtle][sourceName] = new Tone.Sampler(sourceName).toMaster();
                    instrumentsSource[instrumentName] = [1, 'drum'];
                } else if (sourceName.slice(0, 4) === 'file') {
                    instruments[turtle][sourceName] = new Tone.Sampler(sourceName).toMaster();
                    instrumentsSource[instrumentName] = [1, 'drum'];
                } else if (sourceName === 'drum') {
                    instruments[turtle][sourceName] = this._createSampleSynth(turtle, sourceName, sourceName, null).toMaster();
                    instrumentsSource[instrumentName] = [1, 'drum'];
                }
            }
        }
    };

    // Create the synth as per the user's input in the 'Timbre' clamp.
    this.createSynth = function (turtle, instrumentName, sourceName, params) {
        // We may have a race condition with the samples loader.
        if (this.samples === null) {
            this.samplesQueue.push([instrumentName, sourceName, params]);

            var that = this;
            require(SOUNDSAMPLESDEFINES, function(){
                that.loadSamples();
            });
        } else {
            this.__createSynth(turtle, instrumentName, sourceName, params);
        }
    };

    this.loadSynth = function (turtle, sourceName) {
        if (sourceName in instruments[turtle]) {
            console.log(sourceName + ' already loaded');
        } else {
            console.log('loading ' + sourceName);
            this.createSynth(turtle, sourceName, sourceName, null);
        }

        if (sourceName in instruments[turtle]) {
            return instruments[turtle][sourceName].toMaster();
        }

        return null;
    }

    this._performNotes = function (synth, notes, beatValue, paramsEffects, paramsFilters, setNote) {
        if (this.inTemperament !== 'equal' && this.inTemperament !== 'custom') {
            if (typeof(notes) === 'number') {
                notes = notes;
            } else {
                var notes1 = notes;
                notes = this._getFrequency(notes, this.changeInTemperament);
                if (notes === undefined) {
                    if (notes1.substring(1, notes1.length - 1) == DOUBLEFLAT) {
                        notes = notes1.substring(0, 1) + '' + 'bb' + notes1.substring(notes1.length - 1, notes1.length);
                    } else if (notes1.substring(1, notes1.length - 1) == DOUBLESHARP) {
                        notes = notes1.substring(0, 1) + '' + 'x' + notes1.substring(notes1.length - 1, notes1.length);
                    } else {
                        notes = notes1;
                    }
                }
            }
        }

        if (this.inTemperament == 'custom') {
            var notes1 = notes;    
            notes = this.getCustomFrequency(notes);
            if (notes === undefined) {
                notes = notes1;
            } 
            console.log(notes);   
        }

        if (paramsEffects === null && paramsFilters === null) {
            synth.triggerAttackRelease(notes, beatValue);
        } else {
            if (paramsFilters !== null && paramsFilters !== undefined) {
                var numFilters = paramsFilters.length;  // no. of filters
                var k = 0;
                var temp_filters = [];

                for (k = 0; k < numFilters; k++) {
                    // filter rolloff has to be added
                    var filterVal = new Tone.Filter(paramsFilters[k].filterFrequency, paramsFilters[k].filterType, paramsFilters[k].filterRolloff);
                    temp_filters.push(filterVal);
                    synth.chain(temp_filters[k], Tone.Master);
                }
            }

            if (paramsEffects !== null && paramsEffects !== undefined) {
                if (paramsEffects.doVibrato) {
                    var vibrato = new Tone.Vibrato(1 / paramsEffects.vibratoFrequency, paramsEffects.vibratoIntensity);
                    synth.chain(vibrato, Tone.Master);
                }

                if (paramsEffects.doDistortion) {
                    var distort = new Tone.Distortion(paramsEffects.distortionAmount).toMaster();
                    synth.connect(distort, Tone.Master);
                }

                if (paramsEffects.doTremolo) {
                    var tremolo = new Tone.Tremolo({
                        'frequency': paramsEffects.tremoloFrequency,
                        'depth': paramsEffects.tremoloDepth
                    }).toMaster().start();
                    synth.chain(tremolo);
                }

                if (paramsEffects.doPhaser) {
                    var phaser = new Tone.Phaser({
                        'frequency': paramsEffects.rate,
                        'octaves': paramsEffects.octaves,
                        'baseFrequency': paramsEffects.baseFrequency
                    }).toMaster();
                    synth.chain(phaser, Tone.Master);
                }

                if (paramsEffects.doChorus) {
                    var chorusEffect = new Tone.Chorus({
                        'frequency': paramsEffects.chorusRate,
                        'delayTime': paramsEffects.delayTime,
                        'depth': paramsEffects.chorusDepth
                    }).toMaster();
                    synth.chain(chorusEffect, Tone.Master);
                }

                if (paramsEffects.doPartials) {
                    // Depending on the synth, the oscillator is found
                    // somewhere else in the synth obj.
                    if (synth.oscillator !== undefined) {
                        synth.oscillator.partials = paramsEffects.partials;
                    } else if (synth.voices !== undefined) {
                        for (i = 0; i < synth.voices.length; i++) {
                            synth.voices[i].oscillator.partials = paramsEffects.partials;
                        }
                    }
                }

                if (paramsEffects.doPortamento) {
                    // Depending on the synth, the oscillator is found
                    // somewhere else in the synth obj.
                    if (synth.oscillator !== undefined) {
                        synth.portamento = paramsEffects.portamento;
                    } else if (synth.voices !== undefined) {
                        for (i = 0; i < synth.voices.length; i++) {
                            synth.voices[i].portamento = paramsEffects.portamento;
                        }
                    }
                }

                if (paramsEffects.doNeighbor) {
                    var firstTwoBeats = paramsEffects['neighborArgBeat'];
                    var finalBeat = paramsEffects['neighborArgCurrentBeat'];

                    // Create an array of start times and durations
                    // for each note.
                    var obj = [];
                    for (var i = 0; i < paramsEffects['neighborArgNote1'].length; i++) {
                        var note1 = paramsEffects['neighborArgNote1'][i].replace('♯', '#').replace('♭', 'b');
                        var note2 = paramsEffects['neighborArgNote2'][i].replace('♯', '#').replace('♭', 'b');
                        obj.push({'time': 0, 'note': note1, 'duration': firstTwoBeats},
                                 {'time': firstTwoBeats, 'note': note2, 'duration': firstTwoBeats},
                                 {'time': firstTwoBeats * 2, 'note': note1, 'duration': finalBeat});
                    }

                    var neighborEffect = new Tone.Part(function(time, value){
                        synth.triggerAttackRelease(value.note, value.duration, time);
                    }, obj).start();
                }
            }

            if (!paramsEffects.doNeighbor) {
                if (setNote !== undefined && setNote) {
                    if (synth.oscillator !== undefined) {
                        synth.setNote(notes);
                    } else if (synth.voices !== undefined) {
                        for (i = 0; i < synth.voices.length; i++) {
                            synth.voices[i].setNote(notes);
                        }
                    }
                } else {
                    synth.triggerAttackRelease(notes, beatValue);
                }
            }

            setTimeout(function () {
                if (paramsEffects && paramsEffects !== null && paramsEffects !== undefined) {
                    if (paramsEffects.doVibrato) {
                        vibrato.dispose();
                    }

                    if (paramsEffects.doDistortion) {
                        distort.dispose();
                    }

                    if (paramsEffects.doTremolo) {
                        tremolo.dispose();
                    }

                    if (paramsEffects.doPhaser) {
                        phaser.dispose();
                    }

                    if (paramsEffects.doChorus) {
                        chorusEffect.dispose();
                    }

                    if (paramsEffects.doNeighbor) {
                        neighborEffect.dispose();
                    }
                }

                if (paramsFilters && paramsFilters !== null && paramsFilters !== undefined) {
                    for (k = 0; k < numFilters; k++) {
                        temp_filters[k].dispose();
                    }
                }
            }, beatValue * 1000);
        }
    };

    // Generalised version of 'trigger and 'triggerwitheffects' functions
    this.trigger = function (turtle, notes, beatValue, instrumentName, paramsEffects, paramsFilters, setNote) {
        // console.log(turtle + ' ' + notes + ' ' + beatValue + ' ' + instrumentName + ' ' + paramsEffects + ' ' + paramsFilters + ' ' + setNote);
        if (paramsEffects !== null && paramsEffects !== undefined) {
            if (paramsEffects['vibratoIntensity'] !== 0) {
                paramsEffects.doVibrato = true;
            }

            if (paramsEffects['distortionAmount'] !== 0) {
                paramsEffects.doDistortion = true;
            }

            if (paramsEffects['tremoloFrequency'] !== 0) {
                paramsEffects.doTremolo = true;
            }

            if (paramsEffects['rate'] !== 0) {
                paramsEffects.doPhaser = true;
            }

            if (paramsEffects['chorusRate'] !== 0) {
                paramsEffects.doChorus = true;
            }

            if (paramsEffects['neighborSynth']) {
                paramsEffects.doNeighbor = true;
            }

        }

        var tempNotes = notes;
        var tempSynth = instruments[turtle]['electronic synth'];
        var flag = 0;
        if (instrumentName in instruments[turtle]) {
            tempSynth = instruments[turtle][instrumentName];
            flag = instrumentsSource[instrumentName][0];
            if (flag === 1 || flag === 2) {
                var sampleName = instrumentsSource[instrumentName][1];
            }
        }

        // Get note values as per the source of the synth.
        switch(flag) {
        case 1:  // drum
            if (instrumentName.slice(0, 4) === 'http') {
                tempSynth.start();
            } else if (instrumentName.slice(0, 4) === 'file') {
                tempSynth.start();
            } else {
                tempSynth.start();
            }
            break;
        case 2:  // voice sample
            this._performNotes(tempSynth.toMaster(), notes, beatValue, paramsEffects, paramsFilters, setNote);
            break;
        case 3:  // builtin synth
            if (typeof(notes) === 'object') {
                tempNotes = notes[0];
            }

            this._performNotes(tempSynth.toMaster(), tempNotes, beatValue, paramsEffects, paramsFilters, setNote);
            break;
        case 4:
            tempSynth.triggerAttackRelease(beatValue);
            break;
        case 0:  // default synth
        default:
            this._performNotes(tempSynth.toMaster(), tempNotes, beatValue, paramsEffects, paramsFilters, setNote);
            break;
        }
    };

    this.stopSound = function (turtle, instrumentName) {
        var flag = instrumentsSource[instrumentName][0];
        switch(flag) {
        case 1:  // drum
            instruments[turtle][instrumentName].stop();
            break;
        default:
            instruments[turtle][instrumentName].triggerRelease();
            break;
        }
    };

    this.start = function () {
        Tone.Transport.start();
    };

    this.stop = function () {
        Tone.Transport.stop();
    };

    this.setVolume = function (turtle, instrumentName, volume) {
        // We pass in volume as a number from 0 to 100.
        // As per #1697, we adjust the volume of some instruments.
        if (instrumentName in DEFAULTSYNTHVOLUME) {
            var sv = DEFAULTSYNTHVOLUME[instrumentName];
            if (volume > 50) {
                var d = 100 - sv;
                var nv = ((volume - 50) / 50) * d + sv;
            } else {
                var nv = (volume / 50) * sv;
            }
        } else {
            var nv = volume;
        }

        // Convert volume to decibals
        var db = Tone.gainToDb(nv / 100);
        if (instrumentName in instruments[turtle]) {
            instruments[turtle][instrumentName].volume.value = db;
        }
    };

    // Unused and it is not clear that the return value is correct.
    this.getVolume = function (turtle, instrumentName) {
        if (instrumentName in instruments[turtle]) {
            return instruments[turtle][instrumentName].volume.value;
        } else {
            console.log('instrument not found');
            return 50;
        }
    };

    this.setMasterVolume = function (volume) {
        var db = Tone.gainToDb(volume / 100);
        Tone.Master.volume.rampTo(db, 0.01);
    };

    return this;
};
