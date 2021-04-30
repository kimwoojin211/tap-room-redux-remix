import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, alcoholContent, price, id, pints } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    id: id,
    pints: pints
  };
};