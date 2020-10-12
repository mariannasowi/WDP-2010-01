import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProduct.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PromotedProduct = ({
  firstProduct,
  title,
  subTitle,
  spanTitle,
  image,
  imageAlt,
  button,
}) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.HotDeals}>
              <div className='row'>
                <div className='col-8'>
                  <p>Hot deals</p>
                </div>
                <div className={`col-4 ${styles.dots}`}>
                  <ul>
                    <li>
                      <a href='#'> </a>
                    </li>
                    <li>
                      <a href='#'> </a>
                    </li>
                    <li>
                      <a href='#'> </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PromotedProductBox {...firstProduct} />
          </div>
          <div className={`col-8 ${styles.secondProduct}`}>
            <div className={styles.carousel}>
              <img src={image} alt={imageAlt} />
              <div className={styles.description}>
                <h2>
                  {title}
                  <span>{` ${spanTitle}`}</span>
                </h2>
                <p>{subTitle}</p>
                <Button variant='big'>{button}</Button>
              </div>
            </div>
            <div className={styles.carouselButtonWrapper}>
              <div className='row'>
                <div className={`col ${styles.colLeft}`}>
                  <a href='#'>
                    <div className={styles.carouselButton}>
                      <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                    </div>
                  </a>
                </div>
                <div className={`col ${styles.colRight}`}>
                  <a href='#'>
                    <div className={styles.carouselButton}>
                      <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PromotedProduct.propTypes = {
  firstProduct: PropTypes.object,
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default PromotedProduct;
