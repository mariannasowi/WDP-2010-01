import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductImages from '../../common/ProductImages/ProductImages';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductPageNavbar from './ProductPageNavbar';
import ProductPageSocialMedia from './ProductPageSocialMedia';
import ProductPageActions from './ProductPageActions';
import ProductPageOverview from './ProductPageOverwiew';
import ProductPagePrice from './ProductPagePrice';
import ProductPageHeader from './ProductPageHeader';

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
  if (error) return <PageNotFound />;
  else
    return (
      <div className={styles.root}>
        <ProductPageNavbar category={category} />
        <div className='container'>
          <div className={styles.product}>
            <div className='row'>
              <div className='col-sm-12 col-md-5'>
                <div className={styles.photo}>
                  <img src={image} alt={name} />
                </div>
                {typeof images == 'undefined' ? '' : <ProductImages images={images} />}
              </div>
              <div className='col-sm-12 col-md-7'>
                <div className='row'>
                  <div className={`col-9 ${styles.content}`}>
                    <ProductPageHeader
                      id={id}
                      name={name}
                      stars={stars}
                      isStarred={isStarred}
                    />
                  </div>
                  <div className={`col-3 ${styles.changePage}`}>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
                    </Button>
                    <Button variant='white'>
                      <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
                <div className={styles.line}></div>
                <ProductPagePrice price={price} oldPrice={oldPrice} />
                <div className={styles.line}></div>
                <ProductPageActions
                  id={id}
                  image={image}
                  setCompare={setCompare}
                  count={count}
                  compare={compare}
                  addToFavourite={addToFavourite}
                  heart={heart}
                />
                <div className={styles.line}></div>
                <ProductPageOverview
                  description={description}
                  availability={availability}
                  category={category}
                />
                <div className={styles.line}></div>
                <ProductPageSocialMedia />
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
