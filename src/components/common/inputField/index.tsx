function InputField({
  type = "text",
  value,
  label,
  placeHolder,
  isError,
  errorMessage,
  isFullWidth,
  className = "",
  onChange,
  onFocus,
}: {
  type?: "text" | "number";
  label: string;
  placeHolder: string;
  value: string | number;
  isError?: boolean;
  errorMessage?: string;
  isFullWidth?: boolean;
  className?: string;
  onChange: (val: string) => void;
  onFocus?: () => void;
}) {
  return (
    <div className={`${isFullWidth ? "w-full" : ""} ${className}`}>
      <label
        htmlFor=""
        className="typo-paragraph text-[#000] flex justify-between items-center"
      >
        <span> {label}</span>
        {errorMessage && isError && (
          <span className="typo-input-error text-[#EF4F5F]">
            {errorMessage}
          </span>
        )}
      </label>

      <input
        value={value}
        type={type}
        placeholder={placeHolder}
        className={`px-[11px] py-[10px] rounded-[12px] border-solid border-[1px] border-[#CCC] mt-[10px] ${
          isFullWidth ? "w-full" : ""
        } placeholder:text:18px placeholder:leading-[18.4px] placeholder:text-[#B2B2B2]`}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }
        }}
      />
    </div>
  );
}

export default InputField;
