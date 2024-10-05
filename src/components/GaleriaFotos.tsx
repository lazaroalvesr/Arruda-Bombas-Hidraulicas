"use client";

import { GaleriaFotos } from "@/lib/interface";
import Image from "next/image";
import { useState } from "react";

export const Galeria = ({ images, galleryWidthProp }: GaleriaFotos) => {
    const [mainImage, setMainImage] = useState(images[0].images);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = (src: string, index: number) => {
        setMainImage(src);
        setCurrentIndex(index);
    }

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setMainImage(images[nextIndex].images);
        setCurrentIndex(nextIndex);
    }

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setMainImage(images[prevIndex].images);
        setCurrentIndex(prevIndex);
    }

    const galleryWidth = galleryWidthProp;
    const galleryStyle = {
        transform: `translateX(-${currentIndex * galleryWidth}px)`,
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
    };


    return (
        <div className="lg:w-[576px] md:w-[400px] lg:h-[516px] mx-4">
            <div className="bg-[#f1f1f1]  rounded-md w-[400px] md:w-[400px] lg:w-full flex items-center lg:h-[423px] h-[380px]">
                <Image
                    src={mainImage}
                    alt="Main Image"
                    width={576}
                    height={200}
                    className="lg:w-[576px] w-full items-center justify-center m-auto h-[380px]  object-contain flex lg:h-[430px]"
                />
            </div>
            <div className="flex mt-[19px] gap-2 items-center">
                <button onClick={handlePrevious} className="bg-[#D9D9D9] p-3 h-[74px] rounded-tl-md rounded-bl-md">
                    <Image
                        src={"/icons/arrow-left.svg"}
                        alt="Left arrow"
                        width={34}
                        height={34}
                    />
                </button>
                <div className="w-full md:w-fit overflow-hidden h-[74px]">
                    <div className="flex gap-4 rounded-md h-[80px]" style={galleryStyle}>
                        {images.map((img, index) => (
                            <Image
                                key={img.id}
                                src={img.images}
                                alt={`Thumbnail ${index + 1}`}
                                width={100}
                                height={74}
                                onClick={() => handleClick(img.images, index)}
                                className={`cursor-pointer w-44 ${index === currentIndex ? '' : 'opacity-60'}`}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className="bg-[#D9D9D9] h-[74px] p-3 rounded-tr-md rounded-br-md">
                    <Image
                        src={"/icons/arrow-right.svg"}
                        alt="Right arrow"
                        width={34}
                        height={34}
                    />
                </button>
            </div>
        </div>
    );
}
