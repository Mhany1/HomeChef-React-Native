import React, { createContext, useState } from "react";
import { getProduct} from "./src/services/ProductsService";

export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      }
      return []
      // else {
      //     return prevItems.map((item) => {
      //       if(item.id == id) {
      //         item.qty++;
      //         item.totalPrice += product.price;
      //       }
      //       return item;
      //     });
      // }
     });
  }
  function increaseItem(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id == id) {
          item.qty++;
          item.totalPrice += product.price;
        }
        return item;
      });
    });
  }
  function decreaseItem(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id == id) {
          if (item.qty > 1) {
            item.qty--;
            item.totalPrice -= product.price;
          }
        }
        return item;
      });
    });
  }

  function deleteItem(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      let obj = prevItems.find((item) => item.id == id);
      let index = prevItems.indexOf(obj);
    return  prevItems.splice(index, 1);
    });
    // return items;
  }

  function getItemsCount() {
    return items?.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items?.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice,increaseItem,decreaseItem,deleteItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
