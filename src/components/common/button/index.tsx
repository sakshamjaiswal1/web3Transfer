function Button({ title, onClick }: { title?: string; onClick: () => void }) {
  return (
    <button
      type="button"
      className="rounded-[90px] py-[6px] px-[19px]  text-white bg-green"
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
}

export default Button;
