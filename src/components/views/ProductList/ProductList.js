import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = ({ name, category }) => {
  return (
    <div>
      <ul>
        <h2>{name}</h2>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
};

export default ProductList;
