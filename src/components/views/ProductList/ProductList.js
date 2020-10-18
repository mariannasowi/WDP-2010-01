import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurniture';

const ProductList = ({ category }) => {
  return (
    <div>
      <ul>
        <h2>FURNITURE</h2>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
      <NewFurniture />
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
};

export default ProductList;
