/**
 *
 * @param date
 * @returns string
 */
export const converDateToString = (date: Date): string => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
};
