import { connect } from 'react-redux';
import Feedback from './Feedback';

const mapStateToProps = state => ({
  sales: state.sales,
});

export default connect(mapStateToProps)(Feedback);
