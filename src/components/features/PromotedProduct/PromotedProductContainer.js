import { connect } from 'react-redux';

import PromotedProduct from './PromotedProduct';
import { getPromoted } from '../../../redux/productsRedux.js';

const mapStateToProps = state => {
  const promotedProduct = state.promotedProduct;
  const product = getPromoted(state);

  return {
    ...promotedProduct,
    product,
  };
};

export default connect(mapStateToProps)(PromotedProduct);
