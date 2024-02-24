import React from 'react'
import Search from '../assets/images/search.svg'
import Assassin from '../assets/images/assassin.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  getUser,
  setSignin,
  clearUser
} from '../redux/user/userSlice'
import {
  changeSearch
} from '../redux/project/projectSlice'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import config from '../config'
import SideBar from './sidebar'
import './Header.css'
const Header = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(getUser)
  const [isMenu, setIsMenu] = React.useState<Boolean>(false)
  const [avatar, setAvatar] = React.useState<any>(Assassin)
  const [searchWord, setSearchWord] = React.useState<string>('')
  const menuRef = React.useRef(null)

  const showSignin = () =>{
    console.log('showSignin')
    dispatch(setSignin(true))
  }
  const goExplore = () =>{
    setIsMenu(false)
    navigate('/explore')
  }
  const goProfile = () =>{
    setIsMenu(false)
    navigate('/profile')
  }
  const goSetting = () =>{
    setIsMenu(false)
    navigate('/setting')
  }
  const logout = () =>{
    setIsMenu(false)
    dispatch(clearUser())
    navigate('/')
  }
  const changeSearchWord = (value:string) =>{
    setSearchWord(value)
    dispatch(changeSearch(value))
  }
  React.useEffect(()=>{
    const hideMenu = (e:any) =>{
      if(menuRef.current&&!(menuRef.current as any).contains(e.target)){
        setIsMenu(false)
      }
    }
    document.addEventListener('click', hideMenu)
    return (()=>{
      document.removeEventListener('click', hideMenu)
    })
  })
  React.useEffect(()=>{
    setAvatar(user?.avatar?config.imageURL+user?.avatar:Assassin)
  }, [user])
  return (
    <header className="fixed w-full px-5 lg:px-40 bg-[#F5F5F5] z-30">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className='flex justify-center items-center relative py-4'>
        <Link to='/'>
          {/* <img src={Logo} alt="Logo" width="170px" className='cursor-pointer' /> */}
          <div className='text-[#54427a] font-black text-4xl italic'>Terragrav</div>
        </Link>
        <div className='absolute left-0 items-center hidden lg:flex'>
          <div className='text-xs font-medium text-[#1E1E1E] hover:text-purple-600 mr-5 cursor-pointer' onClick={()=>goExplore()}>
            Explore
          </div>
          {user?.priority === 'Idea owner' && <Link to='/project'>
          <button className="bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[35px] w-[162px] text-center">Start a project</button>
          </Link>}
        </div>
        <div className='absolute right-0 items-center hidden lg:flex'>
          <div className='flex items-center px-5 relative'>
            <div className='text-xs text-[#1C2E63] font-medium'>
              <input type='text' placeholder='Search' className="placeholder-[#1C2E63] bg-[#F5F5F5] text-xs pl-2 h-[30px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none focus-visible:bg-gray-200 w-[150px] " name='firstname' value={searchWord} onChange={(e)=>changeSearchWord(e.target.value)} />
            </div>
            <img src={Search} alt="Search" className='absolute right-7' />
          </div>
          {user && 
            <div className='relative' ref={menuRef}>
              <div className='flex items-center gap-4 cursor-pointer relative' onClick={()=>setIsMenu(!isMenu)}>
                <img src={avatar} alt="Avatar" className='h-[50px] w-[50px] rounded-full border-2 border-blue-900 object-cover'  />
                <div className='font-medium'>{user.name}</div>
                {user?.priority === 'Business' &&<div className='absolute text-xs bg-blue-500 px-1 text-white rounded top-0 left-10 font-medium'>Business</div>}
              </div>
              {isMenu && <div className='absolute w-[120px] shadow-lg pt-1 bg-gray-100 left-[0px]'>
                <div className='px-2 py-1 border-b border-gray-200 hover:bg-blue-300 cursor-pointer' onClick={()=>goProfile()}>
                  Profile
                </div>
                <div className='px-2 py-1 border-b border-gray-200 hover:bg-blue-300 cursor-pointer' onClick={()=>goSetting()}>
                  Setting
                </div>
                <div className='px-2 py-1 hover:bg-blue-300 cursor-pointer' onClick={()=>logout()}>
                  Logout
                </div>
              </div>}
            </div>   
          }   
          {!user && <div className='cursor-pointer font-semibold hover:text-blue-700' onClick={()=>showSignin()}>Log in</div>}   
        </div>
      </div>
      <div className='hidden lg:flex justify-center mt-3 mb-3'>
        <div className='text-base text-[#1C2E63] flex'>
          <Link to='/art'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/art'?'font-bold':''}`}>Arts</div>
          </Link>
          <Link to='/illustration'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/illustration'?'font-bold':''}`}>Illustration</div>
          </Link>
          <Link to='/techdesign'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/techdesign'?'font-bold':''}`}>Tech Design</div>
          </Link>
          <Link to='/film'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/film'?'font-bold':''}`}>Film</div>
          </Link>
          <Link to='/food'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/food'?'font-bold':''}`}>Food</div>
          </Link>
          <Link to='/game'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/game'?'font-bold':''}`}>Games</div>
          </Link>
          <Link to='/music'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/entertainment'?'font-bold':''}`}>Music</div>
          </Link>
          <Link to='/publication'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname==='/publication'?'font-bold':''}`}>Publishing</div>
          </Link>
        </div>
      </div>  
    </header>
  )
}

export default Header
