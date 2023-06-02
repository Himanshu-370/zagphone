import React, { useState } from "react";
import { Link } from "react-router-dom";

import stars from "../assets/stars.svg";
import mute from "../assets/mute.svg";
import bag from "../assets/bag.svg";
import girl from "../assets/girl.svg";
import buy from "../assets/buy.svg";
import love from "../assets/love.svg";
import loveRed from "../assets/loveRed.svg";
import subtract from "../assets/subtract.svg";
import plus from "../assets/plus.svg";

function Item() {
  // New state variables
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("L");
  const [total, setTotal] = useState(198);
  const [wishlistActive, setWishlistActive] = useState(false);

  // function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal(total + 198);
  };

  // function to handle decrement
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - 198);
    }
  };

  // function to handle size buttons
  const handleSize = (e) => {
    setSize(e.target.value);
    console.log(e.target.value);
  };

  // function to handle wishlist button
  const handleWishlist = () => {
    setWishlistActive(!wishlistActive);
    console.log("Wishlist Active");
  };

  return (
    <React.Fragment>
      <div className="relative">
        {/* First Fold */}
        <img src={girl} className="relative inset-x-0 top-0 mx-auto" />
        <div className="absolute p-6 flex items-center justify-between inset-x-0 top-0">
          <img src={mute} alt="mute" />
          <img src={bag} alt="bag" />
        </div>

        {/* contains small dots and wishlist button */}
        <div className="flex items-center">
          <div className="absolute inset-0 flex items-end mb-12 justify-center">
            <div className="flex items-center gap-2">
              <button className="bg-white rounded-full h-1.5 w-1.5"></button>
              <button className="bg-white rounded-full h-1.5 w-1.5"></button>
              <button className="bg-white rounded-full h-1.5 w-1.5"></button>
            </div>
          </div>

          {/* Wishlist button. Click on it! */}
          <div className="absolute inset-x-0 bottom-12 flex items-center justify-end mt-6 mr-6">
            <button
              className={`bg-white rounded-full p-2 h-9 w-9 flex items-center justify-center ${
                wishlistActive ? "wishlist-active" : ""
              }`}
              onClick={handleWishlist}
            >
              <img src={wishlistActive ? loveRed : love} alt="wishlist" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Fold */}
      <div className="border absolute bg-white rounded-t-3xl -mt-8 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-col items-center justify-evenly gap-y-2">
            <div className="text-xl font-bold text-black">Roller Rabbit</div>
            <div className="text-xs font-light text-slate-500 mt-1">
              Vado Odelle Dress
            </div>

            <div className="flex items-center gap-2 mt-2">
              <img src={stars} />
              <div className="text-xs font-medium">(320 Review)</div>
            </div>
          </div>

          {/* Counts */}
          <div className="flex-col items-center">
            <div className="bg-slate-100 rounded-full py-1.5 px-5 flex items-center justify-around gap-3">
              <button onClick={handleDecrement}>
                <img src={subtract} />
              </button>
              <p className="font-lg font-bold">{count}</p>
              <button onClick={handleIncrement}>
                <img src={plus} />
              </button>
            </div>
            <div className="text-xs font-medium mt-2">Available in stock</div>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="mt-5 flex-col">
          <div className="text-lg font-bold">Size</div>
          <div className="mt-2 flex items-center justify-around text-center">
            <button
              className={`rounded-full ${
                size === "S" ? "bg-black text-white" : "bg-white border"
              } p-2 w-10 h-10`}
              onClick={handleSize}
              value="S"
            >
              S
            </button>
            <button
              className={`rounded-full ${
                size === "M" ? "bg-black text-white" : "bg-white border"
              } p-2 w-10 h-10`}
              onClick={handleSize}
              value="M"
            >
              M
            </button>
            <button
              className={`rounded-full ${
                size === "L" ? "bg-black text-white" : "bg-white border"
              } p-2 w-10 h-10`}
              onClick={handleSize}
              value="L"
            >
              L
            </button>
            <button
              className={`rounded-full ${
                size === "XL" ? "bg-black text-white" : "bg-white border"
              } p-2 w-10 h-10`}
              onClick={handleSize}
              value="XL"
            >
              XL
            </button>
            <button
              className={`rounded-full ${
                size === "XXL" ? "bg-black text-white" : "bg-white border"
              } p-2 w-10 h-10`}
              onClick={handleSize}
              value="XXL"
            >
              XXL
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 flex-col">
          <div className="text-lg font-bold">Description</div>
          <div className="mt-2 text-xs font-regular">
            <p>
              Get a little lift from these Sam Edelman sandals featuring ruched
              straps and leather lace-up ties, while a braided jute sole makes a
              fresh statement for summer.
            </p>
          </div>
        </div>

        {/* Total Price */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex-col">
            <div className="text-xs font-light">Total Price</div>
            <div className="text-lg font-bold">${total}.00</div>
          </div>

          {/* Buy Now Button */}
          <button className="bg-black rounded-full py-3 px-5 w-1/2">
            <Link to="/buy" className="flex items-center justify-center gap-3">
              <img src={buy} />
              <h3 className="text-white">Buy Now</h3>
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Item;
