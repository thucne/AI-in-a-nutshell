# AI Knowledge Atlas 🧭

A Vietnamese-language, interactive AI field guide built for software engineers. Explore AI history, ML fundamentals, how LLMs work, training and post-training, and tool-using agents. **No framework, external CDN, server, API key, or install required.**

## Start in 10 seconds

- **Offline standalone:** open `dist/index.html` in a browser.
- **Editable project:** open `index.html` in a browser (it loads local `assets/*.css`, `assets/*.js`, and `content/atlas-data.js`).
- All topic content, timeline milestones, group labels, and learning tracks live in `content/atlas-data.js`.

## What you get

- **Knowledge map:** 40 editable topics in 6 collections, grouped as visual branches; searchable, filterable, linked with prerequisites and related concepts.
- **Timeline:** 15 curated milestones from 1943 through the current era, cross-linked to related topics. This is a selection, not a comprehensive history.
- **Learning paths:** Engineer-first, Inside-out LLM, History-first.
- **Mini labs:** softmax temperature, illustrative attention weights, simulated agent orchestration loop.
- **Reader:** explanations, mechanics, examples, misconceptions, self-study tasks, scholarly/source links.
- **Progress:** local-only `localStorage` (per browser/device); supports dark/light appearance.

## Edit / extend content

The only data file you need for new lessons is `content/atlas-data.js`. It assigns a JSON-compatible object to `window.AI_ATLAS_DATA`. Add a new entry in `topics`:

```js
{
  "id": "beam-search",           // unique permanent id, URL-safe
  "group": "llm",               // history | foundations | llm | training | agents | frontier
  "title": "Beam search",
  "level": "Đào sâu",           // Nhập môn | Cốt lõi | Đào sâu
  "minutes": 10,
  "summary": "Short summary",
  "why": "Why learn this?",
  "how": "Mechanism explained simply but accurately",
  "example": "One concrete input-output example",
  "misconception": "A common misconception",
  "exercise": "A hands-on thought experiment",
  "prerequisites": ["sampling"],
  "related": ["causal-lm"],
  "sources": [{ "label": "PAPER", "url": "https://arxiv.org/..." }]
}
```

`group` must match a group id; `prerequisites`, `related`, and track `path` must reference valid topic IDs. Add a milestone in `timeline` or a step in `tracks` by referencing the topic ID. Make links primary-source when practical. Avoid presenting toy examples as a literal tokenizer or real attention weights.

> Note: `scripts/make_content.py` was used to author the v1 seed. If you edit `atlas-data.js` manually, **do not rerun** `make_content.py` unless you intend to regenerate its seeded data. Regenerate the standalone build with `python scripts/build.py` after editing data or assets.

## Publish to GitHub Pages

The project is synced to [thucne/AI-in-a-nutshell](https://github.com/thucne/AI-in-a-nutshell). To publish the website, open **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. After GitHub completes its deployment, visit **https://thucne.github.io/AI-in-a-nutshell/**.

The root `index.html` loads the editable assets and content; `dist/index.html` is a portable single-file build. When changing `content/atlas-data.js` or assets, run `python scripts/build.py` to keep the standalone version in sync.

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
content/atlas-data.js      # all learning content
scripts/build.py           # produces standalone HTML
dist/index.html            # standalone version: open from anywhere
```

**Privacy:** no analytics or network calls are made by the site. Source links only open if you explicitly click them. Progress is stored locally in your browser.

**Content scope:** This is an educational map, not a claim that every development in AI fits a single historical ladder. References are curated starting points. Verification date: November 5, 2026.