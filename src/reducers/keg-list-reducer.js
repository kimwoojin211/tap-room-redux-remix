export default (state = {}, action) => {
    const { name, brand, alcoholContent, price, id, pints } = action;
    switch (action.type){

    case 'ADD_KEG':
      return Object.assign({},state,{
        [id]: {
          name: name,
          brand: brand,
          alcoholContent: alcoholContent,
          price: price,
          id: id,
          pints: pints
        }
      });
    default:
      return state;
    }
};