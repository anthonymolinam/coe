"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import img from "@/assets/testimonial/img.png";

const Testimonial = () => {
  return (
    <section className="bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-14 xl:flex-row">
          {/* Imagen del Testimonial */}
          <div className="hidden xl:flex mt-16">
            <Image src={img} alt="testimonial" />
          </div>
          {/* Contenedor del Swiper */}
          <div className="max-w-[98%] xl:max-w-[710px]">
          <Swiper
            modules={[Pagination, Autoplay]} // Agrega Autoplay al arreglo de módulos
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // Tiempo en milisegundos entre diapositivas
              disableOnInteraction: false, // Continúa la reproducción automática incluso si el usuario interactúa
            }}
            className="h-[400px]"
          >
              {/* Primera diapositiva */}
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center xl:text-left">
                    <p className="font-normal text-[22px] text-[#4c5354] leading-[190%] relative mb-7 before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat">
                      <span className="mx-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dolores facere, totam minima error quisquam numquam sint libero expedita doloremque eaque harum.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#B7A9AC] font-medium uppercase tracking-[2.24px]">
                      Paciente
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Segunda diapositiva */}
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center xl:text-left">
                    <p className="font-normal text-[22px] text-[#4c5354] leading-[190%] relative mb-7 before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat">
                      <span className="mx-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dolores facere, totam minima error quisquam numquam sint libero expedita doloremque eaque harum.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      Anna Smith
                    </div>
                    <div className="text-[#B7A9AC] font-medium uppercase tracking-[2.24px]">
                      Paciente
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
