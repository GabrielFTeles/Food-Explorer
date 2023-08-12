import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Container, MenuMobile } from './styles';
import { List, X, MagnifyingGlass } from '@phosphor-icons/react';
import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { Input } from '../Input';

export function Header() {
  const { signOut } = useAuth();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
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

        <Link to="/">
          <Logo 
            size={2.1}
          />
        </Link>

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
                  <Link to="/" onClick={signOut}>
                    Sair
                  </Link>
                </li>
              </ul>
          }
        </nav>
      </MenuMobile>
    </Container>
  );
}