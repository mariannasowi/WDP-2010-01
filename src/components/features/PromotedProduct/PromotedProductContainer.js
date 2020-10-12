import { connect } from 'react-redux';

import PromotedProduct from './PromotedProduct';

const mapStateToProps = state => {
  const firstProduct = state.promotedProducts.firstProduct;
  const secondProduct = state.promotedProducts.secondProduct;

  return {
    firstProduct,
    ...secondProduct,
  };
};

export default connect(mapStateToProps)(PromotedProduct);
