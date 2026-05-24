// Bonbon — Versions mobile (390px) : Home, Carte, Order
// Sans bezel iOS pour rester dans le rendu site (mais on pourrait le mettre).

function BonbonHomeMobile() {
  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 14, lineHeight: 1.5,
    }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 18px',
      }}>
        <BbLogo size={22} />
        <button style={{
          width: 40, height: 40, borderRadius: '50%',
          background: bb.lemon, border: `2px solid ${bb.ink}`,
          fontSize: 18, cursor: 'pointer', display: 'grid', placeItems: 'center',
        }}>☰</button>
      </div>

      {/* HERO */}
      <section style={{ padding: '12px 18px 32px', position: 'relative' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', borderRadius: 999,
          background: bb.cream, border: `2px solid ${bb.ink}`,
          fontSize: 11, fontWeight: 700, marginBottom: 18,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: bb.pink }} />
          Pâtisserie · Argenteuil
        </div>
        <h1 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 56,
          lineHeight: 0.9, letterSpacing: -2, margin: '0 0 16px',
        }}>
          Les{' '}
          <span style={{
            display: 'inline-block', background: bb.lilac,
            padding: '0 8px', borderRadius: 10, transform: 'rotate(-2deg)',
          }}>gâteaux</span><br />
          qui font la{' '}
          <span style={{
            display: 'inline-block', background: bb.pink, color: bb.cream,
            padding: '0 8px', borderRadius: 10, transform: 'rotate(1.5deg)',
          }}>fête</span>.
        </h1>
        <p style={{ fontSize: 15, color: bb.inkSoft, margin: '0 0 22px' }}>
          Layer cakes, number cakes, créations folles. Livré dans tout le 95.
        </p>

        {/* Photo hero compact */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <CakePhoto src={PHOTOS.hero} bg={bb.pink} h={280} rounded={24}
            style={{ border: `2.5px solid ${bb.ink}`, boxShadow: `0 6px 0 ${bb.ink}` }} />
          <div style={{ position: 'absolute', top: -10, right: -10 }}>
            <Sticker bg={bb.lemon} rotate={-10} size={72}>
              <span style={{ fontSize: 10 }}>fait<br />main ♥</span>
            </Sticker>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="md" style={{ width: '100%' }}>
            Voir le menu ↓
          </BbButton>
          <BbButtonOutline size="md" style={{ width: '100%' }}>Je veux du sur-mesure</BbButtonOutline>
        </div>
      </section>

      <Marquee size={14} />

      {/* GRID GATEAUX 2 col */}
      <section style={{ padding: '32px 18px' }}>
        <Pill bg={bb.sky} style={{ marginBottom: 10 }}>la carte</Pill>
        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 38,
          lineHeight: 0.95, letterSpacing: -1.2, margin: '0 0 20px',
        }}>Pick your<br />poison ✨</h2>

        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', marginBottom: 16, paddingBottom: 4 }}>
          {['Tous', 'Layer', 'Number', 'Cupcakes'].map((f, i) => (
            <button key={f} style={{
              padding: '8px 14px', borderRadius: 999,
              background: i === 0 ? bb.ink : 'transparent',
              color: i === 0 ? bb.cream : bb.ink,
              border: i === 0 ? 'none' : `1.5px solid ${bb.ink}`,
              fontFamily: bbBody, fontSize: 12, fontWeight: 600, cursor: 'pointer',
              flexShrink: 0,
            }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {CAKES.slice(0, 4).map((c) => (
            <div key={c.id} style={{
              background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 20,
              padding: 8, position: 'relative',
              boxShadow: `0 4px 0 ${bb.ink}`,
            }}>
              {c.badge && (
                <div style={{
                  position: 'absolute', top: -8, right: 8, zIndex: 2,
                  background: c.badgeBg, color: c.badgeColor || bb.ink,
                  padding: '3px 8px', borderRadius: 999, fontSize: 9,
                  fontWeight: 800, letterSpacing: 1, border: `2px solid ${bb.ink}`,
                  transform: 'rotate(4deg)',
                }}>{c.badge}</div>
              )}
              <CakePhoto src={c.img} bg={c.bg} h={130} rounded={14} />
              <div style={{ padding: '10px 4px 2px' }}>
                <div style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 15, letterSpacing: -0.3 }}>{c.t}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                  <span style={{ fontSize: 11, color: bb.inkSoft }}>{c.serves}</span>
                  <span style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 15,
                    background: bb.ink, color: bb.lemon, padding: '1px 8px', borderRadius: 6,
                  }}>{c.p}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BbButtonOutline size="md" style={{ width: '100%', marginTop: 16 }}>
          Voir tous les gâteaux →
        </BbButtonOutline>
      </section>

      {/* À PROPOS compact */}
      <section style={{ background: bb.lilac, padding: '32px 18px' }}>
        <CakePhoto src={PHOTOS.lea} bg={bb.pink} h={280} rounded={20}
          style={{ border: `2.5px solid ${bb.ink}`, boxShadow: `0 6px 0 ${bb.ink}`, marginBottom: 18 }} />
        <Pill bg={bb.cream} style={{ marginBottom: 10 }}>la cheffe</Pill>
        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 36,
          lineHeight: 0.95, letterSpacing: -1.2, margin: '0 0 12px',
        }}>
          Je m'appelle{' '}
          <span style={{ display: 'inline-block', background: bb.pink, color: bb.cream, padding: '0 8px', borderRadius: 10 }}>Léa</span>.
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 16px' }}>
          Diplômée Ferrandi, 5 ans en pâtisserie, atelier à Argenteuil depuis 2022.
          Produits de saison, idées plein la tête, que du sur-mesure.
        </p>
        <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="md" style={{ width: '100%' }}>
          Suivre @leacook
        </BbButton>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '40px 18px 24px', textAlign: 'center', position: 'relative' }}>
        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 48,
          lineHeight: 0.95, letterSpacing: -1.8, margin: '0 0 14px',
        }}>
          On se fait<br />
          <span style={{ fontStyle: 'italic', color: bb.pink }}>un gâteau</span> ?
        </h2>
        <p style={{ fontSize: 14, color: bb.inkSoft, margin: '0 0 24px' }}>
          Dis-moi l'occasion, le reste c'est mon affaire.
        </p>
        <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="lg" style={{ width: '100%' }}>
          Lancer une commande →
        </BbButton>
      </section>

      <footer style={{ background: bb.ink, color: bb.cream, padding: '24px 18px', fontSize: 12, textAlign: 'center' }}>
        <BbLogo size={24} color={bb.lemon} />
        <div style={{ opacity: 0.7, marginTop: 8 }}>© 2026 · Argenteuil 95</div>
      </footer>
    </div>
  );
}

function BonbonCarteMobile() {
  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px' }}>
        <BbLogo size={22} />
        <button style={{
          width: 40, height: 40, borderRadius: '50%',
          background: bb.lemon, border: `2px solid ${bb.ink}`, fontSize: 18,
          display: 'grid', placeItems: 'center', cursor: 'pointer',
        }}>☰</button>
      </div>

      <section style={{ padding: '12px 18px 24px' }}>
        <Pill bg={bb.lilac} style={{ marginBottom: 8 }}>Printemps 2026</Pill>
        <h1 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 56,
          lineHeight: 0.9, letterSpacing: -2, margin: 0,
        }}>
          Tous les{' '}
          <span style={{ display: 'inline-block', background: bb.lemon, padding: '0 8px', borderRadius: 10, transform: 'rotate(-1.5deg)' }}>gâteaux</span>.
        </h1>
      </section>

      {/* Filters sticky */}
      <div style={{
        padding: '8px 18px 16px', background: bb.cream, position: 'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
          {['Tous', 'Layer', 'Number', 'Cupcakes', 'Wedding'].map((f, i) => (
            <button key={f} style={{
              padding: '8px 14px', borderRadius: 999,
              background: i === 0 ? bb.ink : 'transparent',
              color: i === 0 ? bb.cream : bb.ink,
              border: i === 0 ? 'none' : `1.5px solid ${bb.ink}`,
              fontFamily: bbBody, fontSize: 12, fontWeight: 600, cursor: 'pointer',
              flexShrink: 0,
            }}>{f}</button>
          ))}
        </div>
      </div>

      <section style={{ padding: '0 18px 32px' }}>
        <div style={{ display: 'grid', gap: 12 }}>
          {CAKES.slice(0, 6).map((c) => (
            <div key={c.id} style={{
              background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 18,
              padding: 10, boxShadow: `0 4px 0 ${bb.ink}`,
              display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12, position: 'relative',
            }}>
              {c.badge && (
                <div style={{
                  position: 'absolute', top: -8, left: 14, zIndex: 2,
                  background: c.badgeBg, color: c.badgeColor || bb.ink,
                  padding: '3px 8px', borderRadius: 999, fontSize: 9,
                  fontWeight: 800, letterSpacing: 1, border: `2px solid ${bb.ink}`,
                  transform: 'rotate(-4deg)',
                }}>{c.badge}</div>
              )}
              <CakePhoto src={c.img} bg={c.bg} h={110} rounded={12} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px 0' }}>
                <div>
                  <div style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 17, letterSpacing: -0.3 }}>{c.t}</div>
                  <div style={{ fontSize: 11, color: bb.inkSoft, marginTop: 4 }}>{c.d}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: bb.inkSoft, fontWeight: 600 }}>🍰 {c.serves}</span>
                  <span style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 15,
                    background: bb.ink, color: bb.lemon, padding: '2px 8px', borderRadius: 6,
                  }}>{c.p}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA fixed bottom feel */}
      <section style={{ padding: '20px 18px 40px' }}>
        <div style={{
          background: bb.pink, color: bb.cream,
          border: `2.5px solid ${bb.ink}`, borderRadius: 24,
          padding: 20, boxShadow: `0 6px 0 ${bb.ink}`, textAlign: 'center',
        }}>
          <h3 style={{ fontFamily: bbDisplay, fontSize: 24, fontWeight: 800, margin: '0 0 8px', letterSpacing: -0.5 }}>
            Une idée folle ?
          </h3>
          <p style={{ fontSize: 13, margin: '0 0 14px' }}>Devis sur-mesure offert, réponse sous 24h.</p>
          <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.lemon} size="md" style={{ width: '100%' }}>
            Demander un devis
          </BbButton>
        </div>
      </section>
    </div>
  );
}

function BonbonOrderMobile() {
  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: `1.5px solid ${bb.ink}` }}>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'transparent', border: `1.5px solid ${bb.ink}`, fontSize: 16,
          display: 'grid', placeItems: 'center', cursor: 'pointer',
        }}>←</button>
        <BbLogo size={20} />
        <span style={{ fontSize: 12, color: bb.inkSoft }}>2 / 4</span>
      </div>

      <section style={{ padding: '20px 18px 12px' }}>
        <Pill bg={bb.lemon} style={{ marginBottom: 8 }}>Étape 2 · Détails</Pill>
        <h1 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 36,
          lineHeight: 0.95, letterSpacing: -1.2, margin: 0,
        }}>
          On{' '}
          <span style={{ display: 'inline-block', background: bb.pink, color: bb.cream, padding: '0 8px', borderRadius: 10, transform: 'rotate(-1.5deg)' }}>configure</span>{' '}
          ton gâteau.
        </h1>
      </section>

      {/* Progress */}
      <div style={{ padding: '8px 18px 20px', display: 'flex', gap: 4 }}>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} style={{
            flex: 1, height: 6, borderRadius: 999,
            background: n <= 2 ? bb.ink : bb.ink22,
          }} />
        ))}
      </div>

      {/* Bloc choix gateau */}
      <section style={{ padding: '0 18px 16px' }}>
        <div style={{
          background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 20,
          padding: 16, boxShadow: `0 4px 0 ${bb.ink}`, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: bb.lemon,
              border: `1.5px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 13,
            }}>A</div>
            <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 18, margin: 0 }}>Type de gâteau</h2>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
            {CAKES.slice(0, 5).map((c, i) => (
              <div key={c.id} style={{
                position: 'relative', flexShrink: 0, width: 100,
                border: `2px solid ${i === 0 ? bb.pink : bb.ink}`,
                borderRadius: 14, overflow: 'hidden',
                boxShadow: i === 0 ? `0 3px 0 ${bb.pink}` : 'none',
                background: bb.cream, cursor: 'pointer',
              }}>
                {i === 0 && (
                  <div style={{
                    position: 'absolute', top: 6, right: 6, zIndex: 2,
                    background: bb.pink, color: bb.cream,
                    width: 20, height: 20, borderRadius: '50%',
                    display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800,
                    border: `1.5px solid ${bb.ink}`,
                  }}>✓</div>
                )}
                <CakePhoto src={c.img} bg={c.bg} h={70} rounded={0} />
                <div style={{ padding: '6px 8px' }}>
                  <div style={{ fontFamily: bbDisplay, fontWeight: 700, fontSize: 11 }}>{c.t}</div>
                  <div style={{ fontSize: 10, color: bb.inkSoft }}>dès {c.p}€</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taille */}
        <div style={{
          background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 20,
          padding: 16, boxShadow: `0 4px 0 ${bb.ink}`, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: bb.lemon,
              border: `1.5px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 13,
            }}>B</div>
            <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 18, margin: 0 }}>Taille</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
            {[
              { id: 'S', p: 58 }, { id: 'M', p: 78, active: true },
              { id: 'L', p: 110 }, { id: 'XL', p: 180 },
            ].map((s) => (
              <button key={s.id} style={{
                padding: '10px 4px', borderRadius: 12,
                background: s.active ? bb.lemon : bb.cream,
                border: `2px solid ${bb.ink}`,
                boxShadow: s.active ? `0 3px 0 ${bb.ink}` : 'none',
                transform: s.active ? 'translateY(-2px)' : 'none',
                cursor: 'pointer',
              }}>
                <div style={{ fontFamily: bbDisplay, fontSize: 16, fontWeight: 800 }}>{s.id}</div>
                <div style={{ fontSize: 11, fontWeight: 700, marginTop: 2 }}>{s.p}€</div>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div style={{
          background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 20,
          padding: 16, boxShadow: `0 4px 0 ${bb.ink}`, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: bb.lemon,
              border: `1.5px solid ${bb.ink}`, display: 'grid', placeItems: 'center',
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 13,
            }}>C</div>
            <h2 style={{ fontFamily: bbDisplay, fontWeight: 800, fontSize: 18, margin: 0 }}>Message ✨</h2>
          </div>
          <input
            defaultValue="Joyeux anniv Théo !"
            style={{
              width: '100%', padding: '12px 14px', borderRadius: 12,
              border: `1.5px solid ${bb.ink}`, background: bb.cream,
              fontFamily: bbBody, fontSize: 14, color: bb.ink, boxSizing: 'border-box',
            }} />
          <div style={{ fontSize: 11, color: bb.inkSoft, marginTop: 6 }}>30 caractères max</div>
        </div>
      </section>

      {/* Bottom bar collante */}
      <div style={{
        position: 'sticky', bottom: 0, padding: 14,
        background: bb.ink, color: bb.cream,
        borderTop: `2px solid ${bb.ink}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Total estimé</div>
            <div style={{ fontFamily: bbDisplay, fontSize: 24, fontWeight: 800, color: bb.lemon }}>78€</div>
          </div>
          <div style={{ fontSize: 11, opacity: 0.6, textAlign: 'right' }}>
            Fraisier M<br />Joyeux anniv Théo !
          </div>
        </div>
        <BbButton bg={bb.lemon} color={bb.ink} shadow={bb.pink} size="md" style={{ width: '100%' }}>
          Continuer →
        </BbButton>
      </div>
    </div>
  );
}

Object.assign(window, {
  BonbonHomeMobile,
  BonbonCarteMobile,
  BonbonOrderMobile,
});
