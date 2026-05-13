'use client';

import { FormEvent } from 'react';

export default function Hero() {
  const s = {
    strip: {
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '28px var(--pad-x) 20px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: '24px',
      alignItems: 'stretch',
    } as React.CSSProperties,
  };

  return (
    <section className="hero-grid" style={s.strip}>
      {/* Hero lead */}
      <div style={{
        position: 'relative',
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: '28px 28px 24px',
        minHeight: '230px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}>
        {/* bg image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1559511260-66a654ae982a?w=900&q=80&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.32,
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(95deg, rgba(26,31,46,0.95) 30%, rgba(26,31,46,0.55) 100%)',
          zIndex: 1,
        }} />

        {/* content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--maple-soft)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--maple-soft)', display: 'inline-block' }} />
            Vol. 027 · May 2026
            <span style={{ fontFamily: 'var(--font-jp-sans)', textTransform: 'none', letterSpacing: '0.06em', color: 'rgba(244,238,222,0.5)' }}>バンクーバー版</span>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            marginTop: '14px',
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: 1.15,
            color: 'var(--cream)',
            letterSpacing: '-0.005em',
          }}>
            カナダで、もうひとつの
            <span style={{ color: 'var(--maple-soft)', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 400 }}>日常</span>
            を。
            <em style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--maple-soft)',
              display: 'block',
              fontSize: '0.55em',
              marginTop: '6px',
              letterSpacing: '0.02em',
            }}>A guide to the other everyday.</em>
          </h1>

          <form
            onSubmit={(e: FormEvent) => e.preventDefault()}
            style={{
              marginTop: '16px',
              display: 'grid',
              gridTemplateColumns: '90px 1fr auto',
              background: 'var(--paper)',
              color: 'var(--ink)',
              border: '1px solid var(--paper)',
            }}
          >
            <select aria-label="Category" style={{
              borderRight: '1px solid var(--sand)',
              background: 'var(--cream-warm)',
              padding: '10px 12px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              outline: 'none',
              border: 'none',
            }}>
              <option>All</option>
              <option>BBS</option>
              <option>Jobs</option>
              <option>Housing</option>
            </select>
            <input
              type="text"
              placeholder="ワーホリ準備、シェアハウス、SIN番号..."
              style={{
                padding: '10px 14px',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-jp-sans)',
                fontSize: '13px',
                background: 'transparent',
                color: 'var(--ink)',
              }}
            />
            <button style={{
              padding: '0 18px',
              background: 'var(--maple)',
              color: 'var(--paper)',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              transition: 'background 0.15s',
              border: 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-mid)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--maple)')}
            >Search</button>
          </form>

          <div style={{ marginTop: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap', fontSize: '11px' }}>
            <span style={{ color: 'rgba(244,238,222,0.4)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', alignSelf: 'center', marginRight: '4px' }}>Trending</span>
            {['#ワーホリ', '#SIN番号', '#PR申請', '#寿司職人', '#シェア'].map(tag => (
              <a key={tag} href="#" style={{
                padding: '3px 9px',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                fontFamily: 'var(--font-jp-sans)',
                color: 'rgba(244,238,222,0.75)',
                transition: 'border-color 0.15s, color 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--maple-soft)'; e.currentTarget.style.color = 'var(--maple-soft)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(244,238,222,0.75)'; }}
              >{tag}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div style={{
        background: 'var(--paper)',
        border: 'var(--hair)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          padding: '12px 18px',
          borderBottom: 'var(--hair)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--cream-warm)',
        }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
            Today on <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>JPcanada</em>
          </h4>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--maple)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--maple)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.6s ease-in-out infinite' }} />
            Live
          </span>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: 'var(--hair)' }}>
          {[
            { num: '240', unit: 'k', label: '会員数', delta: '+312 this week', down: false },
            { num: '12,840', unit: '', label: 'いま掲示板にいる', delta: '+8% vs avg', down: false },
            { num: '428', unit: '', label: '公開中の求人', delta: '+84 today', down: false },
            { num: '196', unit: '', label: '空き部屋', delta: '−12 yesterday', down: true },
          ].map(({ num, unit, label, delta, down }, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              borderRight: i % 2 === 0 ? 'var(--hair)' : 'none',
              borderBottom: i < 2 ? 'var(--hair)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1, letterSpacing: '-0.01em' }}>
                {num}{unit && <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>{unit}</em>}
              </div>
              <div style={{ marginTop: '6px', fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)' }}>{label}</div>
              <div style={{ marginTop: '4px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.06em', color: down ? 'var(--maple)' : 'var(--cedar)' }}>{delta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Aside: weather / exchange / quick actions */}
      <div className="hero-aside" style={{ background: 'var(--paper)', border: 'var(--hair)', display: 'flex', flexDirection: 'column' }}>
        {[
          [
            { title: 'YVR · Now', value: '+4', unit: '°C', sub: '☁ 曇り · 風 12km/h', subColor: '' },
            { title: 'CAD/JPY', value: '108', unit: '.42', sub: '↑ +0.34 (0.3%)', subColor: 'var(--cedar)' },
          ],
          [
            { title: 'Sunset', value: '20:38', unit: '', sub: 'あと7時間14分', subColor: '' },
            { title: 'Skytrain', value: '通常', unit: '', sub: 'Expo/Millennium/Canada', subColor: '', valueColor: 'var(--cedar)' },
          ],
        ].map((row, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: 'var(--hair)', flex: 1 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '12px 16px',
                borderRight: ci === 0 ? 'var(--hair)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minHeight: '76px',
              }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stone)' }}>{cell.title}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: ('valueColor' in cell && cell.valueColor) ? cell.valueColor : 'var(--ink)', letterSpacing: '-0.01em' }}>
                  {cell.value}
                  {cell.unit && <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400, fontSize: '0.7em' }}>{cell.unit}</em>}
                </span>
                <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '10px', color: cell.subColor || 'var(--stone)' }}>{cell.sub}</span>
              </div>
            ))}
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {[
            { label: '無料登録', sub: '3分でかんたん', primary: true },
            { label: 'アプリ', sub: 'iOS / Android', primary: false },
          ].map(({ label, sub, primary }) => (
            <a key={label} href="#" style={{
              padding: '12px 16px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--paper)',
              background: primary ? 'var(--maple)' : 'var(--ink)',
              textAlign: 'center',
              transition: 'background 0.15s',
              borderRight: primary ? '1px solid rgba(255,255,255,0.18)' : 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = primary ? 'var(--ink-mid)' : 'var(--maple)')}
              onMouseLeave={e => (e.currentTarget.style.background = primary ? 'var(--maple)' : 'var(--ink)')}
            >
              {label}
              <span style={{ display: 'block', fontFamily: 'var(--font-jp-sans)', fontSize: '9px', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none', opacity: 0.75 }}>{sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
