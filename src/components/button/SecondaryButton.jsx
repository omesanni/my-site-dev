import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonBase from './ButtonBase';

/**
 * Secondary button.
 * @param {Object} props
 * @return {Object}
 */
const SecondaryButton = props => <ButtonBase {...props} className={classnames('btn--secondary', props.className)} />;

SecondaryButton.propTypes = {
  className: PropTypes.string,
};

SecondaryButton.defaultProps = {
  className: '',
};

export default SecondaryButton;
