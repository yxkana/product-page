import { Divide, ShoppingCart } from "react-feather";
import React, { useRef, useState } from "react";
import { CartDisplayer } from "~/hooks/cart-hook";
import { Trash2 } from "react-feather";
import Image from "next/image";
import { useCartStore } from "~/hooks/cart-hook";
import { useCheckScreen } from "~/hooks/checkScreen";


export function CartModal() {
  const cartData = CartDisplayer();

  const deleteItemFromCart = useCartStore((state) => state.delete);
  const currentCart = useCartStore((state) => state.cart);

  const isMobile = useCheckScreen(800);

  

  return (
    <>
    {/*  ----------------------------------- Mobile LayOut ----------------------------------- */}
      {isMobile ? (
        <div>
          <label htmlFor="my_modal_1" className="my-auto relative">
          <div className="absolute h-4 w-4 text-xs bottom-3 left-3 rounded-full bg-primary_orange text-white font-medium flex justify-center items-center">{currentCart.length}</div>
            <ShoppingCart
              className="h-5 w-5 md:h-7 md:w-7"
              color="grey"
              strokeWidth={3}
              size={22}
            ></ShoppingCart>
          </label>
          <input type="checkbox" id="my_modal_1" className="modal-toggle" />

          <div className="modal modal-top px-4 pt-24">
            <div className="modal-box flex flex-col rounded-lg">
              <h3 className="text-lg font-bold">Cart</h3>
              <div className="divider"></div>
              <div className="flex h-44 flex-col gap-5 overflow-y-scroll">
                {cartData.length !== 0 ? (
                  cartData.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <Image
                          className="mr-4 h-12 w-12 rounded-lg"
                          src={"/promo-photos/image-product-1.jpg"}
                          height={32}
                          width={32}
                          alt="product image"
                        ></Image>
                        <div className="flex w-full flex-col">
                          <p className="text-base font-medium text-greishDarkBlue">
                            {data.name}
                          </p>
                          <div className="flex gap-3">
                            <p className="text-greishDarkBlue">
                              $
                              {Math.round(
                                (data.productPrice * 100) / 100
                              ).toFixed(2)}{" "}
                              x {data.quantity}
                            </p>
                            <p className="font-bold">
                              {Math.round((data.price * 100) / 100).toFixed(2)}$
                            </p>
                          </div>
                        </div>
                        <Trash2
                          onClick={() => {
                            deleteItemFromCart(data);
                          }}
                          size={28}
                        ></Trash2>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center text-lg font-medium">
                    Cart is empty
                  </div>
                )}
              </div>
              <button className="rounded-lg bg-primary_orange py-4  text-white">
                Checkout
              </button>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_1">
              Close
            </label>
          </div>
        </div>
      ) : 
      /*--------------------------------------- Desktop LayOut ----------------------------------- */
      (
        <div className="flex items-center">
          <details className="dropdown-end dropdown z-50">
            <summary className="btn border-0 relative bg-transparent">
              <div className="absolute h-5 w-5 top-0 right-0 rounded-full bg-primary_orange text-white font-medium flex justify-center items-center">{currentCart.length}</div>
              <ShoppingCart
                className="h-5 w-5 md:h-7 md:w-7"
                color="grey"
                strokeWidth={3}
                size={22}
              ></ShoppingCart>
            </summary>
            <div className="dropdown-content">
              <div className="z-30 w-[520px] rounded-xl flex flex-col  bg-white  p-8 shadow-xl  shadow-greishDarkBlue">
                <h3 className="text-lg font-bold">Cart</h3>
                <div className="divider"></div>
                <div className="flex h-44 flex-col gap-5 overflow-y-hidden">
                  {cartData.length !== 0 ? (
                    cartData.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <Image
                            className="mr-4 h-12 w-12 rounded-lg"
                            src={"/promo-photos/image-product-1.jpg"}
                            height={32}
                            width={32}
                            alt="product image"
                          ></Image>
                          <div className="flex w-full flex-col">
                            <p className="text-base font-medium text-greishDarkBlue">
                              {data.name}
                            </p>
                            <div className="flex gap-3">
                              <p className="text-greishDarkBlue">
                                $
                                {Math.round(
                                  (data.productPrice * 100) / 100
                                ).toFixed(2)}{" "}
                                x {data.quantity}
                              </p>
                              <p className="font-bold">
                                {Math.round((data.price * 100) / 100).toFixed(
                                  2
                                )}
                                $
                              </p>
                            </div>
                          </div>
                          <Trash2
                            onClick={() => {
                              deleteItemFromCart(data);
                            }}
                            size={28}
                          ></Trash2>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex justify-center text-lg font-medium">
                      Cart is empty
                    </div>
                  )}
                </div>
                <button className="rounded-lg bg-primary_orange py-4   text-white">
                  Checkout
                </button>
              </div>
            </div>
          </details>
        </div>
      )}
    </>
  );
}
