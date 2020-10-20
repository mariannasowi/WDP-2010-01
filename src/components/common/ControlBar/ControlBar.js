import React from 'react';
import styles from "./ControlBar.module.scss"
;

const ControlBar = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sort}>
        <label htmlFor='sortBy'>Sort By</label>
        <select id='sortBy' class='custom-select'>
          <option value='1'>Price lowest first</option>
          <option value='2'>Price higher first</option>
          <option value='3'>Stars descending</option>
          <option value='4'>Stars asceding</option>
        </select>
      </div>
      <div className={styles.show}>
        <label htmlFor='show'>Show</label>
        <select id='show' class='custom-select'>
          <option value='12'>12</option>
          <option value='24'>24</option>
          <option value='36'>36</option>
          <option value='48'>48</option>
        </select>
        </div>
      <div  className={styles.checkbox}>
          <div>
            <input type="checkbox"/>
            <input type="checkbox"/>

          </div>
      </div>
    </div>
  );
};

export default ControlBar;
