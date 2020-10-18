/* selectors */

export const getGalleryTabs = ({ galleryTabs }) => galleryTabs;

export const getGalleryPromotedProduct = ({galleryPromotedProduct}) => galleryPromotedProduct;

export const getSalesOff = ({ products }) =>
  products.filter(product => product.oldPrice !== undefined);

export const getFeatured = ({ products }) =>
  products.filter(product => product.promo !== undefined);

export const getTopSeller = ({ products }) =>
  products.filter(product => product.topSeller === true);

export const getTopRated = ({ products }) =>
  products.filter(product => product.userStars > 2);

/* action name creator */

/* action types */

/* action creators */

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
