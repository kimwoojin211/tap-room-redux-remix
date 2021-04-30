import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: "Keggie",
    brand: "Keggles",
    alcoholContent: "96",
    price: "46290",
    id: 1,
    pints: 124
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, alcoholContent, price, id, pints } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      id: id,
      pints: pints
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        id: id,
        pints: pints
      }
    });
  });

});