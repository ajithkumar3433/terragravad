import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction, ThunkAction, AnyAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  apis from '../../services'
import axios from 'axios'
import config from '../../config'
import { ISignInState, IUser } from '../../interfaces/interface'

// Define a type for the slice state
interface UserState {
  user:IUser | null,
  isSignin:boolean,
  isSignup:boolean,
  isLoading:boolean,
  accessToken:string
}

// Define the initial state using that type
const initialState: UserState = {
  user:null,
  isSignin:false,
  isSignup:false,
  isLoading:false,
  accessToken:''
}

export const userSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser:(state, action:PayloadAction<any>)=>{
      state.user = action.payload;
      console.log(state.user)
    },
    setSignin:(state, action:PayloadAction<boolean>)=>{
      state.isSignin = action.payload
    },
    setSignup:(state, action:PayloadAction<boolean>)=>{
      state.isSignup = action.payload
    },
    setIsLoading:(state, action:PayloadAction<boolean>)=>{
      state.isLoading = action.payload
    },
    clearUser:(state)=>{
      state.user = null
    },
  },
  extraReducers:(builder) => {
    builder.addCase(signIn.fulfilled, (state, action)=>{
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.isLoading = false
    })
    builder.addCase(updateProfile.fulfilled, (state, action)=>{
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.isLoading = false
    })
  }
})

export const usersAction = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.user.user
export const getIsSignin = (state: RootState) => state.user.isSignin
export const getIsSignup = (state: RootState) => state.user.isSignup
export const getIsLoading = (state: RootState) => state.user.isLoading
export default userSlice.reducer

export const signIn = createAsyncThunk(
  'user/signin',
  async (data:ISignInState, thunkAPI) => {
    await usersAction.setIsLoading(true)
    const response = await axios.post(config.baseURL +'user/signin', {
      email:data.email,
      password:data.password,
    })
    console.log(response.data)
    alert(response.data.message)
    if(response.data.success)await usersAction.setUser(response.data.user)
    return response.data
  }
)

export const signUp =(
  name:string,
  email:string,
  password:string,
  userType:string
):ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      await dispatch(usersAction.setIsLoading(true))
      const response = await apis.signup(name, email, password, userType);
      console.log(response)
      alert(response.message)
      if(response.success)await dispatch(usersAction.setUser(response.user))
      await dispatch(usersAction.setIsLoading(false))
  }
}
export const setSignin =(value:boolean):ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      await dispatch(usersAction.setSignin(value))
  }
}
export const setSignup =(value:boolean):ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      await dispatch(usersAction.setSignup(value))
  }
}

export const setIsLoading =(value:boolean):ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      await dispatch(usersAction.setIsLoading(value))
  }
}
export const clearUser =():ThunkAction<void, RootState, unknown, AnyAction>=>{
  return async(dispatch)=>{
      await dispatch(usersAction.clearUser())
  }
}

export const updateProfile = createAsyncThunk(
  'user/profile',
  async (data:any, thunkAPI) => {
    await usersAction.setIsLoading(true)
    const response = await axios.post(config.baseURL +'user/profile', data)
    alert(response.data.message)
    return response.data
  }
)