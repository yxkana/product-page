import Image from "next/image";
import { DrawerCom } from "./drawer";
import { CartModal } from "./cart-modal";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as React from "react";

import { ShoppingCart } from "react-feather";

export function Header() {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = React.useState(false);

    const updateTarget = React.useCallback((e: { matches: any }) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useIsomorphicLayoutEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  return (
    <div className="flex h-full items-center">
      {useMediaQuery(768) ? (
        <div className="flex h-full w-screen items-center justify-between px-6">
          <div className="flex gap-5">
            <DrawerCom></DrawerCom>
            <Image
              className="h-6 w-36"
              src={"/logo.svg"}
              width={128}
              height={128}
              alt="logo"
            ></Image>
          </div>
          <div className="flex items-center gap-7">
            <CartModal></CartModal>
            <Image
              className="h-8 w-8"
              src={"/image-avatar.png"}
              width={128}
              height={0}
              alt="profile picture"
            ></Image>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-screen  mx-5 container">
          <div className="container flex justify-between">
          <div className="flex items-center gap-20">
          <Image
            className="h-6 w-36"
            src={"/logo.svg"}
            width={128}
            height={128}
            alt="logo"
          ></Image>

          <ul className="relative flex gap-12 font-semibold text-greishDarkBlue">
            <li>
              <button>Collection</button>
            </li>
            <li>
              <button>Men</button>
            </li>
            <li>
              <button>Woman</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>

          </div>

          <div className="flex gap-14 relative">
            <CartModal></CartModal>
            <Image
              className="h-14 w-14"
              src={"/image-avatar.png"}
              width={128}
              height={128}
              alt="profile picture"
            ></Image>
          </div>
          </div>
          <div className="divider  mt-8"></div>
        </div>
      )}
    </div>
  );
}
