import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, alcoholContent, price, id, pints } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        id: id,
        pints: pints
      }
    });

  case c.DELETE_KEG:
    let newState = { ...state };
    delete newState[id];
    return newState;

  default:
    return state;
  }
};