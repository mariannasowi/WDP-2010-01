import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from '../../common/ProductBox/ProductBox';

const ProductListImages = ({ id, products}) => {
  return (
    <div>
      {products &&
    products
      .filter(item => item.category === id)
      .map((product, i) => (
        <div key={i} className='col-4'>
          <ProductBox {...product} />
        </div>
      ))}
    </div>
  );
};

ProductListImages.propTypes = {
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

export default ProductListImages;
