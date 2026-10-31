import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProductCondition } from '../types/product';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductSection({ query }: { query: string }) {
  const [condition, setCondition] = useState<'todos' | ProductCondition>('todos');
  const filtered = useMemo(() => products.filter((product) => {
    const matchesCondition = condition === 'todos' || product.condition === condition;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || `${product.name} ${product.model} ${product.storage} ${product.color}`.toLowerCase().includes(q);
    return matchesCondition && matchesQuery;
  }), [condition, query]);

  return (
    <section id="iphones" className="section products-section">
      <div className="container">
        <div className="section-heading row-heading">
          <div>
            <span className="eyebrow">SELEÇÃO SEVEN</span>
            <h2>Escolha o seu.</h2>
            <p>Modelos selecionados para você consultar disponibilidade e condições com nossa equipe.</p>
          </div>
          <a className="text-link" href="#contato">Falar com a Seven <ArrowRight size={15} /></a>
        </div>
        <div className="filter-row">
          {(['todos', 'novo', 'seminovo'] as const).map((item) => (
            <button className={condition === item ? 'active' : ''} onClick={() => setCondition(item)} key={item}>
              {item === 'todos' ? 'Todos' : item === 'novo' ? 'Novos' : 'Seminovos'}
            </button>
          ))}
        </div>
        {filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><strong>Nenhum produto encontrado.</strong><span>Tente outra busca ou consulte nossa equipe.</span></div>}
      </div>
    </section>
  );
}
