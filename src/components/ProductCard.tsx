// ProductCard.tsx
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useCart } from "./CartContext";

interface PropsType {
  id: number; // Unique identifier for the product
  img: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<PropsType> = ({ id, img, name, price }) => {
  const [cart, setCart] = useState<number>(0);
  const { addToCart, removeFromCart, count: cartCount } = useCart();

  const [count, setCount] = useState<number>(cartCount);

  React.useEffect(() => {
    setCount(cartCount);
  }, [cartCount]);

  const handleAddToCart = () => {
    setCart(prevCart => prevCart + 1);
    addToCart({ id, name, price });
  };

  const handleRemoveFromCart = () => {
    if (cart > 0) {
      setCart(cart - 1);
      removeFromCart(id);
    }
  };

  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-2 text-20px">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">${price.toFixed(2)}</h3>
        <div className="flex gap-2 mt-4">
          {cart > 0 ? (
            <>
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none"
              >
                Remove from Cart
              </button>
              <span className="text-gray-600">
                {count} item{count !== 1 ? "s" : ""} in cart
              </span>
            </>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-dark focus:outline-none"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
