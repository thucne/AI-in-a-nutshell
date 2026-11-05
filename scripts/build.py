#!/usr/bin/env python3
"""Build a fully standalone HTML file from the editable static project.
Run: python scripts/build.py
"""
from pathlib import Path
root=Path(__file__).resolve().parent.parent
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'assets/styles.css').read_text(encoding='utf-8')
content=(root/'content/atlas-data.js').read_text(encoding='utf-8')
app=(root/'assets/app.js').read_text(encoding='utf-8')
html=html.replace('<link rel="stylesheet" href="assets/styles.css" />', '<style>\n'+css+'\n</style>')
html=html.replace('<script src="content/atlas-data.js"></script>','<script>\n'+content+'\n</script>')
html=html.replace('<script src="assets/app.js"></script>','<script>\n'+app+'\n</script>')
(root/'dist').mkdir(exist_ok=True)
(root/'dist/index.html').write_text(html,encoding='utf-8')
print('Wrote dist/index.html',round(len(html)/1024),'KB')
