import { RiHeartPulseLine } from "react-icons/ri";
import Image from 'next/image';
import heroImg from '@/assets/hero.png';

const hero = () => {
    return (
        <section className=" bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between h-full">
                    <div className="xl:w-[48%] text-center xl:text-left">
                        <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                            <RiHeartPulseLine className="text-2xl text-accent"/>
                            <div className="uppercase text-base font-medium text-[#B7A9AC] tracking-[2.24px]">
                                Transforma tu vida
                            </div>
                        </div>
                        <h1 className="h1 mb-6">Nos preocupamos por ti
                        </h1>
                        <p className="mb-[42px] md:max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi eveniet asperiores similique officia, praesentium placeat
                            esse aperiam deserunt est.
                        </p>
                        <button className="btn btn-lg btn-accent mx-auto xl:mx-0">Agenda ya</button>
                    </div>
                    <div className="hidden xl:flex max-w-[814px] self-end">
                        <Image src={heroImg} alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero