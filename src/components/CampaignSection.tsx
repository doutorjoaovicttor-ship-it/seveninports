import { ArrowRight } from 'lucide-react';

export function CampaignSection() {
  return <section id="ofertas" className="campaign"><div className="container campaign-grid"><div><span className="eyebrow">SEVEN EXPERIENCE</span><h2>O próximo nível<br />está aqui.</h2><p>Escolha tecnologia que acompanha o seu ritmo.</p><a className="button button-light" href="#iphones">Explorar iPhones <ArrowRight size={17} /></a></div><div className="campaign-device"><div className="mini-device"><div className="mini-camera" /></div><span>PRECISION · DESIGN · TECHNOLOGY</span></div></div></section>;
}
