import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  isValidSearch: boolean;
}
const SearchHeader = ({ isValidSearch }: Props) => {
  return (
    <div className='md:w-auto w-10/12 flex items-center md:px-0 px-10'>
      <p className='text-xs text-gray-400 font-normal tracking-widest capitalize'>
        Search must be more than 3 characters (Letters and numbers only)
      </p>
      {!isValidSearch ? (
        <span className='md:ml-2 ml-1 text-red-400 '>
          <RiCloseCircleLine size='20' />
        </span>
      ) : (
        <span className='md:ml-2 ml-1 text-green-500'>
          <AiOutlineCheckCircle size='20' />
        </span>
      )}
    </div>
  );
};

export default SearchHeader;
