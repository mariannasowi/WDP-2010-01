import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import styles from './Brands.module.scss';

class Brands extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage, manualPageChange: true });
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  render() {
    const { brands } = this.props;
    const { activePage } = this.state;

    const pagesCount = Math.ceil(brands.length);

    const swipePage = [];
    for (let page = 0; page < pagesCount; page++) {
      swipePage.push(
        <div key={page} className={styles.brandBox}>
          {brands.slice(page, page + 6).map(brand => (
            <div key={brand.id} className={styles.box}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      );
    }

    const pageDecrease = () => {
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const pageIncrease = () => {
      if (activePage === pagesCount - 1) {
        return;
      } else {
        this.handlePageChange(activePage + 1);
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.wrapper}`}>
            <div className={styles.arrow} onClick={pageDecrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>
            <div className={styles.brandBox}>
              <SwipeComponent
                activePage={this.state.activePage}
                rightAction={this.handleRightAction}
                leftAction={this.handleLeftAction}
              >
                {swipePage}
              </SwipeComponent>
            </div>
            <div className={styles.arrow} onClick={pageIncrease}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
