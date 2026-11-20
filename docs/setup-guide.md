# bulbasaur_oss Repository Setup Guide

This is a list of settings that the repository maintainer configures once.
The rules team members follow are in `CONTRIBUTING.md`. This document covers the settings that make GitHub **enforce those rules automatically**.

> Order: 1 → 2 → 3 → 4 → 5 → 6 → 7.
> Push the initial files (step 2) to `main` before enabling branch protection (step 4).

---

## 1. Repository structure

```
bulbasaur_oss/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── feature_request.md      # Feature issue template
│   │   ├── bug_report.md           # Bug issue template
│   │   └── refactoring-template.md # Refactoring issue template
│   ├── workflows/
│   │   └── ci.yml                  # GitHub Actions (written after choosing the language)
│   └── pull_request_template.md    # Pull request template
├── docs/
│   ├── setup-guide.md              # This document
│   └── decision-log.md             # Record of important decisions (date, content, links)
├── src/                            # Source code (depends on the language)
├── tests/                          # Test code
├── .gitignore
├── CODE_OF_CONDUCT.md              # Code of conduct (fill in the contact placeholder)
├── CONTRIBUTING.md                 # Collaboration rules, English version (GitHub links it automatically)
├── LICENSE
└── README.md                       # Skeleton only; complete after the project is finalized
```

- Keep `CONTRIBUTING.md` in the **repository root**. GitHub shows a link to it automatically when someone opens an issue or pull request.
- Templates must be at the **exact paths under `.github/`** for GitHub to recognize them.
- The Korean `CONTRIBUTING_ko.md` is for sharing within the team. To keep it in the repository as well, place it at `docs/CONTRIBUTING_ko.md`.
- The `src/` and `tests/` layout can be adjusted to suit the language.

---

## 2. Push the initial files

Push directly to `main` before enabling branch protection. (The project statement explicitly allows initial repository setup to precede the first pull request.)

```bash
git checkout main
git add .github docs CONTRIBUTING.md CODE_OF_CONDUCT.md README.md
git commit -m "chore: add initial repository setup and collaboration documents"
git push origin main
```

### 2-1. Fill in before pushing

- [ ] Replace `<maintainer name>, <email or contact>` in `CODE_OF_CONDUCT.md` with a real name and contact
- [ ] Enter team member names and GitHub IDs in the Team table of `README.md` (the rest is written after the project is finalized)
- [ ] Check that the clone URL in `README.md` matches the actual repository URL

### 2-2. Template changes (already applied)

The templates in this package already include the items required by the project.

- **Pull request template**: added an AI use section, changed the issue link to the `closes #` format, added test and reviewer items to the checklist
- **Three issue templates**: added acceptance criteria, dependencies, and a milestone check; set the type label automatically through `labels`

### 2-3. `.gitignore`

Once the language is chosen, copy the matching file from [github/gitignore](https://github.com/github/gitignore) and add the following entries.

```
# IDE
.vscode/
.idea/
*.iml

# OS
.DS_Store
Thumbs.db

# Secrets
.env
*.key
```

---

## 3. General repository settings

**Settings → General**

| Section | Setting | Reason |
|---|---|---|
| Features | Issues ✅ / Projects ✅ | Use issues and the project board |
| Pull Requests | **Allow merge commits ☐ (uncheck)** | Use a single merge method |
| Pull Requests | **Allow squash merging ✅** (Default message: Pull request title) | Use Squash and merge only |
| Pull Requests | **Allow rebase merging ☐ (uncheck)** | Use a single merge method |
| Pull Requests | Always suggest updating pull request branches ✅ | Show the Update branch button on pull requests |
| Pull Requests | **Automatically delete head branches ✅** | Delete branches automatically after merging |

**Settings → Collaborators**

- Invite the three other team members with **Add people** (role: Write)
- Confirm that each member **accepted the invitation** by email or GitHub notification

---

## 4. Branch protection for `main`

**Settings → Rules → Rulesets → New ruleset → New branch ruleset**

| Field | Setting |
|---|---|
| Ruleset name | `protect-main` |
| Enforcement status | **Active** |
| Bypass list | **Leave empty** (maintainers follow the rules too) |
| Target branches | Add target → **Include default branch** |

**Rules to enable**

- [ ] **Restrict deletions** — prevents deleting `main`
- [ ] **Require a pull request before merging**
  - Required approvals: **1**
  - **Dismiss stale pull request approvals when new commits are pushed** ✅
  - **Require conversation resolution before merging** ✅
  - Allowed merge methods: **Squash**
- [ ] **Require status checks to pass** — add the check name after the CI workflow (`ci.yml`) has been created and has run at least once
  - Require branches to be up to date before merging ✅
- [ ] **Block force pushes**

→ Click **Create**

> **How to verify**: Push a test commit to `main` from your local machine. It should be rejected.
> If it is rejected, the rule works. Undo the test commit with `git reset --hard origin/main`.

---

## 5. Labels and milestones

### 5-1. Labels (Issues → Labels)

Rename or delete the default labels `bug`, `documentation`, and `enhancement` so that only the labels below remain.

| Label | Example color | Purpose |
|---|---|---|
| `feature` | `#1D76DB` | New functionality |
| `bug` | `#D73A4A` | Bug |
| `refactor` | `#5319E7` | Structural improvement |
| `test` | `#0E8A16` | Tests |
| `docs` | `#0075CA` | Documentation |
| `chore` | `#BFD4F2` | Configuration, CI |
| `investigation` | `#D4C5F9` | Research before implementation |
| `P1-필수` | `#B60205` | Required for the MVP (P1-required) |
| `P2-선택` | `#FBCA04` | Nice to have if time allows (P2-optional) |
| `ai-assisted` | `#C5DEF5` | Work done with AI assistance |

The issue templates specify `labels: feature`, `labels: bug`, and `labels: refactor`, so the labels must be created with **exactly these names** to be applied automatically.

The priority labels keep their Korean names because the issue list already uses them. If you rename them in English (for example, `P1-required` and `P2-optional`), update the issue list to match.

### 5-2. Milestones (Issues → Milestones → New milestone)

| Milestone | Content |
|---|---|
| `W12 Proposal` | Setup and initial issues needed for the recorded proposal |
| `W13 Checkpoint` | The first features shown at the mid-project checkpoint |
| `W15 Final` | Features and documentation up to the final submission |

Set the due dates to match the announced submission dates.

---

## 6. Finish the project board settings

The board was already created from the Kanban template, so only check the items below.

**Board, top right ⋯ → Settings**

- [ ] Project name: confirm that `bulbasaur_oss_kanban` was saved
- [ ] **Manage access**: add the three other members with **Write** access
- [ ] **Visibility**: **Public** (the instructor must be able to open the board from a link)

**Repository → Projects tab**

- [ ] Confirm that the board appears in the list. If it does not, connect it with **Link a project**

**Column settings (⋯ next to each column title)**

- [ ] Change the WIP limit of In progress to **8** (2 per person × 4 people)
- [ ] Keep the WIP limit of In review at **5**

**Board, top right → Workflows**

| Workflow | Setting | Done |
|---|---|---|
| Auto-add to project | Repository `bulbasaur_oss`, filter `is:issue,pr is:open` | ☐ |
| Item added to project | Status → Backlog | ☐ |
| Pull request linked to issue | Status → In review | ☐ |
| Code changes requested | Status → In progress | ☐ |
| Pull request merged | Status → Done | ☐ |
| Item closed | Status → Done | ☐ |
| Item reopened | Status → In progress | ☐ |

For each workflow, save with **Edit → set the value → Save and turn on workflow**.

---

## 7. End-to-end test

After finishing the setup, check once that the actual workflow behaves as expected.

1. [ ] Create a test issue from **Issues → New issue** with the Feature template → check that the acceptance criteria and dependency sections appear and that the label is applied automatically
2. [ ] Confirm that the card was added to **Backlog** on the board automatically
3. [ ] Drag the card from Ready to In progress
4. [ ] Create a `docs/1-setup-test` branch from the issue page with **Development → Create a branch**
5. [ ] On that branch, add one line to `docs/decision-log.md` and push
6. [ ] Open a pull request → check that the template is filled in automatically, and that the card moves to **In review** after you enter `closes #1`
7. [ ] Request a review from a team member → confirm that the merge button is blocked before approval
8. [ ] After approval, confirm that only **Squash and merge** is available → merge
9. [ ] Confirm that the issue closed automatically, the card moved to **Done**, and the branch was deleted automatically

This test pull request can remain as the team's first collaboration record.

---

## 8. Settings to add later

| When | What to do |
|---|---|
| After choosing the language and build tool | Write `.github/workflows/ci.yml` → add the status check to the branch protection rule in step 4 |
| After choosing the language | Add language-specific entries to `.gitignore` |
| After choosing the license | Add `LICENSE` and explain the choice in the README |
| After the first feature is merged | Add run instructions to the README |