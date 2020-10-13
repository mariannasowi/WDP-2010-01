import { connect } from 'react-redux';
import Feedback from './Feedback';

const mapStateToProps = state => ({
  feedback: state.feedback,
});

export default connect(mapStateToProps)(Feedback);
