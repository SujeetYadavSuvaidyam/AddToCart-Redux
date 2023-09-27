export const Cart = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const Remove = (item) => {
    return {
        type: "REMOVE_CART",
        payload: item
    }
}



