import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getProductById } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredProducts = state.products.filter(product => product.id === id);
  const productParams = filteredProducts[0] || {};

  return {
    ...productParams,
    columns: getProductById(state, id),
  };
};

export default connect(mapStateToProps)(ProductPage);
