"use client";
import { BsInfoCircle, BsXCircle } from "react-icons/bs";
import { DetailsCard } from "..";
import { useGlobalContext } from "../../app/context/store";
interface Props {
  title: string;
  text: string;
  dataObject: any;
}

const ResultCard = ({ title, text, dataObject }: Props) => {
  const { detailsCard, setDetailsCard } = useGlobalContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setDetailsCard(dataObject);
  };

  const closeDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDetailsCard({});
  };
  return (
    <div
      onClick={handleClick}
      className='block w-11/12 rounded-lg bg-white text-left my-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  hover:scale-105 transition duration-500'
    >
      <div className='flex justify-between p-4'>
        <div>
          <h1 className='text-xs font-semibold'>{title}:</h1>
          <p className='text-xs '>{text}</p>
        </div>
        {detailsCard.ConceptId !== dataObject.ConceptId ? (
          <BsInfoCircle className='cursor-pointer' />
        ) : (
          <BsXCircle className='cursor-pointer' onClick={closeDetail} />
        )}
      </div>
      {detailsCard.ConceptId === dataObject.ConceptId ? (
        <div className=' md:hidden flex flex-col items-center mb-5'>
          <div className='w-11/12 flex bg-gray-100 mb-2'>
            <h1 className='text-left text-xs font-normal p-2 capitalize md:hidden block border-l-4 border-white'>
              Details
            </h1>
          </div>
          <DetailsCard />
        </div>
      ) : null}
    </div>
  );
};

export default ResultCard;
