import { ArrowDown, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { hasWhatsApp, openWhatsApp } from '../lib/whatsapp';
import '../styles/hero.css';

export function Hero() {
  const whatsapp = openWhatsApp('Olá! Gostaria de consultar a disponibilidade de um iPhone na Seven Imports.');

  return (
    <section id="inicio" className="hero-section hero-premium">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-light hero-light-one" aria-hidden="true" />
      <div className="hero-light hero-light-two" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <span className="eyebrow hero-eyebrow">SEVEN IMPORTS <i>•</i> DISTRITO FEDERAL</span>
          <h1>Seu próximo <span>iPhone</span><br />está aqui.</h1>
          <p className="hero-lead">Tecnologia selecionada, atendimento próximo e uma experiência de compra feita para você.</p>
          <div className="hero-actions">
            <a className="button hero-primary" href="#iphones">Ver iPhones <ArrowRight size={17} /></a>
            {hasWhatsApp() ? <a className="button hero-secondary" href={whatsapp ?? '#contato'} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com a Seven</a> : <a className="button hero-secondary" href="#contato">Falar com a Seven</a>}
          </div>
          <div className="hero-trust">
            <span><CheckCircle2 size={15} /> Atendimento personalizado</span>
            <span><CheckCircle2 size={15} /> Distrito Federal</span>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="hero-product-stage">
            <div className="hero-product-halo" aria-hidden="true" />
            <div className="hero-product-glow" aria-hidden="true" />
            <div className="hero-product-shadow" aria-hidden="true" />
            <img className="hero-phone-image" src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=95" alt="iPhone em destaque na Seven Imports" />
            <div className="hero-product-caption"><span>EM DESTAQUE</span><strong>iPhone</strong><small>Consulte disponibilidade</small></div>
          </div>
          <div className="hero-float hero-float-safe"><ShieldCheck size={18} /><div><strong>Compra segura</strong><small>Experiência transparente</small></div></div>
          <div className="hero-float hero-float-curation"><Sparkles size={16} /><div><strong>Produtos selecionados</strong><small>Curadoria Seven</small></div></div>
          <div className="hero-float hero-float-df"><span className="live-dot" /> Atendimento no DF</div>
        </div>
      </div>
      <a className="hero-scroll" href="#iphones" aria-label="Rolar para explorar"><span>SCROLL PARA EXPLORAR</span><ArrowDown size={14} /></a>
    </section>
  );
}
