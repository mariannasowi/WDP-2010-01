import React from 'react';
import PropTypes from 'prop-types';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductListImages from '../ProductListImages/ProductListImages';

const ProductList = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div>
        <ProductListImages />
        <div className='col-3'></div>
      </div>
    );
};

ProductList.propTypes = {
  category: PropTypes.string,
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
};

export default ProductList;
