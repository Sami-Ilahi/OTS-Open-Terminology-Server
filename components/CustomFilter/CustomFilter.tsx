interface Props {
  options: string[];
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomFilter = ({ options, handleChange }: Props) => {
  return (
    <div className='w-11/12 flex md:w-auto lg:w-1/2 bg-gray-100 p-4 rounded-lg'>
      <label className=' w-32'>Filter By: </label>
      <select
        className='w-full h-full outline-none'
        name='selectFilter'
        onChange={handleChange}
      >
        {options.map(option => (
          <option key={option} value={option} className='capitalize'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
