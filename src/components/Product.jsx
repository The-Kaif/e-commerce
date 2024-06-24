// import React from 'react'
// import toast from 'react-hot-toast';
// import { useDispatch, useSelector } from 'react-redux'
// import { add, remove } from '../redux/Slices/CartSlice';

// const Product = ({post}) => {

//   const {cart} = useSelector((state)=> state);
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(add(post));
//     toast.success("Item added to Cart");
//   }

//   const removeFromCart = (id) => {
//     dispatch(remove(post.id));
//     toast.error("Item removed from Cart");
//   }

//   return (
//     <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-2xl'>
//       <div>
//         <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
//       </div>
//       <div>
//         <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
//       </div>
//       <div className='h-[180px]'>
//         <img src={post.image} alt='productImg' className='h-full w-full' />
//       </div>
//       <div className='flex justify-between items-center gap-12 mt-6 w-full'>
//         <div>
//           <p className='text-green-600 font-semibold'>${post.price}</p>
//         </div>

//         {
//           cart.some((p) => p.id === post.id) ?
//             (<button
//               className='text-[12px] p-1 px-3 font-semibold uppercase border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
//             onClick={removeFromCart}>
//               Remove Item
//             </button>) :
//             (<button
//               className='text-[12px] p-1 px-3 font-semibold uppercase border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
//             onClick={addToCart}>
//               Add to Cart
//             </button>)
//         }
//       </div>
//     </div>
//   )
// }

// export default Product

import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import Rating from "./Rating ";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="relative m-4 flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover w-full" src={post.image} alt="product image" />
        {post.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {post.discount}% OFF
          </span>
        )}
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-gray-700 font-semibold text-lg text-left overflow-hidden max-h-[1.2em] line-clamp-2">
          {post.title}
        </h5>
        <div className="mt-2 mb-5 gap-3 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              ${post.price}
            </span>
            {post.originalPrice && (
              <span className="text-sm text-slate-900 line-through">
                ${post.originalPrice}
              </span>
            )}
          </p>
          <div className="flex items-center">
            <Rating count={post.rating.rate} />
            <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {post.rating.count}
            </span>
          </div>
        </div>
        <button
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() =>
            cart.some((p) => p.id === post.id) ? removeFromCart() : addToCart()
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cart.some((p) => p.id === post.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
