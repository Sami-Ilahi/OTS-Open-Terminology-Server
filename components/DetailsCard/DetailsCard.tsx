"use client";
import { useGlobalContext } from "../../app/context/store";

const DetailsCard = () => {
  const { detailsCard } = useGlobalContext();

  /*Properties to display on card details */
  const detailsNames: string[] = [
    "CodeSystem",
    "DefinitionStatusID",
    "PreferredName",
    "FullySpecifiedName",
    "DisplayNamePGOMedMij",
    "Synonyms",
  ];

  /*Check if the object is empty */
  const isObjEmpty = (obj: object) => {
    return Object.keys(obj).length;
  };
  return (
    <>
      {isObjEmpty(detailsCard) ? (
        <div className='block w-11/12  rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
          <div className='relative overflow-x-auto p-5'>
            <table className='table-fixed w-full text-sm text-left text-gray-500  border'>
              <tbody>
                {detailsNames.map((name, i: number) => {
                  if (name !== "Synonyms") {
                    return (
                      <tr
                        key={i}
                        className='bg-white border-2 border-gray-100 '
                      >
                        <td className='xl:p-5 md:p-1 p-2 border-2 border-gray-100 font-semibold text-gray-700 xl:text-[90%] text-[78%]'>
                          {name}
                        </td>
                        <td className='xl:p-5 md:p-1 p-2 border-2 border-gray-100 xl:text-[100%] text-[78%]'>
                          {detailsCard[name]}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr
                        key={i}
                        className='bg-white border-2 border-gray-100 '
                      >
                        <td className='xl:p-5 md:p-1 p-2 border-2 border-gray-100 text-gray-700 font-semibold xl:text-[90%] text-[78%]'>
                          {name}
                        </td>
                        {detailsCard[name].length ? (
                          <td className='border-2 border-gray-100 md:p-1 p-2 flex flex-wrap'>
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside '>
                              {detailsCard[name].map(
                                (item: string, j: number) => (
                                  <li
                                    className='xl:text-[100%] text-[78%]'
                                    key={j}
                                  >
                                    {" "}
                                    {item}{" "}
                                  </li>
                                )
                              )}
                            </ul>
                          </td>
                        ) : null}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailsCard;
