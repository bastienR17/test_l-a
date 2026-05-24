// Bonbon — Page "La carte" (desktop 1280)
// Filtres, grille complète, section sur-mesure, FAQ.

function BonbonCarte() {
  const [filter, setFilter] = React.useState('Tous');
  const filters = ['Tous', 'Layer cakes', 'Number cakes', 'Cupcakes', 'Wedding', 'Sans gluten'];
  const filterMap = {
    'Tous': () => true,
    'Layer cakes': c => c.tags.includes('layer'),
    'Number cakes': c => c.tags.includes('number'),
    'Cupcakes': c => c.tags.includes('cupcakes'),
    'Wedding': c => c.tags.includes('wedding'),
    'Sans gluten': () => false,
  };
  const visible = CAKES.filter(filterMap[filter]);

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

      {/* HEADER */}
      <section style={{ padding: '48px 48px 32px', position: 'relative' }}>
        <Pill bg={bb.lilac} style={{ marginBottom: 16 }}>La carte · saison printemps 2026</Pill>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
          <h1 style={{
            fontFamily: bbDisplay, fontWeight: 800, fontSize: 120,
            lineHeight: 0.9, letterSpacing: -4.5, margin: 0,
          }}>
            Tous les{' '}
            <span style={{
              display: 'inline-block', background: bb.lemon,
              padding: '0 14px', borderRadius: 18, transform: 'rotate(-1.5deg)',
            }}>gâteaux</span>.
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.5, color: bb.inkSoft, maxWidth: 360, margin: '0 0 12px',
          }}>
            La carte évolue avec les saisons et les fruits du moment.
            Tout est sur commande, 7 jours à l'avance minimum.
          </p>
        </div>
      </section>

      {/* FILTERS BAR */}
      <section style={{
        padding: '16px 48px 32px',
        position: 'sticky', top: 0, background: bb.cream, zIndex: 5,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '10px 18px', borderRadius: 999,
                  background: f === filter ? bb.ink : 'transparent',
                  color: f === filter ? bb.cream : bb.ink,
                  border: f === filter ? 'none' : `1.5px solid ${bb.ink}`,
                  fontFamily: bbBody, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}
              >{f}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: bb.inkSoft }}>
            <span>Trier par :</span>
            <select style={{
              padding: '8px 14px', borderRadius: 999, border: `1.5px solid ${bb.ink}`,
              background: bb.cream, fontFamily: bbBody, fontSize: 13, fontWeight: 600,
              color: bb.ink, cursor: 'pointer',
            }}>
              <option>Populaires</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </div>
        </div>
      </section>

      {/* GRILLE */}
      <section style={{ padding: '0 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {visible.map((c) => (
            <div key={c.id} style={{
              background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 28,
              padding: 14, position: 'relative',
              boxShadow: `0 6px 0 ${bb.ink}`,
              cursor: 'pointer',
            }}>
              {c.badge && (
                <div style={{
                  position: 'absolute', top: -10, right: 12, zIndex: 2,
                  background: c.badgeBg, color: c.badgeColor || bb.ink,
                  padding: '4px 10px', borderRadius: 999, fontSize: 10,
                  fontWeight: 800, letterSpacing: 1, border: `2px solid ${bb.ink}`,
                  transform: 'rotate(4deg)',
                }}>{c.badge}</div>
              )}
              <CakePhoto src={c.img} label={c.t.toLowerCase()} bg={c.bg} h={200} rounded={18} />
              <div style={{ padding: '14px 6px 4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                  <h3 style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 20,
                    margin: 0, letterSpacing: -0.3,
                  }}>{c.t}</h3>
                  <span style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 18,
                    background: bb.ink, color: bb.lemon, padding: '2px 8px', borderRadius: 6,
                    flex: '0 0 auto',
                  }}>{c.p}€</span>
                </div>
                <p style={{ margin: '6px 0 8px', fontSize: 12, color: bb.inkSoft }}>{c.d}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <span style={{ fontSize: 11, color: bb.inkSoft, fontWeight: 600 }}>
                    🍰 {c.serves} pers.
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: bb.ink, textDecoration: 'underline',
                  }}>Voir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANDEAU SUR-MESURE */}
      <section style={{
        margin: '0 48px', padding: '56px 48px',
        background: bb.pink, color: bb.cream,
        border: `2.5px solid ${bb.ink}`, borderRadius: 36,
        boxShadow: `0 10px 0 ${bb.ink}`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 20, right: 40 }}>
          <Sticker bg={bb.lemon} rotate={10} size={104}>
            <span style={{ fontSize: 12 }}>devis<br />gratuit</span>
          </Sticker>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Pill bg={bb.cream} color={bb.ink} style={{ marginBottom: 14 }}>Sur-mesure</Pill>
            <h2 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 64,
              lineHeight: 0.95, letterSpacing: -2, margin: '0 0 20px',
            }}>
              Tu as une idée<br />
              <span style={{
                display: 'inline-block', background: bb.lemon, color: bb.ink,
                padding: '0 12px', borderRadius: 14, transform: 'rotate(-1deg)',
              }}>complètement folle</span> ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: 480, margin: '0 0 28px' }}>
              Anniversaire surprise, mariage, EVJF, baby shower, lancement de marque…
              Je conçois ton gâteau de A à Z. Couleurs, formes, parfums, message.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.lemon} size="md">Demander un devis →</BbButton>
              <BbButtonOutline size="md" style={{ color: bb.cream, borderColor: bb.cream }}>
                Voir des exemples
              </BbButtonOutline>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <CakePhoto src={PHOTOS.wedding} h={180} rounded={20} />
            <CakePhoto src={PHOTOS.rainbow} h={180} rounded={20} />
            <CakePhoto src={PHOTOS.making}  h={180} rounded={20} />
            <CakePhoto src={PHOTOS.matcha}  h={180} rounded={20} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '96px 48px 80px', maxWidth: 980, margin: '0 auto' }}>
        <Pill bg={bb.mint} style={{ marginBottom: 14 }}>FAQ</Pill>
        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 56,
          lineHeight: 0.95, letterSpacing: -2, margin: '0 0 40px',
        }}>Les questions qui reviennent</h2>

        <div style={{ display: 'grid', gap: 14 }}>
          {[
            { q: 'Combien de temps à l\'avance je dois commander ?', a: '7 jours minimum pour la carte. Pour le sur-mesure et les wedding cakes, compte 3 à 6 semaines.', open: true },
            { q: 'Vous livrez où exactement ?', a: 'Tout le Val d\'Oise (95) et la petite couronne nord (Saint-Denis, Asnières, Gennevilliers). Livraison à partir de 8€ selon la distance.' },
            { q: 'Vous faites du sans gluten ?', a: 'Oui, sur demande, avec un supplément de 8€. Mention "atelier non certifié sans allergènes" — je travaille avec de la farine dans le même espace.' },
            { q: 'Comment se passe le paiement ?', a: 'Acompte de 30% à la commande, solde à la livraison. CB, virement ou espèces.' },
            { q: 'On peut goûter avant de commander ?', a: 'Pour les wedding cakes uniquement, sur rendez-vous à l\'atelier d\'Argenteuil.' },
          ].map((f, i) => (
            <div key={i} style={{
              background: f.open ? bb.lemon : bb.paper,
              border: `2px solid ${bb.ink}`, borderRadius: 20,
              padding: '20px 24px',
              boxShadow: f.open ? `0 4px 0 ${bb.ink}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{
                  fontFamily: bbDisplay, fontWeight: 700, fontSize: 22,
                  margin: 0, letterSpacing: -0.3,
                }}>{f.q}</h3>
                <span style={{ fontSize: 24, fontWeight: 700 }}>{f.open ? '−' : '+'}</span>
              </div>
              {f.open && (
                <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.55, color: bb.ink }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Marquee bg={bb.lilac} color={bb.ink} star={bb.pink} />

      {/* FOOTER (court) */}
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

window.BonbonCarte = BonbonCarte;
