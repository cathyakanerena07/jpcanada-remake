'use client';

import { useState } from 'react';
import Link from 'next/link';

const CITIES = ['Vancouver', 'Toronto', 'Calgary', 'Montreal'];

const NAV = [
  { en: 'BBS', ja: '掲示板', href: '/bbs' },
  { en: 'Jobs', ja: '求人', href: '/jobs' },
  { en: 'Housing', ja: '賃貸', href: '#' },
  { en: 'Stories', ja: '読み物', href: '#' },
  { en: 'Events', ja: 'イベント', href: '#' },
];

export default function Header() {
  const [cityIndex, setCityIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--cream)', borderBottom: 'var(--hair)' }}>
      {/* Main bar */}
      <div className="header-bar" style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '14px var(--pad-x)',
        display: 'grid',
        gridTemplateColumns: '220px 1fr auto',
        alignItems: 'center',
        gap: '32px',
      }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontFamily: 'var(--font-display)' }}>
          <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
            JP<em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--maple)' }}>canada</em>
          </span>
          <span style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--stone)' }}>
            ジェイピーカナダ
          </span>
        </Link>

        {/* Nav — hidden on mobile */}
        <nav className="header-nav" style={{ gap: '28px', justifySelf: 'center' }}>
          {NAV.map(({ en, ja, href }) => (
            <Link key={en} href={href} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--ink-mid)',
              padding: '6px 0',
              transition: 'color 0.18s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--maple)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-mid)')}
            >
              {en}
              <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '9px', letterSpacing: '0.06em', display: 'block', textTransform: 'none', color: 'var(--stone)', marginTop: '2px', fontWeight: 400 }}>{ja}</span>
            </Link>
          ))}
        </nav>

        {/* Right side — hidden on mobile */}
        <div className="header-actions" style={{ alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setCityIndex((i) => (i + 1) % CITIES.length)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              border: 'var(--hair-strong)',
              borderRadius: '999px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              color: 'var(--ink)',
              background: 'var(--paper)',
              cursor: 'pointer',
              transition: 'background 0.18s, border-color 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--cream-warm)';
              e.currentTarget.style.borderColor = 'var(--maple)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--paper)';
              e.currentTarget.style.borderColor = 'rgba(26,31,46,0.12)';
            }}
          >
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--maple)" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {CITIES[cityIndex]}
          </button>
          <a href="#" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            padding: '9px 18px',
            border: '1px solid var(--ink)',
            transition: 'background 0.18s, color 0.18s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--ink)'; }}
          >Sign in</a>
          <a href="#" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            background: 'var(--maple)',
            color: 'var(--paper)',
            padding: '9px 18px',
            border: '1px solid var(--maple)',
            transition: 'background 0.18s, border-color 0.18s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--maple)'; e.currentTarget.style.borderColor = 'var(--maple)'; }}
          >投稿する</a>
        </div>

        {/* Hamburger — visible on mobile */}
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ color: 'var(--ink)' }}
        >
          {menuOpen ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`header-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV.map(({ en, ja, href }) => (
          <Link key={en} href={href} className="header-mobile-link" onClick={() => setMenuOpen(false)}>
            <span>
              {en}
              <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)', marginLeft: '10px', textTransform: 'none', letterSpacing: '0.06em' }}>{ja}</span>
            </span>
            <span style={{ color: 'var(--stone)', fontSize: '12px' }}>→</span>
          </Link>
        ))}
        <div className="header-mobile-actions">
          <a href="#" style={{
            flex: 1,
            textAlign: 'center',
            padding: '12px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            border: '1px solid var(--ink)',
          }}>Sign in</a>
          <a href="#" style={{
            flex: 1,
            textAlign: 'center',
            padding: '12px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            background: 'var(--maple)',
            color: 'var(--paper)',
          }}>投稿する</a>
        </div>
      </div>

      {/* Sub bar */}
      <div style={{ background: 'var(--ink)', color: 'var(--cream)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '10px var(--pad-x)',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: 'var(--maple-soft)', display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--maple-soft)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.6s ease-in-out infinite' }} />
            Live <span style={{ fontFamily: 'var(--font-jp-sans)', letterSpacing: '0.06em', textTransform: 'none', marginLeft: '4px' }}>いま読まれている</span>
          </span>
          <a href="#" style={{ color: 'rgba(244,238,222,0.6)', transition: 'color 0.18s', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,238,222,0.6)')}
          >ワーホリ・ビザ Q&amp;A</a>
          <span style={{ color: 'rgba(255,255,255,0.18)', flexShrink: 0 }}>/</span>
          <a href="#" style={{ color: 'rgba(244,238,222,0.6)', transition: 'color 0.18s', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,238,222,0.6)')}
          >バンクーバー一斉雪</a>
          <span style={{ color: 'rgba(255,255,255,0.18)', flexShrink: 0 }}>/</span>
          <a href="#" style={{ color: 'rgba(244,238,222,0.6)', transition: 'color 0.18s', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,238,222,0.6)')}
          >求人 +84 today</a>
          <span className="subbar-weather" style={{ marginLeft: 'auto', gap: '20px', color: 'rgba(244,238,222,0.55)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
            <span>YVR <strong style={{ color: 'var(--cream)', fontWeight: 500, marginLeft: '4px' }}>+4°C ☁</strong></span>
            <span style={{ marginLeft: '20px' }}>CAD/JPY <strong style={{ color: 'var(--cream)', fontWeight: 500, marginLeft: '4px' }}>108.42 ↑</strong></span>
            <span style={{ marginLeft: '20px' }}>TSX <strong style={{ color: 'var(--cream)', fontWeight: 500, marginLeft: '4px' }}>22,418 +0.4%</strong></span>
          </span>
        </div>
      </div>
    </header>
  );
}
