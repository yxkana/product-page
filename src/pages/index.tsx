import Image from "next/image";
import { Plus, Minus, ShoppingCart } from "react-feather";
import { ProductImages } from "~/components/product-images";
import { DrawerCom } from "~/components/drawer";

import { Product, useCartStore } from "~/hooks/cart-hook";
import { useState } from "react";

export default function Home() {
  const [productQuantity, setProductQuantity] = useState(0);

  const ProductModel = { name: "Fall Limited Edition Sneakers", price: 125 };

  const addToCart = useCartStore((state) => state.increase);

  return (
    <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:items-center tablet:justify-evenly">
      <ProductImages></ProductImages>
      <div className="flex flex-col gap-6 p-6 md:mx-20 md:justify-center">
        {/* Product Info */}
        <div className="flex flex-col justify-start gap-4">
          <p className="text-sm font-bold tracking-widest text-primary_orange md:text-lg">
            SNEAKER COMPANY
          </p>
          <p className="text-3xl font-bold md:text-6xl">
            Fall Limited Edition Sneakers
          </p>
          <p className="font-medium opacity-60 md:text-lg">
            These low-profile sneakers are you perfect casual wear comapnion.
            Featurning a durable rubber outer sole, they`ll withstand everything
            the weather can offer.
          </p>
        </div>
        {/* Price Info */}
        <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
          <div className="flex gap-4">
            <p className="text-3xl font-bold">$125.00</p>
            <p className=" my-auto h-1/2 rounded-md bg-secondary_orange px-2 py-1 font-bold  leading-tight text-primary_orange">
              50%
            </p>
          </div>
          <p className="font-bold text-greishBlue line-through ">$250.00</p>
        </div>
        {/* ADD/REMOVE product */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-center">
          <div className="flex justify-between rounded-lg bg-greishLightBlue px-6 py-3 md:w-[50%] md:py-5">
            <button
              onClick={() => {
                setProductQuantity((prev) => {
                  if (productQuantity !== 0) {
                    return (prev = prev - 1);
                  } else return prev;
                });
              }}
            >
              <Minus
                className="text-primary_orange"
                size={20}
                strokeWidth={4}
              ></Minus>
            </button>
            <p className="font-bold">{productQuantity}</p>
            <button
              onClick={() => {
                setProductQuantity((prev) => {
                  return (prev = prev + 1);
                });
              }}
            >
              <Plus
                className="text-primary_orange"
                size={20}
                strokeWidth={4}
              ></Plus>
            </button>
          </div>
          {/* Add to cart */}
          <button
            onClick={() => {
              addToCart({
                name: ProductModel.name,
                price: productQuantity * ProductModel.price,
                quantity: productQuantity,
                productPrice: ProductModel.price,
              });
            }}
            className="mb-7 flex items-center justify-center rounded-lg bg-primary_orange py-3 md:mb-0 md:w-full md:py-5"
          >
            <ShoppingCart
              size={18}
              strokeWidth={3}
              color="white"
            ></ShoppingCart>
            <p className="text-base font-semibold text-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
