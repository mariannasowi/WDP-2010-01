import { connect } from 'react-redux';

import PromotedProduct from './PromotedProduct';
import { getPromoted } from '../../../redux/productsRedux.js';

const mapStateToProps = state => {
  const promotedProduct = state.promotedProduct;

  return {
    ...promotedProduct,
    products: getPromoted(state),
  };
};

export default connect(mapStateToProps)(PromotedProduct);
