"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const testimonials = [
  {
    text: "I requested sector-wise comparison data for Hydropower and Finance — the dataset was clean, insightful, and helped me rebalance my portfolio confidently.",
    author: "Aarav Shrestha",
    role: "Retail Investor",
  },
  {
    text: "Using their top gainers report, I was able to create a video that doubled my TikTok engagement. Super responsive and helpful team!",
    author: "Nisha KC",
    role: "Finance Content Creator",
  },
  {
    text: "Their custom data delivery saved me hours of manual scraping. The JSON format integrated easily with my dashboard app.",
    author: "Ravi Basnet",
    role: "Freelance Data Analyst",
  },
  {
    text: "The NEPSE data I received was exactly what I needed for my thesis research. Delivered on time and with excellent support.",
    author: "Sandhya Regmi",
    role: "Master's Student at TU",
  },
  {
    text: "Great service! I got historical order book data that helped me build and test a trading strategy. Highly recommend for any serious trader.",
    author: "Bikram Khadka",
    role: "Active Trader",
  },
];


const TestimonialsCard = () => {
  return (
    <div className="mt-16 rounded-[45px] bg-dark mx-4 py-10 lg:py-[60px]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
          Keyboard,
          FreeMode,
        ]}
        spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        className="text-green max-w-full w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative px-6 lg:py-12 text-white">
              <p className="relative mb-8 leading-relaxed border-green border px-6 py-8 lg:p-16 rounded-[45px]">
                {testimonial.text}
                <span className="absolute -bottom-7 left-20 lg:left-28 transform -translate-x-1/2 w-0 h-0 border-t-[30px] border-t-dark border-x-[30px] border-x-transparent z-10"></span>
                <span className="absolute -bottom-8 left-20 lg:left-28 transform -translate-x-1/2 w-0 h-0 border-t-[32px] border-t-green border-x-[30px] border-x-transparent"></span>
              </p>
              <h4 className="font-semibold text-green ml-16 lg:ml-28 mt-10">
                {testimonial.author}
              </h4>
              <p className="text-gray-500 text-sm mt-1 ml-16 lg:ml-28 mb-16">
                {testimonial.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;
