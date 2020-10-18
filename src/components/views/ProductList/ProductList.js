import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

const ProductList = ({ category, products }) => {
  return (
    <div>
      <ul>
        <h2>{category && category.name}</h2>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
      <div className='container'>
        <div className='row'>
          {products &&
            products
              .filter(item => item.category === category.id)
              .map((product, i) => (
                <div key={i}>
                  <div className='col'>
                    <ProductBox {...product} />
                  </div>
                </div>
              ))}
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
