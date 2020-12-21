import React, { ReactElement } from 'react';

import classes from './HeaderTitle.module.css';

interface Props {
    text: string
}

function HeaderTitle({ text }: Props): ReactElement {
  return (
    <div className={classes.HeaderTitle}>
      {text}
    </div>
  );
}

export default HeaderTitle;
