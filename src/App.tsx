import { useState } from 'react';
import { CategoryGrid } from './components/CategoryGrid';
import { CampaignSection } from './components/CampaignSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { TrustBar } from './components/TrustBar';
import { WhySeven } from './components/WhySeven';
import './styles.css';

export default function App() {
  const [query, setQuery] = useState('');

  return <div className="app">
    <div className="announcement"><span>SEVEN IMPORTS · DISTRITO FEDERAL</span><strong>Produtos selecionados · Atendimento próximo</strong></div>
    <Header onSearch={setQuery} />
    <main>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <CampaignSection />
      <ProductSection query={query} />
      <ExperienceSection />
      <WhySeven />
      <FinalCTA />
    </main>
    <Footer />
  </div>;
}
