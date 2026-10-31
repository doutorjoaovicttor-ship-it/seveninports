import { Headphones, ShieldCheck, Sparkles, Store } from 'lucide-react';

const items = [
  [ShieldCheck, '01', 'Confiança', 'Transparência em cada etapa.'],
  [Sparkles, '02', 'Curadoria', 'Produtos selecionados com atenção.'],
  [Headphones, '03', 'Atendimento', 'Suporte próximo e personalizado.'],
  [Store, '04', 'Experiência', 'Uma experiência digital moderna.'],
] as const;

export function WhySeven() {
  return <section className="section why-section"><div className="container"><div className="section-heading"><span className="eyebrow">POR QUE CONFIAR</span><h2>Por que Seven?</h2><p>Uma experiência pensada para você.</p></div><div className="why-grid">{items.map(([Icon, number, title, text]) => <article key={number}><span>{number}</span><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
