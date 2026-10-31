import { ArrowRight, CheckCircle2, Heart, MessageCircle, ShieldCheck } from 'lucide-react';
import { hasWhatsApp, openWhatsApp } from '../lib/whatsapp';

export function Hero() {
  const whatsapp = openWhatsApp('Olá! Quero consultar os iPhones disponíveis na Seven Imports.');

  return (
    <section id="inicio" className="hero-section">
      <style>{`.hero-product{width:min(390px,78%);position:relative;z-index:3;background:rgba(255,255,255,.76);border:1px solid rgba(20,25,32,.09);border-radius:30px;padding:12px;box-shadow:0 35px 90px rgba(8,13,20,.18);backdrop-filter:blur(18px);transform:rotate(3deg);transition:transform .35s,box-shadow .35s}.hero-product:hover{transform:rotate(0) translateY(-8px);box-shadow:0 45px 110px rgba(8,13,20,.23)}.hero-product-media{height:470px;border-radius:22px;background:linear-gradient(145deg,#eef1f5,#d9dee5);overflow:hidden;position:relative;display:grid;place-items:center}.hero-product-media img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transform:scale(1.03)}.hero-product-badge{position:absolute;top:16px;left:16px;background:#080a0e;color:#fff;border-radius:999px;padding:7px 10px;font-size:8px;font-weight:700;letter-spacing:.14em}.hero-favorite{position:absolute;top:14px;right:14px;border:0;background:rgba(255,255,255,.9);width:38px;height:38px;border-radius:50%;display:grid;place-items:center;color:#1b1f26}.hero-product-info{display:flex;align-items:center;justify-content:space-between;padding:17px 7px 10px}.hero-product-info span,.hero-product-info small{display:block}.hero-product-info span{font:600 18px 'Space Grotesk'}.hero-product-info small{font-size:10px;color:#7b838e;margin-top:4px}.hero-product-info svg{color:#326dff}.hero-product-link{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #e2e5e9;padding:13px 7px 5px;font-size:10px;font-weight:700}.hero-product-link svg{transition:transform .2s}.hero-product-link:hover svg{transform:translateX(4px)}@media(max-width:780px){.hero-product{width:min(340px,82%)}.hero-product-media{height:390px}}`}</style>
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
