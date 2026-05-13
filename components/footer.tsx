'use client';

const COLS = [
  {
    head: 'Community',
    links: [
      { label: 'BBS', ja: '掲示板', href: '/bbs' },
      { label: 'Stories', ja: '読み物', href: '#' },
      { label: 'Events', ja: 'イベント', href: '#' },
      { label: 'Meetups', ja: '', href: '#' },
    ],
  },
  {
    head: 'Marketplace',
    links: [
      { label: 'Jobs', ja: '求人', href: '/jobs' },
      { label: 'Housing', ja: '賃貸', href: '#' },
      { label: 'Buy & sell', ja: '売買', href: '#' },
      { label: 'Services', ja: '', href: '#' },
    ],
  },
  {
    head: 'Resources',
    links: [
      { label: 'Working holiday', ja: 'ワーホリ', href: '#' },
      { label: 'Study abroad', ja: '留学', href: '#' },
      { label: 'Immigration', ja: '移住', href: '#' },
      { label: 'City guides', ja: '', href: '#' },
    ],
  },
  {
    head: 'About',
    links: [
      { label: 'About us', ja: '', href: '#' },
      { label: 'Contact', ja: '', href: '#' },
      { label: 'Press', ja: '', href: '#' },
      { label: 'Advertise', ja: '', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)', marginTop: '80px' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '72px var(--pad-x) 28px' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand */}
          <div className="footer-brand">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--cream)' }}>
              JP<em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--maple-soft)' }}>canada</em>
            </span>
            <p style={{ marginTop: '16px', fontFamily: 'var(--font-serif)', fontSize: '15px', fontStyle: 'italic', lineHeight: 1.7, color: 'rgba(244,238,222,0.55)', maxWidth: '280px' }}>
              &ldquo;カナダで、もうひとつの日常を。&rdquo; 2012年から、日本語で話せるカナダのコミュニティ。
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.head}>
              <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--maple-soft)', marginBottom: '18px' }}>{col.head}</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'rgba(244,238,222,0.65)', transition: 'color 0.18s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,238,222,0.65)')}
                    >
                      {l.label}
                      {l.ja && <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', fontStyle: 'normal', color: 'rgba(244,238,222,0.35)', marginLeft: '8px' }}>{l.ja}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(244,238,222,0.4)', letterSpacing: '0.06em' }}>
          <span>© 2026 JPcanada · Vancouver · Toronto · Calgary</span>
          <span>Terms · Privacy · Community Guidelines</span>
        </div>
      </div>
    </footer>
  );
}
