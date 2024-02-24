import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Landing from './landing';
import Art from './art';
import Illustration from './graphic';
import TechDesign from './technology';
import Videography from './videography';
import Cuisine from './cuisine';
import Game from './game';
import Music from './entertainment';
import Publication from './publication';
import AboutUs from './about';
import Magazine from './magagine';
import Charter from './charter';
import Blog from './blog';
import Stats from './stats';
import Press from './press';
import Jobs from './jobs';
import Newsletter from './newsletter';
import Research from './research';
// import Rules from './rules';
import Funds from './funds';
import Project from './project';
// import Dashboard from './dashboard';
import KYC from './kyc';
import Profile from './profile'
import Detail  from './detail'
import Info from './info';
import Explore from './explore'
import Help from './help'

import {
  setSignin,
  getIsSignin,
  getIsLoading,
  getIsSignup,
  signIn,
  setSignup,
  signUp,
} from '../redux/user/userSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CircleLoader from "react-spinners/ClipLoader";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
  zIndex: '100'
};
const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const isSignin = useAppSelector(getIsSignin)
  const isSignup = useAppSelector(getIsSignup)
  const isLoading = useAppSelector(getIsLoading)

  const [isWelcome, setIsWelcome] = React.useState<boolean>(true)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [registerEmail, setRegisterEmail] = React.useState<string>('')
  const [registerName, setRegisterName] = React.useState<string>('')
  const [registerPassword, setRegisterPassword] = React.useState<string>('')
  const [userType, setUserType] = React.useState<string>('Investor')

  const hideSignin = () => {
    dispatch(setSignin(false))
  }
  const goRegister = () => {
    dispatch(setSignin(false))
    dispatch(setSignup(true))
  }
  const goLogin = () => {
    dispatch(setSignin(true))
    dispatch(setSignup(false))
  }
  const hideSignup = () => {
    dispatch(setSignup(false))
  }
  const showLogin = () =>{
    dispatch(setSignin(true));
    dispatch(setSignup(false));
    setIsWelcome(false);
  }
  const showSignup = () =>{
    dispatch(setSignin(false));
    dispatch(setSignup(true));
    setIsWelcome(false);
  }
  const hideWelcome = () => {
    setIsWelcome(false)
  }
  const signInFunc = async () => {
    await dispatch(signIn({
      email: email,
      password: password
    }))
    dispatch(setSignin(false))
  }
  const signUpFunc = async () => {
    if (registerEmail === "" || registerName === "" || registerPassword === "") {
      alert("Please fill out all fields")
      return
    }
    await dispatch(signUp(registerName, registerEmail, registerPassword, userType))
    dispatch(setSignup(false))
  }
  return (
    <div className="App relative">
      {isLoading && <div className='fixed w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center lg:px-5 z-50'>
        <CircleLoader
          color={'#00FFFF'}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>}
      {isSignin && <div className='fixed w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center lg:px-5 z-40'>
        <div className="w-full bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center h-screen" onClick={() => hideSignin()}></div>
        <div className='bg-white rounded-lg w-full lg:w-[500px] p-5 z-40'>
          <div className='w-full flex items-center justify-center text-2xl font-bold text-black mb-5'>
            Sign in to <span className='text-purple-700 italic ml-1 text-3xl'>Terragrav</span>
          </div>
          <div className='mb-3'>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px]"
              placeholder="Enther your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-1'>
            <input type="password" id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px] "
              placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex justify-between px-2">
            <div className="flex items-center">
              <input type="checkbox"
                className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300 mr-2 cursor-pointer" />
              <span>Remember me</span>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              Forgot password?
            </div>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className="px-2">
              Don't have an account? <span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer" onClick={() => goRegister()}>
                Create one
              </span>
            </div>
            <div className='bg-blue-700 hover:bg-blue-800 cursor-pointer w-[120px] h-[40px] rounded-lg text-lg text-white flex items-center justify-center font-semibold' onClick={() => signInFunc()}>
              Sign in
            </div>
          </div>
        </div>
      </div>}
      {isSignup && <div className='fixed w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center lg:px-5 z-40'>
        <div className="w-full bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center h-screen" onClick={() => hideSignup()}></div>
        <div className='bg-white rounded-lg w-full lg:w-[500px] p-5 z-40'>
          <div className='w-full flex items-center justify-center text-2xl font-bold text-black mb-5'>
            Register to <span className='text-purple-700 italic ml-1 text-3xl'>Terragrav</span>
          </div>
          <div className='mb-3'>
            <div className='mb-1 font-semibold px-1'>Full name</div>
            <input type="text" id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px]"
              placeholder="Enther your email" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <div className='mb-1 font-semibold px-1'>Email</div>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px]"
              placeholder="Enther your email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
          <div className='mb-1 font-semibold px-1'>Password</div>
            <input type="password" id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px] "
              placeholder="Enter your password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
          </div>
          <div className='mb-1 font-semibold px-1'>User type</div>
          <div className='mb-1'>
            <select id="priority"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[48px] "
              value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="Idea owner">Idea owner</option>
              <option value="Investor">Investor</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className="px-2">
              Already have an account? <span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer" onClick={() => goLogin()}>
                Log in
              </span>
            </div>
            <div className='bg-blue-700 hover:bg-blue-800 cursor-pointer w-[120px] h-[40px] rounded-lg text-lg text-white flex items-center justify-center font-semibold' onClick={() => signUpFunc()}>
              Sign up
            </div>
          </div>
        </div>
      </div>}
      {isWelcome && <div className='fixed w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center lg:px-5 z-40'>
        <div className="w-full bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center h-screen" onClick={() => hideWelcome()}></div>
        <div className='bg-white  w-full lg:w-[500px] z-40 transition ease-in-out delay-150 duration-300'>
          <div className='w-full flex items-center justify-center text-2xl font-bold text-white mb-5 mt-5'>
            <div className='bg-purple-700 py-1 px-3'>Welcome Terragrav</div>
          </div>
          <div className='px-10 mt-5'>
            <span className='font-bold text-purple-500 italic text-lg'>Terragrav</span> is a crowdfunding network that connects those whith similar interests who want to set  other ideas come to life.
            <div>We have opened <span className='font-bold text-purple-500 italic text-lg'>Terragrav</span> for Beta testing.</div>
            <div>You can use <span className='font-bold text-purple-500 italic text-lg'>Terragrav</span> to:</div>
            <div>- Fund  projects</div>
            <div>- Connect and watch ideas  come to life</div>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div className='bg-purple-700 hover:bg-purple-500 active:bg-purple-800 cursor-pointer w-[100px] h-[30px] text-white flex items-center justify-center font-medium'  onClick={() => showLogin()}>
              Log in
            </div>
            <div className='bg-purple-700 hover:bg-purple-500 active:bg-purple-800 cursor-pointer w-[100px] h-[30px] text-white flex items-center justify-center font-medium' onClick={() => showSignup()}>
              Sign up
            </div>
          </div>
        </div>
      </div>}
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/explore">
          <Route index element={<Explore />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/art">
          <Route index element={<Art />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/illustration">
          <Route index element={<Illustration />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/techdesign">
          <Route index element={<TechDesign />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/film">
          <Route index element={<Videography />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/food">
          <Route index element={<Cuisine />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/game">
          <Route index element={<Game />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/music">
          <Route index element={<Music />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/publication">
          <Route index element={<Publication />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/aboutus">
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="/magazine">
          <Route index element={<Magazine />} />
        </Route>
        <Route path="/charter">
          <Route index element={<Charter />} />
        </Route>
        <Route path="/blog">
          <Route index element={<Blog />} />
        </Route>
        <Route path="/help">
          <Route index element={<Help />} />
        </Route>
        <Route path="/newsletter">
          <Route index element={<Newsletter />} />
        </Route>
        <Route path="/stats">
          <Route index element={<Stats />} />
        </Route>
        <Route path="/press">
          <Route index element={<Press />} />
        </Route>
        <Route path="/jobs">
          <Route index element={<Jobs />} />
        </Route>
        <Route path="/research">
          <Route index element={<Research />} />
        </Route>
        <Route path="/rules">
          <Route index element={<Publication />} />
        </Route>
        <Route path="/funds">
          <Route index element={<Funds />} />
        </Route>
        <Route path="/project">
          <Route index element={<Project />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Info />} />
          <Route path="projects" element={<Project />} />
          <Route path="kyc" element={<KYC />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;