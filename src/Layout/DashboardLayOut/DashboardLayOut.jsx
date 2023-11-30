import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useShop from "../../Hooks/useShop";

const DashboardLayOut = () => {
  const { user } = useAuth();
  const shopData = useShop(user?.email);

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-zinc-700 text-white">
        <ul className="menu p-4">
          {/* <>
                        <li>
                            <NavLink to="/dashboard/AdminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/AddItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/ManageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/ManegeBooking">
                                <FaBook></FaBook>
                                Manage Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/AllUser">
                                <FaUser></FaUser>
                                All user</NavLink>
                        </li>
                    </>
                    <>
                        <li>
                            <NavLink to="/dashboard/userHome">
                                <FaHome></FaHome>
                                User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reservation">
                                <FaCalendar></FaCalendar>
                                Reservation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cart">
                                <FaShoppingCart></FaShoppingCart>
                                My Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/review">
                                <FaAd></FaAd>
                                Add a Review</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/bookings">
                                <FaList></FaList>
                                My Bookings</NavLink>
                        </li>

                    </>


                    <div className="divider"></div>

                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li> */}
        </ul>
        {user?.role === "admin" && (
          <ul className="menu p-4">
            <NavLink to="/dashboard/all-users" className="flex flex-row gap-1 my-1">
              <FaUser></FaUser>
              All users
            </NavLink>
            <NavLink to="/dashboard/all-shops" className="flex flex-row gap-1 my-1">
              <FaList></FaList>
              All shops
            </NavLink>
          </ul>
        )}
        {user?.role === "manager" && (
          <ul className="menu p-4">
            <h3 className="text-xl font-medium text-white p-4 pt-0">
              {shopData?.shopName}
            </h3>
            <li>
              <NavLink to="/dashboard/add-products">
                <FaUtensils></FaUtensils>
                Add Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-products">
                <FaList></FaList>
                Manage Products
              </NavLink>
              {/* <NavLink to="/dashboard/all-products">
                <FaList></FaList>
                All Products
              </NavLink> */}
              <NavLink to="/dashboard/subscription">
                <FaAd></FaAd>
                Subscription
              </NavLink>
            </li>
          </ul>
        )}
        <div className="divider"></div>
        <ul className="menu p-4">
          <Link to="/cart">Cart</Link>
        </ul>
        <ul className="menu p-4">
          <Link to="/">Home</Link>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayOut;
