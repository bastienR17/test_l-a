// Bonbon — Page commande / formulaire (desktop 1280)
// Layout 2 colonnes : formulaire à gauche (toutes étapes ouvertes) + récap collant à droite.

function BonbonOrder() {
  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 15, lineHeight: 1.55,
    }}>
      {/* NAV minimal */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px', borderBottom: `1.5px solid ${bb.ink}`,
      }}>
        <BbLogo />
        <div style={{ fontSize: 13, color: bb.inkSoft }}>
          Besoin d'aide ?{' '}
          <span style={{ color: bb.ink, fontWeight: 700, textDecoration: 'underline' }}>
            06 12 34 56 78
          </span>
        </div>
      </div>

      {/* HEADER */}
      <section style={{ padding: '40px 48px 24px' }}>
        <Pill bg={bb.lemon} style={{ marginBottom: 12 }}>Étape 2 / 4 · Détails du gâteau</Pill>
        <h1 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 64,
          lineHeight: 0.95, letterSpacing: -2, margin: 0,
        }}>
          On{' '}
          <span style={{
            display: 'inline-block', background: bb.pink, color: bb.cream,
            padding: '0 12px', borderRadius: 14, transform: 'rotate(-1.5deg)',
          }}>configure</span>
          {' '}ton gâteau.
        </h1>

        {/* PROGRESS */}
        <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
          {[
            { n: 1, t: 'L\'occasion', done: true },
            { n: 2, t: 'Le gâteau', active: true },
            { n: 3, t: 'Livraison' },
            { n: 4, t: 'Coordonnées' },
          ].map((s) => (
            <div key={s.n} style={{
              flex: 1,
              background: s.done ? bb.mint : s.active ? bb.lemon : bb.paper,
              border: `2px solid ${bb.ink}`, borderRadius: 999,
              padding: '10px 16px',
              boxShadow: s.active ? `0 4px 0 ${bb.ink}` : 'none',
              transform: s.active ? 'translateY(-2px)' : 'none',
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 14, fontWeight: 700,
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: bb.ink, color: bb.cream,
                display: 'grid', placeItems: 'center', fontSize: 12,
              }}>{s.done ? '✓' : s.n}</div>
              {s.t}
            </div>
          ))}
        </div>
      </section>

      {/* CONTENU 2 COLONNES */}
      <section style={{ padding: '32px 48px 64px', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32 }}>
        {/* FORMULAIRE */}
        <div style={{ display: 'grid', gap: 24 }}>
          {/* Bloc 1 — Type de gâteau */}
          <div style={{
            background: bb.paper, border: `2px solid ${bb.ink}`,
            borderRadius: 24, padding: 28, boxShadow: `0 6px 0 ${bb.ink}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: bb.lemon,
                border: `2px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
                fontFamily: bbDisplay, fontWeight: 800, fontSize: 16,
              }}>A</div>
              <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 26, margin: 0, letterSpacing: -0.5 }}>
                Quel type de gâteau ?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {CAKES.slice(0, 6).map((c, i) => (
                <div key={c.id} style={{
                  position: 'relative',
                  border: `2px solid ${i === 0 ? bb.pink : bb.ink}`,
                  borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                  boxShadow: i === 0 ? `0 4px 0 ${bb.pink}` : 'none',
                  transform: i === 0 ? 'translateY(-2px)' : 'none',
                  background: bb.cream,
                }}>
                  {i === 0 && (
                    <div style={{
                      position: 'absolute', top: 8, right: 8, zIndex: 2,
                      background: bb.pink, color: bb.cream,
                      width: 24, height: 24, borderRadius: '50%',
                      display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800,
                      border: `2px solid ${bb.ink}`,
                    }}>✓</div>
                  )}
                  <CakePhoto src={c.img} bg={c.bg} h={110} rounded={0} />
                  <div style={{ padding: '8px 10px' }}>
                    <div style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 14 }}>{c.t}</div>
                    <div style={{ fontSize: 12, color: bb.inkSoft }}>à partir de {c.p}€</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc 2 — Taille + parfum */}
          <div style={{
            background: bb.paper, border: `2px solid ${bb.ink}`,
            borderRadius: 24, padding: 28, boxShadow: `0 6px 0 ${bb.ink}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: bb.lemon,
                border: `2px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
                fontFamily: bbDisplay, fontWeight: 800, fontSize: 16,
              }}>B</div>
              <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 26, margin: 0, letterSpacing: -0.5 }}>
                Taille & parfum
              </h2>
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              Combien de personnes ?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 24 }}>
              {[
                { id: 'S', l: '6 pers.', p: 58 },
                { id: 'M', l: '8–10 pers.', p: 78, active: true },
                { id: 'L', l: '12–15 pers.', p: 110 },
                { id: 'XL', l: '20+ pers.', p: 180 },
              ].map((s) => (
                <button key={s.id} style={{
                  padding: '14px 10px', borderRadius: 16,
                  background: s.active ? bb.lemon : bb.cream,
                  border: `2px solid ${bb.ink}`,
                  boxShadow: s.active ? `0 4px 0 ${bb.ink}` : 'none',
                  transform: s.active ? 'translateY(-2px)' : 'none',
                  cursor: 'pointer', fontFamily: bbBody,
                }}>
                  <div style={{ fontFamily: bbDisplay, fontSize: 22, fontWeight: 800 }}>{s.id}</div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{s.l}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{s.p}€</div>
                </button>
              ))}
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              Variante
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[['Fraises Gariguette', true], ['Fraises × basilic'], ['Fraises × pistache'], ['Mara des bois']].map(([f, active], i) => (
                <button key={i} style={{
                  padding: '10px 18px', borderRadius: 999,
                  background: active ? bb.ink : 'transparent',
                  color: active ? bb.cream : bb.ink,
                  border: active ? 'none' : `1.5px solid ${bb.ink}`,
                  fontFamily: bbBody, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}>{f}</button>
              ))}
            </div>
          </div>

          {/* Bloc 3 — Personnalisation */}
          <div style={{
            background: bb.paper, border: `2px solid ${bb.ink}`,
            borderRadius: 24, padding: 28, boxShadow: `0 6px 0 ${bb.ink}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: bb.lemon,
                border: `2px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
                fontFamily: bbDisplay, fontWeight: 800, fontSize: 16,
              }}>C</div>
              <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 26, margin: 0, letterSpacing: -0.5 }}>
                Personnalisation ✨
              </h2>
              <Pill bg={bb.sky} style={{ marginLeft: 'auto' }}>optionnel</Pill>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                Message à écrire sur le gâteau
              </label>
              <input
                defaultValue="Joyeux anniv Théo !"
                style={{
                  width: '100%', padding: '14px 16px', borderRadius: 14,
                  border: `1.5px solid ${bb.ink}`, background: bb.cream,
                  fontFamily: bbBody, fontSize: 15, color: bb.ink, boxSizing: 'border-box',
                }} />
              <div style={{ fontSize: 12, color: bb.inkSoft, marginTop: 6 }}>30 caractères max · pâte d'amande blanche</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                  Couleur dominante
                </label>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[bb.pink, bb.lilac, bb.lemon, bb.sky, bb.mint, bb.peach, bb.cream].map((c, i) => (
                    <div key={i} style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: c, border: `2px solid ${bb.ink}`,
                      cursor: 'pointer',
                      boxShadow: i === 0 ? `0 0 0 3px ${bb.cream}, 0 0 0 5px ${bb.ink}` : 'none',
                    }} />
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                  Bougies
                </label>
                <select style={{
                  width: '100%', padding: '14px 16px', borderRadius: 14,
                  border: `1.5px solid ${bb.ink}`, background: bb.cream,
                  fontFamily: bbBody, fontSize: 14, fontWeight: 600,
                }}>
                  <option>Sans bougie</option>
                  <option>5 bougies dorées</option>
                  <option>1 bougie chiffre "30"</option>
                  <option>Bougie magique</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                Une photo d'inspiration ? (option)
              </label>
              <div style={{
                border: `2px dashed ${bb.ink}`, borderRadius: 16,
                padding: 20, textAlign: 'center', background: bb.cream,
                cursor: 'pointer', fontSize: 14, color: bb.inkSoft,
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>📎</div>
                Glisse une photo Pinterest ici · ou clique pour parcourir
              </div>
            </div>
          </div>

          {/* NAV BAS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <BbButtonOutline size="md">← Étape précédente</BbButtonOutline>
            <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="lg">
              Continuer · Livraison →
            </BbButton>
          </div>
        </div>

        {/* RÉCAPITULATIF */}
        <aside style={{
          background: bb.lilac, border: `2.5px solid ${bb.ink}`, borderRadius: 28,
          padding: 24, boxShadow: `0 8px 0 ${bb.ink}`,
          position: 'sticky', top: 20, alignSelf: 'flex-start',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 22, margin: 0 }}>
              Ta commande
            </h3>
            <Sticker bg={bb.lemon} rotate={-8} size={56} style={{ boxShadow: `0 3px 0 ${bb.ink}` }}>
              <span style={{ fontSize: 9 }}>récap</span>
            </Sticker>
          </div>

          <CakePhoto src={PHOTOS.fraisier} bg={bb.pink} h={180} rounded={18}
            style={{ border: `2px solid ${bb.ink}`, marginBottom: 16 }} />

          <div style={{ display: 'grid', gap: 10, fontSize: 13 }}>
            {[
              ['Gâteau', 'Fraisier nuage'],
              ['Taille', 'M · 8–10 personnes'],
              ['Parfum', 'Fraises Gariguette'],
              ['Message', '"Joyeux anniv Théo !"'],
              ['Couleur', 'Rose ●'],
              ['Date', 'Sam. 6 juin · à confirmer'],
            ].map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '8px 0', borderBottom: `1px solid ${bb.ink}22`,
              }}>
                <span style={{ color: bb.ink, opacity: 0.7 }}>{k}</span>
                <span style={{ fontWeight: 700, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 18, padding: 16, background: bb.cream,
            borderRadius: 18, border: `2px solid ${bb.ink}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
              <span>Gâteau</span><span style={{ fontWeight: 600 }}>78,00€</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
              <span>Personnalisation</span><span style={{ fontWeight: 600 }}>0,00€</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 10, color: bb.inkSoft }}>
              <span>Livraison</span><span style={{ fontStyle: 'italic' }}>à l'étape 3</span>
            </div>
            <div style={{ borderTop: `1.5px dashed ${bb.ink}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: bbDisplay, fontSize: 18, fontWeight: 800 }}>Total estimé</span>
              <span style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 28, color: bb.ink }}>78€</span>
            </div>
            <div style={{ fontSize: 11, color: bb.inkSoft, marginTop: 6, textAlign: 'right' }}>
              Acompte 30% = 23,40€ à la confirmation
            </div>
          </div>

          <div style={{
            marginTop: 14, fontSize: 12, color: bb.ink, opacity: 0.75,
            background: bb.cream, padding: '10px 14px', borderRadius: 12,
            border: `1px dashed ${bb.ink}`, textAlign: 'center',
          }}>
            ⏱ Léa confirme ta commande sous 24h. Aucun paiement maintenant.
          </div>
        </aside>
      </section>

      <Marquee bg={bb.ink} color={bb.lemon} star={bb.pink} size={18}
        items={['DEVIS SOUS 24H', 'ACOMPTE 30%', 'ANNULABLE J-7']} />
    </div>
  );
}

window.BonbonOrder = BonbonOrder;
