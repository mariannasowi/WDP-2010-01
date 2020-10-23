import { connect } from 'react-redux';
import { getCategoryById, getAll } from '../../../redux/productsRedux';
import ProductListImages from './ProductListImages';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
  const category = getCategoryById(state, props.match.params.categoryId);
  return {
    ...category,
    products: getAll(state),
  };
};

export default withRouter(connect(mapStateToProps)(ProductListImages));
