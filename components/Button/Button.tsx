interface Props {
  btnText: string;
  bgColor?: string;
  hoverColor?: string;
  btnStyle?: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  btnText,
  bgColor,
  hoverColor,
  btnStyle,
  handleOnClick,
}: Props) => {
  return (
    <button
      type='button'
      className={`${btnStyle} inline-block bg-${bgColor} text-sm font-normal capitalize leading-normal text-white  hover:bg-[${hoverColor}] hover:shadow-lg transition  duration-3000 cursor-pointer`}
      onClick={handleOnClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
