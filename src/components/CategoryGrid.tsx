import { ArrowUpRight } from 'lucide-react';

const categories = [
  { title: 'iPhone', text: 'Seu próximo smartphone.', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=90', href: '#iphones' },
  { title: 'Apple', text: 'Tecnologia para todos os momentos.', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=90', href: '#iphones' },
  { title: 'Acessórios', text: 'Complete sua experiência.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=90', href: '#contato' },
  { title: 'Ofertas', text: 'Oportunidades selecionadas.', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=90', href: '#ofertas' },
];

export function CategoryGrid() {
  return <section id="categorias" className="section category-section"><div className="container"><div className="section-heading"><span className="eyebrow">EXPLORE</span><h2>Encontre o que procura.</h2><p>Uma seleção de tecnologia com curadoria Seven.</p></div><div className="category-grid">{categories.map((category) => <a className="category-card" href={category.href} key={category.title}><img src={category.image} alt="" /><div className="category-overlay" /><div className="category-content"><span>{category.title}</span><small>{category.text}</small><ArrowUpRight size={20} /></div></a>)}</div></div></section>;
}
