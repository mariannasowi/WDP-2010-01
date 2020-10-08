import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ fade: true });
    setTimeout(
      () => this.setState({ activePage: newPage, fade: false, manualPageChange: true }),
      100
    );
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: true });
    setTimeout(
      () => this.setState({ activeCategory: newCategory, fade: false, activePage: 0 }),
      100
    );
  }

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

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

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

    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div className='row'>
          {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
            <div key={item.id} className='col-3'>
              <ProductBox {...item} />
            </div>
          ))}
        </div>
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
              <div className={'col-12 col-sm ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='/#'
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-12 col-lg-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeComponent
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {swipeContent}
          </SwipeComponent>
        </div>
        <ProductsCompare />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
