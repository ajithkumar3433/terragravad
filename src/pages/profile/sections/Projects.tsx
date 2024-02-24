import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState<string>('projects');
  const changePage =(text:string)=>{
    setPage(text);
    navigate('/profile/'+text)
  }
  return (
    <div className="pt-5 w-full ">
      {/* <div className='grid grid-cols-3'>
        <div className='col-span-3 lg;col-span-1'>
          <img src={Profile1} alt="Profile1" />
        </div>
      </div> */}
      <div className='grid grid-cols-4 mb-20'>
        <div className='col-span-4 lg:col-span-1'>
          <div className={`text-2xl font-medium cursor-pointer ${page===""?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('')}>Profile</div>
          {/* <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="projects"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('projects')}>Saved Projects</div>
          <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="recommend"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('recommend')}>Recommended for you</div>
          <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="following"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('following')}>Following</div>
           */}
          <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="kyc"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('kyc')}>KYC</div>
          {/* <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="settings"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('settings')}>Settings</div>
          <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="messages"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('messages')}>Messages</div>
          <div className={`text-2xl font-medium mt-12 cursor-pointer ${page==="activity"?"text-black":"text-[#B1B1B1]"}`} onClick={()=>changePage('activity')}>Activity</div> */}
        </div>
        <div className='col-span-4 lg:col-span-3'>
          <Outlet />
        </div>
      </div>
    </div> 
  );
}

export default Projects;