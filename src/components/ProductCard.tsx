import { ArrowRight, Heart } from 'lucide-react';
import type { Product } from '../types/product';
import { openWhatsApp } from '../lib/whatsapp';

export function ProductCard({ product }: { product: Product }) {
  const message = `Olá! Tenho interesse no ${product.name} ${product.storage}. Gostaria de consultar disponibilidade e condições.`;
  const whatsapp = openWhatsApp(message);

  return <article className="product-card"><div className="product-media"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-badge">{product.badge}</span><button className="favorite" aria-label={`Favoritar ${product.name}`}><Heart size={17} /></button></div><div className="product-info"><span className="product-meta">{product.model} · {product.storage}</span><h3>{product.name}</h3><p>{product.color}</p><strong>Consultar disponibilidade</strong><a href={whatsapp ?? '#contato'} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noreferrer' : undefined}>Tenho interesse <ArrowRight size={15} /></a></div></article>;
}
