export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, alcoholContent, price, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    id: id,
    pints: 124
  }
}