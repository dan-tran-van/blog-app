export function formatFullDate(isoString: string) {
  const option: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  };
  const dateTimeObj = new Date(isoString);
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", option);
  return dateTimeFormat.format(dateTimeObj).toUpperCase();
}

export function formatDateMonth(isoString: string) {
  const option: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const dateTimeObj = new Date(isoString);
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", option);
  return dateTimeFormat.format(dateTimeObj).toUpperCase();
}
