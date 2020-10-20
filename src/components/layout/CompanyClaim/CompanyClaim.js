import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const phoneIcon = <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />;
const phoneNumber = '2300 - 3560 - 222';

const CompanyClaim = ({ cartCount, toggleCart, isOpen }) => {
  const openCartHandler = () => {
    toggleCart(!isOpen);
    document.body.classList.add('slide');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              {phoneIcon}
              {phoneNumber}
            </p>
          </div>
          <div className='col text-center'>
            <a href='/#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <div className={styles.cartBox}>
              <div className={styles.cartIcon} onClick={() => openCartHandler()}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>{cartCount}</div>
            </div>
            <div className={styles.phoneNumber}>
              <p>
                {phoneIcon}
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CompanyClaim.propTypes = {
  cartCount: PropTypes.number,
  toggleCart: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

CompanyClaim.defaultProps = {
  cartCount: 0,
  isOpen: false,
};

export default CompanyClaim;
