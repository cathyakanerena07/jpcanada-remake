'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const STORIES_LEAD = {
  img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80&fit=crop',
  cat: 'Long read',
  title: '「帰る」って何だろう。バンクーバーで10年、東京で生まれ。',
  by: 'Naomi Hayashi',
  time: '8 min',
  date: 'May 09',
  desc: 'グランビルアイランドの市場で20年寿司を握る大将に、人生で4回した「帰国」のことを聞いた。最初の帰国は失敗だったらしい。',
};

const STORIES = [
  { img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=200&q=70&fit=crop', title: 'SIN番号の取り方、2026年版。Service Canadaの新システム対応。', cat: 'Guide', meta: '4 min · Kenta', date: 'May 07' },
  { img: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=200&q=70&fit=crop', title: 'トロントで「日本語が通じる病院」5軒、本気の評価。', cat: 'City pick', meta: '6 min · Mika T.', date: 'May 05' },
  { img: 'https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=200&q=70&fit=crop', title: 'カナダの確定申告、ワーホリ初年度に絶対やる5つ。', cat: 'Money', meta: '5 min · akira', date: 'May 03' },
  { img: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=200&q=70&fit=crop', title: 'カルガリーで車を買う、$5,000以下の正解。中古ディーラー回り方。', cat: 'City pick', meta: '7 min · Sho', date: 'May 01' },
  { img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=200&q=70&fit=crop', title: '英語ができない私が、ローカル職場で3年生き延びた話。', cat: 'Essay', meta: '9 min · もも', date: 'Apr 28' },
];

const BBS = [
  { board: 'Visa', title: 'PR申請、Express Entry一発で取れた話。スコア計算で見落としがちな10点', by: 'NaoT · 14分前', replies: 312 },
  { board: 'Housing', title: 'Kitsilanoでシェアハウス、相場いくらが妥当？', by: 'みかん · 1h', replies: 87 },
  { board: 'Life', title: '夫がカナダ人で永住申請中、義理の家族との距離感', by: 'あおぞら · 3h', replies: 204 },
  { board: 'Health', title: 'トロントで日本語OKの歯医者、おすすめありますか？', by: 'Ryo_TO · 5h', replies: 42 },
  { board: 'English', title: 'ワーホリで来て3ヶ月、英語が伸びない。職場が日本人だけ問題', by: 'もも · 6h', replies: 128 },
  { board: 'Money', title: 'カナダの確定申告、初年度。T4とT2202だけで足りる？', by: 'akira · 昨日', replies: 59 },
  { board: 'Visa', title: 'BOWP（卒業後就労ビザ）3年に延長された人いますか', by: '学生A · 昨日', replies: 76 },
  { board: 'Life', title: 'カナダで運転免許書き換え、日本→BC州2026年5月版', by: 'drive_van · 2d', replies: 31 },
  { board: 'Food', title: '本気でうまい和食、バンクーバー5軒（2026更新）', by: 'Yuki_S · 2d', replies: 98 },
  { board: 'Pets', title: '犬を日本から連れてきた人、検疫の手順教えてください', by: 'pochi · 3d', replies: 24 },
];

const JOBS = [
  { logo: '寿', title: '寿司シェフ（経験者優遇）', biz: 'Sushi Bar Maumi · Downtown', badges: 'VISA · 寮あり', pay: '$24-28', unit: '/hr' },
  { logo: '日', title: '日本語講師（小学生対象、土曜）', biz: 'Sakura Japanese School · Burnaby', badges: 'PT · 資格不問', pay: '$32', unit: '/hr' },
  { logo: 'M', title: 'マーケアシスタント（日英バイリンガル）', biz: 'Maple Trading Co. · Richmond', badges: 'FT · Remote OK', pay: '$52k', unit: '/yr' },
  { logo: 'C', title: 'カフェ・バリスタ（朝シフト $200 sign-on）', biz: 'Matcha House · West End', badges: 'PT · 経験不問', pay: '$19+tip', unit: '/hr' },
  { logo: 'H', title: 'ホテル・フロント夜勤（金土）', biz: 'Hotel Pacific · Coal Harbour', badges: 'PT · 英語中級', pay: '$23', unit: '/hr' },
  { logo: '介', title: '介護スタッフ（日本人高齢者ホーム）', biz: 'Nikkei Place · Burnaby', badges: 'FT · VISA可', pay: '$26', unit: '/hr' },
  { logo: '美', title: '美容師アシスタント（日本資格OK）', biz: 'Aoba Hair · Yaletown', badges: 'FT/PT', pay: '$18+tip', unit: '/hr' },
  { logo: 'D', title: 'フロントエンドエンジニア（React/TS）', biz: 'Niko Studio · Remote / Toronto', badges: 'FT · CA$80-110k', pay: '$95k', unit: '/yr' },
  { logo: '物', title: '日系物流倉庫・ピッキング（夜勤手当）', biz: 'JC Logistics · Surrey', badges: 'FT · 送迎あり', pay: '$22', unit: '/hr' },
  { logo: '通', title: '医療通訳（オンコール、$50/case）', biz: 'VanHealth Interpreters · 全域', badges: '', pay: '$50', unit: '/case' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const colHead = (en: React.ReactNode, ja: string, moreHref: string, moreLabel = 'More →') => (
  <h3 style={{
    fontFamily: 'var(--font-display)',
    fontSize: '16px',
    fontWeight: 700,
    color: 'var(--ink)',
    letterSpacing: '-0.005em',
    paddingBottom: '10px',
    borderBottom: '2px solid var(--ink)',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  }}>
    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      {en}
      <span style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)', fontWeight: 400, letterSpacing: '0.06em' }}>{ja}</span>
    </span>
    <a href={moreHref} style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--maple)' }}>{moreLabel}</a>
  </h3>
);

export default function NewsGrid() {
  return (
    <section className="news-grid" style={{
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '28px var(--pad-x) 12px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: '24px',
    }}>
      {/* COL 1: Stories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {colHead('Stories', '読み物', '#', 'More →')}

        {/* Lead story */}
        <motion.article variants={itemVariants} style={{
          display: 'grid',
          gridTemplateColumns: '110px 1fr',
          gap: '14px',
          paddingBottom: '14px',
          marginBottom: '12px',
          borderBottom: 'var(--hair)',
          cursor: 'pointer',
        }}>
          <div style={{ width: '110px', height: '88px', overflow: 'hidden', background: 'var(--cream-warm)', position: 'relative' }}>
            <Image src={STORIES_LEAD.img} alt="" fill style={{ objectFit: 'cover', transition: 'transform 0.5s' }} sizes="110px" />
            <span style={{ position: 'absolute', top: '6px', left: '6px', background: 'var(--maple)', color: 'var(--paper)', fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '2px 7px' }}>{STORIES_LEAD.cat}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '15px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>{STORIES_LEAD.title}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--stone)', letterSpacing: '0.04em', display: 'flex', gap: '8px', marginTop: '2px' }}>
              <span style={{ color: 'var(--ink-mid)', fontFamily: 'var(--font-jp-sans)' }}>{STORIES_LEAD.by}</span>
              <span>·</span><span>{STORIES_LEAD.time}</span><span>·</span><span>{STORIES_LEAD.date}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '12px', color: 'var(--ink-mid)', lineHeight: 1.55, marginTop: '2px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{STORIES_LEAD.desc}</div>
          </div>
        </motion.article>

        {/* Story list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STORIES.map((s, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr auto',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 0',
              borderBottom: '1px dashed var(--sand)',
              cursor: 'pointer',
            }}>
              <div style={{ width: '56px', height: '56px', overflow: 'hidden', background: 'var(--cream-warm)' }}>
                <Image src={s.img} alt="" width={56} height={56} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-jp-serif)', fontSize: '13px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{s.title}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: '4px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--maple)', fontWeight: 500 }}>{s.cat}</span>
                  <span>{s.meta}</span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontStyle: 'italic', color: 'var(--ink-mid)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {s.date.split(' ')[0]}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginTop: '2px' }}>{s.date.split(' ')[1]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* COL 2: BBS */}
      <motion.div
        className="news-col-bbs"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {colHead(<>From the <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>Boards</em></>, '掲示板', '/bbs', 'All →')}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {BBS.map((b, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: '26px 1fr auto',
              alignItems: 'baseline',
              gap: '10px',
              padding: '7px 0',
              borderBottom: '1px dashed var(--sand)',
              cursor: 'pointer',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--maple)', fontSize: '13px', lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '13px', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--maple)', marginRight: '6px' }}>{b.board}</span>
                {b.title}
                <span style={{ fontSize: '10px', color: 'var(--stone)', marginLeft: '6px' }}>{b.by}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ink)', fontSize: '14px', lineHeight: 1, textAlign: 'right' }}>
                {b.replies}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--stone)', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>replies</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* COL 3: Jobs */}
      <motion.div
        className="news-col-jobs"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {colHead(<>Featured <em style={{ fontStyle: 'italic', color: 'var(--maple)', fontWeight: 400 }}>Jobs</em></>, '求人', '/jobs', 'All →')}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {JOBS.map((j, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: '32px 1fr auto',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 0',
              borderBottom: '1px dashed var(--sand)',
              cursor: 'pointer',
            }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--cream-warm)', border: '1px solid var(--sand)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', color: 'var(--maple)' }}>{j.logo}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{j.title}</div>
                <div style={{ fontFamily: 'var(--font-jp-sans)', fontSize: '11px', color: 'var(--stone)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {j.biz}
                  {j.badges && <span style={{ color: 'var(--cedar)', fontSize: '10px', letterSpacing: '0.08em', marginLeft: '4px' }}>{j.badges}</span>}
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--maple)', fontSize: '15px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {j.pay}
                <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>{j.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
