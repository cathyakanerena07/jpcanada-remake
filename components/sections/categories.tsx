'use client';

import { motion, useReducedMotion } from 'framer-motion';

const CATS = [
  { ic: '01', en: 'Board', ja: '掲示板', cnt: '12,840', unit: 'active', hot: 'HOT', href: '/bbs' },
  { ic: '02', en: 'Jobs', ja: '求人', cnt: '428', unit: 'open', hot: '+84', href: '/jobs' },
  { ic: '03', en: 'Rooms', ja: '賃貸・シェア', cnt: '196', unit: 'avail.', hot: '', href: '#' },
  { ic: '04', en: 'Market', ja: '売買・譲渡', cnt: '63', unit: 'new', hot: '', href: '#' },
  { ic: '05', en: 'Lessons', ja: '習い事', cnt: '112', unit: 'tutors', hot: '', href: '#' },
  { ic: '06', en: 'Services', ja: 'サービス', cnt: '284', unit: 'listings', hot: '', href: '#' },
  { ic: '07', en: 'Events', ja: 'イベント', cnt: '38', unit: 'this month', hot: '', href: '#' },
  { ic: '08', en: 'Stories', ja: '読み物', cnt: '14', unit: 'new', hot: '', href: '#' },
];

export default function Categories() {
  const reduced = useReducedMotion();

  return (
    <section>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '24px var(--pad-x) 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.04em' }}>
            Browse the <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>directory</em>
            <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)', marginLeft: '10px', fontWeight: 400 }}>カテゴリ一覧</span>
          </h3>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--maple)' }}>
            All categories →
          </a>
        </div>
      </div>

      <div className="cats-grid" style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '1px',
        background: 'var(--sand)',
        border: 'var(--hair)',
      }}>
        {CATS.map((cat) => (
          <motion.a
            key={cat.en}
            href={cat.href}
            style={{
              background: 'var(--paper)',
              padding: '16px 12px 14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '4px',
              cursor: 'pointer',
              position: 'relative',
              minHeight: '90px',
              textDecoration: 'none',
            }}
            whileHover={reduced ? {} : { backgroundColor: 'var(--cream-warm)' }}
            transition={{ duration: 0.15 }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, color: 'var(--maple)', fontSize: '13px', letterSpacing: '0.04em' }}>{cat.ic}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1, marginTop: '2px' }}>{cat.en}</span>
            <span style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '11px', color: 'var(--ink-mid)' }}>{cat.ja}</span>
            <span style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--stone)' }}>
              <strong style={{ color: 'var(--maple)', fontWeight: 500 }}>{cat.cnt}</strong> {cat.unit}
            </span>
            {cat.hot && (
              <span style={{ position: 'absolute', top: '8px', right: '10px', fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.14em', color: 'var(--maple)', textTransform: 'uppercase' }}>{cat.hot}</span>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
