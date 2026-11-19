# KeyFall

Learn piano without sheet music.

Made by Team Bulbasaur.

## Target Users

Piano beginners who cannot read sheet music well.

## Problem

- Reading sheet music takes a long time.
- Practicing alone gives no feedback on timing.

## Our Solution

- Falling notes show what to play and when.
- Each key press gets Perfect, Good, or Miss.

## Planned Features

### MVP (the first version we will finish)

Core features:

1. Load a MIDI file and turn it into a note list
2. Drop notes toward the judgment line on time
3. Map computer keys to piano notes
    - A S D and H J K L: 7 white keys
    - W E and U I O: 5 black keys
    - Shift: one octave up
4. Judge timing: Perfect within 70 ms, Good within 150 ms, otherwise Miss
5. Show score, accuracy, and counts at the end

The MVP is done when:

- One sample song can be played from start to end
- A key press plays a note sound
- Every key press shows a result
- The end screen shows counts and accuracy
- You can run it by following the setup guide in this README

### Extras (planned for after the MVP)

- Song select
- MIDI file upload (valid MIDI files only)
- Real piano samples
- Speed control
- Volume
- Note names
- Pause

## Getting Started

Not available yet. Once the app is ready, you will run npm install, then npm run dev, and open the browser.

## License

This project is licensed under the MIT License.

Why we chose MIT:

- It is short and simple, so it is easy to understand.
- It lets anyone use, copy, and change the code, as long as the license notice stays.
- Most libraries we plan to use (@tonejs/midi, Tone.js, PixiJS, Vitest, Vite) are also MIT, so the licenses fit well together.

## Contributing

Please read CONTRIBUTING.md before you start. Also see our CODE_OF_CONDUCT.md

## Current Status

In development.
