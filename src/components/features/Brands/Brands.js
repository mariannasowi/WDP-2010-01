import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Brands = ({ brands }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.wrapper}`}>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </div>
          <div className={styles.brandBox}>
            {brands.map(brand => (
              <div key={brand.id} className={styles.box}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
          <div className={styles.arrow}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Brands;
