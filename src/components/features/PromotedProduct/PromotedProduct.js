import PropTypes from 'prop-types';
import React from 'react';

import styles from './PromotedProduct.module.scss';
import PromotedProductCarousel from './PromotedProductCarousel';
import PromotedProductSlider from './PromotedProductSlider';

const PromotedProduct = ({ hotDeal, promotedProduct }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <PromotedProductCarousel hotDeal={hotDeal} />
          </div>
          <div className='col-8'>
            <PromotedProductSlider {...promotedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

PromotedProduct.propTypes = {
  hotDeal: PropTypes.array.isRequired,
  promotedProduct: PropTypes.bool.isRequired,
};

export default PromotedProduct;
