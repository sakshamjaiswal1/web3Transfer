
function TokenBalanceDisplayBox({
  className,
  tokenBalance,
}: {
  className?: string;
  tokenBalance: {
    value: number;
    isDisplay: boolean;
    isLoading: boolean;
  };
}) {
  return (
    <div
      className={`max-w-[540px] w-full mx-auto form-box-shadow rounded-[12px] bg-[#F4F6F8] pt-[61px] ${className} `}
    >
      <div className="flex w-full items-center justify-between py-[20px] bg-[#fff] px-[70px] border-t-[1px]  border-b-[1px] border-solid border-[#ccc] rounded-b-[12px]">
        <p className="typo-input">Token balance</p>{" "}
        <p className="typo-token-balance">{tokenBalance.value}</p>
      </div>
    </div>
  );
}

export default TokenBalanceDisplayBox;
