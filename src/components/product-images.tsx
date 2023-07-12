import { SetStateAction, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import ProductImgModal from "./product-img-modal";
import * as React from "react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

export function ProductImages() {
  const images: Array<string> = [
    "/promo-photos/image-product-1.jpg",
    "/promo-photos/image-product-2.jpg",
    "/promo-photos/image-product-3.jpg",
    "/promo-photos/image-product-4.jpg",
  ];

  const [currentImg, setCurrentImage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  function next() {
    if (currentImg < images.length - 1) {
      setCurrentImage((prev: number) => {
        const newPrev = prev + 1;
        return newPrev;
      });
    } else {
      return;
    }
  }

  function prev() {
    if (currentImg !== 0) {
      setCurrentImage((prev: number) => {
        const newPrev = prev - 1;
        return newPrev;
      });
    } else {
      return;
    }
  }

  return (
    <div className="">
      {useMediaQuery(762) ? (
        <div className="relative z-0">
          <ChevronLeft
            id="button-left"
            onClick={() => {
              prev();
            }}
            strokeWidth={3}
            className="absolute left-6 top-1/2 h-10 w-10 translate-y-[-50%] rounded-full bg-white p-2"
          ></ChevronLeft>

          <ChevronRight
            id="button-right"
            onClick={() => {
              next();
            }}
            strokeWidth={3}
            className="absolute right-6 top-1/2 h-10 w-10 translate-y-[-50%] rounded-full bg-white p-2"
          ></ChevronRight>

          <Image
            className="w-screen md:mx-auto md:w-[540px] md:rounded-3xl"
            src={images[currentImg]!}
            height={720}
            width={720}
            alt="Img-Photo"
          ></Image>
        </div>
      ) : (
        <div>
          <Image
          onClick={onOpen}
            className="w-screen md:mx-auto md:w-[540px] md:rounded-3xl"
            src={images[currentImg]!}
            height={720}
            width={720}
            alt="Img-Photo"
          ></Image>

          <ProductImgModal
            gallery={images}
            isOpen={isOpen}
            onClose={onClose}
          ></ProductImgModal>
          <div className="my-7 flex justify-center gap-8">
            {images.map((data, index) => {
              return (
                <div key={index} className="relative">
                <div
                  onClick={() => {
                    setCurrentImage((prev) => {
                      return index;
                    });
                  }}
                  className="absolute h-28 w-28 rounded-xl bg-greishBlue bg-opacity-0 hover:cursor-pointer hover:bg-opacity-60"
                ></div>
                <Image
                  className="h-28 w-28 rounded-xl"
                  src={data}
                  alt="product gallery photo"
                  height={256}
                  width={256}
                ></Image>
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
