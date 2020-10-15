import { connect } from 'react-redux';
import ClientFeedback from './ClientFeedback';

const getNew = ({ feedback }) => feedback.filter(item => item.newFeedback === true);

const mapStateToProps = state => ({
  feedback: getNew(state),
});

export default connect(mapStateToProps)(ClientFeedback);
