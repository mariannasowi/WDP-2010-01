/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getAllFavourite = ({ heart }) => heart;

export const getCountFavourite = ({ heart }) => heart.products.length;

/* action name creator */
const createActionName = name => `products/heart/${name}`;

/* action types */
export const SET_FAVOURITE = createActionName('SET_FAVOURITE');

/* action creator */
export const addToFavourite = payload => ({ payload, type: SET_FAVOURITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    // case SET_FAVOURITE:
    //   return {
    //     ...statePart,
    //     products: [...statePart.products, action.payload],
    //   };
    default:
      return statePart;
  }
}
