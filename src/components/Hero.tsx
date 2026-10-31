import { ArrowRight, CheckCircle2, Heart, MessageCircle, ShieldCheck } from 'lucide-react';
import { hasWhatsApp, openWhatsApp } from '../lib/whatsapp';

export function Hero() {
  const whatsapp = openWhatsApp('Olá! Quero consultar os iPhones disponíveis na Seven Imports.');

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-orb" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">SEVEN IMPORTS · DISTRITO FEDERAL</span>
          <h1>O iPhone certo muda <em>tudo.</em></h1>
          <p className="hero-lead">Uma experiência premium para encontrar seu próximo iPhone, com atendimento próximo, curadoria e transparência do primeiro contato à compra.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#iphones">Comprar iPhone <ArrowRight size={17} /></a>
            {hasWhatsApp() ? <a className="button button-light" href={whatsapp ?? '#contato'} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com a Seven</a> : <a className="button button-light" href="#contato">Falar com a Seven</a>}
          </div>
          <div className="hero-trust">
            <span><CheckCircle2 size={15} /> Produtos selecionados</span>
            <span><CheckCircle2 size={15} /> Atendimento no DF</span>
            <span><CheckCircle2 size={15} /> Compra transparente</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-glow" />
          <article className="hero-product">
            <div className="hero-product-media">
              <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1100&q=90" alt="iPhone em destaque na Seven Imports" />
              <button className="hero-favorite" aria-label="Adicionar iPhone aos favoritos"><Heart size={17} /></button>
              <span className="hero-product-badge">DESTAQUE</span>
            </div>
            <div className="hero-product-info">
              <div><span>iPhone 16 Pro Max</span><small>256 GB · Titânio</small></div>
              <ShieldCheck size={20} />
            </div>
            <a href="#iphones" className="hero-product-link">Consultar disponibilidade <ArrowRight size={15} /></a>
          </article>
          <div className="floating-note floating-note-top"><ShieldCheck size={18} /><div><strong>Compra transparente</strong><small>Informações claras em cada etapa</small></div></div>
          <div className="floating-note floating-note-bottom"><span className="live-dot" /> Atendimento personalizado <b>DF</b></div>
        </div>
      </div>
    </section>
  );
}
