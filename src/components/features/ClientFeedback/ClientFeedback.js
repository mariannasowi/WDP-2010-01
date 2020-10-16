import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClientFeedback.module.scss';
import Feedback from '../../common/Feedback/Feedback';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;

    const currentFeedbackProps = feedback[activePage];
    const pagesCount = Math.ceil(feedback.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col '}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedback.length ? (
              <Feedback {...currentFeedbackProps} />
            ) : (
              <div className={styles.nocoment}>There is no client feedbacks</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
