interface Props {
  searchOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchOnChangeHandler }: Props) => {
  const restrictInput = (e: any) => {
    if (/[^\w\s-]/g.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div className='md:w-auto w-11/12 flex flex-col justify-center items-center'>
      <div className='w-full md:w-auto flex bg-gray-100 p-4 rounded-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 opacity-30'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          className='md:w-auto w-full outline-1 outline-none'
          type='search'
          placeholder='Search...'
          onChange={searchOnChangeHandler}
          onKeyDown={restrictInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;
