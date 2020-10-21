/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const numberOfProductsByCategory = ({ products, categories }) =>
  categories.map(({ id, name }) => {
    const productInCurrentCategory = products.filter(
      product => product.category === id
    );
    return { id, quantity: productInCurrentCategory.length, name };
  });
export const getActiveFilterCategory = ({ filter: { activeCategory } }) =>
  activeCategory;
export const getActiveFilterColor = ({ filter: { activeColor } }) => activeColor;
export const getFilterColors = ({ filter: { colors } }) => colors;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
