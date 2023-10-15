import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { Logo, Nav, Button } from "..";

const Header = () => {
  return (
    <header className='sticky top-0 z-[20] w-full mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between bg-white px-8 py-4'>
      <Logo />
      <div className='flex justify-evenly items-center gap-8'>
        <Link href='https://www.nederlandseterminologieserver.nl/'>
          <Button
            btnText='nederlands'
            bgColor='primary'
            hoverColor='#fa5c16'
            btnStyle='hidden sm:block lg:hidden px-6 pb-2 pt-2.5'
          />
        </Link>
        <Nav />
        <Link href='https://www.nederlandseterminologieserver.nl/'>
          <Button
            btnText='nederlands'
            bgColor='primary'
            hoverColor='#fa5c16'
            btnStyle='hidden lg:block px-6 pb-2 pt-2.5'
          />
        </Link>
        <AiFillLinkedin
          color='#FE4E01'
          size='30'
          className='hidden lg:block md:order-last'
        />
      </div>
    </header>
  );
};

export default Header;
