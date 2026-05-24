// Bonbon — Page détail gâteau (desktop 1280)
// Galerie photos, configurateur, infos, suggestions, retours.

function BonbonDetail() {
  const cake = CAKES.find(c => c.id === 'fraisier');
  const gallery = [PHOTOS.fraisier, PHOTOS.pink, PHOTOS.making, PHOTOS.rainbow];
  const [selected, setSelected] = React.useState(0);
  const [size, setSize] = React.useState('M');
  const [flavor, setFlavor] = React.useState('Fraises Gariguette');

  const sizes = [
    { id: 'S', label: 'Petit', serves: '6 pers.', price: 58 },
    { id: 'M', label: 'Moyen', serves: '8–10 pers.', price: 78 },
    { id: 'L', label: 'Grand', serves: '12–15 pers.', price: 110 },
    { id: 'XL', label: 'XL', serves: '20+ pers.', price: 180 },
  ];
  const currentPrice = sizes.find(s => s.id === size).price;

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 15, lineHeight: 1.55,
    }}>
      {/* NAV */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px' }}>
        <BbLogo />
        <nav style={{ display: 'flex', gap: 6, background: bb.ink, padding: 6, borderRadius: 999 }}>
          {[['Accueil'], ['La carte', true], ['Sur-mesure'], ['Léa'], ['Contact']].map(([n, active], i) => (
            <a key={i} style={{
              padding: '8px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600,
              color: active ? bb.ink : bb.cream,
              background: active ? bb.lemon : 'transparent',
              textDecoration: 'none', cursor: 'pointer',
            }}>{n}</a>
          ))}
        </nav>
        <BbButton bg={bb.pink} color={bb.cream} shadow={bb.ink} size="sm">Commander ♥</BbButton>
      </div>

      {/* BREADCRUMB */}
      <div style={{ padding: '16px 48px', fontSize: 13, color: bb.inkSoft }}>
        <a style={{ color: bb.inkSoft, textDecoration: 'none' }}>Accueil</a>
        {' · '}
        <a style={{ color: bb.inkSoft, textDecoration: 'none' }}>La carte</a>
        {' · '}
        <a style={{ color: bb.inkSoft, textDecoration: 'none' }}>Layer cakes</a>
        {' · '}
        <span style={{ color: bb.ink, fontWeight: 700 }}>{cake.t}</span>
      </div>

      {/* PRODUCT MAIN */}
      <section style={{ padding: '24px 48px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48 }}>
          {/* Galerie */}
          <div>
            <div style={{ position: 'relative', marginBottom: 14 }}>
              <CakePhoto
                src={gallery[selected]}
                bg={cake.bg}
                h={600}
                rounded={28}
                style={{ border: `3px solid ${bb.ink}`, boxShadow: `0 10px 0 ${bb.ink}` }}
              />
              {cake.badge && (
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                  <Sticker bg={bb.lemon} rotate={-8} size={84}>
                    <span style={{ fontSize: 12 }}>{cake.badge}</span>
                  </Sticker>
                </div>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {gallery.map((src, i) => (
                <div key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    border: `2px solid ${i === selected ? bb.pink : bb.ink}`,
                    borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
                    transform: i === selected ? 'scale(1.02)' : 'none',
                    transition: 'transform .15s',
                  }}
                >
                  <CakePhoto src={src} bg={cake.bg} h={110} rounded={10} />
                </div>
              ))}
            </div>
          </div>

          {/* Configurateur */}
          <div>
            <Pill bg={bb.sky} style={{ marginBottom: 14 }}>Layer cake · disponible</Pill>
            <h1 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 64,
              lineHeight: 0.92, letterSpacing: -2.5, margin: '0 0 12px',
            }}>{cake.t}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: bb.inkSoft, margin: '0 0 24px' }}>
              Génoise vanille bourbon ultra-moelleuse, crème diplomate fouettée minute,
              fraises Gariguette du marché de Cergy. Le grand classique, mais en mieux.
            </p>

            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 32,
            }}>
              <span style={{
                fontFamily: bbDisplay, fontWeight: 800, fontSize: 56,
                background: bb.ink, color: bb.lemon, padding: '4px 18px', borderRadius: 16,
                letterSpacing: -1,
              }}>{currentPrice}€</span>
              <span style={{ fontSize: 14, color: bb.inkSoft }}>
                soit ~{(currentPrice / parseFloat(sizes.find(s => s.id === size).serves)).toFixed(0)}€/pers.
              </span>
            </div>

            {/* TAILLES */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                Choisis ta taille
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {sizes.map((s) => (
                  <button key={s.id}
                    onClick={() => setSize(s.id)}
                    style={{
                      padding: '14px 10px', borderRadius: 16,
                      background: s.id === size ? bb.lemon : bb.paper,
                      border: `2px solid ${bb.ink}`,
                      boxShadow: s.id === size ? `0 4px 0 ${bb.ink}` : 'none',
                      transform: s.id === size ? 'translateY(-2px)' : 'none',
                      cursor: 'pointer',
                      fontFamily: bbBody,
                    }}>
                    <div style={{ fontFamily: bbDisplay, fontSize: 22, fontWeight: 800 }}>{s.id}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, marginTop: 2 }}>{s.serves}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6 }}>{s.price}€</div>
                  </button>
                ))}
              </div>
            </div>

            {/* PARFUM */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                Variante de saison
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Fraises Gariguette', 'Fraises × basilic', 'Fraises × pistache', 'Mara des bois'].map((f) => (
                  <button key={f}
                    onClick={() => setFlavor(f)}
                    style={{
                      padding: '10px 16px', borderRadius: 999,
                      background: f === flavor ? bb.ink : 'transparent',
                      color: f === flavor ? bb.cream : bb.ink,
                      border: f === flavor ? 'none' : `1.5px solid ${bb.ink}`,
                      fontFamily: bbBody, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    }}
                  >{f}</button>
                ))}
              </div>
            </div>

            {/* PERSONNALISATION */}
            <div style={{
              background: bb.paper, border: `2px dashed ${bb.ink}`,
              borderRadius: 20, padding: 20, marginBottom: 28,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>✨</span>
                <div style={{ fontFamily: bbDisplay, fontSize: 18, fontWeight: 700 }}>
                  Personnalise (option, +0€)
                </div>
              </div>
              <input
                placeholder="Message à écrire sur le gâteau (ex: Joyeux anniv Théo !)"
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 12,
                  border: `1.5px solid ${bb.ink}`, background: bb.cream,
                  fontFamily: bbBody, fontSize: 14, color: bb.ink, boxSizing: 'border-box',
                }} />
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                {['Couleur principale', 'Bougies', 'Topper en sucre'].map((o) => (
                  <span key={o} style={{
                    fontSize: 12, padding: '6px 12px', borderRadius: 999,
                    background: bb.cream, border: `1.5px solid ${bb.ink}`,
                    fontWeight: 600, cursor: 'pointer',
                  }}>+ {o}</span>
                ))}
              </div>
            </div>

            {/* DATE */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                Pour quand ?
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <input
                  type="text" defaultValue="Sam. 6 juin 2026"
                  style={{
                    flex: 1, padding: '14px 16px', borderRadius: 14,
                    border: `2px solid ${bb.ink}`, background: bb.paper,
                    fontFamily: bbBody, fontSize: 14, fontWeight: 600, color: bb.ink,
                  }} />
                <select style={{
                  padding: '14px 16px', borderRadius: 14,
                  border: `2px solid ${bb.ink}`, background: bb.paper,
                  fontFamily: bbBody, fontSize: 14, fontWeight: 600, color: bb.ink, cursor: 'pointer',
                }}>
                  <option>Livraison à domicile (+12€)</option>
                  <option>Retrait à Argenteuil (gratuit)</option>
                </select>
              </div>
              <div style={{ fontSize: 12, color: bb.inkSoft, marginTop: 8 }}>
                ⏱ Préavis minimum 7 jours. Léa confirme sous 24h.
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 12 }}>
              <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="lg" style={{ flex: 1 }}>
                Commander · {currentPrice}€ →
              </BbButton>
              <BbButtonOutline size="lg" style={{ padding: '20px 24px' }}>♥</BbButtonOutline>
            </div>

            {/* Trust strip */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginTop: 28,
              padding: '16px 0', borderTop: `1px solid ${bb.ink}33`,
              fontSize: 12, color: bb.inkSoft, fontWeight: 600,
            }}>
              <div>✓ Acompte 30%</div>
              <div>✓ Frais à la livraison</div>
              <div>✓ Annulable J-7</div>
              <div>✓ Devis sous 24h</div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION TABS */}
      <section style={{ background: bb.lilac, padding: '64px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <Pill bg={bb.cream} style={{ marginBottom: 14 }}>L'histoire</Pill>
            <h2 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 44,
              lineHeight: 0.95, letterSpacing: -1.5, margin: '0 0 20px',
            }}>
              Le fraisier de Léa, c'est<br />
              <span style={{ fontStyle: 'italic' }}>son madeleine de Proust</span>.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: '0 0 16px' }}>
              C'est le gâteau que sa grand-mère faisait tous les dimanches d'été
              quand elle était petite, à base de fraises du jardin. Léa en a
              gardé l'esprit, et elle a ajouté sa patte : une crème diplomate
              plus légère, une touche de zeste de citron, et une déco minimaliste.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Disponible toute la saison des fraises (mai → juillet),
              avec des Gariguettes ou des Mara des Bois selon le marché.
            </p>
          </div>
          <div>
            <Pill bg={bb.cream} style={{ marginBottom: 14 }}>Composition</Pill>
            <h3 style={{
              fontFamily: bbDisplay, fontWeight: 700, fontSize: 24, margin: '0 0 16px',
            }}>Ingrédients du jour</h3>
            <div style={{ display: 'grid', gap: 8, fontSize: 14 }}>
              {[
                ['Génoise', 'farine T55, œufs fermiers, sucre, vanille bourbon Madagascar'],
                ['Crème diplomate', 'crème entière 35%, mascarpone, sucre, gélatine'],
                ['Fruits', 'fraises Gariguette IDF (selon arrivage)'],
                ['Déco', 'fleurs comestibles, sucre glace'],
                ['Allergènes', 'gluten, œuf, lait. Trace de fruits à coque.'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'grid', gridTemplateColumns: '140px 1fr', gap: 12,
                  padding: '10px 0', borderBottom: `1px solid ${bb.ink}22`,
                }}>
                  <span style={{ fontWeight: 700 }}>{k}</span>
                  <span style={{ color: bb.ink }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTIONS */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <h2 style={{
            fontFamily: bbDisplay, fontWeight: 800, fontSize: 48,
            lineHeight: 0.95, letterSpacing: -1.5, margin: 0,
          }}>Tu vas aussi aimer ↓</h2>
          <a style={{ fontSize: 14, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>
            Voir tout le menu →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {CAKES.slice(1, 5).map((c) => (
            <div key={c.id} style={{
              background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 24,
              padding: 12, boxShadow: `0 5px 0 ${bb.ink}`, cursor: 'pointer',
            }}>
              <CakePhoto src={c.img} label={c.t.toLowerCase()} bg={c.bg} h={180} rounded={14} />
              <div style={{ padding: '12px 6px 4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 18, margin: 0, letterSpacing: -0.3 }}>{c.t}</h3>
                  <span style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 16, color: bb.ink }}>{c.p}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER court */}
      <footer style={{
        background: bb.ink, color: bb.cream, padding: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 13,
      }}>
        <BbLogo size={28} color={bb.lemon} />
        <div style={{ opacity: 0.7 }}>© 2026 Léacook · Argenteuil 95 · hello@leacook.fr</div>
      </footer>
    </div>
  );
}

window.BonbonDetail = BonbonDetail;
