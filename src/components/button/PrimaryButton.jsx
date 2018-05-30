import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonBase from './ButtonBase';

/**
 * Primary Button
 * @param {Object} props
 * @return {Object}
 */
const PrimaryButton = props => <ButtonBase {...props} className={classnames('btn--primary', props.className)} />;

PrimaryButton.propTypes = {
  className: PropTypes.string,
};

PrimaryButton.defaultProps = {
  className: '',
};

export default PrimaryButton;
