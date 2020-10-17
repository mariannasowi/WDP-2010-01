/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getHotDeal = ({ products }) =>
  products.filter(item => item.hotDeal === true);

/* action name creator */
const createActionName = name => `products/${name}`;

/* action types */
export const SET_STARS = createActionName('SET_STARS');
export const SET_FAVOURITE = createActionName('SET_FAVOURITE');

/* action creator */
export const setStars = payload => ({ payload, type: SET_STARS });
export const addToFavourite = payload => ({ payload, type: SET_FAVOURITE });

export const getProductById = ({ products }, productId) => {
  const filtered = products.filter(product => product.id === productId);
  return filtered.length ? filtered[0] : { error: true };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_STARS: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.stars = action.payload.i;
          product.isStarred = true;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case SET_FAVOURITE: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          product.heart = !product.heart;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    default:
      return statePart;
  }
}
