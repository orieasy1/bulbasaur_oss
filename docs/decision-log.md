# Decision log

Record important decisions here: scope changes, technology choices, interface agreements, and reviews that changed the result. Newest entries go at the top.

| Date | Decision | Related issue / PR | Notes |
|---|---|---|---|
| 2026-11-27 | Proposed TypeScript and Vite as the initial technology stack | #ISSUE_NUMBER | Pending team approval |
| 2026-11-19 | Adopted collaboration rules (CONTRIBUTING.md) and repository setup | - | Initial setup |

---

## Technology Stack Selection

### Context

KeyFall is a locally running piano rhythm game designed for beginners.

The technology stack should support simple user interfaces, real-time rendering, audio playback, and automated testing while remaining understandable and maintainable by all team members.

### Alternatives Considered

| Component | TypeScript + Vite | Python + Pygame | C# + Unity |
|---|---|---|---|
| Application Type | Local Web | Desktop | Desktop |
| Language | TypeScript | Python | C# |
| UI | HTML/CSS | Pygame | Unity UI |
| Rendering | Canvas API | Pygame | Unity 2D |
| MIDI Library | @tonejs/midi | Mido | DryWetMIDI |
| Audio Library | Tone.js | FluidSynth / Pygame | Unity Audio |
| Testing | Vitest | pytest | Unity Test Framework |
| Package Management | npm | pip | UPM / NuGet |
| Setup Complexity | Low | Low | Relatively high |
| UI Development | Straightforward | Requires manual implementation | Integrated tools |
| Project Suitability | High | High | Moderate |

### Selected Technology Stack

| Component | Technology |
|---|---|
| Programming Language | TypeScript |
| Application Type | Local Web Application |
| User Interface | Vanilla TypeScript, HTML/CSS |
| Game Rendering | Canvas API |
| Development and Build Tool | Vite |
| Testing Framework | Vitest |
| Package Management | npm |
| Runtime | Node.js |
| MIDI Library | @tonejs/midi |
| Audio Library | Tone.js |
| Version Control | Git and GitHub |

### Selection Rationale

- **TypeScript:** Provides static type checking and supports maintainable, shared data structures.
- **Local Web Application:** Runs locally in a browser without requiring an external backend server.
- **HTML/CSS:** Provides a straightforward approach to implementing menus and application interfaces.
- **Canvas API:** Supports lightweight 2D game rendering without requiring a dedicated game engine.
- **Vite:** Provides a lightweight development server and production build tooling.
- **Vitest:** Supports automated testing and integrates with the Vite development environment.
- **npm:** Provides dependency management and reproducible installations through `package-lock.json`.
- **@tonejs/midi and Tone.js:** Provide suitable libraries for future MIDI processing and audio features.

Python and Pygame are viable alternatives but may require additional effort for application UI development and audio integration.

Unity provides comprehensive game development tools but introduces additional complexity that is unnecessary for the current project scope.

### Project Structure

The project separates core logic, UI, audio, storage, shared types, tests, and resources.

Empty directories are preserved using `.gitkeep` files until feature implementation begins.

### Development Environment

- The Node.js version is recorded in `.nvmrc`.
- Dependencies are recorded in `package.json`.
- Exact dependency versions are recorded in `package-lock.json`.
- Team members install dependencies using `npm ci`.
- Development and testing commands are documented in `README.md` and `docs/local-setup.md`.

### Scope

This decision establishes the initial technology stack, project structure, and development environment.

Actual gameplay implementation, MIDI conversion, audio playback, rendering, and game logic are outside the scope of the initial setup issue.

Detailed technical decisions will be recorded when the corresponding features are designed and implemented.

### Team Approval

- [ ] Review the candidate technology stacks.
- [ ] Confirm team experience with the proposed technologies.
- [ ] Agree on the final technology stack at a team meeting.

**Status:** Proposed