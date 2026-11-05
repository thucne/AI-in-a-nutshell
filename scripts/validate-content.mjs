#!/usr/bin/env node
// Editorial and runtime-source regression checks. Uses built-in Node modules only.
import { readFileSync } from 'node:fs';
import { Script, runInNewContext } from 'node:vm';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const groups = ['history', 'foundations', 'llm', 'training', 'agents-core', 'agents-systems', 'frontier'];
const context = { window: {} };
new Script(read('content/atlas-data.js')).runInNewContext(context);
for (const group of groups) {
  new Script(read('content/chapters-' + group + '.js')).runInNewContext(context);
}
new Script(read('assets/app.js')); // syntax-check the browser script without executing DOM code

const data = context.window.AI_ATLAS_DATA;
const chapters = context.window.AI_ATLAS_CHAPTERS;
const topics = data.topics;
const topicIds = new Set(topics.map(t => t.id));
const assert = (ok, message) => { if (!ok) throw new Error(message); };
const allowed = new Set(['text', 'code', 'steps', 'bullets', 'compare', 'note', 'question']);

assert(topicIds.size === topics.length, 'Duplicate topic id');
assert(topics.length >= 40, 'Topic count unexpectedly shrank');
assert(Object.keys(chapters).length === topics.length, 'One chapter must exist for each topic');
for (const t of topics) {
  const chapter = chapters[t.id];
  assert(chapter && typeof chapter.intro === 'string' && chapter.intro.length >= 80,
    'Missing/short introduction: ' + t.id);
  assert(Array.isArray(chapter.sections) && chapter.sections.length >= 3,
    'Chapter needs at least three purposeful sections: ' + t.id);
  assert(chapter.sections.every(s => allowed.has(s.type) && typeof s.title === 'string'),
    'Unknown section type/title: ' + t.id);
  assert(chapter.sections.some(s => s.type === 'text' || s.type === 'code'),
    'Chapter has no actual explanation: ' + t.id);
  assert([...t.prerequisites, ...t.related].every(id => topicIds.has(id)),
    'Broken reference in ' + t.id);
  assert(t.sources.every(source => /^https:\/\//.test(source.url)),
    'Non-https source in ' + t.id);
  assert(chapter.minutes >= 6, 'Unrealistic reading time ' + t.id);
}
for (const track of data.tracks) {
  assert(track.path.every(id => topicIds.has(id)), 'Broken learning path: ' + track.id);
}
for (const event of data.timeline) assert(topicIds.has(event.topic), 'Broken timeline link');
const html = read('dist/index.html');
assert(html.includes('data:image/svg+xml,'), 'Standalone logo missing');
assert(html.includes('reader-bottom-actions'), 'Reader navigation missing');
assert(html.includes('THUCDE.DEV / AI ATLAS'), 'Branding missing');
assert(!html.includes('src="content/'), 'Standalone chapter script not inlined');
assert(!html.includes('href="assets/'), 'Standalone CSS not inlined');
console.log('Verified ' + topics.length + ' authored chapters, source syntax, references, branding and standalone assets.');
