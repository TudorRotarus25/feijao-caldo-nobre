/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const onBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const onMenuItemClick = (event) => {
    event.preventDefault();
    setIsBurgerMenuOpen(false);

    const url = new URL(event.target.href);
    const element = document.querySelector(url.hash);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  const menuItems = (
    <ul className={classes.menu}>
      <li className={classes.menuItem}>
        <a
          className={classes.link}
          href="#products"
          onClick={onMenuItemClick}
        >
          Produtos
        </a>
      </li>
      <li className={classes.menuItem}>
        <a
          className={classes.link}
          href="#about"
          onClick={onMenuItemClick}
        >
          Sobre Nós
        </a>
      </li>
      <li className={classes.menuItem}>
        <a
          className={classes.link}
          href="#our-space"
          onClick={onMenuItemClick}
        >
          Nosso Espaço
        </a>
      </li>
      <li className={classes.menuItem}>
        <a
          className={classes.link}
          href="#contact"
          onClick={onMenuItemClick}
        >
          Fale Conosco
        </a>
      </li>
    </ul>
  );

  return (
    <header
      className={clsx({
        [classes.root]: true,
        [classes.scrolled]: isScrolled,
      })}
    >
      <button type="button" className={classes.burgerMenuButton} onClick={onBurgerMenuToggle}>
        <FontAwesomeIcon
          icon={faBars}
        />
      </button>
      {isBurgerMenuOpen && (
        <div className={classes.burgerMenu}>
          <>
            <button type="button" className={classes.burgerMenuButton} onClick={onBurgerMenuToggle}>
              <FontAwesomeIcon
                icon={faTimes}
              />
            </button>
            {menuItems}
          </>
        </div>
      )}
      <div className={classes.desktopMenu}>
        {menuItems}
      </div>
    </header>
  );
};

export default Header;
