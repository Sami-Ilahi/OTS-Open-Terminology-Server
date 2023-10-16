"use client";
import axios from "axios";
import debounce from "lodash.debounce";
import { useState, useEffect, useMemo } from "react";
import { useGlobalContext } from "../../app/context/store";
import {
  Results,
  CustomFilter,
  SearchBar,
  SearchHeader,
  HeroText,
  RadioButton,
} from "@/components";

/* For the select component : search parameters*/
const SelectOptions = ["ProblemNameCodeList", "LocationCodeList"];
/* For Radio button component: properties to display by */
const radioButtonOptions = [
  "PreferredName",
  "DisplayNamePGOMedMij",
  "FullySpecifiedName",
];

/* messages displayed before search*/
const noDataInitiallyMsg =
  "No Information Available Yet. Start your search above";
const noDataFoundMsg = "No Matches Found for Your Query";

const SearchContainer = () => {
  /* State Hooks */
  // Fetched data
  const [fetchedData, setFetchedData] = useState<string[]>([]);
  // Number of displayed results
  const [loadedResultsNumber, setLoadedResultsNumber] = useState<number>(20);
  // Select Input state
  const [selected, setSelected] = useState<string>("ProblemNameCodeList");
  // Search state
  const [search, setSearch] = useState<string>("");
  // Search validation
  const [isValidSearch, setIsValidSearch] = useState<boolean>(false);
  // Data fetching status
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //Results info message status
  const [noDataMsg, setNoDataMsg] = useState<string>(noDataInitiallyMsg);
  //Results displayed by radio buttons
  const [displayResults, setDisplayResults] = useState<string>("PreferredName");

  // Details for search result
  const { setDetailsCard } = useGlobalContext();

  /* Request config options*/
  const config = {
    method: "GET",
    url: `/api/ots?ValueSet=${selected}&TextSearch=${search}`,
    headers: {
      "content-type": "application/json",
    },
  };
  /* Fetch data */
  useEffect(() => {
    axios(config)
      .then(response => {
        // Handle the response
        setFetchedData(response.data);
        setIsLoading(false);
        if (search && selected && !response.data.length) {
          setNoDataMsg(noDataFoundMsg);
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        setIsLoading(false);
      });
    // cancel the debounce
    debouncedResults.cancel();
  }, [selected, search]);

  /* handle the select component */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    setSelected(value);
  };

  /* handle searchBar */
  const searchOnChangeHandler = (e: any) => {
    let value = e.target.value.trim();

    if (value.length <= 3) {
      setIsValidSearch(false);
      setIsLoading(false);
      setNoDataMsg(noDataInitiallyMsg);
      setFetchedData([]);
      setDetailsCard({});
    } else {
      setIsValidSearch(true);
      setSearch(value);
      setIsLoading(true);
    }
  };

  /* handle Radio buttons */
  const handleRadioBtnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDisplayResults(value);
  };

  /* handle click to load 20 more results */
  const handleLoadMoreClick = () => {
    setLoadedResultsNumber(prevVisibleData => prevVisibleData + 20);
  };

  /* Debounce the search in searchBar */
  const debouncedResults = useMemo(() => {
    return debounce(searchOnChangeHandler, 500);
  }, []);

  /* Set style property for radio button */
  const isHidden = fetchedData.length ? "block md:w-auto w-full" : "hidden";

  return (
    <div className='box-border w-full flex justify-center items-center md:pt-24 pb-4 bg-gray-100 lg:px-20 md:px-5 px-0'>
      <div className='box-border space-y-8  mx-1'>
        <HeroText text='Enjoy the formidable search capabilities of the Open Terminology Server!' />
        <div className=' flex flex-col items-center justify-center gap-4 py-6 bg-white rounded-xl shadow-lg hover:shadow-xl lg:px-10 md:px-2'>
          <SearchHeader isValidSearch={isValidSearch} />
          <div className='md:w-auto w-full flex flex-col items-center px-2'>
            <div className='box-border flex flex-col md:flex-row  justify-center items-center md:px-20 pb-4 gap-4'>
              <SearchBar searchOnChangeHandler={debouncedResults} />
              <CustomFilter
                options={SelectOptions}
                handleChange={handleChange}
              />
            </div>
            <div className={isHidden}>
              <RadioButton
                radioButtonOptions={radioButtonOptions}
                handleRadioBtnChange={handleRadioBtnChange}
                displayResults={displayResults}
              />
            </div>
          </div>
          <Results
            isLoading={isLoading}
            defaultMsg={noDataMsg}
            data={fetchedData.slice(0, loadedResultsNumber)}
            displayResults={displayResults}
            handleOnClick={handleLoadMoreClick}
            resultsNumber={fetchedData.length}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
