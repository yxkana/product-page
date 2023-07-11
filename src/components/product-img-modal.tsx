import { useState } from "react";
import Image from "next/image";
import { Divide, X } from "react-feather";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ProductImgModal: React.FC<{
  gallery: Array<string>;
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  var [currentImg, setCurrentImage] = useState(0);

  return (
    <>
      {props.isOpen ? (
        <div className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80">
          <div className="relative flex flex-col items-center justify-center">
            <div>
              <div className="mb-4 flex w-[720px] justify-end text-yellow-400">
                <button onClick={props.onClose}>
                  <X
                    className="text-primary_orange"
                    size={35}
                    strokeWidth={3}
                  ></X>
                </button>
              </div>
              <Image
                className="w-[720px] rounded-3xl md:mx-auto"
                src={props.gallery[currentImg]!}
                height={1024}
                width={1024}
                alt="Img-Photo"
              ></Image>

              <div className="my-7 flex justify-center gap-8">
                {props.gallery.map((data, index) => {
                  return (
                    <div className="relative">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductImgModal;
