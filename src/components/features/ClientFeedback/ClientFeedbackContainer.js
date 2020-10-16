import { connect } from 'react-redux';
import ClientFeedback from './ClientFeedback';

const mapStateToProps = state => ({
  feedback: state.feedback,
});

export default connect(mapStateToProps)(ClientFeedback);
