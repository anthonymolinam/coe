"use client"; // Asegúrate de usar este modo si estás en Next.js 13+

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@/assets/team/doctor-1.png";
import img2 from "@/assets/team/doctor-2.png";

const team = () => {
    return (
        <section className="team section">
            <div className="container mx-auto">
                <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
                    Nuestro Equipo
                </h2>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    className="min-h-[400px]"
                >
                    {/* Slide 1 */}
                    <SwiperSlide> 
                        <div className="flex flex-col md:flex-row gap-9">
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                                    <div className="flex-1">
                                        <Image src={img1} alt="Dr. Leslie Taylor" width={300} height={300} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dra. Junieth Meriño</h4>
                                        <div className="font-medium uppercase tracking-[2.24px] text-[#B7A9AC] mb-[20px]">
                                            Médico nutricionista
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Inventore possimus eum atque.
                                        </p>
                                        <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                                    <div className="flex-1">
                                        <Image src={img2} alt="Dr. Leslie Taylor" width={300} height={300} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Antony Molina</h4>
                                        <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                                            Médico Internista
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Inventore possimus eum atque.
                                        </p>
                                        <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row gap-9">
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                                    <div className="flex-1">
                                        <Image src={img2} alt="Dr. Zachary Brown" width={300} height={300} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>
                                        <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                                            Cardiologist
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Inventore possimus eum atque.
                                        </p>
                                        <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                                    <div className="flex-1">
                                        <Image src={img2} alt="Dr. Leslie Taylor" width={300} height={300} />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Leslie Taylor</h4>
                                        <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                                            Pediatrician
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Inventore possimus eum atque.
                                        </p>
                                        <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a href="#" className="cursor-pointer hover:text-accent transition-all">
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default team;
