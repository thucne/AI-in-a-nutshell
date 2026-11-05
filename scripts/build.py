#!/usr/bin/env python3
"""Assemble portable standalone HTML for GitHub Pages /ai reverse proxy.
Run: python scripts/build.py
"""
from pathlib import Path
from urllib.parse import quote

root = Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "assets/styles.css").read_text(encoding="utf-8")
content_scripts = ["atlas-data", "chapters-history", "chapters-foundations",
                   "chapters-llm", "chapters-training", "chapters-agents-core",
                   "chapters-agents-systems", "chapters-frontier"]
html = html.replace('<link rel="stylesheet" href="assets/styles.css" />',
                    "<style>\n" + css + "\n</style>")

for name in content_scripts:
    path = root / "content" / (name + ".js")
    code = path.read_text(encoding="utf-8")
    html = html.replace(f'<script src="content/{name}.js"></script>',
                        "<script>\n" + code + "\n</script>")

code = (root / "assets/app.js").read_text(encoding="utf-8")
html = html.replace('<script src="assets/app.js"></script>',
                    "<script>\n" + code + "\n</script>")
svg = (root / "assets/thucde-logo.svg").read_text(encoding="utf-8")
html = html.replace('src="assets/thucde-logo.svg"',
                    'src="data:image/svg+xml,' + quote(svg, safe="") + '"')

(root / "dist").mkdir(exist_ok=True)
(root / "dist/index.html").write_text(html, encoding="utf-8")
print("Wrote dist/index.html", round(len(html)/1024), "KB")
