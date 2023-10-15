"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, Button } from "..";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between  py-8'>
      <nav>
        <section className='flex lg:hidden'>
          <div
            className='space-y-2 absolute top-9'
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-black'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-black'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-black'></span>
          </div>
          <div className={isNavOpen ? "showMenuNav " : "hidden"}>
            <div
              className='absolute top-1 right-0 px-8 py-8 z-20'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-black'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <span className='absolute w-11/12 h-20 top-5  right-20 border-b border-primary pb-3  flex justify-center items-center'>
              <Logo />
            </span>
            <ul className='flex flex-col items-center justify-between min-h-[250px] text-base overflow-hidden'>
              <li className='hover:border-b-2 hover:border-gray-700 my-8 capitalize'>
                <Link href='https://www.openterminologyserver.com/'>Home</Link>
              </li>
              <li className='hover:border-b-2 hover:border-gray-700 my-8 capitalize'>
                <Link href='https://www.openterminologyserver.com/our-activities/'>
                  our activities
                </Link>
              </li>
              <li className='hover:border-b-2 hover:border-gray-700 my-8 capitalize'>
                <Link href='https://www.openterminologyserver.com/use-cases/'>
                  use cases
                </Link>
              </li>
              <li className='hover:border-b-2 hover:border-gray-700 my-8 capitalize'>
                <Link href='https://www.openterminologyserver.com/about-us/'>
                  about us
                </Link>
              </li>
              <li className='hover:border-b-2 hover:border-gray-700 my-8 capitalize'>
                <Link href='https://www.openterminologyserver.com/contact/'>
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <nav className='hidden space-x-8 lg:flex'>
          <ul className='hidden lg:flex items-center justify-between gap-12 text-base text-black capitalize list-none'>
            <li>
              <Link href='https://www.openterminologyserver.com/'>Home</Link>
            </li>
            <li>
              <Link href='https://www.openterminologyserver.com/our-activities/'>
                our activities
              </Link>
            </li>
            <li className='hidden xl:block'>
              <Link href='https://www.openterminologyserver.com/use-cases/'>
                use cases
              </Link>
            </li>
            <li className='hidden xl:block '>
              <Link href='https://www.openterminologyserver.com/about-us/'>
                about us
              </Link>
            </li>
            <li className='hidden xl:block'>
              <Link href='https://www.openterminologyserver.com/contact/'>
                contact
              </Link>
            </li>
            <li className=' xl:hidden'>
              <Link href='https://www.openterminologyserver.com/about-us/'>
                more
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}</style>
    </div>
  );
};

export default Nav;
