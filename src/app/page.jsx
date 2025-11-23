"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import styles bundle
import 'swiper/css/bundle';
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {/* Slide 1 */}
        <div className="w-full h-150">
          <img
            src="https://i.ibb.co/hRkhJHFR/depositphotos-58885651-stock-photo-cute-baby-playing-with-toys.jpg"
            alt="banner1"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-full h-150">
          <img
            src="https://i.ibb.co/8DVSkYKB/360-F-217089170-KBoukd-ZXongzmsk-Wq-Fi2h-K1-Xpeydhh-Vr.jpg"
            alt="banner2"
          />
        </div>

        {/* Slide 3 */}
        <div className="w-full h-150">
          <img
            src="https://i.ibb.co/wrb97QPM/images.jpg"
            alt="banner3"
          />
        </div>
      </Carousel>
    </div>
  );
}
