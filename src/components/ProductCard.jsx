import React from "react";
import Rating from "./Rating";
import useCardStore from "../store/useCardStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug
  },
}) => {
  const { carts, addCart } = useCardStore();
  const navigate = useNavigate();
  
  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My Cart");
  }

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail = () => {
     navigate(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedBtn} className="bg-black text-sm border border-black py-1 px-3 text-white">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className="text-sm border border-black px-3 py-1"
          >
            Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
