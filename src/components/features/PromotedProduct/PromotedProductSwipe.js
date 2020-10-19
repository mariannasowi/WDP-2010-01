import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedProduct.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class PromotedProductSwipe extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  render() {
    const { images, title, spanTitle, subTitle, button } = this.props;
    const pagesCount = Math.ceil(images.length);

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(<img src={images[page].image} alt={images[page].imageAlt} />);
    }

    return (
      <div>
        <div className={styles.carousel}>
          <div className={styles.images}>
            <div className={styles.image}>
              <SwipeComponent
                activePage={this.state.activePage}
                rightAction={this.handleRightAction}
                leftAction={this.handleLeftAction}
              >
                {swipeContent}
              </SwipeComponent>
            </div>
          </div>
          <div className={styles.description}>
            <h2>
              {title}
              <span>{` ${spanTitle}`}</span>
            </h2>
            <p>{subTitle}</p>
            <Button variant='big'>{button}</Button>
          </div>
        </div>
        <div className={styles.carouselButtonWrapper}>
          <div className='row'>
            <div className={`col ${styles.colLeft}`}>
              <span onClick={() => this.handleLeftAction()}>
                <div className={styles.carouselButton}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                </div>
              </span>
            </div>
            <div className={`col ${styles.colRight}`}>
              <span onClick={() => this.handleRightAction()}>
                <div className={styles.carouselButton}>
                  <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromotedProductSwipe.propTypes = {
  title: PropTypes.string,
  spanTitle: PropTypes.string,
  subTitle: PropTypes.string,
  button: PropTypes.string,
  images: PropTypes.array.isRequired,
};
PromotedProductSwipe.defaultProps = {
  images: [],
};

export default PromotedProductSwipe;
