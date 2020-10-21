import React from 'react';
import PropTypes from 'prop-types';

const FilterByCategory = ({ numberOfProductsByCategory, activeCategory }) => {
  return (
    <div>
      {numberOfProductsByCategory.map(({ name, quantity, id }, index) => (
        <div key={index}>
          {activeCategory === id ? (
            <p>
              <b>{name}</b> - <span>{quantity}</span>
            </p>
          ) : (
            <p>
              <span>{name}</span> - <span>{quantity}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

FilterByCategory.propTypes = {
  numberOfProductsByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  activeCategory: PropTypes.string.isRequired,
};

export default FilterByCategory;
