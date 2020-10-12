import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClientFeedback.module.scss';
import Feedback from '../../common/Feedback/Feedback';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'one',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { feedback, viewport } = this.props;
    const { activeCategory, activePage } = this.state;

    const itemsPerViewport = { desktop: 1, tablet: 1, mobile: 1 };
    const itemsPerPage = itemsPerViewport[viewport];

    const colsPerViewport = { desktop: 1, tablet: 1, mobile: 1 };
    const colsOnPage = colsPerViewport[viewport];

    const categoryFeedback = feedback.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryFeedback.length / itemsPerPage);

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
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedback
              .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
              .map(item => (
                <div key={item.id} className={`col-${colsOnPage}`}>
                  <Feedback {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  viewport: PropTypes.string.isRequired,
  children: PropTypes.node,
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
