import { connect } from 'react-redux';

import PromotedProduct from './PromotedProduct';
import { getHotDeal } from '../../../redux/productsRedux.js';

const mapStateToProps = state => {
  const promotedProduct = state.promotedProduct;

  return {
    ...promotedProduct,
    hotDeal: getHotDeal(state),
  };
};

export default connect(mapStateToProps)(PromotedProduct);
