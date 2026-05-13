'use client';

import { motion } from 'framer-motion';

export default function JoinBand() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ marginTop: '28px', background: 'var(--maple)', color: 'var(--paper)', padding: '22px var(--pad-x)' }}
    >
      <div className="joinband-grid" style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '32px',
        alignItems: 'center',
      }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '22px', fontWeight: 700, lineHeight: 1.3 }}>
            あなたの「カナダ」を、誰かが待っている。
            <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(253,247,235,0.7)', fontSize: '0.6em', marginLeft: '12px' }}>Make it yours.</em>
          </h3>
        </div>
        <p style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '13px', color: 'rgba(253,247,235,0.8)', maxWidth: '540px' }}>
          登録3分。広告なし、日本語、無料。240,000人の日本語コミュニティが、最初の一歩を一緒に。
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: '無料で登録', ghost: false },
            { label: 'アプリ DL', ghost: true },
          ].map(({ label, ghost }) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              style={{
                padding: '11px 22px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: ghost ? 'transparent' : 'var(--paper)',
                color: ghost ? 'var(--paper)' : 'var(--maple)',
                border: ghost ? '1px solid rgba(253,247,235,0.5)' : 'none',
                whiteSpace: 'nowrap',
                display: 'block',
              }}
            >{label}</motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
