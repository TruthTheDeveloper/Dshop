import Toast from 'react-native-toast-message';
export type ApiResponse<T> = {
    ok: boolean;
    data?: T;
    originalError?: any;
    problem?: any;
    status?: number;
    headers?:any
  };

  const showToast = (data:any, problem:any) => {
    if(data){
      Toast.show({
        type: 'error',
        text1: data,
      });
    }else if(problem){
      Toast.show({
        type: 'error',
        text1: problem
      });
    }
  }

  
  export const devInstance = async <T>(
    promise: Promise<ApiResponse<T>>,
  ): Promise<{ data: T; headers: any }> => {
    try {
      const {ok, data, problem, headers} = await promise;
      console.log({ok, data, problem, headers} )
      if(problem ){
        showToast(data, problem)
      }
      if (ok && data !== undefined) {
        return {data, headers}
      } else {
        
        throw problem ?? new Error('Request failed');
      }
    } catch (error: any) {
      throw error instanceof Error
        ? error
        : new Error(error?.message ?? 'Request failed');
    }
  };

  



  export const getError = (error: any) => {
    var error =
      (error.response && error.response.data && error.response.data.message) ||
      error.message || error?.payload ||
      error.toString();
  
    return ['NETWORK', 'TIMEOUT'].includes(error?.split('_')[0])
      ? 'Network Error, please check connectivity!'
      : error;
  };