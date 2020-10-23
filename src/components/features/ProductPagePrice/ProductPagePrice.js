import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPagePrice.module.scss';
import Button from '../../common/Button/Button';

const ProductPagePrice = ({ price, oldPrice }) => (
  <div className={styles.prices}>
    <div className={styles.oldPrice}>{oldPrice}</div>
    <div className={styles.price}>
      <Button noHover>$ {price}</Button>
    </div>
  </div>
);

ProductPagePrice.propTypes = {
  price: PropTypes.number,
  oldPrice: PropTypes.string,
};

export default ProductPagePrice;
