// Bonbon — Page d'accueil (desktop 1280)
// Hero photo + sticker, marquee, grille gâteaux, process, témoignages, CTA, footer.

function BonbonHome() {
  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: bb.cream, color: bb.ink,
      fontFamily: bbBody, fontSize: 15, lineHeight: 1.55,
    }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px',
      }}>
        <BbLogo />
        <nav style={{
          display: 'flex', gap: 6, background: bb.ink, padding: 6, borderRadius: 999,
        }}>
          {[['Accueil', true], ['La carte'], ['Sur-mesure'], ['Léa'], ['Contact']].map(([n, active], i) => (
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

      {/* HERO — 2 colonnes : texte / photo */}
      <section style={{
        padding: '24px 48px 64px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 18px', borderRadius: 999,
              background: bb.cream, border: `2px solid ${bb.ink}`,
              fontSize: 13, fontWeight: 600, marginBottom: 28,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: bb.pink }} />
              Pâtisserie indépendante · Argenteuil
            </div>
            <h1 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 116,
              lineHeight: 0.9, letterSpacing: -4.5, margin: '0 0 28px',
            }}>
              Les{' '}
              <span style={{
                display: 'inline-block', background: bb.lilac, color: bb.ink,
                padding: '0 14px', borderRadius: 18, transform: 'rotate(-2deg)',
              }}>gâteaux</span><br />
              qui font la{' '}
              <span style={{
                display: 'inline-block', background: bb.pink, color: bb.cream,
                padding: '0 14px', borderRadius: 18, transform: 'rotate(1.5deg)',
              }}>fête</span>.
            </h1>
            <p style={{
              fontSize: 20, lineHeight: 1.45, color: bb.inkSoft, maxWidth: 520,
              margin: '0 0 36px',
            }}>
              Léa pâtisse des layer cakes, number cakes et créations folles depuis Argenteuil.
              Livraison dans tout le 95. Sans chichi, avec beaucoup d'amour.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="lg">Voir le menu ↓</BbButton>
              <BbButtonOutline size="lg">Je veux du sur-mesure</BbButtonOutline>
            </div>

            {/* Mini-proof : étoiles */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32 }}>
              <div style={{ display: 'flex' }}>
                {[PHOTOS.matcha, PHOTOS.choco, PHOTOS.cupcakes].map((src, i) => (
                  <img key={i} src={src} style={{
                    width: 36, height: 36, borderRadius: '50%', objectFit: 'cover',
                    border: `2px solid ${bb.cream}`, marginLeft: i === 0 ? 0 : -10,
                  }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>★★★★★ 4.9 / 5</div>
                <div style={{ fontSize: 12, color: bb.inkSoft }}>+150 clients heureux dans le 95</div>
              </div>
            </div>
          </div>

          {/* Photo hero avec stickers */}
          <div style={{ position: 'relative' }}>
            <CakePhoto
              src={PHOTOS.hero}
              label="hero · gâteau signature"
              bg={bb.pink}
              h={540}
              rounded={32}
              style={{ border: `3px solid ${bb.ink}`, boxShadow: `0 10px 0 ${bb.ink}` }}
            />
            {/* Stickers */}
            <div style={{ position: 'absolute', top: -20, left: -20, zIndex: 3 }}>
              <Sticker bg={bb.lemon} rotate={-14} size={108}>
                <span style={{ fontSize: 13 }}>fait<br />main ♥</span>
              </Sticker>
            </div>
            <div style={{ position: 'absolute', bottom: 30, right: -30, zIndex: 3 }}>
              <Sticker bg={bb.pink} color={bb.cream} rotate={10} size={120}>
                <span style={{ fontSize: 13 }}>NEW<br />FRAISIER<br />→ 78€</span>
              </Sticker>
            </div>
            <div style={{ position: 'absolute', top: 220, right: -40, zIndex: 3 }}>
              <Sticker bg={bb.cream} rotate={6} size={84}>
                <span style={{ fontSize: 11 }}>livré<br />en 95</span>
              </Sticker>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* GRILLE GÂTEAUX — 6 premiers */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <Pill bg={bb.sky} style={{ marginBottom: 12 }}>la carte</Pill>
            <h2 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 72,
              lineHeight: 0.95, letterSpacing: -2.5, margin: 0,
            }}>Pick your<br />poison ✨</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Tous', 'Layer', 'Number', 'Cupcakes', 'Wedding'].map((f, i) => (
              <button key={i} style={{
                padding: '10px 18px', borderRadius: 999,
                background: i === 0 ? bb.ink : 'transparent',
                color: i === 0 ? bb.cream : bb.ink,
                border: i === 0 ? 'none' : `1.5px solid ${bb.ink}`,
                fontFamily: bbBody, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {CAKES.slice(0, 6).map((c) => (
            <div key={c.id} style={{
              background: bb.paper, border: `2px solid ${bb.ink}`, borderRadius: 32,
              padding: 16, position: 'relative',
              boxShadow: `0 6px 0 ${bb.ink}`,
            }}>
              {c.badge && (
                <div style={{
                  position: 'absolute', top: -12, right: 16, zIndex: 2,
                  background: c.badgeBg, color: c.badgeColor || bb.ink,
                  padding: '4px 12px', borderRadius: 999, fontSize: 11,
                  fontWeight: 800, letterSpacing: 1, border: `2px solid ${bb.ink}`,
                  transform: 'rotate(4deg)',
                }}>{c.badge}</div>
              )}
              <CakePhoto src={c.img} label={c.t.toLowerCase()} bg={c.bg} h={240} rounded={20} />
              <div style={{ padding: '16px 8px 4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <h3 style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 24,
                    margin: 0, letterSpacing: -0.5,
                  }}>{c.t}</h3>
                  <span style={{
                    fontFamily: bbDisplay, fontWeight: 700, fontSize: 22,
                    background: bb.ink, color: bb.lemon, padding: '2px 10px', borderRadius: 8,
                    flex: '0 0 auto',
                  }}>{c.p}€</span>
                </div>
                <p style={{ margin: '6px 0 0', fontSize: 13, color: bb.inkSoft }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <BbButtonOutline size="md">Voir tous les gâteaux ({CAKES.length}) →</BbButtonOutline>
        </div>
      </section>

      {/* À PROPOS LÉA — photo + bio */}
      <section style={{
        background: bb.lilac, padding: '80px 48px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <CakePhoto
              src={PHOTOS.lea}
              label="portrait léa"
              bg={bb.pink}
              h={480}
              rounded={28}
              style={{ border: `3px solid ${bb.ink}`, boxShadow: `0 10px 0 ${bb.ink}` }}
            />
            <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 3 }}>
              <Sticker bg={bb.lemon} rotate={-8} size={120}>
                <span style={{ fontSize: 13 }}>Léa<br />depuis<br />2022 ✨</span>
              </Sticker>
            </div>
          </div>
          <div>
            <Pill bg={bb.cream} style={{ marginBottom: 16 }}>la cheffe</Pill>
            <h2 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 64,
              lineHeight: 0.95, letterSpacing: -2, margin: '0 0 24px',
            }}>
              Je m'appelle{' '}
              <span style={{
                display: 'inline-block', background: bb.pink, color: bb.cream,
                padding: '0 12px', borderRadius: 14, transform: 'rotate(-1.5deg)',
              }}>Léa</span>
              .
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: bb.ink, maxWidth: 520, margin: '0 0 20px' }}>
              Diplômée de Ferrandi, j'ai bossé en pâtisserie pendant 5 ans avant de
              lancer mon atelier à Argenteuil. Aujourd'hui je travaille de chez moi,
              avec des produits de saison, et des idées plein la tête.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: bb.ink, maxWidth: 520, margin: '0 0 32px' }}>
              Chaque gâteau est une commande unique : on parle, on dessine, on goûte,
              on ajuste. Pas de production en série — que du sur-mesure.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="md">Voir l'atelier →</BbButton>
              <BbButtonOutline size="md">Suivre @leacook</BbButtonOutline>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{
        padding: '80px 48px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 60, right: 60 }}>
          <Sticker bg={bb.lemon} rotate={12} size={100}>
            <span style={{ fontSize: 12 }}>devis<br />offert</span>
          </Sticker>
        </div>
        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 72,
          lineHeight: 0.95, letterSpacing: -2.5, margin: '0 0 56px', color: bb.ink,
        }}>3 étapes,<br />zéro stress.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {[
            { n: '1', t: 'Tu choisis', d: 'Un gâteau de la carte ou une idée folle. Couleurs, parfums, message — tout est possible.', bg: bb.pink,  color: bb.cream, rot: -1.5 },
            { n: '2', t: 'On affine',  d: 'Léa répond sous 24h avec un mock-up et un devis transparent. On ajuste jusqu\'au pile bon.', bg: bb.lemon, color: bb.ink,   rot: 1.2  },
            { n: '3', t: 'Tu reçois',  d: 'Livraison frais dans le 95, ou retrait à Argenteuil le jour J. Photo souvenir obligatoire.', bg: bb.sky,   color: bb.ink,   rot: -0.8 },
          ].map((s, i) => (
            <div key={i} style={{
              background: s.bg, color: s.color,
              border: `2.5px solid ${bb.ink}`, borderRadius: 28, padding: 28,
              transform: `rotate(${s.rot}deg)`,
              boxShadow: `0 8px 0 ${bb.ink}`,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: bb.cream, color: bb.ink,
                border: `2px solid ${bb.ink}`,
                display: 'grid', placeItems: 'center',
                fontFamily: bbDisplay, fontWeight: 800, fontSize: 28,
                marginBottom: 20,
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: bbDisplay, fontWeight: 700, fontSize: 30,
                margin: '0 0 10px', letterSpacing: -0.5,
              }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ background: bb.sky, padding: '80px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: bbDisplay, fontWeight: 800, fontSize: 64,
            lineHeight: 0.95, letterSpacing: -2, margin: 0,
          }}>Ce que les gens<br />en disent ★</h2>
          <div style={{ fontSize: 14, color: bb.ink, fontWeight: 600 }}>
            +60 avis · Google & Instagram
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { name: 'Sarah K.', city: 'Argenteuil', date: 'mars 2026', t: '« Le fraisier pour les 30 ans de mon mari : magnifique, et surtout DÉLICIEUX. Tous les invités ont demandé son contact. »', bg: bb.cream },
            { name: 'Mehdi B.', city: 'Bezons',     date: 'fév 2026',  t: '« Un number cake "30" tout rose pour ma femme. Léa a compris l\'idée tout de suite, livré pile à l\'heure. Sans faute. »', bg: bb.lemon },
            { name: 'Inès L.',  city: 'Sannois',   date: 'jan 2026',  t: '« On a commandé le wedding cake. 3 étages, fleurs fraîches. C\'était la pièce maîtresse de notre journée. Merci Léa. »', bg: bb.pink },
          ].map((r, i) => (
            <div key={i} style={{
              background: r.bg, border: `2.5px solid ${bb.ink}`, borderRadius: 24,
              padding: 28, boxShadow: `0 6px 0 ${bb.ink}`,
            }}>
              <div style={{ fontSize: 16, marginBottom: 14 }}>★★★★★</div>
              <p style={{ fontFamily: bbDisplay, fontSize: 22, lineHeight: 1.35, margin: '0 0 24px', fontWeight: 500 }}>
                {r.t}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: bb.ink, color: bb.lemon,
                  display: 'grid', placeItems: 'center',
                  fontWeight: 700, fontSize: 14,
                }}>{r.name[0]}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.name} · {r.city}</div>
                  <div style={{ fontSize: 12, color: bb.inkSoft }}>{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <Pill bg={bb.pink} color={bb.cream} style={{ marginBottom: 12 }}>@leacook</Pill>
            <h2 style={{
              fontFamily: bbDisplay, fontWeight: 800, fontSize: 56,
              lineHeight: 0.95, letterSpacing: -2, margin: 0,
            }}>Suis les coulisses</h2>
          </div>
          <a style={{
            fontSize: 14, fontWeight: 700, textDecoration: 'underline',
            color: bb.ink, cursor: 'pointer',
          }}>Voir l'Instagram →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {[PHOTOS.fraisier, PHOTOS.choco, PHOTOS.making, PHOTOS.cupcakes, PHOTOS.number, PHOTOS.shop].map((src, i) => (
            <CakePhoto key={i} src={src} h={180} rounded={16} bg={i % 2 ? bb.lilac : bb.pink} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '96px 48px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 60, left: 100 }}>
          <Sticker bg={bb.mint} rotate={-14} size={88}>
            <span style={{ fontSize: 11 }}>réponse<br />sous 24h</span>
          </Sticker>
        </div>
        <div style={{ position: 'absolute', top: 80, right: 120 }}>
          <Sticker bg={bb.pink} color={bb.cream} rotate={10} size={88}>
            <span style={{ fontSize: 11 }}>♥<br />Léa</span>
          </Sticker>
        </div>

        <h2 style={{
          fontFamily: bbDisplay, fontWeight: 800, fontSize: 96,
          lineHeight: 0.92, letterSpacing: -3.5, margin: '0 0 24px',
        }}>
          On se fait<br />
          <span style={{ fontStyle: 'italic', color: bb.pink }}>un gâteau</span> ?
        </h2>
        <p style={{ fontSize: 19, color: bb.inkSoft, maxWidth: 460, margin: '0 auto 36px' }}>
          Dis-moi l'occasion, le nombre de personnes et tes envies. Le reste, c'est mon affaire.
        </p>
        <BbButton bg={bb.ink} color={bb.lemon} shadow={bb.pink} size="lg">
          Lancer une commande →
        </BbButton>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: bb.ink, color: bb.cream, padding: 48,
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <BbLogo size={42} color={bb.lemon} />
          <div style={{ fontSize: 13, opacity: 0.7, marginTop: 12, maxWidth: 280 }}>
            Pâtisserie indépendante installée à Argenteuil (95).
            Livraison dans le Val d'Oise et toute petite couronne.
          </div>
        </div>
        <div>
          <div style={{ color: bb.lemon, marginBottom: 10, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>Navigation</div>
          <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            <a style={{ color: bb.cream, textDecoration: 'none' }}>Accueil</a>
            <a style={{ color: bb.cream, textDecoration: 'none' }}>La carte</a>
            <a style={{ color: bb.cream, textDecoration: 'none' }}>Sur-mesure</a>
            <a style={{ color: bb.cream, textDecoration: 'none' }}>À propos</a>
          </div>
        </div>
        <div>
          <div style={{ color: bb.lemon, marginBottom: 10, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>Contact</div>
          <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            <div>hello@leacook.fr</div>
            <div>06 12 34 56 78</div>
            <div style={{ opacity: 0.6 }}>Argenteuil · 95100</div>
          </div>
        </div>
        <div>
          <div style={{ color: bb.lemon, marginBottom: 10, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>Suivre</div>
          <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            <div>Instagram @leacook</div>
            <div>TikTok @leacook</div>
            <div>Pinterest</div>
          </div>
        </div>
      </footer>
      <div style={{
        background: bb.ink, color: bb.cream, opacity: 0.5,
        padding: '14px 48px', fontSize: 12,
        display: 'flex', justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div>© 2026 Léacook · SIRET 123 456 789</div>
        <div>CGV · Mentions légales · Confidentialité</div>
      </div>
    </div>
  );
}

window.BonbonHome = BonbonHome;
