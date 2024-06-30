import React from "react";
import { Badge, Card } from "react-daisyui";
import { Items, Orders } from "../../types/Products";

interface IProps {
  order: Orders;
}
const OrderItem = ({ order }: IProps) => {
  return (
    <Card className='w-full bg-gray-800 text-white mb-4 rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-xl font-semibold'>Order #{order.id}</h3>
          <p className='text-gray-400'>Date: {order.date}</p>
        </div>
        <Badge color='primary' className='p-2 bg-blue-500'>
          Delivered
        </Badge>
      </div>
      <div className='mt-4'>
        {order.items.map((item: Items, index: number) => (
          <div key={index} className='flex justify-between mb-2'>
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-4'>
        <span className='text-lg font-semibold'>Total</span>
        <span className='text-lg font-semibold'>{order.total}</span>
      </div>
    </Card>
  );
};

export default OrderItem;
