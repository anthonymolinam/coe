import { servicesBox } from "@/utils/data";
import Image from "next/image";

const services = () => {
    return (
        <section className="section">
            <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"> 
                <div className="container mx-auto">
                    <div className="flex items-center flex-col xl:flex-row xl:mb-[60px]">
                        <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">Nuestros Servicios</h2>
                        <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae similique eveniet nobis reprehenderit est explicabo
                        sunt sapiente dolore, maxime.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 xl:-mt-[144px]">
                <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
                    {servicesBox.map((service) => (
                        <div key={service.title} className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
                            <div className="mb-[15px]">
                                <Image src={service.img} alt="service"/>
                            </div>
                            <h3 className="h3 mb-[10px]">{service.title}</h3>
                            <p className="font-light leading-normal max-w-[300px]">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default services;