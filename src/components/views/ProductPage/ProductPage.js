import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faExchangeAlt,
  faMinus,
  faPlus,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import ProductImages from '../../common/ProductImages/ProductImages';
import PageNotFound from '../../views/PageNotFound/PageNotFound';

const ProductPage = ({
  id,
  name,
  image,
  price,
  oldPrice,
  stars,
  isStarred,
  setCompare,
  count,
  compare,
  addToFavourite,
  heart,
  description,
  availability,
  category,
  images,
  error,
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

  if (error) return <PageNotFound />;
  else
    return (
      <div className={styles.root}>
        <div className={'col-auto ' + styles.menu}>
          <div className='container'>
            <ul>
              <h2>FURNITURE</h2>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/#'>Furniture </a>
              </li>
              <li>
                <a href='/#'>{category} </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <div className={styles.product}>
            <div className='row'>
              <div className='col-5'>
                <div className={styles.photo}>
                  <img src={image} alt={name} />
                </div>
                {typeof images == 'undefined' ? '' : <ProductImages images={images} />}
              </div>
              <div className='col-7'>
                <div className='row'>
                  <div className={`col-10 ${styles.content}`}>
                    <h5>{name}</h5>
                    <div className={styles.stars}>
                      <ProductRating
                        id={id}
                        stars={stars}
                        isStarred={isStarred}
                        className={styles.star}
                      />
                      <p>(0 reviews) | Add your review</p>
                    </div>
                  </div>
                  <div className={`col-2 ${styles.changePage}`}>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
                    </Button>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.prices}>
                  <div className={styles.oldPrice}>{oldPrice}</div>
                  <div className={styles.price}>
                    <Button noHover>$ {price}</Button>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.actions}>
                  <div className={styles.buttons}>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                      CART
                    </Button>
                    <Button
                      className={heart ? styles.heart : ''}
                      variant='white'
                      onClick={addToFavouriteHandler}
                    >
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button
                      className={
                        isProductAddedToCompare ? styles.productIsCompared : ''
                      }
                      variant='white'
                      onClick={compareHandler}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faEnvelope}>Post</FontAwesomeIcon>
                    </Button>
                  </div>
                  <div className={styles.buttons}>
                    <p>Quantity:</p>
                    <input type='number' value='1' step='1'></input>
                    <Button variant='quantity'>
                      <FontAwesomeIcon icon={faMinus}>Minus</FontAwesomeIcon>
                    </Button>
                    <Button variant='quantity'>
                      <FontAwesomeIcon icon={faPlus}>Plus</FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.overview}>
                  <h5>Quick overview</h5>
                  <p>{description}</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.overview}>
                  <p>
                    <span>Availability: </span>
                    {availability}
                  </p>
                  <p>
                    <span>Category: </span>
                    {category}
                  </p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.actions}>
                  <div className={styles.buttons}>
                    <Button variant='white' className={styles.buttonFacebook}>
                      <FontAwesomeIcon icon={faFacebookF} className={styles.facebook}>
                        Facebook
                      </FontAwesomeIcon>{' '}
                      Share
                    </Button>
                    <Button variant='white' className={styles.buttonGoogle}>
                      <FontAwesomeIcon icon={faGooglePlusG} className={styles.google}>
                        Google+
                      </FontAwesomeIcon>
                      Google+
                    </Button>
                    <Button variant='white' className={styles.buttonPinterest}>
                      <FontAwesomeIcon icon={faPinterestP} className={styles.pinterest}>
                        Pinterest
                      </FontAwesomeIcon>
                      Pinterest
                    </Button>
                    <Button variant='white' className={styles.buttonTwitter}>
                      <FontAwesomeIcon icon={faTwitter} className={styles.twitter}>
                        Twitter
                      </FontAwesomeIcon>
                      Tweet
                    </Button>
                    <Button variant='white' className={styles.buttonLinkedin}>
                      <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkedin}>
                        Linkedin
                      </FontAwesomeIcon>
                      Linkedin
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

ProductPage.propTypes = {
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
  description: PropTypes.string,
  availability: PropTypes.string,
  category: PropTypes.string,
  images: PropTypes.array,
};

export default ProductPage;
