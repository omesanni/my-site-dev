import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Button base component.
 * @param {Object} props
 * @return {Object}
 */
const ButtonBase = (props) => {
  function handleClick(e) {
    e.preventDefault();
    return props.onClick(e);
  }

  const customProps = {
    className: classnames('btn', props.className, {
      'w-100': props.full,
      'is-working': props.isWorking,
    }),
    disabled: props.disabled,
    title: props.title,
  };

  if (props.href) {
    return (
      <a
        {...customProps}
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button {...customProps} onClick={handleClick}>
      {props.children}
    </button>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  href: PropTypes.string,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

ButtonBase.defaultProps = {
  className: '',
  disabled: false,
  full: false,
  href: undefined,
  isWorking: false,
  onClick: undefined,
  title: '',
};

export default ButtonBase;
