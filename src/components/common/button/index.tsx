import whiteLoader from "../../../assets/loader/white-loader.svg";

function Button({
  title,
  onClick,
  isDisabled,
  isLoading,
}: {
  title?: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-[90px] py-[6px] px-[19px] hover:opacity-80 hover:scale-[1.08] transition-all ease-in-out duration-100 text-white bg-green cursor-pointer flex items-center gap-x-[10px] ${
        isDisabled || isLoading ? "pointer-events-none opacity-50" : ""
      } `}
      onClick={() => onClick()}
      disabled={isDisabled}
    >
      <span>{title}</span>
      {isLoading && (
        <img src={whiteLoader} alt="" className="h-[20px] w-[20px]" />
      )}
    </button>
  );
}

export default Button;
