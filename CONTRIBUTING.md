# Contributing to bulbasaur_oss

This document describes how the bulbasaur_oss team collaborates on GitHub.
Please read it once from start to finish before you begin working.

> This repository is the final project for the Open Source Software course at SeoulTech (Fall 2026).
> Contributions are currently limited to team members. If you are not on the team, you are welcome
> to explore the code, but please do not open issues or pull requests during the course period.

---

## 1. Core principles

1. **All work starts from an issue.** Do not create a branch or a pull request without an issue.
2. **Changes reach `main` only through reviewed pull requests.** Pushing directly to `main` is not allowed.
3. **One issue = one branch = one pull request.** Do not mix several features in one PR.
4. **Decisions are recorded on GitHub.** Anything agreed in chat must be copied to the related issue or PR as a comment.
5. **Do not merge code you cannot explain.** This applies to AI-generated code as well.

---

## 2. Workflow at a glance

```
Check issue → Create branch → Work & commit → Push → Open PR → Review → Revise → Approve → Merge → Clean up
     │              │                                     │                                 │
   Ready       In progress                            In review                           Done   ← project board column
 (team moves)  (you move it)                       (automatic)                       (automatic)
```

| Step | What to do | Board card |
|---|---|---|
| ① Check issue | Read the acceptance criteria of the issue assigned to you | Ready |
| ② Create branch | Create a branch from the issue page and check it out locally | Move to In progress **yourself** |
| ③ Work & commit | Make small commits that follow the commit rules | In progress |
| ④ Open PR | Write `closes #<number>` and request a reviewer | Moves to In review automatically |
| ⑤ Review & revise | Reply to comments, push fixes, request re-review | Moves back to In progress when changes are requested |
| ⑥ Merge | After approval and passing CI, the author uses Squash and merge | Moves to Done automatically |
| ⑦ Clean up | Update your local `main` and move on to the next issue | — |

---

## 3. Branch rules

### 3-1. Branch model

```
main      ─────●─────────●─────────●──────────   (always working, no direct pushes)
                \       ↗ \       ↗
feature/12       ●──●──●   \     /               (issue #12 → PR → squash merge)
                            \   /
fix/18                       ●─●                 (issue #18 → PR → squash merge)
```

- **`main`** contains only code that passed review and CI. It must run at any time.
- **Work branches** are created from `main` for each issue and deleted after merging.
- We do not use intermediate branches such as `develop`. For a team of four they add overhead without benefit.

### 3-2. Branch names

```
<type>/<issue-number>-<short-description>
```

| Type | When | Example |
|---|---|---|
| `feature` | New functionality | `feature/12-keyword-search` |
| `fix` | Bug fix | `fix/18-search-not-refresh` |
| `refactor` | Structural change with no behavior change | `refactor/21-split-storage` |
| `test` | Adding or changing tests only | `test/27-storage-edge-cases` |
| `docs` | Documentation only | `docs/25-readme-setup` |
| `chore` | Configuration, build, CI | `chore/30-ci-workflow` |

- Use **lowercase English words joined by hyphens**, 2–4 words. No Korean, spaces, or capital letters.
- Always include the issue number so anyone can tell which issue a branch belongs to.

### 3-3. Creating a branch

**Option A (recommended): from the issue page**

1. On the issue page, open the right sidebar and click **Development → Create a branch**.
2. Rename the branch according to the rules above and confirm that the branch source is `main`.
3. Check it out locally:

```bash
git fetch origin
git checkout feature/12-keyword-search
```

A branch created this way is automatically linked to the issue.

**Option B: from the command line**

```bash
git checkout main
git pull origin main                          # always start from the latest main
git checkout -b feature/12-keyword-search
git push -u origin feature/12-keyword-search
```

### 3-4. Things to watch out for

- **Always branch from the latest `main`.** Starting from an old `main` leads to larger conflicts later.
- **Never push to someone else's branch.** Leave suggestions as PR review comments instead.
- **Keep branches short-lived.** If a branch is older than three days, check whether the issue is too large.
- **If `main` changed while you were working**, bring those changes into your branch (see section 5).
- **If you find something outside the issue scope**, do not fix it in the current branch. Open a new issue.

---

## 4. Commit rules

### 4-1. Commit message format

```
<type>: <what was done> (#<issue-number>)
```

| Type | Meaning | Example |
|---|---|---|
| `feat` | New feature | `feat: add case-insensitive keyword search (#12)` |
| `fix` | Bug fix | `fix: refresh search results after editing (#18)` |
| `test` | Tests | `test: add no-result case for search (#12)` |
| `refactor` | Restructuring | `refactor: move persistence logic into storage module (#21)` |
| `docs` | Documentation | `docs: add run instructions to README (#25)` |
| `chore` | Configuration, build | `chore: add GitHub Actions CI (#30)` |

- Team members may write the description in Korean or English. It must clearly state what changed.
  Messages such as `update`, `fix`, or `asdf` are not allowed.
- **Keep review fixes as separate commits.** They show how review feedback changed the code.

```
fix: address review - handle empty keyword input (#12)
```

### 4-2. Commit size

- One commit should contain **one logical change**.
- Before committing, run `git diff` to make sure no unintended changes are included
  (debug code, local settings, unrelated features).
- Never commit passwords, API keys, personal data, build output, or IDE settings.

---

## 5. Bringing `main` into your branch

If another PR was merged into `main` while you were working, update your branch before opening or merging your PR.

```bash
git checkout feature/12-keyword-search
git fetch origin
git merge origin/main
# resolve conflicts if any, then
git add .
git commit -m "chore: merge latest main (#12)"
git push
```

- We use **merge, not rebase**. Rebasing requires force pushes, which are easy to get wrong.
- If resolving a conflict means **removing someone else's code**, ask the author first instead of deciding alone.
- You can also use the **Update branch** button on the PR page.

---

## 6. Pull request rules

### 6-1. Title

```
[<Type>] <one-line summary> (<branch-name>) #<issue-number>
```

Example: `[Feature] Implement keyword search (feature/12-keyword-search) #12`

### 6-2. Required content

The PR template is filled in automatically. Complete **every** section below.

| Section | Content |
|---|---|
| Linked issue | `closes #12` — the issue closes and the board card moves to Done on merge |
| Changes | A list of what you changed |
| Reason | Why you implemented it this way, and why you chose it over alternatives |
| Tests | Commands you ran, their results, and behavior you checked by hand |
| AI use | Tool, task it helped with, what humans verified, what was accepted, changed, or rejected (`None` if unused) |
| Notes | Parts you want the reviewer to look at carefully |

### 6-3. Size and timing

- Aim for **300 changed lines or fewer**. A reviewer should understand the PR within about 20 minutes.
- If a PR grows too large, consider splitting it.
- Use a **Draft PR** when you want early feedback on direction. Draft PRs cannot be merged.
- **Pass all tests locally** before opening a PR. Do not request review while CI is failing.

### 6-4. Sidebar settings

| Field | Setting |
|---|---|
| Reviewers | This week's reviewer. If you modified someone else's code, also add its original author |
| Assignees | Yourself |
| Labels | The same type label as the issue, plus `ai-assisted` if AI helped |
| Development | Confirm the issue is linked (automatic when you write `closes #<number>`) |

---

## 7. Review rules

### 7-1. Reviewers

- Leave a first review **within 24 hours** of the request. If you will be late, say so in a PR comment.
- Read the actual code in the **Files changed** tab. Check out the branch and run it when needed.
- Check: acceptance criteria, edge cases, whether tests actually verify the requirements, error handling, readability.
- **State what you checked.** A review that only says "LGTM" or "looks good" does not count.

**Good comment examples**

> I compared the three acceptance criteria with the tests, and there is no test for the "no results" case.
> Also, `search("")` returns the whole list. Is that intended?

> I checked out the branch and tried three mixed-case keywords; all returned the expected results.
> Each acceptance criterion has a matching test, so I'm approving.

### 7-2. Choosing a review state

Submit through **Files changed → Review changes**.

| State | When | Effect |
|---|---|---|
| **Request changes** | Something must be fixed | Blocks merging; the card moves to In progress |
| **Comment** | Only questions or optional suggestions | Does not affect merging |
| **Approve** | You have finished checking and it can be merged | Allows merging |

Prefix optional suggestions with `[suggestion]` so they are not confused with required changes.

### 7-3. Authors

- **Reply to every comment.**
  - If you applied it: "Fixed in abc1234."
  - If you did not: give a technical reason. Do not ignore it or simply click Resolve.
- **The person who opened a conversation resolves it.** Authors do not close reviewers' threads on their own.
- After pushing fixes, click **↻ (Re-request review)** next to the reviewer's name.
- Reviews are about the code, not about you. Disagree with reasons, politely.

### 7-4. AI review tools

- AI review is additional input. **It never replaces a human approval.**
- If you include findings from an AI review tool, say so in your comment.
- Even if an AI tool reports no issues, the human reviewer must still describe what they checked.

---

## 8. Merge rules

### 8-1. Conditions (all required)

- [ ] At least one approval
- [ ] CI passes (green check)
- [ ] All review conversations are resolved
- [ ] No conflicts with the latest `main`

### 8-2. How to merge

- The **PR author** merges.
- Use **Squash and merge** only. Keep the PR title format as the commit message.
- The remote branch is deleted automatically after merging.

### 8-3. After merging

```bash
git checkout main
git pull origin main
git branch -d feature/12-keyword-search    # delete the local branch
```

- Confirm that the board card moved to **Done** and the issue was closed.
- If the change affects other members (an interface change, a new dependency), post a short note in the team chat.

---

## 9. Project board rules

| Column | Meaning | Moved by |
|---|---|---|
| Backlog | Registered work candidates | Automatic |
| Ready | Work that can start now | The team, in a sync meeting |
| In progress | The assignee is working on it | **The assignee** |
| In review | A PR is open and waiting for review | Automatic |
| Done | Merged | Automatic |

- When you start working, **move your card to In progress yourself**. A board that does not match reality is useless.
- Each person may have **at most two** cards in In progress at a time.
- **When cards pile up in In review, review before starting new work.**
- If a card stays in In progress for more than three days, comment on the issue with your progress or blocker.
- Do not work on anything that is not on the board. Unplanned work becomes an issue first.

---

## 10. AI use rules

**Allowed**

- Asking for help within the scope of one issue, with its acceptance criteria and the files it may change.
  For example: "Implement only the search function for issue #12. Do not modify the storage module or the UI."
- Explaining unfamiliar code, debugging a reproducible failure, drafting tests or documentation.

**Not allowed**

- Generating the whole project, or several features at once, and uploading the result.
- Splitting generated output among members to make the history look collaborative.
- Creating issues afterward and marking them complete.
- Treating passing AI-written tests as proof that AI-written code is correct.

**Recording**

- Always complete the **AI use** section of the PR and add the `ai-assisted` label.
- Keep short excerpts of prompts or responses that influenced an important decision as PR comments.
- Never give passwords, tokens, or personal data to an AI tool, and never include them in records.

---

## 11. Communication

- **Team chat**: quick messages, review reminders, and scheduling only.
- **GitHub issues and PR comments**: technical discussion and decisions.
- Copy decisions made in chat to the related issue on the same day, prefixed with `[Decision]`.
- Important decisions such as scope changes or technology choices are also added to `docs/decision-log.md`.
- Keep GitHub notifications on so you do not miss review requests or mentions.
- If you are stuck for more than half a day, describe the situation on the issue and ask for help.

---

## 12. Never do this

| Do not | Why |
|---|---|
| Push directly to `main` | Skips review and CI (blocked by branch protection) |
| `git push --force` | Can erase other people's commits |
| Push to someone else's branch | Creates changes the author does not know about |
| Merge without review | Violates the project workflow |
| Work without an issue | Leaves no record of the work |
| Mix several issues in one PR | Makes review hard and the history confusing |
| Resolve review comments without replying | The review process is lost from the record |
| Merge code you cannot explain | Every member must be able to explain their own changes |
| Commit secrets or build output | Security risk and repository clutter |

---

## 13. Frequently used commands

```bash
# Start working
git checkout main && git pull origin main
git fetch origin && git checkout feature/12-keyword-search

# Check status
git status
git diff
git log --oneline -10

# Commit and push
git add <file>
git commit -m "feat: add keyword search (#12)"
git push

# Bring in the latest main
git fetch origin && git merge origin/main

# Clean up after merging
git checkout main && git pull origin main
git branch -d feature/12-keyword-search
```

To change these rules, open a `docs` issue, discuss it with the team, and update this document through a pull request.
