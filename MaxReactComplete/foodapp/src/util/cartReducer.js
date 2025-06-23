//Reducer with a Few Minor Improvements from instructors code

function findItem(items, id) {
  const index = items.findIndex((item) => item.id === id);

  if (index > -1) {
    return [index, items[index]];
  }

  return [-1, null];
}

//Adjustment is a positive or nevative number indicating the change in quantity.
//i.e. 1 for add one item and -1 for remove one item
function updateItemQuantity(item, adjustment) {
  return { ...item, quantity: item.quantity + adjustment };
}

//Update the total quantity and total price
function updateTotal(items) {
  let quantity = 0;
  let price = 0;

  if (items.length > 0) {
    quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    price = items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    );
  }

  return { quantity, price };
}

export function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const [existingCartItemIndex, existingItem] = findItem(
      state.items,
      action.item.id
    );
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const updatedItem = updateItemQuantity(existingItem, 1);
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    const updatedTotal = updateTotal(updatedItems);
    return { ...state, items: updatedItems, total: updatedTotal };
  }

  if (action.type === 'REMOVE_ITEM') {
    const [existingCartItemIndex, existingItem] = findItem(
      state.items,
      action.id
    );

    if (existingCartItemIndex > -1) {
      const updatedItems = [...state.items];

      if (existingItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = updateItemQuantity(existingItem, -1);
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      const updatedTotal = updateTotal(updatedItems);
      return { ...state, items: updatedItems, total: updatedTotal };
    } //If item is found, do nothing and return previous state
  }

  return state;
}
