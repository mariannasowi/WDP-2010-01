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

  getBrandsCountFromMode(mode) {
    switch (mode) {
      case 'laptop':
        return 4;
      case 'tablet':
        return 3;
      case 'mobile':
        return 2;
      default:
        return 6;
    }
  }

  render() {
    const { brands, mode } = this.props;

    const brandsNumberOnSlide = this.getBrandsCountFromMode(mode);
    const pagesCount = Math.ceil(brands.length / brandsNumberOnSlide);

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        <div className={'row' + ' ' + styles.brandsElement}>
          {brands
            .slice(i * brandsNumberOnSlide, (i + 1) * brandsNumberOnSlide)
            .map(brand => (
              <div key={brand.id} className={'col-6 col-sm-3 col-xl-2'}>
                <Brands {...brand} />
              </div>
            ))}
        </div>
      );
    }

    const renderPages = () => {
      return pages;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <SwipeComponent
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {renderPages}
          </SwipeComponent>
          <div className={`row ${styles.wrapper}`}>
            <div className={styles.arrow}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>
            <div className={styles.brandBox}>
              {brands.map(brand => (
                <div key={brand.id} className={styles.box}>
                  <img src={brand.image} alt={brand.name} />
                </div>
              ))}
            </div>
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
  mode: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
