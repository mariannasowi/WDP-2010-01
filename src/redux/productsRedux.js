/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getAllFavourite = ({ heart }) => heart;

export const getCountFavourite = ({ heart }) => heart.products.length;

/* action name creator */
const createActionNameFav = name => `products/heart/${name}`;

/* action types */
export const SET_FAVOURITE = createActionNameFav('SET_FAVOURITE');

/* action creator */
export const addToFavourite = payload => ({ payload, type: SET_FAVOURITE });

/*SECTION STARS*/

/* action name creator */
const createActionName = name => `products/rating/${name}`;

/* action types */
export const SET_STARS = createActionName('SET_STARS');

/* action creator */
export const setStars = payload => ({ payload, type: SET_STARS });

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
        if (product.id === action.payload.id) {
          product.heart = true;
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
