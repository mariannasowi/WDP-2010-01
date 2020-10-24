import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductPageNavbar from '../../features/ProductPageNavbar/ProductPageNavbar';
import ProductPageMainPage from '../../features/ProductPageMainPage/ProductPageMainPage';

const ProductPage = ({
  product,
  category,
  error,
  count,
  compare,
  setCompare,
  addToFavourite,
}) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className={styles.root}>
        <ProductPageNavbar category={category} />
        <ProductPageMainPage
          {...product}
          count={count}
          compare={compare}
          setCompare={setCompare}
          addToFavourite={addToFavourite}
        />
      </div>
    );
};

ProductPage.propTypes = {
  category: PropTypes.string,
  product: PropTypes.object,
  setCompare: PropTypes.func,
  count: PropTypes.number,
  compare: PropTypes.object,
  addToFavourite: PropTypes.func,
};

export default ProductPage;
