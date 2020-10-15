import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ProductBox = ({
  id,
  name,
  image,
  price,
  oldPrice,
  promo,
  stars,
  isStarred,
  setCompare,
  count,
  compare,
  addToFavourite,
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

  const addToFavouriteHandler = event => {
    event.preventDefault();
    addToFavourite(id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small' className={styles.button}>
            Quick View
          </Button>
          <Button variant='small' className={styles.button}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <ProductRating id={id} stars={stars} isStarred={isStarred} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={heart ? styles.heart : ''}
            variant='outline'
            onClick={addToFavouriteHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
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

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isStarred: PropTypes.bool,
  heart: PropTypes.bool,
  image: PropTypes.string,
  setCompare: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  compare: PropTypes.object.isRequired,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
};

export default ProductBox;
