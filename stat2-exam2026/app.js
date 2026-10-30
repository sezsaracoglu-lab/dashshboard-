/* Stat 2 Exam Prep 2026.
   Every question of the chosen set is on the page at once. Click an option and the feedback
   opens straight away. Answers are kept in this browser under the s2ep26_ prefix. */
(function () {
  'use strict';
  var SETS = window[window.PAGECFG.data] || [];
  var META = window.META || { themes: {}, study: {}, icon: {} };
  var PRE = 's2ep26_';
  var cur = null;

  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------- saved answers ---------- */
  function load(id) {
    try { return JSON.parse(localStorage.getItem(PRE + id) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function save(id, st) {
    try { localStorage.setItem(PRE + id, JSON.stringify(st)); } catch (e) {}
  }
  function clear(id) {
    try { localStorage.removeItem(PRE + id); } catch (e) {}
  }
  function tally(s) {
    var st = load(s.id), n = 0, r = 0;
    s.questions.forEach(function (q, i) {
      if (st[i] === undefined) return;
      n++;
      if (st[i] === q.a) r++;
    });
    return { n: n, r: r, t: s.questions.length };
  }

  /* ---------- the set buttons ---------- */
  function tabs() {
    var box = $('#tabs');
    box.innerHTML = '';
    var groups = window.PAGECFG.rows;
    groups.forEach(function (g, gi) {
      var mine = SETS.filter(g.pick);
      if (!mine.length) return;
      var row = el('div', 'trow' + (gi ? ' second' : ''));
      if (g.label) row.appendChild(el('div', 'rowlbl', esc(g.label)));
      mine.forEach(function (s) {
        var t = tally(s);
        var b = el('button', 'tab');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-selected', String(cur === s.id));
        b.dataset.id = s.id;
        var done = t.n === t.t ? '<span class="tick">✓ ' + t.r + '/' + t.t + '</span>'
          : t.n ? t.n + ' of ' + t.t + ' answered' : t.t + ' questions';
        b.innerHTML = s.icon + ' ' + esc(s.short) + '<small>' + done + '</small>';
        b.addEventListener('click', function () { go(s.id, true); });
        row.appendChild(b);
      });
      box.appendChild(row);
    });
  }

  /* ---------- a table ---------- */
  function tableHTML(q) {
    if (q.raw) return '<div class="tablewrap">' + q.raw + '</div>';
    if (!q.out) return '';
    var o = q.out;
    var h = '<div class="tablewrap"><table class="qt">';
    if (o.cap) h += '<caption>' + o.cap + '</caption>';
    h += '<thead><tr>' + o.h.map(function (x) { return '<th>' + x + '</th>'; }).join('')
      + '</tr></thead><tbody>';
    o.r.forEach(function (r) {
      h += '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* ---------- the feedback panel ---------- */
  function panel(q, picked) {
    var right = picked === q.a;
    var h = '<div class="verdict' + (right ? '' : ' bad') + '">'
      + (right ? '✓ Correct.' : '✗ Not this time. The answer is '
        + 'abcd'.charAt(q.a) + '.') + '</div>';
    if (q.spot) {
      var hn = q.spot.replace(/^HINT[.:]\s*/i, '');
      hn = hn.charAt(0).toUpperCase() + hn.slice(1);
      h += '<div class="blk hint"><div class="lbl">🔎 The hint, for next time'
        + '</div><p>' + hn + '</p></div>';
    }
    if (q.plain) {
      var pl = q.plain.replace(/^In plain words:\s*/i, '');
      pl = pl.charAt(0).toUpperCase() + pl.slice(1);
      h += '<div class="blk plain"><div class="lbl">🗣️ In plain words</div><p>'
        + pl + '</p></div>';
    }
    var tri = '';
    if (q.tri) {
      var m = q.tri.split('->');
      tri = '<dl class="tline">' + m.map(function (part) {
        var bits = part.split(':');
        var k = bits.shift().trim();
        return '<dt>' + esc(k.replace(/^(Symptom|Diagnosis|Treatment)$/, '$1')) + '</dt><dd>'
          + bits.join(':').trim() + '</dd>';
      }).join('') + '</dl>';
    } else if (q.sym || q.diag || q.how) {
      tri = '<dl class="tline">'
        + (q.sym ? '<dt>Symptom</dt><dd>' + q.sym + '</dd>' : '')
        + (q.diag ? '<dt>Diagnosis</dt><dd>' + q.diag + '</dd>' : '')
        + (q.how ? '<dt>Treatment</dt><dd>' + q.how + '</dd>' : '')
        + '</dl>';
    }
    if (tri) {
      h += '<div class="blk tri"><div class="lbl">🧭 Symptom, diagnosis, treatment'
        + '</div>' + tri + '</div>';
    }
    if (q.work) {
      h += '<div class="blk work"><div class="lbl">🧮 The working, step by step'
        + '</div><div class="work">' + q.work + '</div></div>';
    }
    var w = q.wrongs.map(function (x, i) {
      if (i === q.a || !x) return '';
      return '<div class="wrow"><span class="x">' + 'abcd'.charAt(i) + '.</span><span>' + x
        + '</span></div>';
    }).join('');
    if (w) {
      h += '<div class="blk why"><div class="lbl">✗ Why the other options are wrong</div>'
        + w + '</div>';
    }
    if (q.trap) {
      h += '<div class="blk trap"><div class="lbl">⚠️ The trap</div><p>' + q.trap
        + '</p></div>';
    }
    if (q.recon) {
      h += '<div class="blk flagb"><div class="lbl">📝 Reconstructed</div><p>'
        + q.recon + '</p></div>';
    }
    if (q.recall) {
      h += '<div class="blk flagb rcl"><div class="lbl">⚠️ Check against your note'
        + '</div><p>' + q.recall + '</p></div>';
    }
    return h;
  }

  /* ---------- one question card ---------- */
  function card(s, q, i) {
    var sec = el('section', 'card q');
    sec.id = 'q' + (i + 1);
    var tags = [];
    tags.push('<span class="tg ch' + q.pct + '">exam chance ~' + q.pct + '%</span>');
    /* no topic tag in the header: naming the theme tells her which method to reach
       for before she has read the question. The theme still drives the score panel. */
    if (q.recon) tags.push('<span class="tg rec">reconstructed</span>');
    if (q.recall) tags.push('<span class="tg rcl">check your note</span>');
    sec.innerHTML = '<div class="qhead"><span class="qno">Question ' + (i + 1) + '</span>'
      + '<span class="qtags">' + tags.join('') + '</span></div>'
      + (q.src ? '<div class="qhead"><span>' + q.src + '</span></div>' : '')
      + '<div class="qtext">' + q.q + '</div>' + tableHTML(q);

    var opts = el('div', 'opts');
    q.o.forEach(function (text, oi) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.innerHTML = '<b>' + 'abcd'.charAt(oi) + '</b><span>' + text + '</span>';
      b.addEventListener('click', function () { answer(s, i, oi); });
      opts.appendChild(b);
    });
    sec.appendChild(opts);
    sec.appendChild(el('div', 'fb', ''));
    return sec;
  }

  function paint(s, i) {
    var st = load(s.id), q = s.questions[i];
    var sec = document.getElementById('q' + (i + 1));
    if (!sec) return;
    var picked = st[i];
    var bs = sec.querySelectorAll('.opt');
    for (var k = 0; k < bs.length; k++) {
      bs[k].classList.remove('right', 'wrong');
      bs[k].disabled = picked !== undefined;
    }
    var fb = $('.fb', sec);
    if (picked === undefined) { fb.innerHTML = ''; fb.hidden = true; return; }
    bs[q.a].classList.add('right');
    if (picked !== q.a) bs[picked].classList.add('wrong');
    fb.innerHTML = panel(q, picked);
    fb.hidden = false;
  }

  function answer(s, i, oi) {
    var st = load(s.id);
    if (st[i] !== undefined) return;
    st[i] = oi;
    save(s.id, st);
    paint(s, i);
    progress(s);
    tabs();
  }

  function progress(s) {
    var t = tally(s);
    var b = $('#pfill'), n = $('#pnum');
    if (b) b.style.width = (100 * t.n / t.t) + '%';
    if (n) {
      n.textContent = t.n + ' of ' + t.t + ' answered' + (t.n ? ', ' + t.r + ' right' : '');
    }
    results(s);
    jumpbar(s);
  }

  function jumpbar(s) {
    var box = $('#jump');
    if (!box) return;
    var st = load(s.id);
    box.innerHTML = '';
    s.questions.forEach(function (q, i) {
      var b = el('button', st[i] === undefined ? '' : (st[i] === q.a ? 'ok' : 'no'),
        String(i + 1));
      b.type = 'button';
      b.title = 'Question ' + (i + 1);
      b.addEventListener('click', function () {
        var n = document.getElementById('q' + (i + 1));
        if (n) n.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      box.appendChild(b);
    });
  }

  function ring(pct) {
    var R = 52, C = 2 * Math.PI * R;
    return '<svg class="ring" viewBox="0 0 120 120" role="img" aria-label="'
      + pct + ' per cent"><circle cx="60" cy="60" r="' + R
      + '" fill="none" stroke="#e4e0d6" stroke-width="12"/><circle cx="60" cy="60" r="' + R
      + '" fill="none" stroke="' + (pct >= 70 ? '#4f7a5a' : pct >= 50 ? '#b8923a' : '#a8553d')
      + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="'
      + (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1)
      + '" transform="rotate(-90 60 60)"/><text x="60" y="68" text-anchor="middle"'
      + ' font-family="Fraunces,Georgia,serif" font-size="27" fill="#1d2433">' + pct
      + '%</text></svg>';
  }

  function results(s) {
    var box = $('#res');
    if (!box) return;
    var t = tally(s), st = load(s.id);
    if (!t.n) {
      box.innerHTML = '<div class="card res"><div class="lbl">Your score</div>'
        + '<p class="note">Answer a question and your score appears here, with the topics to '
        + 'go back to.</p></div>';
      return;
    }
    var pct = Math.round(100 * t.r / t.n);
    var h = '<div class="card res"><h2 class="big">Your score</h2><div class="score">'
      + ring(pct) + '<div><p><b>' + t.r + ' right out of ' + t.n + ' answered</b>'
      + (t.n < t.t ? ', with ' + (t.t - t.n) + ' still to do.' : ', the whole set done.')
      + '</p><p>' + (pct >= 85
        ? 'That is exam standard. Come back in a few days and see whether it has stuck.'
        : pct >= 70
          ? 'Solid. Read the working on the ones you missed, then try the other set.'
          : pct >= 50
            ? 'Half way. The misses below are the ones worth an hour, not the whole theme.'
            : 'Go back to the study page for the topics below before trying more questions.')
      + '</p></div></div>';

    /* where the marks went, by theme */
    var byT = {};
    s.questions.forEach(function (q, i) {
      if (st[i] === undefined) return;
      var k = q.theme || 0;
      byT[k] = byT[k] || { n: 0, r: 0 };
      byT[k].n++;
      if (st[i] === q.a) byT[k].r++;
    });
    var keys = Object.keys(byT).filter(function (k) { return k !== '0'; });
    if (keys.length > 1) {
      h += '<table class="tt"><thead><tr><th>Theme</th><th>Right</th><th></th></tr></thead>'
        + '<tbody>';
      keys.sort(function (a, b) { return a - b; }).forEach(function (k) {
        var v = byT[k], p = Math.round(100 * v.r / v.n);
        h += '<tr><td>' + esc(META.themes[k] || ('Theme ' + k)) + '</td><td>' + v.r + '/'
          + v.n + '</td><td><span class="mini"><i style="width:' + p + '%;background:'
          + (p >= 70 ? '#4f7a5a' : p >= 50 ? '#b8923a' : '#a8553d') + '"></i></span></td></tr>';
      });
      h += '</tbody></table>';
    }

    /* the misses, grouped by question type */
    var miss = {};
    s.questions.forEach(function (q, i) {
      if (st[i] === undefined || st[i] === q.a) return;
      var k = q.typ || 'other';
      miss[k] = miss[k] || { qs: [], theme: q.theme || 0, skill: q.skill || '' };
      miss[k].qs.push(i + 1);
    });
    var mk = Object.keys(miss);
    if (mk.length) {
      h += '<h3 class="lbl" style="margin-top:20px">Go back to these</h3>';
      mk.sort(function (a, b) { return miss[b].qs.length - miss[a].qs.length; })
        .forEach(function (k) {
          var m = miss[k];
          var name = (META.label && META.label[k]) || m.skill || k.replace(/_/g, ' ');
          var link = META.study[m.theme];
          h += '<div class="st"><h4>' + esc(name) + '</h4><div class="w">'
            + (m.theme ? esc(META.themes[m.theme]) + ' · ' : '')
            + 'missed on question' + (m.qs.length > 1 ? 's ' : ' ') + m.qs.join(', ')
            + '</div><div class="l">'
            + m.qs.map(function (n) {
              return '<button type="button" data-q="' + n + '">Q' + n + '</button>';
            }).join('')
            + (link ? '<a href="' + link[1] + '" target="_blank" rel="noopener">'
              + esc(link[0]) + ' ↗</a>' : '')
            + '</div></div>';
        });
    }
    h += '<div class="btns"><button class="btn quiet" type="button" id="reset">'
      + '↺ Clear this set and start again</button></div></div>';
    box.innerHTML = h;
    var rb = $('#reset');
    if (rb) {
      rb.addEventListener('click', function () {
        clear(s.id);
        s.questions.forEach(function (q, i) { paint(s, i); });
        progress(s);
        tabs();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    box.querySelectorAll('[data-q]').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = document.getElementById('q' + b.dataset.q);
        if (n) n.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- render a whole set ---------- */
  function render(s) {
    var v = $('#view');
    v.innerHTML = '';
    var avg = Math.round(s.questions.reduce(function (a, q) { return a + q.pct; }, 0)
      / s.questions.length);
    var nrec = s.questions.filter(function (q) { return !!q.recon; }).length;
    var nrcl = s.questions.filter(function (q) { return !!q.recall; }).length;
    var pills = ['<span class="pill">' + s.questions.length + ' questions</span>',
      '<span class="pill y">average exam chance ~' + avg + '%</span>'];
    if (nrec) pills.push('<span class="pill v">' + nrec + ' reconstructed</span>');
    if (nrcl) pills.push('<span class="pill c">' + nrcl + ' to check against your note</span>');

    var intro = el('div', 'card lead intro');
    intro.innerHTML = '<h2>' + s.icon + ' ' + esc(s.name) + '</h2><p>' + esc(s.blurb)
      + '</p><div class="pills">' + pills.join('') + '</div>'
      + '<div class="bar"><i id="pfill"></i></div><div class="barnum" id="pnum"></div>'
      + '<div class="jump" id="jump"></div>';
    v.appendChild(intro);

    s.questions.forEach(function (q, i) { v.appendChild(card(s, q, i)); });
    v.appendChild(el('div', '', '<div id="res"></div>'));

    s.questions.forEach(function (q, i) { paint(s, i); });
    progress(s);
  }

  function go(id, push) {
    var s = SETS.filter(function (x) { return x.id === id; })[0] || SETS[0];
    if (!s) return;
    cur = s.id;
    tabs();
    render(s);
    if (push && location.hash !== '#' + s.id) {
      history.replaceState(null, '', '#' + s.id);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.addEventListener('hashchange', function () {
    var id = location.hash.replace('#', '');
    if (id && id !== cur) go(id, false);
  });

  go(location.hash.replace('#', '') || (SETS[0] && SETS[0].id), false);
})();
