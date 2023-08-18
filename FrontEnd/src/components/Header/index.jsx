import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/searchContext';

import { Link, useNavigate } from 'react-router-dom';

import { Container, MenuMobile } from './styles';
import { List, X, MagnifyingGlass, SignOut } from '@phosphor-icons/react';
import { Logo } from '../Logo';
import { CartMobile } from '../CartMobile';
import { CartDesktop } from '../CartDesktop';
import { Input } from '../Input';

export function Header() {
  const navigate = useNavigate();
  const { signOut, isAdmin } = useAuth();
  const { searchDishes, getAllDishes } = useSearch();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [search, setSearch] = useState('');

  function toggleMobileMenu() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  function handleSearch(event) {
    if (event.key === 'Enter') {
      searchDishes(search);
      setSearch('');
      event.target.value = '';

      if (window.location.pathname !== '/') navigate('/');

      if (isMenuMobileOpen) toggleMobileMenu();
    }
  }

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
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
          <Logo 
            onClick={handleBackHome}
            size={2.1}
          />

          {
            isAdmin ? <span>admin</span> : null
          }
        </div>

        <Input 
          id="desktop-search"
          className="desktop-search"
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={e => setSearch(e.target.value)}
          onKeyUp={handleSearch}
        />

        {
          !isAdmin && <CartMobile size={30} items={5} className="cart-mobile" />
        }

        {
          !isAdmin && <CartDesktop size={30} items={5} className="cart-desktop" />
        }

        <SignOut size={60} role="button" aria-label="Sair" className="sign-out" />
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