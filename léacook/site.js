// Léacook — site script (vanilla, partagé entre toutes les pages)

(function () {
  // ─── Smooth scroll ───
  document.documentElement.style.scrollBehavior = 'smooth';

  // ─── Mobile menu (burger) ───
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('nav-links--open');
      burger.textContent = open ? '✕' : '☰';
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Fermer au clic sur un lien
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('nav-links--open');
        burger.textContent = '☰';
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Chips actifs (filtres) ───
  document.querySelectorAll('.chips').forEach(group => {
    const chips = group.querySelectorAll('.chip');
    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('chip--active'));
      c.classList.add('chip--active');
    }));
  });

  // ─── Sticker hover (clin d'œil) ───
  document.querySelectorAll('.sticker').forEach(s => {
    s.addEventListener('mouseenter', () => {
      const r = parseFloat(s.dataset.r || (s.style.transform.match(/-?\d+(\.\d+)?/) || [0])[0]);
      if (!s.dataset.r) s.dataset.r = r;
      s.style.transition = 'transform .25s cubic-bezier(.5,1.6,.4,1)';
      s.style.transform = `rotate(${r + 4}deg) scale(1.08)`;
    });
    s.addEventListener('mouseleave', () => {
      const r = parseFloat(s.dataset.r || 0);
      s.style.transform = `rotate(${r}deg)`;
    });
  });

  // ─── Compute card border-radius scaling (decorative) ───
  // Compte les avis pour log uniquement
  const reviewCount = document.querySelectorAll('.review').length;
  if (reviewCount && console && console.log) {
    console.log(`%c[léacook] ${reviewCount} avis affichés`, 'color:#FF4FA3;font-weight:bold');
  }

  // ─── Easter egg : la mascotte ✦ ───
  // Triggers : (1) taper "poyo" au clavier, (2) cliquer 5x sur le point du logo.
  const SECRET = 'poyo';
  let buffer = '';
  document.addEventListener('keydown', (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    buffer = (buffer + (e.key || '').toLowerCase()).slice(-SECRET.length);
    if (buffer === SECRET) summon();
  });
  const logoDot = document.querySelector('.logo .dot');
  if (logoDot) {
    let clicks = 0, timer;
    logoDot.style.cursor = 'pointer';
    logoDot.addEventListener('click', (e) => {
      e.preventDefault(); clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => clicks = 0, 1500);
      if (clicks >= 5) { summon(); clicks = 0; }
    });
  }

  function summon() {
    if (document.querySelector('.mascot')) return;
    const el = document.createElement('div');
    el.className = 'mascot';
    el.innerHTML = `
      <div class="mascot__bubble">poyo!</div>
      <svg class="mascot__svg" viewBox="0 0 120 130" width="110" height="120" aria-label="Mascotte Léacook">
        <!-- ombre -->
        <ellipse cx="60" cy="118" rx="28" ry="5" fill="rgba(0,0,0,0.18)" />
        <!-- corps : blob ovale -->
        <ellipse cx="60" cy="72" rx="42" ry="38" fill="#FFC2DD" stroke="#15121F" stroke-width="3" />
        <!-- bande / filling de macaron -->
        <path d="M 22 78 Q 60 90 98 78" stroke="#FF4FA3" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.55" />
        <!-- joues -->
        <circle cx="36" cy="82" r="5" fill="#FF4FA3" opacity="0.7" />
        <circle cx="84" cy="82" r="5" fill="#FF4FA3" opacity="0.7" />
        <!-- yeux : petits points ronds (≠ Kirby) -->
        <circle cx="46" cy="64" r="3.5" fill="#15121F" />
        <circle cx="74" cy="64" r="3.5" fill="#15121F" />
        <circle cx="47" cy="63" r="1" fill="white" />
        <circle cx="75" cy="63" r="1" fill="white" />
        <!-- bouche : petit sourire -->
        <path d="M 52 76 Q 60 81 68 76" stroke="#15121F" stroke-width="2.2" fill="none" stroke-linecap="round" />
        <!-- bras stylisés -->
        <path d="M 18 70 Q 10 78 14 88" stroke="#15121F" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 102 70 Q 110 78 106 88" stroke="#15121F" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- la fraise sur la tête -->
        <path d="M 56 28 Q 60 18 64 28 L 70 34 Q 60 44 50 34 Z" fill="#FF4FA3" stroke="#15121F" stroke-width="2" />
        <circle cx="56" cy="33" r="1" fill="#FFE14F" />
        <circle cx="60" cy="36" r="1" fill="#FFE14F" />
        <circle cx="64" cy="33" r="1" fill="#FFE14F" />
        <!-- feuille fraise -->
        <path d="M 56 28 Q 58 22 60 24 Q 62 22 64 28" stroke="#7FE5C5" stroke-width="3" fill="#7FE5C5" stroke-linejoin="round" />
      </svg>
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('mascot--visible'));
    setTimeout(() => {
      el.classList.remove('mascot--visible');
      setTimeout(() => el.remove(), 500);
    }, 4500);
  }
})();
