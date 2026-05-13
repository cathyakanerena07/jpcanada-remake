const RATES = [
  { k: 'CAD/JPY', v: '108.42', d: '↑ 0.34', down: false },
  { k: 'USD/CAD', v: '1.358', d: '↓ 0.12', down: true },
  { k: 'USD/JPY', v: '147.18', d: '↑ 0.22', down: false },
  { k: 'TSX', v: '22,418', d: '↑ 0.4%', down: false },
  { k: 'YVR', v: '+4°C', d: '☁ Cloudy', down: false },
  { k: 'YYZ', v: '+11°C', d: '☀ Clear', down: false },
  { k: 'YYC', v: '−2°C', d: '❄ Light snow', down: true },
  { k: 'YUL', v: '+9°C', d: '🌧 Rain', down: false },
];

export default function RatesBar() {
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--cream)', marginTop: '18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="ratesbar-inner" style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '14px var(--pad-x)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        gap: '32px',
      }}>
        <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--maple-soft)', whiteSpace: 'nowrap' }}>
          Live rates <span style={{ fontFamily: 'var(--font-jp-sans)', marginLeft: '8px', letterSpacing: '0.06em', color: 'rgba(244,238,222,0.4)', textTransform: 'none' }}>レート・天気</span>
        </h5>
        <div style={{ display: 'flex', gap: '28px', overflowX: 'auto', fontFamily: 'var(--font-sans)', fontSize: '12px' }}>
          {RATES.map((r) => (
            <div key={r.k} style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgba(244,238,222,0.5)', letterSpacing: '0.08em', fontSize: '10px', textTransform: 'uppercase' }}>{r.k}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '16px', color: 'var(--cream)' }}>{r.v}</span>
              <span style={{ fontSize: '10px', color: r.down ? 'var(--maple-soft)' : 'var(--cedar)' }}>{r.d}</span>
            </div>
          ))}
        </div>
        <a href="#" className="ratesbar-cta" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--maple-soft)', whiteSpace: 'nowrap' }}>All rates →</a>
      </div>
    </div>
  );
}
