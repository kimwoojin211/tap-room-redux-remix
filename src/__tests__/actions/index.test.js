import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: "Keggie", brand: "Keggles", alcoholContent: "96", price: "46290", id: 1, ints: 124 })).toEqual({
      type: 'ADD_KEG',
      name: "Keggie",
      brand: "Keggles",
      alcoholContent: "96",
      price: "46290",
      id: 1,
      pints: 124
    });
  });

});