import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface HeroSliderProps {
  images: string[];
}

const HeroSlider = ({ images }: HeroSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Wallpaper ${index + 1}`}
            className="w-full h-72 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
