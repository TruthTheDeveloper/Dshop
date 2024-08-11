import NetInfo from '@react-native-community/netinfo';
import { create } from 'apisauce'
import {devInstance, getError} from './devInstance';

const apiClient = create({
  baseURL: 'https://muta-app.fastgenapp.com/',
  responseType: 'json',
  timeout: 10000,
});

export let accessToken: string | undefined;

// Where do i use dis
export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const make_request = async (
  method: 'post' | 'get' | 'put' | 'patch' | 'delete' /*| add more methods  */,
  endpoint: string,
  payload?: object,
) => {
  const netInfoState = await NetInfo.fetch();


  if (netInfoState.isConnected) {
    // User is online, proceed with the request
    try {
      // add the token to the headers if it's available
      const baseHeaders: any = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      if (accessToken) {
        baseHeaders.Authorization = `${accessToken}`;
      }
      return await devInstance(
        
        apiClient[method](endpoint, payload, {headers: baseHeaders}),
      );
    } catch (error) {
      if (
        getError(error)
          .toLowerCase()
          .includes(('Unauthorized' || 'Access' || 'denied').toLowerCase())
      ) {
      dispatchLogout();
      }
      return error;
    }
  } else {
    // User is offline, handle accordingly
    throw new Error("You're offline");
  }
};


function dispatchLogout() {
    throw new Error('Function not implemented.');
}
// apiClient.addResponseTransform(response => {
//     // Handle 401 Unauthorized error
//     if (
//       response.data.error &&
//       (response.data.error.name === 'TokenExpiredError' ||
//         response.data.error.message === 'jwt expired' ||
//         response.data.error.expiredAt ||
//         response.data.message === 'Access denied, Unauthorized attempt')
//     ) {
//       dispatchLogout();
//     }
//   });