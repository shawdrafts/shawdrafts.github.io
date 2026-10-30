# ShawDrafts Blog — deploy notes

Static blog (plain HTML+CSS, no build step). Files:
- index.html — homepage with 5 post cards
- about.html — honest about page (freelancer, real certifications only)
- style.css — navy #0A0E27 / gold #FFC400 / white theme
- posts/*.html — 5 articles (300–500 words each), adapted from the content bank

## Deploy to GitHub Pages (blocked 2026-10-30 — see below)

Target: public repo `dynoshi-maker.github.io` on the connected GitHub account
(`dynoshi-maker`). A repo literally named `<username>.github.io` gets GitHub
Pages enabled automatically; the site then goes live at
https://dynoshi-maker.github.io — no further settings needed.

Push all files in this folder to the repo root (branch `main`):
  index.html, about.html, style.css, posts/inbound-marketing-101.html,
  posts/email-subject-lines.html, posts/what-is-aeo.html,
  posts/followers-to-customers.html, posts/revenue-operations.html

## Why blocked

2026-10-30: `create_repository` via the GitHub connector returned
`403 Resource not accessible by integration` on POST /user/repos — the installed
GitHub App token does not have repository-creation permission. Reads work
(get_me OK); writes to repos may work once a repo exists, but no repo can be
created through the connector today.

## Recovery (owner or parent agent)

Option A (fastest, one owner click): github.com → New repository →
name `dynoshi-maker.github.io`, Public, do NOT add README → Create.
Then push this folder's files via the connector's push_files (owner `dynoshi-maker`,
repo `dynoshi-maker.github.io`, branch `main`).

Option B: reinstall/re-authorize the Muse GitHub App with repository
administration+creation permission, then create the repo via the connector.
