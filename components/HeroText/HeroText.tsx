interface Props {
  text: string;
}
const HeroText = ({ text }: Props) => {
  return (
    <h1 className='text-center xs:text-xl sm:text-2xl md:text-4xl font-bold mt-10 px-20 md:px-48 '>
      {text}
    </h1>
  );
};

export default HeroText;
