'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLocationDot, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { quickLinks, openingHours } from "@/utils/data";

const Footer = () => {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        // Establece el año actual en el cliente
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="pt-12 ">
            <div className="container mx-auto pb-12 xl:pb-[100px]">
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                    <div className="flex-1">
                        <h4 className="h4 mb-5">Ubicación y Contacto</h4>
                        <div className="flex flex-col gap-y-3 mb-5">
                            <div className="flex items-center gap-x-[6px]">
                                <FaLocationDot className="text-[24px] text-accent" />
                                <div>Cra. 50 #76-54</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <IoMail className="text-[24px] text-accent" />
                                <div>recepcion@coecaribe.com</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <MdPhone className="text-[24px] text-accent" />
                                <div>(+57) 316 821-8477</div>
                            </div>
                        </div>
                        <div className="flex gap-[14px] text-[30px]">
                            <Link
                                aria-label="Facebook"
                                href="https://www.facebook.com/coecaribe/"
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent transition-all"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                aria-label="Instagram"
                                href="https://www.instagram.com/coe.caribe.bq/"
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent transition-all"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                aria-label="Whatsapp"
                                href="http://wa.me/message/N4CP6GZGLRMLC1"
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent transition-all"
                            >
                                <FaWhatsapp />
                            </Link>
                            <Link
                                aria-label="Youtube"
                                href="http://wa.me/message/N4CP6GZGLRMLC1"
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent transition-all"
                            >
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="h4 mb-5">Enlaces rápidos</h4>
                        <div className="flex gap-x-5">
                            <ul className="flex-1 flex flex-col gap-y-5">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-accent transition-all">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex-1 flex flex-col gap-y-5">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-accent transition-all">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="h4 mb-5">Horario de atención</h4>
                        <div className="flex flex-col gap-5">
                            {openingHours.map((hour) => (
                                <div className="flex-1" key={hour.days}>
                                    <div className="flex justify-between items-center border-b pb-[10px]">
                                        <div>{hour.days}</div>
                                        <div className="text-accent font-medium">{hour.hours}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] border-t">
                <div className="container mx-auto text-center">
                    <div className="text-sm text-gray-600">
                        {year && `© ${year} COE Caribe IPS - All rights reserved.`}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
