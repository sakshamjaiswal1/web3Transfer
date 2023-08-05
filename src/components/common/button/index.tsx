function Button({
  title,
  onClick,
  isDisabled,
}: {
  title?: string;
  onClick: () => void;
  isDisabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="rounded-[90px] py-[6px] px-[19px] hover:opacity-80 hover:scale-[1.08] transition-all ease-in-out duration-100 text-white bg-green cursor-pointer"
      onClick={() => onClick()}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
}

export default Button;
