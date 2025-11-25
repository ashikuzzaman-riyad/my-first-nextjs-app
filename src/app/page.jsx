"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import styles bundle
import 'swiper/css/bundle';
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Homepage from "@/home/page";


export default function Home() {
  return (
    <>
    <div className="w-full">
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    showArrows={true}
  >
    {/* Slide 1 */}
    <div className="w-full h-64 md:h-96 relative overflow-hidden">
      <img
        src="https://i.ibb.co/hRkhJHFR/depositphotos-58885651-stock-photo-cute-baby-playing-with-toys.jpg"
        alt="banner1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slide 2 */}
    <div className="w-full h-64 md:h-96 relative overflow-hidden">
      <img
        src="https://i.ibb.co/8DVSkYKB/360-F-217089170-KBoukd-ZXongzmsk-Wq-Fi2h-K1-Xpeydhh-Vr.jpg"
        alt="banner2"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slide 3 */}
    <div className="w-full h-64 md:h-96 relative overflow-hidden">
      <img
        src="https://i.ibb.co/wrb97QPM/images.jpg"
        alt="banner3"
        className="w-full h-full object-cover"
      />
    </div>
  </Carousel>
</div>
<Homepage></Homepage>
    </>

  );
}
