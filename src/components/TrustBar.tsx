import { Headphones, LockKeyhole, MapPin, Sparkles } from 'lucide-react';

const items = [
  [LockKeyhole, 'Compra segura', 'Experiência transparente'],
  [Sparkles, 'Produtos selecionados', 'Curadoria de tecnologia'],
  [MapPin, 'Atendimento no DF', 'Suporte próximo'],
  [Headphones, 'Suporte', 'Estamos aqui para ajudar'],
] as const;

export function TrustBar() {
  return <section className="trust-bar" aria-label="Benefícios da Seven Imports"><div className="container trust-grid">{items.map(([Icon, title, text]) => <div className="trust-item" key={title}><Icon size={18} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>;
}
