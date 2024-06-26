import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

// CartItem component for displaying each item in the cart
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  const removeFromCart = (id) => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex justify-between items-center mt-2 mb-2 p-2 border-b-4">
      <div className="flex items-center gap-8 p-0">
        <div className="w-[30%]">
          {/* Display product image */}
          <img src={item.image} alt="productImg" />
        </div>
        <div className="w-[100%] flex flex-col gap-y-1">
          {/* Display product title */}
          <h1 className="font-semibold text-slate-700 text-xl">{item.title}</h1>
          {/* Display product description truncated to 20 words */}
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 20).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center">
            {/* Display product price */}
            <p className="font-bold text-green-600 text-lg">${item.price}</p>
            {/* Delete button to remove item from cart */}
            <div
              className="text-red-800 bg-red-200 group rounded-full p-3 mr-3 cursor-pointer transition-transform duration-300 hover:bg-red-400"
              onClick={removeFromCart}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
