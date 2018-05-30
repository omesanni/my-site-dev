import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = (props) => {
  const { navItems, boldenHeader, activeItem } = props;

  return (
    <header
      className={classnames('header', {
        'header--boldened': boldenHeader,
      })}
    >
      <nav className={'navbar-menu'}>
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={classnames('navbar-menu__item', {
              'navbar-menu__item--active': item.href === activeItem,
            })}
            onClick={item.handleClick || undefined}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </header>
  );
};

Header.propTypes = {
  activeItem: PropTypes.string,
  boldenHeader: PropTypes.bool,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
  })).isRequired,
};

Header.defaultProps = {
  activeItem: '',
  boldenHeader: false,
};

export default Header;
