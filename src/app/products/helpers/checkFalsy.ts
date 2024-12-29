/* eslint-disable @typescript-eslint/no-explicit-any */
const checkFalsy = (value: any) => {
  
  if (value == null || value === false || value == 0 ) {
    return undefined;
  }

  return value;
};

export default checkFalsy;
