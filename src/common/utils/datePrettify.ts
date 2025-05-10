export const datePrettify = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
