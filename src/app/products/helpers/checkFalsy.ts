// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkFalsy = (value: any) => {
  if (!value || value == 0 || value === undefined || value === null) {
    return;
  }

  return value;
};

export default checkFalsy;
