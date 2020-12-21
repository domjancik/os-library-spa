import React from 'react';

import classes from './Frame.module.css';

interface Props {
    children: React.ReactElement
    header: React.ReactElement
}

function Frame({ children, header }: Props) {
  return (
    <div className={classes.Frame}>
      <header>{header}</header>
      <div className={classes.FrameInner}>
        {children}
      </div>
    </div>
  );
}

export default Frame;
