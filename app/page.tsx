import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Ticker from '@/components/sections/ticker';
import Categories from '@/components/sections/categories';
import NewsGrid from '@/components/sections/news-grid';
import Marketplace from '@/components/sections/marketplace';
import ThreeUp from '@/components/sections/three-up';
import PhotoStrip from '@/components/sections/photo-strip';
import RatesBar from '@/components/sections/rates-bar';
import JoinBand from '@/components/sections/join-band';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <NewsGrid />
        <Marketplace />
        <ThreeUp />
        <PhotoStrip />
        <RatesBar />
        <JoinBand />
      </main>
      <Footer />
    </>
  );
}
