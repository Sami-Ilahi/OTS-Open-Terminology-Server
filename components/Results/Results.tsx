import { ResultCard, DetailsCard, Button } from "..";

interface Props {
  data: string[];
  isLoading: boolean;
  defaultMsg: string;
  displayResults: string;
  resultsNumber: number;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Results = ({
  data,
  isLoading,
  defaultMsg,
  displayResults,
  resultsNumber,
   handleOnClick,
}: Props) => {
  return (
    <div className='w-full flex gap-6 flex-col'>
      {/* titles */}
      <div className='w-full flex bg-gray-100'>
        <h1 className='w-full md:w-1/2 text-left text-md font-normal p-4 capitalize'>
          Search Results
          {!isLoading && data?.length ? (
            <span className='text-xs text-gray-600 pl-2'>
              {resultsNumber} {resultsNumber === 1 ? "result" : "results"}{" "}
              found.
            </span>
          ) : null}
        </h1>
        <h1 className='text-left text-md font-normal p-4 capitalize hidden md:block border-l-4 border-white'>
          Details
        </h1>
      </div>
      {/* results + details  */}
      <div className='w-full flex gap-2'>
        <div className='w-full md:w-1/2 h-auto md:overflow-y-auto md:h-[600px] flex flex-col items-center'>
          {/* results */}
          {!isLoading ? (
            data?.length ? (
              data.map((item: any) => (
                <ResultCard
                  key={item.ConceptId}
                  text={item[displayResults]}
                  title={displayResults}
                  dataObject={item}
                />
              ))
            ) : (
              <div className='block w-11/12 rounded-lg bg-white text-left my-4 '>
                <h6 className='text-xs text-gray-400 font-normal tracking-widest capitalize'>
                  {defaultMsg}
                </h6>
              </div>
            )
          ) : (
            <div className='block w-11/12 rounded-lg bg-white text-left my-4 '>
              <h2 className='text-md text-gray-400 font-normal animate-pulse tracking-widest capitalize'>
                Loading ...
              </h2>
            </div>
          )}
          {/* Load more results button */}
          {!isLoading && data?.length < resultsNumber ? (
            <div>
              <Button
                btnText='load more'
                bgColor='primary'
                hoverColor='#fa5c16'
                btnStyle=' place-self-end text-sm px-6 pb-2 pt-1.5'
                handleOnClick={handleOnClick}
              />
            </div>
          ) : null}
          {!isLoading && data?.length === resultsNumber ? (
            <p className='text-xs text-gray-600 m-2 capitalize'>
              No more results.
            </p>
          ) : null}
        </div>
        {/* details card */}
        <div className='w-1/2 hidden md:flex flex-col items-center '>
          <DetailsCard />
        </div>
      </div>
    </div>
  );
};

export default Results;
