import React, { useEffect, useState } from 'react';
import styles from './../PromotedProductBox/PromotedProductBox.module.scss';

const PromotedProductTimeCounter = ({ endTime }) => {
  const productEndTime = new Date(endTime);

  const [currentTime, setCurrentTime] = useState(0);
  const [timeDiff, setTimeDiff] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setTimeDiff(productEndTime - currentTime);
      setSec(Math.floor(timeDiff / 1000) % 60);
      setMin(Math.floor(timeDiff / ( 60 * 1000)) % 60);
      setHours(Math.floor(timeDiff / ( 60 * 60 * 1000)) % 60);
      setDays(Math.floor(timeDiff / ( 60 * 60 * 24 *1000)));
      if (timeDiff <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);


  if (timeDiff <= 0) {
    return <p>Promotion os over</p>;
  }

  return (
    <div className='row'>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{days}</h5>
        <p>DAYS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{hours}</h5>
        <p>HRS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{min}</h5>
        <p>MINS</p>
      </div>
      <div className={`col-3 ${styles.dots}`}>
        <h5>{sec}</h5>
        <p>SECS</p>
      </div>
    </div>
  );
};

export default PromotedProductTimeCounter;
