import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/searchContext';

import { Link } from 'react-router-dom';

import { Container, MenuMobile } from './styles';
import { List, X, MagnifyingGlass } from '@phosphor-icons/react';
import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { Input } from '../Input';

export function Header() {
  const { signOut, isAdmin } = useAuth();
  const { getDishes } = useSearch();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [search, setSearch] = useState('');

  function toggleMobileMenu() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  function handleSearch(event) {
    if (event.key === 'Enter') {
      getDishes(search);
      setSearch('');
      event.target.value = '';
      toggleMobileMenu();
    }
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

        <div className="logo">
          <Link to="/">
            <Logo 
              size={2.1}
            />
          </Link>

          {
            isAdmin ? <span>admin</span> : null
          }
        </div>

        {
          !isAdmin && <Cart size={30} items={5} />
        }
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
              onChange={e => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
          }

          {
            isMenuMobileOpen &&
              <ul>
                {
                  isAdmin ? (
                    <li>
                      <Link to="/new">
                        Novo prato
                      </Link>
                    </li>
                  ) : null
                }
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