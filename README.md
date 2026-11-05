# AI Knowledge Atlas 🧭

A Vietnamese-language, interactive AI field guide built for software engineers. Explore AI history, ML fundamentals, how LLMs work, training and post-training, and tool-using agents. **No framework, external CDN, server, API key, or install required.**

## Start in 10 seconds

- **Offline standalone:** open `dist/index.html` in a browser.
- **Editable project:** open `index.html` in a browser (it loads local `assets/*.css`, `assets/*.js`, and `content/atlas-data.js`).
- Topic metadata, timeline and learning tracks live in `content/atlas-data.js`; full authored chapters live in `content/chapters-*.js`.

## What you get

- **Knowledge map:** 40 editable topics in 6 collections, grouped as visual branches; searchable, filterable, linked with prerequisites and related concepts.
- **Timeline:** 15 curated milestones from 1943 through the current era, cross-linked to related topics. This is a selection, not a comprehensive history.
- **Learning paths:** Engineer-first, Inside-out LLM, History-first.
- **Mini labs:** softmax temperature, illustrative attention weights, simulated agent orchestration loop.
- **Reader:** 40 authored chapters with variable-depth sections (narrative, steps, code, comparisons, reflection), primary references and a fixed **Previous / Mark learned / Next** action bar. Lessons open in a **centered, spacious modal** with a clickable table of contents on desktop, while mobile uses a full-screen reading layout. Navigation follows the selected learning path where possible, otherwise the same topic collection.
- **Progress:** local-only `localStorage` (per browser/device); supports dark/light appearance.

## Edit / extend content (v1.1)

There are **two layers**, so the knowledge map stays separate from the reading experience:

1. `content/atlas-data.js` holds topic IDs, title, group, short card summary, metadata, prerequisites, related topics and links to sources.
2. `content/chapters-*.js` holds the **actual teaching content**, organized into different section types for each lesson. For example, `chapters-llm.js` covers self-attention and decoder mechanics.

A topic's entry in `atlas-data.js` can stay concise:

```js
{
  "id": "beam-search",
  "group": "llm",
  "title": "Beam search",
  "level": "Đào sâu",
  "minutes": 15,
  "summary": "Một chiến lược tìm kiếm chuỗi đầu ra.",
  "prerequisites": ["sampling"],
  "related": ["causal-lm"],
  "sources": [{ "label": "PAPER", "url": "https://arxiv.org/..." }]
}
```

Then add the **same ID** to the matching `chapters-*.js`:

```js
"beam-search": {
  "intro": "Trực giác về việc giữ lại nhiều ứng viên trong quá trình giải mã.",
  "minutes": 15,
  "sections": [
    { "type": "text", "title": "Một ví dụ bằng lời", "text": "..." },
    { "type": "steps", "title": "Quá trình tìm kiếm", "items": [
      { "title": "Tạo ứng viên", "text": "..." },
      { "title": "Chọn top k", "text": "..." }
    ] },
    { "type": "code", "title": "Pseudocode", "language": "PSEUDOCODE",
      "text": "Nói rõ các giả định của ví dụ.", "code": "..." },
    { "type": "question", "title": "Tự kiểm tra", "text": "..." }
  ]
}
```

Supported section types: `text`, `steps`, `bullets`, `compare`, `code`, `note` and `question`. Their rendering escapes user-provided strings; do not embed raw HTML in the chapter text. **Do not force all chapters through the same section sequence**: simple topics may have three short sections, complex ones may have more detailed explanations and code examples. Aim for natural, conversational Vietnamese with correct technical nuance.

Keep IDs stable to preserve browser progress. New IDs should be URL-safe, groups and references must exist, and sources should be original/authoritative where possible. Remember to add new topics to learning paths when appropriate.

### Validate and build

```bash
node scripts/validate-content.mjs
python3 scripts/build.py
git diff -- dist/index.html
```

Commit the regenerated `dist/index.html` with the chapter edits. **`https://thucde.dev/ai` rewrites to the standalone `dist/index.html`** on GitHub Pages, so changing only `atlas-data.js` or the root site will not update the proxied page until the standalone build is committed. GitHub Actions runs an editorial/data validation and verifies that `dist/index.html` matches the source.

## Publish to GitHub Pages

The project is synced to [thucne/AI-in-a-nutshell](https://github.com/thucne/AI-in-a-nutshell). To publish the website, open **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. After GitHub completes its deployment, visit **https://thucne.github.io/AI-in-a-nutshell/**.

The root `index.html` loads the editable assets and content; `dist/index.html` is a portable single-file build. When changing chapters, metadata, code or assets, regenerate and commit `dist/index.html` using `python3 scripts/build.py` to keep the proxied page in sync.

## Suggested future chapters

- Real tokenizer demo using model-specific vocabularies
- Q/K/V matrix multiplication demo with editable numeric matrices
- Micro autograd: backprop and SGD on a tiny network
- Train a 1-layer decoder-only transformer on a toy corpus
- RAG playground: ingest → chunk → retrieve → evaluate
- Agent traces with budget limits, approvals, tool failures, and prompt injection tests
- Quiz and spaced repetition, import/export progress as JSON
- Source citations per paragraph, versioned changelog and editorial review

## Architecture

```text
index.html                 # tiny shell, local links only
assets/styles.css          # responsive styling
assets/app.js              # interactive UI (vanilla JS)
content/atlas-data.js      # topic metadata, paths, timeline
content/chapters-*.js      # authored, variable-depth lesson bodies
assets/thucde-logo.svg     # official Thucde.dev mark
scripts/build.py           # produces standalone HTML
scripts/validate-content.mjs  # validates chapter integrity
dist/index.html            # standalone version: open from anywhere
```

**Privacy:** no analytics or network calls are made by the site. The official SVG brand mark is included locally in both the editable site and the standalone build. Source links only open if you explicitly click them. Progress is stored locally in your browser.

**Content scope:** This is an educational map, not a claim that every development in AI fits a single historical ladder. References are curated starting points. Verification date: November 5, 2026.