import React from 'react';
import PropTypes from 'prop-types';

const FilterByColor = ({ colors, activeColor }) => {
  return (
    <div>
      {colors.map(({ name }, index) => (
        <div key={index}>
          {activeColor === name ? (
            <p>
              <b>{name}</b>
            </p>
          ) : (
            <p>
              <span>{name}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

FilterByColor.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  activeColor: PropTypes.string.isRequired,
};

export default FilterByColor;
