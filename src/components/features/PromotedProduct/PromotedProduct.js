import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProduct.module.scss';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PromotedProduct = ({ products, title, subTitle, spanTitle, images, button }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.hotDeals}>
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
            <PromotedProductBox {...products[0]} />
          </div>
          <div className={`col-8 ${styles.secondProduct}`}>
            <div className={styles.carousel}>
              <img src={images[0].image} alt={images[0].imageAlt} />
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default PromotedProduct;
