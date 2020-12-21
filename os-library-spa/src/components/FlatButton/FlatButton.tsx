import React, { ReactElement } from 'react';
import classes from './FlatButton.module.css';

interface Props
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
  active?: boolean
}

/* eslint-disable react/jsx-props-no-spreading */
function FlatButton(
  props: Props,
): ReactElement {
  const {
    className = '',
    disabled,
    active,
    ...restProps
  } = props;

  const classNames = [
    classes.FlatButton,
    disabled ? classes.FlatButtonDisabled : classes.FlatButtonEnabled,
    className,
  ];
  if (active) classNames.push(classes.FlatButtonActive);

  return (
    <button type="button" disabled={disabled} className={classNames.join(' ')} {...restProps} />
  );
}

FlatButton.defaultProps = {
  active: false,
};

export default FlatButton;
