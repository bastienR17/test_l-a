// Bonbon — design system partagé
// Palette saturée, helpers, composants atomiques utilisés sur toutes les pages.
//
// IMPORTANT : les couleurs sont des CSS vars pour que le tweaks panel
// puisse les changer en live sans re-render des composants.
// Les vars doivent être définies sur :root dans specs.html.

const bb = {
  pink:    'var(--pink)',
  lilac:   'var(--lilac)',
  lemon:   'var(--lemon)',
  sky:     'var(--sky)',
  mint:    'var(--mint)',
  peach:   'var(--peach)',
  cream:   'var(--cream)',
  paper:   'var(--paper)',
  ink:     'var(--ink)',
  inkSoft: 'var(--inkSoft)',
  // Variante transparente (pour les bordures soft)
  ink22:   'color-mix(in srgb, var(--ink) 13%, transparent)',
};

const bbDisplay = `'Funnel Display', 'Bricolage Grotesque', system-ui, sans-serif`;
const bbBody = `'Plus Jakarta Sans', system-ui, sans-serif`;

// Photos Unsplash — gâteaux, ambiance, portrait. URL params: w/h pour le crop.
const PHOTOS = {
  fraisier: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&h=900&fit=crop&q=80',
  choco:    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&h=900&fit=crop&q=80',
  citron:   'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=900&h=900&fit=crop&q=80',
  number:   'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=900&h=900&fit=crop&q=80',
  wedding:  'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=900&h=900&fit=crop&q=80',
  cupcakes: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=900&h=900&fit=crop&q=80',
  rainbow:  'https://images.unsplash.com/photo-1464347744102-11db6282f854?w=900&h=900&fit=crop&q=80',
  pink:     'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&h=900&fit=crop&q=80',
  matcha:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=900&fit=crop&q=80',
  layer:    'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=900&h=900&fit=crop&q=80',
  hero:     'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1400&h=1200&fit=crop&q=80',
  lea:      'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&h=900&fit=crop&q=80',
  making:   'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=900&h=900&fit=crop&q=80',
  shop:     'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&h=900&fit=crop&q=80',
};

// Photo avec fallback rayé si l'URL casse.
function CakePhoto({ src, label, bg = bb.pink, h = 240, rounded = 24, style }) {
  const [ok, setOk] = React.useState(true);
  const ph = `repeating-linear-gradient(45deg, ${bg} 0 16px, rgba(0,0,0,0.06) 16px 17px)`;
  return (
    <div style={{
      width: '100%', height: h, borderRadius: rounded,
      background: ok ? `#eee` : ph,
      overflow: 'hidden', position: 'relative',
      ...style,
    }}>
      {ok && (
        <img
          src={src}
          onError={() => setOk(false)}
          alt={label || ''}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
      {!ok && (
        <div style={{
          position: 'absolute', inset: 0, padding: 16, boxSizing: 'border-box',
          display: 'flex', alignItems: 'flex-end',
          fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: 10, color: 'rgba(0,0,0,0.55)', letterSpacing: 1.2,
          textTransform: 'uppercase',
        }}>{label}</div>
      )}
    </div>
  );
}

// Sticker — pastille circulaire, contour épais.
function Sticker({ children, bg = bb.pink, color = bb.ink, rotate = 0, size = 96, bordered = true, style }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color, display: 'grid', placeItems: 'center',
      transform: `rotate(${rotate}deg)`,
      fontFamily: bbDisplay, fontWeight: 700,
      textAlign: 'center', lineHeight: 1.05, fontSize: 13,
      border: bordered ? `2.5px solid ${bb.ink}` : 'none',
      boxShadow: `0 5px 0 ${bb.ink}`,
      ...style,
    }}>{children}</div>
  );
}

// Bouton "fat" avec ombre dure.
function BbButton({ children, bg = bb.ink, color = bb.lemon, shadow = bb.pink, size = 'md', style, ...rest }) {
  const sz = {
    sm: { padding: '10px 18px', fontSize: 13, sh: 4 },
    md: { padding: '16px 28px', fontSize: 15, sh: 6 },
    lg: { padding: '20px 36px', fontSize: 17, sh: 8 },
  }[size];
  return (
    <button {...rest} style={{
      background: bg, color, border: 'none',
      padding: sz.padding, borderRadius: 999, fontFamily: bbBody,
      fontSize: sz.fontSize, fontWeight: 700, cursor: 'pointer',
      boxShadow: `0 ${sz.sh}px 0 ${shadow}`,
      ...style,
    }}>{children}</button>
  );
}

function BbButtonOutline({ children, size = 'md', style, ...rest }) {
  const sz = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '14px 26px', fontSize: 15 },
    lg: { padding: '18px 34px', fontSize: 17 },
  }[size];
  return (
    <button {...rest} style={{
      background: 'transparent', color: bb.ink, border: `2px solid ${bb.ink}`,
      padding: sz.padding, borderRadius: 999, fontFamily: bbBody,
      fontSize: sz.fontSize, fontWeight: 700, cursor: 'pointer',
      ...style,
    }}>{children}</button>
  );
}

// Mini-pill (tag / chip).
function Pill({ children, bg = bb.sky, color = bb.ink, style }) {
  return (
    <span style={{
      display: 'inline-block', background: bg, color,
      padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: 1,
      ...style,
    }}>{children}</span>
  );
}

// Logo
function BbLogo({ size = 30, color = bb.ink }) {
  return (
    <div style={{
      fontFamily: bbDisplay, fontSize: size, fontWeight: 800,
      letterSpacing: -1.5, display: 'flex', alignItems: 'center', gap: 4,
      color,
    }}>
      <span>léa</span>
      <span style={{
        display: 'inline-block', width: size / 3, height: size / 3, borderRadius: '50%',
        background: bb.pink, marginBottom: size / 5,
      }} />
      <span>cook</span>
    </div>
  );
}

// Bandeau marquee
function Marquee({ items = ['FAIT MAIN À ARGENTEUIL', 'COMMANDES SOUS 7 JOURS', 'LIVRÉ DANS LE 95'], bg = bb.ink, color = bb.lemon, star = bb.pink, size = 22 }) {
  return (
    <div style={{
      background: bg, color, padding: '18px 0',
      display: 'flex', gap: 40, overflow: 'hidden',
      fontFamily: bbDisplay, fontWeight: 800, fontSize: size, letterSpacing: -0.5,
      whiteSpace: 'nowrap',
    }}>
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 40, flex: '0 0 auto' }}>
          {items.map((t, j) => (
            <React.Fragment key={j}>
              <span>{t}</span>
              <span style={{ color: star }}>★</span>
            </React.Fragment>
          ))}
        </span>
      ))}
    </div>
  );
}

// Data partagée — catalogue gâteaux.
const CAKES = [
  { id: 'fraisier', t: 'Fraisier nuage',     d: 'vanille bourbon · fraises Gariguette', p: 78,  bg: bb.pink,   img: PHOTOS.fraisier, tags: ['layer', 'fruité'],   serves: '8–10', badge: 'NEW', badgeBg: bb.lemon },
  { id: 'choco',    t: 'Choco noisette',     d: 'Valrhona 70% · praliné maison',         p: 72,  bg: bb.lilac,  img: PHOTOS.choco,    tags: ['layer', 'chocolat'], serves: '8–10' },
  { id: 'citron',   t: 'Citron meringué XL', d: 'lemon curd · meringue brûlée',          p: 74,  bg: bb.lemon,  img: PHOTOS.citron,   tags: ['layer', 'fruité'],   serves: '8–10' },
  { id: 'number',   t: 'Number cake',        d: 'chiffre au choix · 8 personnes',        p: 65,  bg: bb.sky,    img: PHOTOS.number,   tags: ['number'],            serves: '8',    badge: 'POPULAIRE', badgeBg: bb.pink, badgeColor: bb.cream },
  { id: 'wedding',  t: 'Wedding cake',       d: '3 étages · sur devis',                  p: 320, bg: bb.mint,   img: PHOTOS.wedding,  tags: ['wedding'],           serves: '40+' },
  { id: 'cupcakes', t: 'Cupcakes',           d: 'la douzaine · 6 saveurs',               p: 36,  bg: bb.peach,  img: PHOTOS.cupcakes, tags: ['cupcakes'],          serves: '12 pièces' },
  { id: 'rainbow',  t: 'Rainbow cake',       d: '6 couches arc-en-ciel · vanille',       p: 82,  bg: bb.pink,   img: PHOTOS.rainbow,  tags: ['layer'],             serves: '10' },
  { id: 'matcha',   t: 'Matcha framboise',   d: 'biscuit matcha · ganache framboise',    p: 76,  bg: bb.mint,   img: PHOTOS.matcha,   tags: ['layer', 'fruité'],   serves: '8–10' },
];

Object.assign(window, {
  bb, bbDisplay, bbBody, PHOTOS, CAKES,
  CakePhoto, Sticker, BbButton, BbButtonOutline, Pill, BbLogo, Marquee,
});
