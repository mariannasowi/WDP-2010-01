import { connect } from 'react-redux';
import CompanyClaim from './CompanyClaim';
import { toggleCart, getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartCount: getCount(state),
  isOpen: state.cart.isOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: value => dispatch(toggleCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyClaim);
