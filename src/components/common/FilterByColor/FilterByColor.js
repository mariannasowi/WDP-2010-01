import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterByColor.module.scss';

const FilterByColor = ({ colors, activeColor }) => {
  return (
    <div className={styles.wrapper}>
      <p>
        <span className={styles.title}>FILTER BY COLOR</span>
      </p>
      <div className={styles.borderLine}>
        {colors.map(({ name }, index) => (
          <div key={index}>
            {activeColor === name ? (
              <p className={styles.activeText}>
                <span
                  className={styles.colorBoxActive}
                  style={{ background: name }}
                ></span>
                <span className={styles.fontDecoration}>{name}</span>
              </p>
            ) : (
              <p className={styles.Text}>
                <span className={styles.colorBox} style={{ background: name }}></span>
                <span className={styles.fontDecoration}>{name}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

FilterByColor.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  activeColor: PropTypes.string.isRequired,
};

export default FilterByColor;
