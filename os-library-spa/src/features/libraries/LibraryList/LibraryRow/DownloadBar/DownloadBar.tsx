import React, { useEffect, useState } from 'react';

import classes from './DownloadBar.module.css';

interface Props {
    amount: number
}

const DownloadBar = ({ amount }: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(amount * 100);
    }, Math.random() * 500);
  }, [amount]);

  return (
    <div className={classes.DownloadBar}>
      <div className={classes.DownloadBar__progress} style={{ width: `${width}%` }} />
    </div>
  );
};

export default DownloadBar;
