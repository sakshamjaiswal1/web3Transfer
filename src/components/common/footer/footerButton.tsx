function FooterButton({ title }: { title?: string }) {
  return (
    <button
      type="button"
      className="border-[1px] border-solid border-[#E7ECEF] rounded-[90px] px-[16px] py-[9px] text-[#1B2022]"
    >
      {title}
    </button>
  );
}

export default FooterButton;
