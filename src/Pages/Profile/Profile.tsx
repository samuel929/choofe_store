import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStore, FaBoxOpen } from "react-icons/fa";
import { Card, Button } from "react-daisyui";
import OrderItem from "../../components/OrderItems/OrderItems";
import { orders } from "../../util/data";
import { Orders } from "../../types/Products";

const UserProfile = () => {
  const [tab, setTab] = useState("info");
  return (
    <Card className='w-full max-w-md mx-auto my-10 shadow-xl bg-gray-800 rounded-lg p-6 text-white'>
      <div className='flex flex-col items-center'>
        <div className='relative w-32 h-32 mb-4'>
          <img
            src='https://via.placeholder.com/150'
            alt='Profile'
            className='rounded-full border-4 border-gray-600 w-full h-full object-cover'
          />
        </div>
        <h2 className='text-2xl font-semibold'>John Doe</h2>
        <p className='text-gray-400 mb-4'>@johndoe</p>

        <div className='flex justify-around w-full mb-4'>
          <Button
            onClick={() => setTab("info")}
            className='flex items-center space-x-2 bg-green-500 text-white w-1/3'
          >
            <FaStore />
            <span>Info</span>
          </Button>
          <Button
            onClick={() => setTab("Wish")}
            className='flex items-center space-x-2 bg-pink-500 text-white w-1/3'
          >
            <FaHeart />
            <span>Wishlist</span>
          </Button>
          <Button
            onClick={() => setTab("orders")}
            className='flex items-center space-x-2 bg-yellow-500 text-white w-1/3'
          >
            <FaShoppingCart />
            <span> Orders</span>
          </Button>
        </div>
        {tab === "info" ? (
          <div className='text-left w-full'>
            <p className='text-gray-400'>
              <strong>Bio:</strong> Passionate about fashion and photography.
              Sharing my journey one post at a time.
            </p>
            <p className='text-gray-400 mt-2'>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p className='text-gray-400 mt-2'>
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
        ) : tab === "Wish" ? (
          <div className='text-left w-full'>
            <p className='text-gray-400'>wish</p>
          </div>
        ) : tab === "orders" ? (
          <div className='w-full max-w-3xl mx-auto my-10 p-6 overflow-auto h-80'>
            <h2 className='text-3xl font-semibold text-white mb-6 flex items-center'>
              <FaBoxOpen className='mr-2' /> Past Orders
            </h2>
            {orders.map((order: Orders) => (
              <OrderItem order={order} />
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default UserProfile;
