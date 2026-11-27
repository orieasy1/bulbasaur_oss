# Local Development Setup Guide

This guide explains how team members can install, run, test, and develop KeyFall on their local computers.

For repository administration and GitHub configuration, see [setup-guide.md](setup-guide.md).

For collaboration rules, see [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## 1. Prerequisites

Install the following tools before setting up the project.

| Tool | Purpose | Required |
|---|---|---|
| Git | Version control | Yes |
| Node.js | JavaScript runtime | Yes |
| npm | Package management | Yes |
| VS Code | Code editor | Recommended |
| Web browser | Application execution | Yes |

Official download links:

- Git: https://git-scm.com/downloads
- Node.js: https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/

The required Node.js version is specified in the `.nvmrc` file located in the repository root.

npm is included with Node.js.

## 2. Install Development Tools

### macOS

Install Git and Node.js using their official installers or a supported package manager.

Using a Node.js version manager such as nvm is recommended.

### Windows

Install Git and Node.js using their official installers.

Use PowerShell, Command Prompt, or Git Bash to execute the project commands.

If you use a Windows-compatible Node.js version manager, select the version specified in `.nvmrc`.

## 3. Verify Installation

Open a terminal and run:

```bash
git --version
node -v
npm -v
```

All three commands should return version information.

Ensure that the installed Node.js version matches `.nvmrc`.

## 4. Clone the Repository

Open the GitHub repository and copy its clone URL using the Code button.

```bash
git clone <repository-url>
cd bulbasaur_oss
```

Open the project directory in VS Code.

```bash
code .
```

If the `code` command is unavailable, open VS Code manually and select the project folder.

## 5. Configure the Node.js Version

Check the required version in `.nvmrc`.

For macOS or Git Bash:

```bash
cat .nvmrc
```

For Windows PowerShell:

```powershell
Get-Content .nvmrc
```

If you are using nvm on macOS or Linux:

```bash
nvm install
nvm use
```

If you are not using nvm, install the specified Node.js version manually.

For nvm-windows, specify the version explicitly when running `nvm install` and `nvm use`.

Verify the active version:

```bash
node -v
```

## 6. Install Project Dependencies

From the repository root, run:

```bash
npm ci
```

This installs the dependencies recorded in `package-lock.json`.

Team members should not create a new Vite project or install project dependencies individually.

Use `npm install` when intentionally adding or updating project dependencies. Commit any resulting changes to `package.json` and `package-lock.json`.

## 7. Run the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

The default address is:

http://localhost:5173

During the initial setup stage, the browser should display the minimal KeyFall application page.

To stop the development server, press `Ctrl + C`.

## 8. Run Tests

Execute all automated tests:

```bash
npm test
```

The initial smoke test should pass.

To run tests in watch mode:

```bash
npm run test:watch
```

Press `Ctrl + C` to exit watch mode.

## 9. Type Checking

Run:

```bash
npm run typecheck
```

This checks the TypeScript source code without generating application build output.

## 10. Build the Application

Create a production build:

```bash
npm run build
```

The generated files are stored in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

Open the local address displayed in the terminal.

The `dist/` directory must not be committed to Git.

## 11. Available Commands

| Command | Description |
|---|---|
| `npm ci` | Install locked dependencies |
| `npm install` | Install or update dependencies |
| `npm run dev` | Start the local development server |
| `npm test` | Run automated tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run typecheck` | Check TypeScript errors |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build |

## 12. Start Feature Development

Before starting development, make sure that your local main branch is up to date.

Save or commit any existing local changes before switching branches.

```bash
git switch main
git pull origin main
npm ci
```

Create or switch to a working branch according to the team collaboration rules.

Follow [CONTRIBUTING.md](../CONTRIBUTING.md) for branch naming, commit messages, pull requests, and code reviews.

Do not commit directly to the protected main branch.

## 13. Update the Local Project

When new changes are merged into main:

```bash
git switch main
git pull origin main
npm ci
```

Reinstalling dependencies ensures that your local development environment matches the updated project.

## 14. Troubleshooting

### Node.js or npm is not recognized

Restart the terminal after installing Node.js.

Check:

```bash
node -v
npm -v
```

### Dependency installation fails

Confirm that the Node.js version matches `.nvmrc`.

Run:

```bash
npm ci
```

If the problem persists, share the error message with the team.

Do not delete or modify `package-lock.json` as a routine troubleshooting step.

### Port 5173 is already in use

Stop the existing development server or use another port:

```bash
npm run dev -- --port 5174
```

Open the actual URL displayed in the terminal.

### An outdated page is displayed

- Confirm that the development server is running from the correct project directory.
- Verify that the browser is using the correct localhost address.
- Save all source files.
- Perform a hard refresh.
- Try opening the application in a private browsing window.

On macOS Chrome, use `Cmd + Shift + R` to perform a hard refresh.

On Windows Chrome, use `Ctrl + Shift + R`.

### The application displays a blank page

- Check the development server terminal for errors.
- Open the browser developer console.
- Confirm that the application entry files are available.
- Run `npm run typecheck`.
- Report unresolved errors to the team.

### Tests fail

Run:

```bash
npm ci
npm test
```

Share the test failure output with the team if the problem persists.

## 15. Setup Verification Checklist

Complete this checklist before starting feature development.

- [ ] Git is installed.
- [ ] The required Node.js version is installed.
- [ ] npm is available.
- [ ] The repository has been cloned.
- [ ] `npm ci` completes successfully.
- [ ] `npm run dev` launches the application.
- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` completes successfully.

Once these checks are complete, the local development environment is ready.