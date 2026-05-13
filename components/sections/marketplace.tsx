'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const HOUSING = [
  { img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&q=70&fit=crop', title: 'Kitsilano シェア・女性専用 1room', loc: 'Kits · 7th Ave', avail: '6月入居可', price: '$950', unit: '/mo' },
  { img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&q=70&fit=crop', title: 'Downtown 1BR + Den 家具付き', loc: 'Yaletown', avail: '即入居', price: '$2,450', unit: '/mo' },
  { img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=200&q=70&fit=crop', title: 'Burnaby ホームステイ（日本人家族）', loc: 'Metrotown', avail: '食事3回付', price: '$1,250', unit: '/mo' },
  { img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&q=70&fit=crop', title: 'North Van サブレット 3ヶ月', loc: 'Lonsdale', avail: '6/1-8/31', price: '$1,580', unit: '/mo' },
  { img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&q=70&fit=crop', title: 'Surrey 1room シェア（日本人オーナー）', loc: 'Newton', avail: '光熱費込', price: '$780', unit: '/mo' },
  { img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&q=70&fit=crop', title: 'Toronto Annex スタジオ', loc: 'St. George', avail: '地下鉄2分', price: '$1,890', unit: '/mo' },
];

const MARKET = [
  { img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=200&q=70&fit=crop', title: 'IKEA ダブルベッド（マットレス付）', loc: 'Vancouver West', avail: '6/15まで', price: '$120', unit: 'obo' },
  { img: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=200&q=70&fit=crop', title: '炊飯器 Zojirushi 5.5合（日本仕様）', loc: 'Burnaby', avail: '変圧器付き', price: '$80', unit: 'obo' },
  { img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200&q=70&fit=crop', title: '通勤自転車（Trek、ヘルメット付）', loc: 'Mt Pleasant', avail: '整備済', price: '$240', unit: 'firm' },
  { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=70&fit=crop', title: 'Honda Civic 2014（10万km）', loc: 'Surrey', avail: '車検来年4月', price: '$8,400', unit: 'obo' },
  { img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=70&fit=crop', title: '譲渡 · 観葉植物 5鉢まとめて', loc: 'Kits', avail: '取りに来れる方', price: 'Free', unit: '譲渡' },
  { img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&q=70&fit=crop', title: 'スキー板 ROSSIGNOL 170cm + ブーツ27', loc: 'North Van', avail: 'シーズン1回', price: '$320', unit: 'set' },
];

const EVENTS = [
  { d: '24', m: 'May Sat', title: 'Japan Market Vancouver — 春の屋台フェス', loc: '📍 Stanley Park · 11:00–18:00', cta: 'Save →' },
  { d: '31', m: 'May Sat', title: 'JPcanada読者ミートアップ #28', loc: '📍 Yaletown · 19:00 · 定員30名', cta: 'RSVP →' },
  { d: '07', m: 'Jun Sat', title: '永住権セミナー（無料、要予約）', loc: '📍 Online · 10:00 PT', cta: 'Reg →' },
  { d: '14', m: 'Jun Sat', title: 'Toronto 桜の下で散歩会', loc: '📍 High Park · 11:00', cta: 'Save →' },
  { d: '21', m: 'Jun Sat', title: 'バンクーバー初心者の会 #04', loc: '📍 Mt Pleasant · 14:00', cta: 'RSVP →' },
  { d: '28', m: 'Jun Sat', title: 'Calgary ワーホリ&移住交流会', loc: '📍 Kensington · 18:00', cta: 'Save →' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ColHead({ title, ja, href, cta }: { title: React.ReactNode; ja: string; href: string; cta: string }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--ink)',
      paddingBottom: '10px',
      borderBottom: '2px solid var(--ink)',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    }}>
      <span>
        {title}
        <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)', fontWeight: 400, marginLeft: '8px' }}>{ja}</span>
      </span>
      <a href={href} style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--maple)' }}>{cta}</a>
    </h3>
  );
}

export default function Marketplace() {
  return (
    <section className="market-grid" style={{
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '12px var(--pad-x)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '24px',
    }}>
      {/* Housing */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ColHead title={<><em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>Rooms</em> &amp; rentals</>} ja="賃貸・シェア" href="#" cta="All →" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {HOUSING.map((h, i) => (
            <motion.div key={i} variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: '1px dashed var(--sand)', cursor: 'pointer' }}>
              <div style={{ width: '64px', height: '48px', background: 'var(--cream-warm)', overflow: 'hidden' }}>
                <Image src={h.img} alt="" width={64} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '12px', color: 'var(--ink)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.title}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--stone)', letterSpacing: '0.04em', marginTop: '2px', display: 'flex', gap: '8px' }}>
                  <span>{h.loc}</span><span>{h.avail}</span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--maple)', fontSize: '15px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {h.price}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.08em', color: 'var(--stone)', textTransform: 'uppercase', display: 'block' }}>{h.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Market */}
      <motion.div className="market-col-market" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ColHead title={<><em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>Market</em> &amp; sale</>} ja="売買・譲渡" href="#" cta="All →" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {MARKET.map((m, i) => (
            <motion.div key={i} variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: '1px dashed var(--sand)', cursor: 'pointer' }}>
              <div style={{ width: '64px', height: '48px', background: 'var(--cream-warm)', overflow: 'hidden' }}>
                <Image src={m.img} alt="" width={64} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '12px', color: 'var(--ink)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.title}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--stone)', letterSpacing: '0.04em', marginTop: '2px', display: 'flex', gap: '8px' }}>
                  <span>{m.loc}</span><span>{m.avail}</span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--maple)', fontSize: '15px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {m.price}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.08em', color: 'var(--stone)', textTransform: 'uppercase', display: 'block' }}>{m.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Events */}
      <motion.div className="market-col-events" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ColHead title={<><em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>Events</em> &amp; meetups</>} ja="イベント" href="#" cta="Cal →" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {EVENTS.map((ev, i) => (
            <motion.div key={i} variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: '1px dashed var(--sand)', cursor: 'pointer' }}>
              <div style={{ width: '44px', textAlign: 'center', borderRight: 'var(--hair)', paddingRight: '8px' }}>
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
