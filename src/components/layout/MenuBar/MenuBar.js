import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Link } from 'react-router-dom';

const MenuBar = ({ id, children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <Link id={id} exact to={'/shop/' + id} className={styles.active}>
                Furniture
              </Link>
            </li>
            <li>
              <a href='/#'>Chair</a>
            </li>
            <li>
              <a href='/#'>Table</a>
            </li>
            <li>
              <a href='/#'>Sofa</a>
            </li>
            <li>
              <a href='/#'>Bedroom</a>
            </li>
            <li>
              <a href='/#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

export default MenuBar;
