const ini = {
  cart: []
}

const Reducer = (state = ini, action) => {
  // console.log(state)
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]

      }
    case 'REMOVE_CART':
      const remove = state.cart.filter(e => e.id !== action.payload)
      return {
        ...state,
        cart: remove
      }

    default: return state;
  }

}
export default Reducer;