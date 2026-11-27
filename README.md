# KeyFall

Learn piano without sheet music.

Made by Team Bulbasaur.

## Target Users

Piano beginners who cannot read sheet music well.

## Problem

- Reading sheet music takes a long time.
- Practicing alone gives no feedback on timing.
- Playing notes across multiple octaves can be difficult for beginners using a computer keyboard.

## Our Solution

- Falling notes show what to play and when.
- Each key press gets Perfect, Good, or Miss.
- Twelve fixed keyboard inputs allow users to play notes without manually switching octaves.
- The original pitch of each note is preserved during playback.

## Planned Features

### MVP (the first version we will finish)

Core features:

1. Load a MIDI file and turn it into a note list.
2. Drop notes toward the judgment line on time.
3. Map computer keys to twelve piano pitch classes.
   - A S D and H J K L: 7 white keys.
   - W E and U I O: 5 black keys.
   - No Shift key or manual octave switching is required.
   - Correct inputs play the original MIDI pitch.
   - Incorrect inputs play the selected note in the current target note's octave (Context-aware Octave).
4. Judge timing: Perfect within 70 ms, Good within 150 ms, otherwise Miss.
5. Show score, accuracy, and counts at the end.

The MVP is done when:

- One sample song can be played from start to end.
- A key press plays a note sound.
- Every key press shows a result.
- The end screen shows counts and accuracy.
- You can run the application by following the setup instructions in this README.

### Extras (planned for after the MVP)

- Song selection
- MIDI file upload (valid MIDI files only)
- Real piano samples
- Speed control
- Volume control
- Note names
- Pause

## Keyboard Layout

| Piano Note | Keyboard Key |
|---|---|
| C | A |
| C# | W |
| D | S |
| D# | E |
| E | D |
| F | H |
| F# | U |
| G | J |
| G# | I |
| A | K |
| A# | O |
| B | L |

The keyboard layout remains the same across all octaves.

For example, C3, C4, and C5 all use the A key, but each note plays at its original pitch.

## Technology Stack

| Component | Technology |
|---|---|
| Programming Language | TypeScript |
| Application Type | Local Web Application |
| User Interface | HTML/CSS |
| Game Rendering | Canvas API |
| MIDI Library | @tonejs/midi |
| Audio Library | Tone.js |
| Development and Build Tool | Vite |
| Testing Framework | Vitest |
| Package Management | npm |
| Development Runtime | Node.js |

KeyFall runs locally in a web browser without requiring an external backend or database.

See [Decision Log](docs/decision-log.md) for the technology stack comparison and selection rationale.

## Getting Started

### Prerequisites

- Git
- Node.js (version specified in `.nvmrc`)
- npm
- A modern web browser

For detailed installation and configuration instructions, see the [Local Development Setup Guide](docs/local-setup.md).

### 1. Clone the Repository

Copy the repository URL from GitHub.

```bash
git clone <repository-url>
cd bulbasaur_oss
```

### 2. Install Dependencies

```bash
npm ci
```

This installs the dependency versions recorded in `package-lock.json`.

### 3. Run the Application

```bash
npm run dev
```

Open the URL displayed in the terminal.

Default URL: http://localhost:5173

Press `Ctrl + C` to stop the development server.

### 4. Run Tests

```bash
npm test
```

### 5. Check TypeScript Types

```bash
npm run typecheck
```

### 6. Build the Application

```bash
npm run build
```

The production build is generated in the `dist/` directory.

### 7. Preview the Production Build

```bash
npm run preview
```

## Available Commands

| Command | Description |
|---|---|
| `npm ci` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm test` | Run automated tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run typecheck` | Check TypeScript errors |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |

## Project Structure

```text
bulbasaur_oss/
├── .github/              # GitHub templates and configuration
├── docs/                 # Project documentation
├── src/
│   ├── core/             # Core game logic
│   ├── ui/               # User interface and rendering
│   ├── audio/            # Audio-related modules
│   ├── storage/          # Local data storage
│   ├── types/            # Shared TypeScript types
│   ├── main.ts           # Application entry point
│   └── style.css         # Global styles
├── public/
│   └── resources/
│       ├── songs/        # Song resources
│       ├── fonts/        # Font resources
│       └── sounds/       # Audio resources
├── tests/                # Automated tests
├── .gitignore
├── .nvmrc
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Documentation

| Document | Description |
|---|---|
| [Local Development Setup Guide](docs/local-setup.md) | How to install, run, test, and build the project locally |
| [Decision Log](docs/decision-log.md) | Important technical and project decisions |
| [Repository Setup Guide](docs/setup-guide.md) | Repository administration and GitHub configuration |
| [Contributing Guidelines](CONTRIBUTING.md) | Team collaboration rules |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community and team conduct |

## License

This project is licensed under the [MIT License](LICENSE).

Why we chose MIT:

- It is short and simple, so it is easy to understand.
- It lets anyone use, copy, and change the code, as long as the required license and copyright notices are preserved.
- It is compatible with the permissive licensing approach of our planned technology stack.

Third-party libraries, MIDI files, fonts, and audio resources may have separate licenses. Their licenses and sources must be checked and recorded when they are added to the project.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before you start.

Also see our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Current Status

In development — Initial Project Setup.

The technology stack, project structure, development environment, and testing framework are being established.

Actual gameplay features will be implemented in subsequent issues.