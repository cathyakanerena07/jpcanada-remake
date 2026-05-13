'use client';

import { useReducedMotion } from 'framer-motion';

const ITEMS = [
  { label: 'Jobs', text: '寿司職人 / ダウンタウン', extra: 'CA$22-26/hr' },
  { label: 'Rooms', text: 'Kitsilano シェア', extra: '$950/mo' },
  { label: 'BBS', text: 'PR申請、IELTS不要ルート？', extra: '312 replies' },
  { label: 'Sale', text: 'IKEA ダブルベッド', extra: '$120 obo' },
  { label: 'Event', text: 'Japan Market Vancouver', extra: '5/24 Sat' },
  { label: 'Jobs', text: '日本語講師 / Burnaby', extra: 'CA$28/hr' },
  { label: 'News', text: 'ICBC保険、6月から改定', extra: '' },
];

export default function Ticker() {
  const reducedMotion = useReducedMotion();

  const items = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      background: 'var(--ink)',
      color: 'var(--cream)',
      padding: '10px var(--pad-x)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        display: 'flex',
        gap: '56px',
        animation: reducedMotion ? 'none' : 'tickerScroll 60s linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.04em' }}>
            {i > 0 && i % ITEMS.length !== 0 && <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '24px' }}>|</span>}
            <span style={{ color: 'var(--maple-soft)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>{item.label}</span>
            <span style={{ fontFamily: 'var(--font-jp-sans)' }}>{item.text}</span>
            {item.extra && <span>{item.extra}</span>}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
