/* AI Atlas — dependency-free, runs locally and on GitHub Pages. */
(() => {
'use strict';
const D = window.AI_ATLAS_DATA;
if (!D || !Array.isArray(D.topics)) { document.getElementById('app').textContent = 'Không tìm thấy content/atlas-data.js'; return; }
const byId = new Map(D.topics.map(t => [t.id, t]));
const byGroup = new Map(D.groups.map(g => [g.id, g]));
const app = document.getElementById('app');
const store = {
  get(k, def) { try { const v = localStorage.getItem('ai-atlas-' + k); return v === null ? def : JSON.parse(v); } catch { return def; } },
  set(k, val) { try { localStorage.setItem('ai-atlas-' + k, JSON.stringify(val)); } catch {} }
};
let completed = new Set(store.get('completed', []).filter(id => byId.has(id)));
let theme = store.get('theme','dark');
let view = 'home', activeTopic = null, filter = 'all', search = '', chosenTrack = store.get('track','engineer');
let temperature = 1, queryToken = 0, agentStep = 0;
const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pnum = x => Math.round(100*x);
const countDone = ids => ids.filter(id => completed.has(id)).length;
const pctDone = ids => ids.length ? Math.round(countDone(ids)*100/ids.length) : 0;
const allIds = D.topics.map(t => t.id);
const progress = () => pctDone(allIds);
const gName = id => byGroup.get(id)?.label || id;
const openButton = (id, text, cls='related-btn') => `<button class="${cls}" data-open="${esc(id)}">${esc(text)}</button>`;
function setView(v){ activeTopic=null; location.hash='#'+v; if(location.hash==='#'+v) route(); }
function parseHash(){ const [v, id] = location.hash.replace(/^#/,'').split('/'); return {v:['home','map','timeline','path','labs'].includes(v)?v:'home', id:byId.has(id)?id:null}; }
function route(){ const parsed=parseHash(); view=parsed.v; activeTopic=parsed.id; render(); window.scrollTo({top:0,behavior:'instant'}); }
function iconFor(v){return {home:'⌂',map:'◇',timeline:'◷',path:'↗',labs:'⌘'}[v]||'•'}
function sidebar(){
 const menu=[['home','Tổng quan'],['map','Knowledge map'],['timeline','Lịch sử AI'],['path','Learning paths'],['labs','Playground']];
 return `<aside class="sidebar"><div class="side-brand"><div class="brand-row"><div class="brand-logo"><img src="assets/thucde-logo.svg" alt="Thucde.dev logo" width="40" height="40" /></div><div><div class="brand-title">Thucde.dev</div><div class="tiny-caps">AI KNOWLEDGE ATLAS</div></div></div><p>Hiểu AI từ lịch sử, toán học đến cách coding agents vận hành.</p></div><div class="sidebar-scroller"><div class="side-caption tiny-caps">EXPLORATION</div>${menu.map(([id,label])=>`<button data-nav="${id}" class="side-link ${view===id?'active':''}" title="${label}"><span class="sym">${iconFor(id)}</span><span class="link-text">${label}</span><span class="arrow">↗</span></button>`).join('')}<div class="side-divider"></div><div class="side-caption tiny-caps">TOPIC COLLECTIONS</div>${D.groups.map(g=>`<button data-group="${g.id}" class="side-node" title="${esc(g.label)}"><span class="dot" style="background:${g.color}"></span><span style="flex:1">${esc(g.label)}</span><span class="count">${D.topics.filter(t=>t.group===g.id).length}</span></button>`).join('')}</div><div class="side-bottom"><div class="side-progress-top"><span>Your progress</span><strong>${progress()}%</strong></div><div class="small-progress"><div style="width:${progress()}%"></div></div><div style="font-size:11px;color:var(--muted);margin-top:8px">${countDone(allIds)} / ${allIds.length} topics explored</div></div></aside>`;
}
function header(){ return `<header class="topbar"><div class="breadcrumbs">THUCDE.DEV / AI <span style="margin:0 8px">/</span> <strong>${{home:'Overview',map:'Knowledge Map',timeline:'History',path:'Learning Paths',labs:'Playground'}[view]}</strong></div><div class="top-actions"><button class="icon-btn" data-nav="map" title="Tìm kiếm">⌕ <span class="kbd">⌘ K</span></button><button class="icon-btn" data-theme-toggle title="Đổi theme">${theme==='dark'?'☀':'☾'}</button></div></header>`; }
function footer(){return `<footer class="footer"><span>Thucde.dev / AI Knowledge Atlas · ${D.version} · Updated ${D.updated}</span><span>Content-first · zero dependencies · offline-ready</span></footer>`;}
function home(){return `<div class="hero"><div><div class="eyebrow">THE DEVELOPER'S FIELD GUIDE TO AI</div><h1 class="display">Understand the <em>machine.</em><br>Not just the hype.</h1><p class="intro">Từ Symbolic AI của những năm 1950 đến Transformer, LLM và coding agents. Một bản đồ để nối những khái niệm bạn đang dùng mỗi ngày với cơ chế phía sau chúng.</p><div class="hero-actions"><button class="btn" data-nav="map">Khám phá knowledge map <span>↗</span></button><button class="btn secondary" data-nav="path">Chọn lộ trình học ↗</button></div></div><div class="hero-visual"><div class="terminal-title"><span>HOW A CODING AGENT WORKS</span><span class="terminal-dots"><span></span><span></span><span></span></span></div><div class="pipeline"><div class="pipeline-node"><b>USER GOAL</b><small>“Find and fix this failing test”</small></div><span class="pipeline-arrow">↓</span><div class="pipeline-node glow"><b>LLM REASONING & PLANNING</b><small>Context · Transformer · Inference</small></div><span class="pipeline-arrow">↓</span><div class="pipeline-node"><b>TOOLS & ENVIRONMENT</b><small>read_file · edit_file · run_tests</small></div><span class="pipeline-arrow">↻</span><div class="mini-label">OBSERVE → ACT → VERIFY → REPEAT</div></div></div></div><div class="metric-row"><div class="metric"><div class="value">${D.topics.length}</div><div class="detail">Connected topics</div></div><div class="metric"><div class="value">${D.timeline.length}</div><div class="detail">Historical milestones</div></div><div class="metric"><div class="value">${D.tracks.length}</div><div class="detail">Learning paths</div></div><div class="metric"><div class="value">${progress()}%</div><div class="detail">Your learning progress</div></div></div><div class="section-head"><div><div class="section-kicker">THREE WAYS TO EXPLORE</div><h2>Không có một đường học duy nhất.</h2><p>Chọn lăng kính phù hợp với câu hỏi đang muốn giải đáp.</p></div></div><div class="learn-grid"><button class="learn-card" style="text-align:left" data-nav="timeline"><div class="glyph">◷</div><h3>History / Vì sao AI thành ra thế này?</h3><p>Symbolic reasoning, AI winters, deep learning, transformers và thời kỳ agents.</p><span class="go">Khám phá timeline ↗</span></button><button class="learn-card" style="text-align:left" data-nav="map"><div class="glyph">◇</div><h3>Mechanism / Model hoạt động như thế nào?</h3><p>Neural networks, Q/K/V attention, training, token generation và inference.</p><span class="go">Mở knowledge map ↗</span></button><button class="learn-card" style="text-align:left" data-nav="labs"><div class="glyph">⌘</div><h3>Systems / Từ LLM thành AI agent</h3><p>Tool use, RAG, context engineering, observe–act loop và kiểm soát rủi ro.</p><span class="go">Thử playground ↗</span></button></div><div class="section-head"><div><div class="section-kicker">THE CORE PIPELINE</div><h2>What happens inside an LLM?</h2><p>Đây là mental model giản lược, không thay thế từng biến thể kiến trúc.</p></div></div><div class="flow-strip">${[['01','Text / prompt','Natural language'],['02','Tokenizer','Token IDs'],['03','Embeddings','Numeric vectors'],['04','Transformer','Attention + MLP'],['05','Logits & sampling','Next token → repeat']].map(([n,name,desc],i)=>`<button class="flow-step" data-open="${['tokenization','tokenization','embedding','transformer','sampling'][i]}"><span class="big">${n}</span><b>${name}</b><span>${desc}</span></button>`).join('')}</div><div class="notice"><strong>Đề xuất cho bạn:</strong> vào <button class="link-button" data-nav="path">Engineer-first</button> trước. Với background software engineering, hiểu tool calling và agent loop ngay sẽ tạo động lực để quay xuống attention, pretraining và training loop.</div>${footer()}`; }
function mapPage(){return `<div class="eyebrow">AN INTERCONNECTED KNOWLEDGE GRAPH</div><h1 class="page-title">Knowledge map<span style="color:var(--lime)">.</span></h1><p class="page-subtitle">Nhấn vào một node để mở bài học, prerequisite và topic liên quan. Đây là cây phân loại để điều hướng; quan hệ kiến thức thực tế là một đồ thị nhiều chiều.</p><div class="tools-row"><label class="search"><span>⌕</span><input id="topic-search" placeholder="Tìm topic, keyword, ví dụ..." aria-label="Tìm topic" value="${esc(search)}" /></label><button class="icon-btn" data-clear-search title="Xóa bộ lọc">Reset</button></div><div class="filter-row" id="filter-row">${filters()}</div><div id="map-results">${mapResults()}</div>${footer()}`;}
function filters(){return `<button data-filter="all" class="chip ${filter==='all'?'active':''}">Tất cả (${D.topics.length})</button>${D.groups.map(g=>`<button data-filter="${g.id}" class="chip ${filter===g.id?'active':''}">${esc(g.label.split('/')[1].trim())}</button>`).join('')}`;}
function mapResults(){const q=search.trim().toLocaleLowerCase('vi');const matched=D.topics.filter(t=>(filter==='all'||t.group===filter)&&(!q||`${t.title} ${t.summary} ${(window.AI_ATLAS_CHAPTERS||{})[t.id]?.intro||''} ${((window.AI_ATLAS_CHAPTERS||{})[t.id]?.sections||[]).map(s=>[s.title,s.text,s.code,...(s.items||[]).map(i=>typeof i==='string'?i:i.text||''),...(s.rows||[]).flat()].join(' ')).join(' ')}`.toLocaleLowerCase('vi').includes(q))); if(!matched.length)return `<div class="empty">Không có topic trùng khớp. Thử keyword ngắn hơn hoặc reset filter.</div>`;const available=D.groups.filter(g=>matched.some(t=>t.group===g.id));return `<div class="result-count">Showing ${matched.length} / ${D.topics.length} topics · ${countDone(matched.map(t=>t.id))} đã học</div><div class="map-grid">${available.map(g=>`<section class="branch"><div class="branch-head"><div class="branch-icon" style="color:${g.color}">${g.icon}</div><div><h3>${esc(g.label)}</h3><p>${esc(g.subtitle)}</p></div></div><div class="node-list">${matched.filter(t=>t.group===g.id).map(t=>`<button data-open="${t.id}" class="node ${completed.has(t.id)?'is-done':''}"><span class="node-title">${esc(t.title)} ${completed.has(t.id)?'<span class="done-icon">✓</span>':''}</span><span class="node-sub">${esc(t.summary)}</span><span class="node-meta"><span class="level-dot" style="background:${g.color}"></span>${esc(t.level)} · ${t.minutes} phút ${t.prerequisites.length?' · '+t.prerequisites.length+' prerequisites':''}</span></button>`).join('')}</div></section>`).join('')}</div>`;}
function timelinePage(){return `<div class="eyebrow">A SELECTIVE HISTORY · 1943 — NOW</div><h1 class="page-title">How did we get here?</h1><p class="page-subtitle">Không có con đường thẳng từ rule-based AI đến ChatGPT. Nhiều nhánh cùng tiến hóa. Timeline dưới đây chọn các mốc hữu ích cho việc hiểu LLM hiện đại, không phải lịch sử đầy đủ.</p><div class="timeline">${D.timeline.map(x=>`<article class="time-card"><div class="time-year">${esc(x.year)}</div><div><h3 class="time-title">${esc(x.name)}</h3><p class="time-desc">${esc(x.desc)}</p><button class="link-button" style="margin-top:8px" data-open="${x.topic}">Explore concept ↗</button></div><div class="time-tag">${esc(x.lane)}</div></article>`).join('')}</div><div class="notice"><strong>Gợi ý:</strong> lịch sử AI còn bao gồm robotics, planning, speech, computer vision, probabilistic AI và reinforcement learning. Timeline này cố ý nhấn mạnh những đường dẫn tới LLM và agents.</div>${footer()}`;}
function pathPage(){const track=D.tracks.find(t=>t.id===chosenTrack)||D.tracks[0];const done=countDone(track.path);return `<div class="eyebrow">LEARNING WITHOUT GETTING LOST</div><h1 class="page-title">Choose your path<span style="color:var(--lime)">.</span></h1><p class="page-subtitle">Có thể nhảy giữa các lộ trình. Trạng thái đã học được lưu trên trình duyệt này, không gửi lên máy chủ.</p><div class="track-grid">${D.tracks.map(tr=>`<button data-track="${tr.id}" class="track-card ${tr.id===track.id?'active':''}"><div class="badge-track">${tr.id===track.id?'● SELECTED PATH':'○ LEARNING PATH'}</div><h3>${esc(tr.title)}</h3><p>${esc(tr.subtitle)}</p><div class="track-time">${tr.path.length} topics · ${esc(tr.duration)}</div></button>`).join('')}</div><div class="track-heading"><strong>${esc(track.title)} · ${done} / ${track.path.length} completed</strong><span>${Math.round(done*100/track.path.length)}%</span></div><div class="small-progress" style="margin:0 0 18px;height:8px"><div style="width:${Math.round(done*100/track.path.length)}%"></div></div><div class="track-list">${track.path.map((id,i)=>{const t=byId.get(id);return `<div class="track-step ${completed.has(id)?'done':''}"><div class="track-num">${completed.has(id)?'✓':String(i+1).padStart(2,'0')}</div><div class="track-body"><b>${esc(t.title)}</b><span>${esc(gName(t.group))} · ${t.minutes} phút · ${esc(t.level)}</span></div><button class="track-view" data-open="${id}">Học ↗</button></div>`}).join('')}</div>${footer()}`;}
function softmax(logits, t){const vals=logits.map(x=>Math.exp((x-Math.max(...logits))/t));const sum=vals.reduce((a,b)=>a+b,0);return vals.map(x=>x/sum)}
function samplingLab(){let probs=softmax([2,1,.1,-.45],temperature);return `<div class="slider-top"><span>Temperature (T)</span><strong id="temp-label">${temperature.toFixed(1)}</strong></div><input class="temperature-slider" id="temp-slider" type="range" min="0.2" max="2.0" step="0.1" value="${temperature}" aria-label="Temperature"/><div id="sampling-bars">${renderSamplingBars(probs)}</div><div class="lab-small">Logits giả lập [2, 1, 0.1, −0.45]. Softmax(z/T). Đây là phân phối mô phỏng, không phải output từ model thực.</div>`;}
function renderSamplingBars(probs){return ['Paris','Lyon','Berlin','Rome'].map((label,i)=>`<div class="bar-row"><b>${label}</b><div class="bar-track"><div class="bar-fill" style="width:${probs[i]*100}%"></div></div><div class="bar-pct">${(probs[i]*100).toFixed(1)}%</div></div>`).join('');}
const attTokens=['The','cat','sleeps'];const attMatrix=[[.75,.16,.09],[.12,.75,.13],[.12,.58,.30]];
function attentionLab(){return `<span class="mini-label">QUERY TOKEN</span><div class="token-buttons">${attTokens.map((t,i)=>`<button class="token-choice ${queryToken===i?'active':''}" data-query="${i}">${esc(t)}</button>`).join('')}</div><div id="attention-bars">${renderAttentionBars()}</div><div class="lab-small">Weights là ví dụ giả lập để trực quan hóa thao tác weighted sum của Value vectors. Không đại diện attention map thực của một model.</div>`;}
function renderAttentionBars(){return attTokens.map((t,i)=>`<div class="bar-row"><b>${esc(t)}</b><div class="bar-track"><div class="bar-fill" style="width:${attMatrix[queryToken][i]*100}%;background:${i===queryToken?'var(--lime)':'var(--purple)'}"></div></div><div class="bar-pct">${(attMatrix[queryToken][i]*100).toFixed(0)}%</div></div>`).join('');}
const agentStages=[['01 / GOAL','Observe task','User: “Fix failing test in auth middleware.”'],['02 / OBSERVE','Read project','Tool: search repository, inspect tests & middleware.'],['03 / DECIDE','Form a hypothesis','Model proposes likely bug and one small patch.'],['04 / ACT','Apply patch','Tool: edit relevant file (with permissions).'],['05 / VERIFY','Run tests','Tool returns pass/fail + test logs.'],['06 / FINISH','Report result','If tests fail, loop back to observe; otherwise summarize changes.']];
function agentLab(){const [step,title,desc]=agentStages[agentStep];return `<div class="agent-stage"><small>${step}</small><b>${title}</b><p>${desc}</p></div><div class="step-dots">${agentStages.map((_,i)=>`<span class="${i<=agentStep?'passed':''}"></span>`).join('')}</div><div class="lab-actions"><button class="btn small" data-agent-next>${agentStep===agentStages.length-1?'Restart ↺':'Next step →'}</button><button class="btn secondary small" data-agent-reset>Reset</button></div>`;}
function labsPage(){return `<div class="eyebrow">INTERACTIVE INTUITIONS</div><h1 class="page-title">Play with the mechanisms.</h1><p class="page-subtitle">Thử mô phỏng nhỏ để biến một công thức trừu tượng thành trực giác. Các thông số dưới đây là ví dụ minh họa, không phải mô phỏng chính xác một LLM production.</p><div class="lab-grid"><section class="lab-card"><div class="mini-label">LAB 01 / PROBABILITY</div><h3>Sampling & temperature</h3><p>Khi thay T, mô hình ưu tiên token có logit cao nhiều hay ít? Quan sát phân phối dưới đây.</p>${samplingLab()}<div style="margin-top:14px">${openButton('sampling','Đọc: Decoding ↗')}</div></section><section class="lab-card"><div class="mini-label">LAB 02 / ATTENTION</div><h3>Query → Key → weighted Values</h3><p>Chọn token truy vấn (Query) và quan sát nó gán trọng số cho các token khác.</p>${attentionLab()}<div style="margin-top:14px">${openButton('attention','Đọc: Self-attention ↗')}</div></section><section class="lab-card" style="grid-column:1/-1"><div class="mini-label">LAB 03 / AGENT ORCHESTRATION</div><h3>Walk through a coding-agent loop</h3><p>Mô phỏng các bước phối hợp model và tool. Trạng thái bước được điều khiển bằng code, chứ không phải LLM chạy trực tiếp trong trang.</p><div class="agent-lab" id="agent-stage-ui">${agentLab()}</div><div style="margin-top:16px">${openButton('agent-loop','Đọc: Agent loop ↗')} ${openButton('security','Đọc: Security ↗')}</div></section></div>${footer()}`;}

function paragraphs(raw) {
  return String(raw || '').split(/\n\s*\n/).filter(Boolean).map(block => '<p>' + esc(block).replace(/\n/g, '<br>') + '</p>').join('');
}
function readingSequence(t) {
  const tr = D.tracks.find(x => x.id === chosenTrack && x.path.includes(t.id));
  const ids = tr ? tr.path : D.topics.filter(x => x.group === t.group).map(x => x.id);
  const i = ids.indexOf(t.id);
  return { ids, index: i, previous: ids[i - 1] || null, next: ids[i + 1] || null,
    label: tr ? tr.title : (byGroup.get(t.group)?.label || 'Cùng nhóm') };
}
function renderChapter(t) {
  const chapter = (window.AI_ATLAS_CHAPTERS || {})[t.id];
  const sections = Array.isArray(chapter?.sections) && chapter.sections.length ? chapter.sections : [
    { type: 'text', title: 'Tổng quan', text: t.description || t.summary || 'Nội dung đang được biên soạn.' }
  ];
  return sections.map(section => {
    const heading = section.title ? '<h3>' + esc(section.title) + '</h3>' : '';
    switch (section.type) {
      case 'text': return '<section class="reader-section reader-prose">' + heading + paragraphs(section.text) + '</section>';
      case 'steps': return '<section class="reader-section">' + heading + '<ol class="chapter-steps">' + (section.items || []).map(item =>
        '<li>' + (typeof item === 'string' ? esc(item) : '<strong>' + esc(item.title) + '</strong><span>' + esc(item.text) + '</span>') + '</li>'
      ).join('') + '</ol></section>';
      case 'bullets': return '<section class="reader-section">' + heading + '<ul class="chapter-bullets">' + (section.items || []).map(item => '<li>' + esc(item) + '</li>').join('') + '</ul></section>';
      case 'compare': return '<section class="reader-section">' + heading + '<div class="chapter-compare">' + (section.rows || []).map(item =>
        '<div class="compare-item"><strong>' + esc(item[0]) + '</strong><span>' + esc(item[1]) + '</span></div>').join('') + '</div></section>';
      case 'code': return '<section class="reader-section">' + heading + (section.text ? paragraphs(section.text) : '') + '<div class="chapter-code"><div class="code-label">' + esc(section.language || 'PSEUDOCODE') + '</div><pre><code>' + esc(section.code || '') + '</code></pre></div></section>';
      case 'note': return '<section class="reader-section">' + '<div class="reader-callout">' + heading + paragraphs(section.text) + '</div></section>';
      case 'question': return '<section class="reader-section">' + '<div class="chapter-question"><span class="mini-label">TỰ KIỂM TRA</span>' + heading + paragraphs(section.text) + '</div></section>';
      default: return '';
    }
  }).join('');
}
function topicDrawer(){
  if(!activeTopic) return '';
  const t=byId.get(activeTopic); if(!t) return '';
  const g=byGroup.get(t.group), seq=readingSequence(t);
  const sources=(t.sources||[]).filter(s=>/^https:\/\//.test(s.url));
  return '<div class="drawer-backdrop" data-close></div>' +
    '<aside class="drawer" role="dialog" aria-modal="true" aria-label="' + esc(t.title) + '">' +
      '<div class="drawer-top"><div class="tiny-caps">THUCDE.DEV / AI ATLAS · BÀI ' + (seq.index + 1) + '/' + seq.ids.length + '</div><button class="close" data-close aria-label="Đóng bài học">×</button></div>' +
      '<div class="reader-scroll"><article class="reader">' +
        '<div class="eyebrow" style="color:' + g.color + '">' + esc(g.label) + '</div>' +
        '<h2>' + esc(t.title) + '</h2><p class="reader-lead">' + esc((window.AI_ATLAS_CHAPTERS||{})[t.id]?.intro || t.summary) + '</p>' +
        '<div class="reader-meta"><span class="pill">' + esc(t.level) + '</span><span class="pill">◷ ' + t.minutes + ' phút dự kiến</span><span class="pill" data-topic-status>' +
        (completed.has(t.id) ? '✓ Đã học' : '○ Chưa học') + '</span></div>' +
        renderChapter(t) +
        (t.prerequisites.length ? '<section class="reader-section"><h3>Nên đọc trước</h3><div class="reader-links">' + t.prerequisites.map(id=>openButton(id,byId.get(id).title)).join('') + '</div></section>' : '') +
        (t.related.length ? '<section class="reader-section"><h3>Khám phá tiếp</h3><div class="reader-links">' + t.related.map(id=>openButton(id,byId.get(id).title)).join('') + '</div></section>' : '') +
        (sources.length ? '<section class="reader-section"><h3>Nguồn tham khảo</h3>' + sources.map(v=>'<a class="source-link" href="' + esc(v.url) + '" target="_blank" rel="noopener noreferrer">' + esc(v.label) + ' <span>↗</span></a>').join('') + '</section>' : '') +
      '</article></div>' +
      '<div class="reader-bottom" aria-label="Điều hướng bài học"><div class="reader-bottom-context"><span>' + esc(seq.label) + '</span><strong>' + (seq.index + 1) + ' / ' + seq.ids.length + '</strong></div>' +
        '<div class="reader-bottom-actions">' +
          (seq.previous ? '<button class="reader-nav-btn" data-open="' + esc(seq.previous) + '" title="Bài trước: ' + esc(byId.get(seq.previous).title) + '">← <span>Trước</span></button>' : '<button class="reader-nav-btn" disabled>← <span>Trước</span></button>') +
          '<button class="reader-complete ' + (completed.has(t.id) ? 'completed' : '') + '" data-complete="' + esc(t.id) + '">' + (completed.has(t.id) ? '✓ Đã học' : '○ Đánh dấu đã học') + '</button>' +
          (seq.next ? '<button class="reader-nav-btn reader-nav-next" data-open="' + esc(seq.next) + '" title="Bài tiếp: ' + esc(byId.get(seq.next).title) + '"><span>Tiếp</span> →</button>' : '<button class="reader-nav-btn reader-nav-next" disabled><span>Hết bài</span> ✓</button>') +
        '</div></div>' +
    '</aside>';
}

function render(){document.documentElement.dataset.theme=theme;const pages={home,map:mapPage,timeline:timelinePage,path:pathPage,labs:labsPage};document.body.style.overflow=activeTopic?'hidden':'';app.innerHTML=`<div class="app-shell">${sidebar()}<div class="main-area">${header()}<main class="content">${(pages[view]||home)()}</main></div></div>${topicDrawer()}`;}
function updateLab(){const a=document.getElementById('agent-stage-ui');if(a)a.innerHTML=agentLab();}
function updateMapResults(){const m=document.getElementById('map-results');if(m)m.innerHTML=mapResults();const f=document.getElementById('filter-row');if(f)f.innerHTML=filters();}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-nav],[data-open],[data-group],[data-filter],[data-close],[data-track],[data-agent-next],[data-agent-reset],[data-query],[data-theme-toggle],[data-complete],[data-clear-search]');if(!b)return;
 if(b.hasAttribute('data-nav')){setView(b.dataset.nav);return;}
 if(b.hasAttribute('data-open')){const h='#'+view+'/'+b.dataset.open;if(location.hash===h)route();else location.hash=h;return;}
 if(b.hasAttribute('data-close')){setView(view);return;}
 if(b.hasAttribute('data-group')){filter=b.dataset.group;search='';setView('map');return;}
 if(b.hasAttribute('data-filter')){filter=b.dataset.filter;updateMapResults();return;}
 if(b.hasAttribute('data-clear-search')){search='';filter='all';const input=document.getElementById('topic-search');if(input)input.value='';updateMapResults();return;}
 if(b.hasAttribute('data-track')){chosenTrack=b.dataset.track;store.set('track',chosenTrack);render();return;}
 if(b.hasAttribute('data-theme-toggle')){theme=theme==='dark'?'light':'dark';store.set('theme',theme);render();return;}
 if(b.hasAttribute('data-complete')){const id=b.dataset.complete;const top=document.querySelector('.reader-scroll')?.scrollTop || 0;completed.has(id)?completed.delete(id):completed.add(id);store.set('completed',[...completed]);render();const scroller=document.querySelector('.reader-scroll');if(scroller)scroller.scrollTop=top;document.querySelector('[data-complete]')?.focus({preventScroll:true});return;}
 if(b.hasAttribute('data-query')){queryToken=Number(b.dataset.query);const parent=document.getElementById('attention-bars');if(parent)parent.innerHTML=renderAttentionBars();document.querySelectorAll('.token-choice').forEach(x=>x.classList.toggle('active',Number(x.dataset.query)===queryToken));return;}
 if(b.hasAttribute('data-agent-next')){agentStep=(agentStep+1)%agentStages.length;updateLab();return;}
 if(b.hasAttribute('data-agent-reset')){agentStep=0;updateLab();return;}
});
document.addEventListener('input',e=>{if(e.target.id==='topic-search'){search=e.target.value;updateMapResults();}if(e.target.id==='temp-slider'){temperature=Number(e.target.value);const label=document.getElementById('temp-label');if(label)label.textContent=temperature.toFixed(1);const bars=document.getElementById('sampling-bars');if(bars)bars.innerHTML=renderSamplingBars(softmax([2,1,.1,-.45],temperature));}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&activeTopic){setView(view);}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();activeTopic=null;filter='all';setView('map');document.getElementById('topic-search')?.focus();}});
window.addEventListener('hashchange',route);
route();
})();
