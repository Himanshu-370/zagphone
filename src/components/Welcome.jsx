import React from "react";
import { Link } from "react-router-dom";

import menubar from "../assets/menubar.svg";
import purse from "../assets/purse.svg";
import purseimg from "../assets/purseimg.svg";
import search from "../assets/search.svg";
import searchbtn from "../assets/searchbtn.svg";
import user from "../assets/user.svg";
import shoes from "../assets/shoes.svg";
import home from "../assets/home.svg";
import cart from "../assets/cart.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.svg";

function Welcome() {
  // function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Completed");
  };

  return (
    <React.Fragment>
      <div className="p-6">
        {/*Navbar */}
        <div className="mt-7 flex items-center justify-between w-full">
          <img src={menubar} alt="menubar" />
          <button className="bg-gray-50 bg-slate-100 rounded-full p-3">
            <img src={user} alt="user" />
          </button>
        </div>

        {/*Bottom Navbar */}
        <div className="p-3 bg-white border rounded-t-3xl shadow-2xl absolute inset-x-0 -bottom-10">
          <div className="flex items-center justify-evenly">
            <button>
              <img src={home} alt="home" />
            </button>

            <button>
              <img src={cart} alt="cart" />
            </button>

            <button>
              <img src={notification} alt="notification" />
            </button>

            <button>
              <img src={profile} alt="profile" />
            </button>
          </div>
        </div>

        {/*Main Content */}
        <div className="mt-3">
          <div className="text-xl font-bold text-black">Welcome,</div>
          <div className="text-xl font-medium text-slate-500">
            Our Fashions App
          </div>
        </div>

        {/*Search Bar */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="relative w-full">
            <form onSubmit={handleSearch}>
              <img
                src={search}
                height={20}
                width={20}
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                id="search"
                className="bg-gray-50 border p-3 border-white-300 text-white-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full bg-slate-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
                placeholder="Search"
                required
              />
            </form>
          </div>

          <button type="submit" onClick={handleSearch}>
            <img src={searchbtn} alt="searchbtn" />
          </button>
        </div>

        <div className="mt-5 flex items-center z-auto">
          <img src={purseimg} alt="purseimg" />
        </div>

        {/*New Arrivals section */}
        <div className="mt-5 flex items-center justify-between">
          <div className="text-black font-bold text-lg">New Arrivals</div>
          <div className="text-slate-500 font-medium text-sm">View all</div>
        </div>

        {/*New Arrivals Items. Click on any one */}
        <div className="mt-5 flex items-center justify-between">
          <button className="flex-col items-center justify-center">
            <Link to="/item">
              <img src={purse} alt="purse" />
              <div className="text-black text-center mt-2">
                <h2 className="font-bold text-md">The Marc Jacobs</h2>
                <h4 className="font-light text-xs">Traveller Tote</h4>
                <h3 className="font-bold text-md">$195.00</h3>
              </div>
            </Link>
          </button>

          <button className="flex-col items-center justify-center">
            <Link to="/item">
              <img src={shoes} alt="shoes" />
              <div className="text-black text-center mt-2">
                <h2 className="font-bold text-md">Axel Arigato</h2>
                <h4 className="font-light text-xs">Clean 90 Triple Sneakers</h4>
                <h3 className="font-bold text-md">$245.00</h3>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
