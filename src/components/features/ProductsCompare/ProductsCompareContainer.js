import { connect } from 'react-redux';
import ProductsCompare from './ProductsCompare';
import { unsetCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  unsetCompare: value => dispatch(unsetCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
