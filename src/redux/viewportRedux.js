/* selectors */
export const getViewport = ({ viewport }) => viewport;

/* action name creator */
const createActionName = name => `viewports/${name}`;

/* action types */
export const SET_VIEWPORT = createActionName('SET_VIEWPORT');

/* action creator */
export const setViewport = payload => ({ payload, type: SET_VIEWPORT });

/* reducer */
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SET_VIEWPORT:
      return action.payload;

    default:
      return statePart;
  }
}
