import { useState } from 'react';

import { Container, MenuMobile } from './styles';

import { List, X, MagnifyingGlass } from '@phosphor-icons/react';

import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { Input } from '../Input';
import { Footer } from '../Footer';

export function Header() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
    document.body.dataset.openMenu = String(!isMenuMobileOpen);
  }

  return (
    <Container>
      <div 
        className={`header-content ${isMenuMobileOpen ? 'menuOpen' : ''}`}
      >
        <List 
          role="button"
          aria-haspopup="true"
          size={24}
          onClick={toggleMobileMenu}
        />

        <Logo 
          size={2.1}
        />

        <Cart 
          size={30}
          items={5}
        />
      </div>

      <MenuMobile 
        role="menu"
        aria-expanded={isMenuMobileOpen}
      >
        <X 
          role="button"
          size={22} 
          onClick={toggleMobileMenu}
        />

        <span>Menu</span>

        <nav>
          {
            isMenuMobileOpen && 
            <Input 
              id="search"
              icon={MagnifyingGlass}
              placeholder="Busque por pratos ou ingredientes"
            />
          }

          {
            isMenuMobileOpen &&
              <ul>
                <li>
                  <a href="#">
                    Novo prato
                  </a>
                </li>
                <li>
                  <a href="#">
                    Sair
                  </a>
                </li>
              </ul>
          }
        </nav>
      </MenuMobile>
    </Container>
  );
}