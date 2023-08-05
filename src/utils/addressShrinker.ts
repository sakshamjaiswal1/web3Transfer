export const addressShrinker = (address: string) => {
  return `${address.substring(0, 7)}...${address.substring(
    address.length - 7,
    address.length
  )}`;
};

export   const addressValidator = (address: string) => {
  return address?.length === 42;
};
