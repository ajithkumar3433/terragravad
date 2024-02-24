import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'
import config from '../../config'
import { IPeriod } from '../../interfaces/interface'

// Define a type for the slice state
interface ProjectState {
  projectCount:number,
  pledgeCount:number,
  raisedMoney:number,
  projects:Array<any>,
  totalCount:number,
  pledge:any,
  pledges:Array<any>,
  search:string
}

// Define the initial state using that type
const initialState: ProjectState = {
  projectCount:0,
  pledgeCount:0,
  raisedMoney:0,
  projects:[],
  totalCount:0,
  pledge:null,
  pledges:[],
  search:''
}

export const projectSlice = createSlice({
  name: 'projects',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
  extraReducers:(builder) => {
    builder.addCase(fetchProjectCount.fulfilled, (state, action)=>{
      if(action.payload.project !==undefined) state.projectCount = action.payload.project
      if(action.payload.pledge !==undefined) state.pledgeCount = action.payload.pledge
      if(action.payload.money !==undefined) state.raisedMoney = action.payload.money
    })
    builder.addCase(fetchProjects.fulfilled, (state, action)=>{
      state.projects = action.payload.projects
      state.totalCount = action.payload.totalCount
    })
    builder.addCase(registerProject.fulfilled, (state, action)=>{
      state.projects = action.payload.projects
    })
    builder.addCase(pledgeProject.fulfilled, (state, action)=>{
      state.pledge = action.payload.pledge
      state.pledges = action.payload.pledges
    })
    builder.addCase(fetchPledgeByProjectID.fulfilled, (state, action)=>{
      state.pledges = action.payload.pledges
    })
    builder.addCase(changeSearch.fulfilled, (state, action)=>{
      state.search = action.payload
    })
  }
})

export const projectsAction = projectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getProjectCount = (state: RootState) => state.project.projectCount
export const getPledgeCount = (state: RootState) => state.project.pledgeCount
export const getRaisedMoney = (state: RootState) => state.project.raisedMoney
export const getProjects = (state: RootState) => state.project.projects
export const getTotalCount = (state: RootState) => state.project.totalCount
export const getPledges = (state: RootState) => state.project.pledges
export const getSearch = (state: RootState) => state.project.search

export default projectSlice.reducer

export const fetchProjectCount = createAsyncThunk(
  'project/count',
  async (data:IPeriod, thunkAPI) => {
    const response = await axios.post(config.baseURL +'project/count', {
      type:data.type,
      period:data.period,
    })
    return response.data
  }
)

export const fetchProjects = createAsyncThunk(
  'project/all',
  async (data:any, thunkAPI) => {
    const query = `${config.baseURL}project?current=${data.currentPage}&pages=${data.projectsPerPage}&mainType=${data.mainType}&subType=${data.subType}&customType=${data.customType}&title=${data.title}&location=${data.location}&active=${data.active}&period=${data.period}`
    const response = await axios.get(query);
    return response.data
  }
)

export const registerProject = createAsyncThunk(
  'project/register',
  async (data:any, thunkAPI) => {
    const response = await axios.post(config.baseURL +'project', data)
    console.log(response.data)
    return response.data
  }
)

export const pledgeProject = createAsyncThunk(
  'pledge/register',
  async (data:any, thunkAPI) => {
    const response = await axios.post(config.baseURL +'pledge', data)
    console.log(response.data)
    return response.data
  }
)

export const fetchPledgeByProjectID = createAsyncThunk(
  'pledges/getByProjectID',
  async (data:any, thunkAPI) => {
    const response = await axios.get(config.baseURL +'pledge/project/'+data.id, data)
    console.log(response.data)
    return response.data
  }
)

export const changeSearch = createAsyncThunk(
  'pledges/search',
  async (data:any, thunkAPI) => {
    console.log(data)
    return data
  }
)

export const registerSubmission = createAsyncThunk(
  'help/register',
  async (data:any, thunkAPI) => {
    const response = await axios.post(config.baseURL +'submission', data)
    console.log(response.data)
    return response.data
  }
)


