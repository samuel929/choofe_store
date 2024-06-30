import { Products } from "../../types/Products";
import { Card, Button } from "react-daisyui";
interface ProductProps {
  product: Products;
}
function Cards({ product }: ProductProps) {
  return (
    <div className='flex flex-col max-w-sm'>
      <div className='flex flex-col gap-2 p-4 bg-base-200 rounded-t-box'>
        <h1 className='font-bold text-xl'> {product.name}</h1>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </span>
      </div>

      <div className="bg-[url('https://admin.vapecrew.co.za/storage/vapecrew/uploads/ft43PGxbG7UVLq2QUTDtTyrgyfU8JGNZhcQxksFh.png')] bg-origin-content bg-cover bg-center w-full h-60"></div>

      <div className='flex justify-between bg-neutral text-neutral-content p-4 rounded-b-box'>
        <span className='font-bold text-xl'> R{product.price}</span>
        <a className='btn btn-primary btn-sm'>Add to cart</a>
      </div>
    </div>
  );
}

export default Cards;
