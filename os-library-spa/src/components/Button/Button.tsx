import React, { ReactElement } from 'react';
import classes from './Button.module.css';

/* eslint-disable react/jsx-props-no-spreading */
function Button(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
): ReactElement {
  const { className = '', disabled, ...restProps } = props;
  return (
    <button type="button" disabled={disabled} className={`${classes.Button} ${disabled ? classes.ButtonDisabled : classes.ButtonEnabled} ${className}`} {...restProps} />
  );
}

export default Button;
