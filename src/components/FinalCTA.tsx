import { ArrowRight, MessageCircle } from 'lucide-react';
import { hasWhatsApp, openWhatsApp } from '../lib/whatsapp';

export function FinalCTA() {
  const whatsapp = openWhatsApp('Olá! Gostaria de consultar um iPhone específico.');
  return <section id="contato" className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow">FALE COM A SEVEN</span><h2>Procurando um iPhone específico?</h2><p>Fale com nossa equipe e consulte modelos, disponibilidade e condições.</p></div><a className="button button-light final-button" href={whatsapp ?? '#inicio'} target={hasWhatsApp() ? '_blank' : undefined} rel={hasWhatsApp() ? 'noreferrer' : undefined}><MessageCircle size={18} /> Falar com a Seven <ArrowRight size={17} /></a></div></section>;
}
