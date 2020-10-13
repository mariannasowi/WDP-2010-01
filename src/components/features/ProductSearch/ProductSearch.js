import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.list}>
        <li className={styles.listCategory}>
          <span value=''>Select a category</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>HOME</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>FURNITURE</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>CHAIR</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>TABLE</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>SOFA</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>BEDROOM</span>
        </li>
        <li className={styles.activeList}>
          <span value=''>BLOG</span>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
