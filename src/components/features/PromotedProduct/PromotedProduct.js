import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedProduct.module.scss';
import PromotedProductSlider from './PromotedProductSlider';
import PromotedProductSwipe from './PromotedProductSwipe';
import PromotedProductCarousel from './PromotedProductCarousel';

const PromotedProduct = ({ hotDeal, promotedProduct }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <PromotedProductCarousel hotDeal={hotDeal} />
          </div>
          <div className={`col-md-12 col-lg-8 ${styles.imagesLarge}`}>
            <PromotedProductSlider {...promotedProduct} />
          </div>
          <div className={`col-md-12 col-lg-8 ${styles.imagesMobile}`}>
            <PromotedProductSwipe {...promotedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

PromotedProduct.propTypes = {
  hotDeal: PropTypes.array.isRequired,
  promotedProduct: PropTypes.object.isRequired,
};

export default PromotedProduct;
