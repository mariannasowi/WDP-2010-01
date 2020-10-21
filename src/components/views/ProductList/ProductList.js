import React from 'react';
import PropTypes from 'prop-types';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductListImages from '../ProductListImages/ProductListImagesContainer';

const ProductList = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-9'>
              <div className='row'>
                <ProductListImages />
              </div>
            </div>
            <div className='col-3'></div>
          </div>
        </div>
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
