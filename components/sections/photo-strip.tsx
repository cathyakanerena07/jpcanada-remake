'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&q=80&fit=crop', cap: 'Rockies · 06:42' },
  { src: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&q=80&fit=crop', cap: 'Toronto · 19:18' },
  { src: 'https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=400&q=80&fit=crop', cap: 'Vancouver · 07:14' },
  { src: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=400&q=80&fit=crop', cap: 'Coal Harbour · 06:02' },
];

export default function PhotoStrip() {
  return (
    <section className="photo-strip" style={{
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '20px var(--pad-x)',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1fr 1fr 1fr 1fr',
      gap: '2px',
    }}>
      {/* Intro */}
      <motion.div
        className="photo-intro"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          padding: '22px 22px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--maple-soft)' }}>Photo essay</p>
          <h4 style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '18px', fontWeight: 700, lineHeight: 1.3, marginTop: '10px' }}>
            土曜の朝、グランビル島。
            <em style={{ display: 'block', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--maple-soft)', fontSize: '0.65em', marginTop: '4px' }}>A weekend at the fish market.</em>
          </h4>
        </div>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,238,222,0.5)' }}>Photographed by Yuki Sato</span>
      </motion.div>

      {/* Photos */}
      {PHOTOS.map((ph, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
          style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', background: 'var(--cream-warm)' }}
          whileHover={{ scale: 1.02 }}
        >
          <Image src={ph.src} alt={ph.cap} fill style={{ objectFit: 'cover', transition: 'transform 0.7s' }} sizes="25vw" />
          <span style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))',
            color: 'var(--cream)',
            padding: '16px 12px 10px',
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>{ph.cap}</span>
        </motion.div>
      ))}
    </section>
  );
}
