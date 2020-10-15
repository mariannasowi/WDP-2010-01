import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const PromotedProductBox = ({
  id,
  name,
  image,
  price,
  oldPrice,
  promo,
  stars,
  setCompare,
  count,
  compare,
  heart,
}) => {
  const isProductAddedToCompare =
    compare &&
    compare.products &&
    compare.products.reduce(
      (accumulator, product) => accumulator || product.id === id,
      false
    );

  const compareHandler = event => {
    event.preventDefault();
    const maxProductsToCompare = 4;
    if (isProductAddedToCompare !== true) {
      count < maxProductsToCompare
        ? setCompare({ id, image })
        : alert(`You can compare maximum of ${maxProductsToCompare} products!`);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.promoCounter}>
          <div className='row'>
            <div className={`col-3 ${styles.dots}`}>
              <h5>25</h5>
              <p>DAYS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>10</h5>
              <p>HRS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>24</h5>
              <p>MINS</p>
            </div>
            <div className={`col-3 ${styles.dots}`}>
              <h5>30</h5>
              <p>SECS</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>View more</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} className={heart ? styles.heart : ''}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button
            className={isProductAddedToCompare ? styles.productIsCompared : ''}
            variant='outline'
            onClick={compareHandler}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  heart: PropTypes.bool,
  addCompare: PropTypes.bool,
  image: PropTypes.string,
  setCompare: PropTypes.func,
  count: PropTypes.number,
  compare: PropTypes.object,
};

export default PromotedProductBox;
