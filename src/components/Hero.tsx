import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { hasWhatsApp, openWhatsApp } from '../lib/whatsapp';

export function Hero() {
  const whatsapp = openWhatsApp();

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-orb" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">SEVEN IMPORTS · DISTRITO FEDERAL</span>
          <h1>Seu próximo <em>iPhone</em> está aqui.</h1>
          <p className="hero-lead">Tecnologia, procedência e atendimento de confiança para você escolher seu próximo aparelho com tranquilidade.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#iphones">Ver iPhones <ArrowRight size={17} /></a>
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
          <div className="device">
            <div className="device-camera"><i /><i /><i /></div>
            <div className="device-screen"><Sparkles size={18} /><strong>SEVEN</strong><span>YOUR NEXT IPHONE</span></div>
          </div>
          <div className="floating-note floating-note-top"><ShieldCheck size={18} /><div><strong>Compra segura</strong><small>Transparência em cada etapa</small></div></div>
          <div className="floating-note floating-note-bottom"><span className="live-dot" /> Atendimento personalizado <b>DF</b></div>
        </div>
      </div>
    </section>
  );
}
