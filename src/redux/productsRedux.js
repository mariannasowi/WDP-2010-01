/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getFeatured = ({ products }) =>
  products.filter(product => product.oldPrice);

export const getTopSeller = ({ products }) =>
  products.filter(product => product.topSeller === true);

export const getSale = ({ products }) =>
  products.filter(product => product.hotDeal === true);

export const getTopRated = ({ products }) =>
  products.filter(product => product.userStars > 2);

/* action name creator */
const createActionName = name => `products/rating/${name}`;

/* action types */
export const SET_STARS = createActionName('SET_STARS');
export const SET_WISHLIST = createActionName('SET_WISHLIST');
export const SET_COMPARELIST = createActionName('SET_COMPARELIST');
export const SET_USER_STARS = createActionName('SET_USER_STARS');

/* action creator */
export const setStars = payload => ({ payload, type: SET_STARS });
export const setWishList = payload => ({ payload, type: SET_WISHLIST });
export const setCompareList = payload => ({ payload, type: SET_COMPARELIST });
export const setUserStars = payload => ({ payload, type: SET_USER_STARS });

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
    case SET_WISHLIST: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload);
      if (newState[index].wishlist) {
        newState[index].wishlist = !newState[index].wishlist;
      } else {
        newState[index].wishlist = true;
      }
      return newState;
    }
    case SET_COMPARELIST: {
      const newState = [...statePart];
      const index = newState.findIndex(product => product.id === action.payload);
      const compareList = newState.filter(product => product.compare === true);
      if (newState[index].compare) {
        newState[index].compare = false;
      } else if (compareList.length < 4) {
        newState[index].compare = true;
      } else {
        alert('You can compare only 4 products!');
      }
      return newState;
    }
    default:
      return statePart;
  }
}
