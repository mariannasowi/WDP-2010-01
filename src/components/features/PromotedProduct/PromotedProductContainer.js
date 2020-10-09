import { connect } from 'react-redux';

import PromotedProduct from './PromotedProduct';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(PromotedProduct);
