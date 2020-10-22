import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ProductPageNavbar = ({ category }) => (
  <div className={styles.menu}>
    <div className='container'>
      <div>
        <div className='navbar'>
          <h2>FURNITURE</h2>
        </div>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              <a href='/'>Home</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              <a href='/#'>Furniture </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              <a href='/#'>{category} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

ProductPageNavbar.propTypes = {
  category: PropTypes.string,
};

export default ProductPageNavbar;
