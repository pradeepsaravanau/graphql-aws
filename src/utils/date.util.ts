import dayjs from "dayjs";

export const now = dayjs();
const DEFAULT_DATE_FORMAT = 'DD-MM-YYYY';
const DEFAULT_DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm';

export const formatDate = (date: string, format: string = DEFAULT_DATE_FORMAT) => dayjs(date).format(format);
export const formatDateTime = (dateTime: string , format: string = DEFAULT_DATE_TIME_FORMAT) => dayjs(dateTime).format(format);