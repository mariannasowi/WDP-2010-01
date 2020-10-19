import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  rightAction() {
    this.setState(state => ({
      activePage: state.activePage + 1,
    }));
  }

  leftAction() {
    this.setState(state => ({
      activePage: state.activePage - 1,
    }));
  }

  render() {
    const { brands } = this.props;
    const { activePage } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.wrapper}`}>
            <div className={styles.arrow}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>
            <SwipeComponent
              activePage={this.state.activePage}
              rightAction={this.handleRightAction}
              leftAction={this.handleLeftAction}
            >
              <div className={styles.brandBox}>
                {brands.slice(activePage, activePage + 6).map(brand => (
                  <div key={brand.id} className={styles.box}>
                    <img src={brand.image} alt={brand.name} />
                  </div>
                ))}
              </div>
            </SwipeComponent>
            <div className={styles.arrow}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
