import React from 'react';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import ProductListImages from '../../features/ProductListImages/ProductListImagesContainer';
import ControlBar from '../../common/ControlBar/ControlBar';
import styles from './ProductList.module.scss';
import FilterByCategory from '../../common/FilterByCategory/FilterByCategoryContainer';

const ProductList = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className='container'>
        <div className='row'>
          <div className={styles.topControlbar}>
            <h2>Furniture</h2>
            <ControlBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>
            <ProductListImages />
          </div>
          <div className='col-3'>
            <FilterByCategory />
          </div>
        </div>
      </div>
    );
};

export default ProductList;
