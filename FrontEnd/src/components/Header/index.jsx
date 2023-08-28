import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useSearch } from "../../hooks/searchContext";
import { useMediaQuery } from "react-responsive";

import { Link, useNavigate } from "react-router-dom";

import { Container, MenuMobile } from "./styles";
import { List, X, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Logo } from "../Logo";
import { CartMobile } from "../CartMobile";
import { CartDesktop } from "../CartDesktop";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { signOut, isAdmin } = useAuth();
  const { getCartTotalItems } = useCart();
  const { searchDishes, getAllDishes } = useSearch();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [searchText, setSearchText] = useState("");

  function toggleMobileMenu() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      searchDishes(searchText);
      setSearchText("");
      event.target.value = "";

      if (window.location.pathname !== "/") navigate("/");

      if (isMenuMobileOpen) toggleMobileMenu();
    }
  }

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
  }

  useEffect(() => {
    setTotalCartItems(getCartTotalItems());
  });

  return (
    <Container>
      <div className={`header-content ${isMenuMobileOpen ? "menuOpen" : ""}`}>
        <List
          role="button"
          aria-haspopup="true"
          aria-label="Open menu"
          size={30}
          onClick={toggleMobileMenu}
        />

        <div className="logo">
          <Logo size={2.1} role="button" onClick={handleBackHome} />

          {isAdmin && <span>admin</span>}
        </div>

        <Input
          id="desktop-search"
          className="desktop-search"
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleSearch}
        />

        {!isAdmin && (
          <Link to="/favorites" className="favorites-btn">
            Meus favoritos
          </Link>
        )}

        {isAdmin && (
          <Link to="/new" className="new-dish">
            <Button title="Novo prato" />
          </Link>
        )}

        {!isAdmin &&
          (isDesktop ? (
            <CartDesktop size={30} items={totalCartItems} />
          ) : (
            <CartMobile size={30} items={totalCartItems} />
          ))}

        <Link to="/" onClick={signOut}>
          <SignOut
            size={40}
            role="button"
            aria-label="Sair"
            className="sign-out"
          />
        </Link>
      </div>

      <MenuMobile
        role="menu"
        aria-label="Open menu"
        aria-expanded={isMenuMobileOpen}
      >
        <X role="button" size={30} onClick={toggleMobileMenu} />

        <span>Menu</span>

        <nav>
          {isMenuMobileOpen && (
            <Input
              id="search"
              icon={MagnifyingGlass}
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={handleSearch}
            />
          )}

          {isMenuMobileOpen && (
            <ul>
              {isAdmin && (
                <li>
                  <Link to="/new">Novo prato</Link>
                </li>
              )}
              {!isAdmin && (
                <li>
                  <Link to="/favorites">Meus favoritos</Link>
                </li>
              )}
              <li>
                <Link to="/" onClick={signOut}>
                  Sair
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </MenuMobile>
    </Container>
  );
}
