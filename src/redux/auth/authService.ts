import {apiRoutes} from '../../https/apiRoute';
import {make_request} from '../../https/request';

const login = async (payload: object) =>{
  
  const response  = await make_request('post', apiRoutes.login, payload);
  return response
}



const signUp = async (payload: object) => {

  const response = await make_request('post', apiRoutes.signUp, payload);
  return response
};

const AuthService = {
  login,

  signUp,
};

export default AuthService;
