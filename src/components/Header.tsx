import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

export function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${open ? 'menu-open' : ''}`}>
      <div className="container nav">
        <button className="icon-button mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Seven Imports início">
          <span className="brand-mark">7</span>
          <span><strong>SEVEN</strong><small>IMPORTS</small></span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="#iphones" onClick={() => setOpen(false)}>iPhones</a>
          <a href="#categorias" onClick={() => setOpen(false)}>Apple</a>
          <a href="#ofertas" onClick={() => setOpen(false)}>Ofertas</a>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <Search size={16} />
            <input aria-label="Pesquisar produtos" placeholder="Buscar" onChange={(event) => onSearch(event.target.value)} />
          </label>
          <button className="icon-button" aria-label="Favoritos"><Heart size={18} /></button>
          <button className="icon-button cart-button" aria-label="Carrinho"><ShoppingBag size={18} /><span>0</span></button>
          <a className="header-cta" href="#contato">Falar conosco</a>
        </div>
      </div>
    </header>
  );
}
