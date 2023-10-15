import Image from "next/image";

const Logo = () => {
  return (
    <div className='w-6/12 md:w-1/5 mr-8'>
      <Image
        src='https://jimdo-storage.freetls.fastly.net/image/347686032/98852a6b-1bbd-4fb5-9631-1dd0ca3d7b42.png'
        alt='logo'
        width='1500'
        height={191}
        priority={true}
      ></Image>
    </div>
  );
};

export default Logo;