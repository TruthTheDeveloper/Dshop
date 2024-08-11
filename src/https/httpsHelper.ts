export const handleRequest = async (promise: Promise<any>): Promise<any> => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const response = await promise;

      // check if data status is true, if it is true, then response has data else response maybe fullfilled but has an error
      if (!response.data?.error) {
        resolve(response);
      } else {
        reject(response);
      }
    } catch (error) {

      reject(error);
    }
  });
};
