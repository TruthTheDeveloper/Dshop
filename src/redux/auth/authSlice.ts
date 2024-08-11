import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getError} from '../../https/devInstance';
import {handleRequest} from '../../https/httpsHelper';
import {setAccessToken} from '../../https/request';
import AuthService from './authService';


const initialState: any = {
  userSignInCredentials: {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    signinType: "password",
    spokenLanguage: "7d0f00aa-1028-4871-abc1-0237dff35356",
    userType: "learner",
    country:{
      name: "Nigeria",
      code: "NG",
      flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"
    }
  },
  loading: false,
  signInSuccess: false,
  signInFailure: false,
  signUpSuccess: false,
  signUpFailure: false,
  user: null,
  seenAuser: false,
  
};

export const login = createAsyncThunk(
  'auth/login',
  async (payload: any, thunkAPI) => {
    try {

      return await handleRequest(AuthService.login(payload));
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  },
);



export const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload: any, thunkAPI) => {
    try {
      
      // const {} = payload
      return await handleRequest(AuthService.signUp(payload))
    } catch (error: any) {
      const err = thunkAPI.rejectWithValue(getError(error));
      return err
    }
  },
);



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: any) => {
      state.loading = null;
      state.signInSuccess = false;
      state.signInFailure = false;
    },


    seenAuser: (state: any, action) => {
      state.seenAuser = action.payload;
    },


    addFirstName: (state: any, action) => {
      state.userSignInCredentials.firstName = action.payload;
    },

    addLastName: (state: any, action) => {
      state.userSignInCredentials.lastName = action.payload;
    },

    addEmail: (state: any, action) => {
      state.userSignInCredentials.email = action.payload;
    },

    addPassword: (state: any, action) => {
      state.userSignInCredentials.password = action.payload;
    },
    addConfirmPassword: (state: any, action) => {
      state.userSignInCredentials.confirmPassword = action.payload;
    },

  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state: any) => {
        state.loading = true;
        state.tokenSentSuccesful = false;
      })
      .addCase(login.fulfilled, (state: any, actions) => {
        state.loading = false;
        state.signInSuccess = true;
        state.seenAuser = true
        setAccessToken(actions.payload.headers.authorization);
      })
      .addCase(login.rejected, (state: any, actions) => {
        
        state.loading = false;
        state.signInFailure = true;
      })
      .addCase(signUp.pending, (state: any, actions) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state: any, actions) => {
        state.loading = false;
        state.signUpSuccess = true;
        state.user = actions?.payload.data;
        // setAccessToken(actions?.payload.headers.authorization);
      })
      .addCase(signUp.rejected, (state: any, actions) => {

        state.loading = false;
        state.signUpFailure = true;
      });
  },
});

export const {
  reset,
  addFirstName,
  addEmail,
  addLastName,
  addPassword,
  seenAuser,
} = authSlice.actions;
export default authSlice.reducer;
