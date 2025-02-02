'use client'
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo1.png';
import Logo2 from '@/assets/logo2.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdPhone } from "react-icons/md";

const Header = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Planes', href: '/planes' },
    { name: 'Equipo', href: '/equipo' },
    { name: 'Blog', href: '/blog' },
  ];

  useEffect(() => {
    const mobileNav = document.querySelector('.mnav') as HTMLElement;

    if (isNavOpen) {
      mobileNav?.classList.remove('-left-[300px]');
      mobileNav?.classList.add('left-0');
    } else {
      mobileNav?.classList.add('-left-[300px]');
      mobileNav?.classList.remove('left-0');
    }
  }, [isNavOpen]);

  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0'>
        {/* Logo */}
        <div className='flex justify-center lg:justify-normal'>
          <Link href="./">
            <Image src={Logo} alt='coe' style={{ width: '50px', height: 'auto' }} />
          </Link>
        </div>
        {/* Location */}
        <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
          <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
            <FaLocationDot className='text-2xl text-accent'/>
            <div className='text-secondary'>Cra. 50 #76-54</div>
          </div>
          {/* Phone */}
          <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
            <MdPhone className='text-2xl text-accent'/>
            <div className='text-secondary'>(+57) 316 821-8477</div>
          </div>
          {/* Btn */}
          <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>
            Agenda ya
          </button>
          {/* Mobile Nav */}
          <nav className={`mnav bg-white fixed w-[300px] top-0 h-screen ${isNavOpen ? 'left-0' : '-left-[300px]'} shadow-2xl lg:hidden transition-all duration-300 z-20`}>
            <div className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all' onClick={toggleNav}>
              {isNavOpen ? (
                <IoIosArrowBack className='mnav__close-btn-icon text-2xl text-white' />
              ) : (
                <IoIosArrowForward className='mnav__close-btn-icon text-2xl text-white' />
              )}
            </div>
            <div className='px-12 flex flex-col gap-y-12 h-full'>
              <Image src={Logo2} alt='coe'/>
              <ul className='flex flex-col gap-y-5'>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`hover:text-accent transition-all duration-300 ${pathname === link.href ? 'text-accent' : 'text-secondary'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul> 
            </div>
          </nav>
          {/* Desktop Nav */}
          <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
            <ul className='flex gap-x-4'>
              {navLinks.map((link, index) => (
                <li key={link.name}>
                    <Link 
                    href={link.href} 
                    className={`hover:text-accent transition-all duration-300 ${pathname === link.href ? 'text-accent' : 'text-secondary'} ${index !== navLinks.length - 1 ? 'border-r pr-4' : ''}`}>
                    {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> 
    </header>
  );
}

export default Header;
