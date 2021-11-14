export const dateStringToDate = (date: string): Date => {
  // '29/10/2021' --> Date object

  const dateParts = date.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // create Date object (year, month(0 index), date)
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
