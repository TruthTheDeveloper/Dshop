import dayjs from 'dayjs';
import uuid from 'react-native-uuid';

export const convertToReadableTime = (time: any) => {
  var timestamp = new Date(time).getTime();
  var formattedTime = new Date(timestamp);
  return formattedTime.toLocaleTimeString('en-US', {timeStyle: 'long'});
};

export const convertToTime = (date: any) => dayjs(date).format('h:mm A');

export const generateUniqueId = () => uuid.v4();

export const convertToTimeAndDate = (date: any) =>
  dayjs(date).format('ddd MMM YYYY, h:mm A');


export const validatePassword = (value: string) => {
    const errors: string[] = [];
    if (value.length < 8) errors.push('Password must be at least 8 characters long');
    if (!/[A-Z]/.test(value)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(value)) errors.push('Password must contain at least one lowercase letter');
    if (!/\d/.test(value)) errors.push('Password must contain at least one number');
    if (!/[@$!%*?&]/.test(value)) errors.push('Password must contain at least one special character');
    return errors;
  };

export const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) ? [] : ['Email is not valid'];
  };
