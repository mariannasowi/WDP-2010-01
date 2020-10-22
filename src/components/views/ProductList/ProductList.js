import React from 'react';
import PropTypes from 'prop-types';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductListImages from '../../features/ProductListImages/ProductListImagesContainer';

const ProductList = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <ProductListImages />
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    );
};

export default ProductList;
