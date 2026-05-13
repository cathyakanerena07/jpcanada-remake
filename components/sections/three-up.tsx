'use client';

import { FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';

const CONTRIBUTORS = [
  { initial: 'N', name: 'NaoT_van', city: 'Vancouver · 在加6年 · Visa専門', pts: '2,840' },
  { initial: 'M', name: 'Mika Tanaka', city: 'Toronto · 在加12年 · Health', pts: '2,112' },
  { initial: 'K', name: 'Kenta', city: 'Vancouver · ワーホリ案内', pts: '1,884' },
  { initial: 'A', name: 'akira_yvr', city: 'Burnaby · 税理士 · Money', pts: '1,620' },
  { initial: 'Y', name: 'Yuki_S', city: 'Vancouver · Food critic', pts: '1,346' },
  { initial: 'あ', name: 'あおぞら', city: 'Calgary · 国際結婚 · Life', pts: '1,108' },
];

const EVENTS = [
  { d: '24', m: 'May Sat', title: 'Japan Market Vancouver — 春の屋台フェス', loc: '📍 Stanley Park · 11:00–18:00 · 入場無料', cta: 'Save →' },
  { d: '25', m: 'May Sun', title: 'Japanese Garden 茶会（VanDusen）', loc: '📍 VanDusen · 13:30 · $25', cta: 'Buy →' },
  { d: '28', m: 'May Wed', title: '日本人起業家ピッチナイト #06', loc: '📍 Gastown · 19:00 · 8 startups', cta: 'RSVP →' },
  { d: '29', m: 'May Thu', title: '英会話シャドーイング部 (free)', loc: '📍 Vancouver Public Library · 18:30', cta: 'Save →' },
  { d: '30', m: 'May Fri', title: '移住相談会（公認コンサル登壇）', loc: '📍 Online · 19:00 · 質疑応答あり', cta: 'Reg →' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const panelHead = (title: React.ReactNode, ja: string) => (
  <div style={{ padding: '12px 16px', borderBottom: 'var(--hair)', background: 'var(--cream-warm)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{title}</h4>
    <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '10px', color: 'var(--stone)' }}>{ja}</span>
  </div>
);

export default function ThreeUp() {
  return (
    <section className="threeup-grid" style={{
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '28px var(--pad-x) 12px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr 1.2fr',
      gap: '24px',
    }}>
      {/* Top contributors */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ background: 'var(--paper)', border: 'var(--hair)', display: 'flex', flexDirection: 'column' }}
      >
        {panelHead(<>Top <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>contributors</em></>, '今月の回答ベスト')}
        <div style={{ padding: '12px 16px' }}>
          {CONTRIBUTORS.map((c, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: '36px 1fr auto',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 0',
              borderBottom: i < CONTRIBUTORS.length - 1 ? '1px dashed var(--sand)' : 'none',
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--cream-warm)', border: '1px solid var(--sand)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '14px', color: 'var(--maple)', fontWeight: 700 }}>{c.initial}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{c.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--stone)', marginTop: '1px' }}>{c.city}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '18px', color: 'var(--maple)', textAlign: 'right' }}>
                {c.pts}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.12em', color: 'var(--stone)', textTransform: 'uppercase', display: 'block' }}>pts</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ask the editor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: 'linear-gradient(135deg, var(--maple) 0%, #9c3d23 100%)',
          color: 'var(--paper)',
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(253,247,235,0.7)' }}>
            Ask the editor <span style={{ fontFamily: 'var(--font-jp-sans)', letterSpacing: '0.08em', color: 'rgba(253,247,235,0.4)', marginLeft: '10px', textTransform: 'none' }}>編集部に聞く</span>
          </p>
          <h4 style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '22px', fontWeight: 700, lineHeight: 1.3, marginTop: '14px', color: 'var(--paper)' }}>
            カナダで困った、を24h以内に。
            <em style={{ display: 'block', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: '0.55em', marginTop: '4px', color: 'rgba(253,247,235,0.7)' }}>We answer back.</em>
          </h4>
          <p style={{ marginTop: '12px', fontFamily: 'var(--font-jp-sans)', fontSize: '12px', lineHeight: 1.7, color: 'rgba(253,247,235,0.85)' }}>
            ビザ、税金、引っ越し、英語、人間関係。匿名OK、日本語で受け付けています。回答率93%。
          </p>
        </div>
        <form
          onSubmit={(e: FormEvent) => e.preventDefault()}
          style={{ marginTop: '16px', display: 'flex', background: 'var(--paper)', color: 'var(--ink)' }}
        >
          <input
            type="text"
            placeholder="質問を1行で（例：BCID取得は予約必須？）"
            style={{ flex: 1, padding: '10px 12px', border: 'none', outline: 'none', fontFamily: 'var(--font-jp-sans)', fontSize: '12px', background: 'transparent', color: 'var(--ink)' }}
          />
          <button style={{ padding: '0 16px', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none' }}>送る</button>
        </form>
      </motion.div>

      {/* Week's picks */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ background: 'var(--paper)', border: 'var(--hair)', display: 'flex', flexDirection: 'column' }}
      >
        {panelHead(<>This <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>week&apos;s</em> picks</>, '今週の注目イベント')}
        <div style={{ padding: '12px 16px' }}>
          {EVENTS.map((ev, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: '50px 1fr auto',
              padding: '10px 0',
              alignItems: 'center',
              borderBottom: i < EVENTS.length - 1 ? '1px dashed var(--sand)' : 'none',
              gap: '10px',
            }}>
              <div style={{ width: '50px', textAlign: 'center', borderRight: 'var(--hair)', paddingRight: '8px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: '22px', color: 'var(--ink)', lineHeight: 1 }}>{ev.d}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--maple)', marginTop: '2px' }}>{ev.m}</div>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '12.5px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35 }}>{ev.title}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--stone)', marginTop: '2px', letterSpacing: '0.02em' }}>{ev.loc}</div>
              </div>
              <a href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--maple)', whiteSpace: 'nowrap' }}>{ev.cta}</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
