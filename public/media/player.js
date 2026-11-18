/* LumosX animation player.
   Reads a manifest: scene start times, optional caption cues, optional transcript and optional "audio".
   - With "audio" the animation is driven by the voice-over (scenes change as the narration moves on, and it is the only voice).
   - Without "audio" a silent clock steps through the scenes (used where the lesson page carries the voice-over).
   The audio is not downloaded until the learner presses Play. Nothing autoplays. */
(function () {
  var tag = document.querySelector('script[data-manifest]');
  var cap = document.getElementById('cap'), ctl = document.getElementById('ctl');
  fetch(tag.getAttribute('data-manifest')).then(function (r) { return r.json(); }).then(init).catch(function () {
    cap.textContent = 'This animation could not load. Please try again.';
  });

  function init(m) {
    var scenes = m.scenes.map(function (s) { return document.getElementById(s.id); });
    ctl.innerHTML = '<button type="button" id="play">' + (m.audio ? 'Play' : 'Play animation') + '</button>' +
      '<button type="button" id="replay" class="ghost">Replay</button>' +
      '<button type="button" id="cc" class="ghost" aria-pressed="true">Captions</button>' +
      '<input type="range" id="seek" min="0" max="' + m.duration + '" step="0.1" value="0" aria-label="Move through the animation">';

    // A silent clock with the same small interface the player uses (play, pause, currentTime, duration, events).
    function Clock(duration) {
      var et = document.createElement('span'), t = 0, last = 0, timer = 0;
      var c = { paused: true, ended: false, duration: duration, addEventListener: function (n, f) { et.addEventListener(n, f); } };
      Object.defineProperty(c, 'currentTime', { get: function () { return t; }, set: function (v) { t = Math.max(0, Math.min(duration, v)); c.ended = false; } });
      function fire(n) { et.dispatchEvent(new Event(n)); }
      c.play = function () {
        if (!c.paused) return Promise.resolve();
        c.paused = false; c.ended = false; last = performance.now(); fire('play');
        timer = setInterval(function () {
          var now = performance.now(); t += (now - last) / 1000; last = now;
          if (t >= duration) { t = duration; clearInterval(timer); c.paused = true; c.ended = true; fire('ended'); }
        }, 100);
        return Promise.resolve();
      };
      c.pause = function () { if (c.paused) return; c.paused = true; clearInterval(timer); fire('pause'); };
      return c;
    }
    var au;
    if (m.audio) {
      au = new Audio(); au.preload = 'none'; au.src = m.audio;
      au.addEventListener('loadedmetadata', function () { if (au.duration) seek.max = au.duration; });
      au.addEventListener('error', function () { cap.textContent = 'The audio could not load. You can still read the transcript below.'; capLocked = true; });
    } else au = Clock(m.duration);
    var capLocked = false;
    var PLAY = m.audio ? 'Play' : 'Play animation', PAUSE = m.audio ? 'Pause' : 'Pause animation';
    window.lumosxAudio = au; // exposed so the page can be tested (the narration is never started by script)
    var play = document.getElementById('play'), replay = document.getElementById('replay'), cc = document.getElementById('cc'), seek = document.getElementById('seek');
    var cur = -1, raf = 0;

    var cues = m.cues || null, curCue = -1;
    function cueAt(t) { var c = 0; for (var i = 0; i < cues.length; i++) if (t >= cues[i].start) c = i; return c; }
    function setCap(t) { if (capLocked) return; if (cues) { var c = cueAt(t); if (c !== curCue) { curCue = c; cap.textContent = cues[c].text; } } else cap.textContent = m.scenes[cur].caption || ''; }
    function show(i) { cur = i; scenes.forEach(function (g, j) { g.classList.toggle('on', j === i); }); setCap(au.currentTime || 0); }
    function at(t) { var s = 0; for (var i = 0; i < m.scenes.length; i++) if (t >= m.scenes[i].start) s = i; return s; }
    function tick() { var t = au.currentTime, s = at(t); if (s !== cur) show(s); setCap(t); seek.value = t; if (!au.paused && !au.ended) raf = requestAnimationFrame(tick); }

    // While the narration plays, the current scene restarts so its pieces appear in step with the voice.
    function startReveal() { document.body.classList.add('playing'); var g = scenes[cur]; if (g) { g.classList.remove('on'); void g.getBoundingClientRect(); g.classList.add('on'); } }
    au.addEventListener('play', function () { play.textContent = PAUSE; if (!document.body.classList.contains('playing')) startReveal(); cancelAnimationFrame(raf); tick(); });
    au.addEventListener('pause', function () { if (!au.ended) play.textContent = PLAY; });
    au.addEventListener('ended', function () { play.textContent = PLAY; document.body.classList.remove('playing'); tick(); });
    play.addEventListener('click', function () { if (!au.paused) { au.pause(); return; } if (au.ended) au.currentTime = 0; var p = au.play(); if (p && p.catch) p.catch(function () {}); });
    replay.addEventListener('click', function () { au.currentTime = 0; tick(); var p = au.play(); if (p && p.catch) p.catch(function () {}); });
    cc.addEventListener('click', function () { var on = cc.getAttribute('aria-pressed') !== 'true'; cc.setAttribute('aria-pressed', String(on)); cap.classList.toggle('off', !on); });
    seek.addEventListener('input', function () { au.currentTime = parseFloat(seek.value); tick(); });
    // Transcript (the full narration text, the same words as the voice-over).
    var trtext = document.getElementById('trtext');
    if (trtext && m.transcript) { m.transcript.forEach(function (t) { var p = document.createElement('p'); p.textContent = t; trtext.appendChild(p); }); }
    show(0);

    // Tell the lesson page how tall this animation is, so nothing is cut off or scrolls inside a small box.
    function report() { try { parent.postMessage({ lumosx: 'height', id: m.id, h: Math.ceil(document.body.getBoundingClientRect().height) }, '*'); } catch (e) {} }
    window.addEventListener('resize', report); window.addEventListener('load', report);
    document.querySelectorAll('details').forEach(function (d) { d.addEventListener('toggle', function () { setTimeout(report, 30); }); });
    if (window.ResizeObserver) new ResizeObserver(report).observe(document.body);
    report();
  }
})();
