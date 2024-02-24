import React from 'react'
import {
  getProjects,
  pledgeProject,
  getPledges,
  fetchPledgeByProjectID
} from '../../redux/project/projectSlice'
import {
  getUser
} from '../../redux/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import config from '../../config'
import moment from 'moment'

const Projects = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const projects = useAppSelector(getProjects)
  const pledges = useAppSelector(getPledges)
  const user = useAppSelector(getUser)
  const [pledgeAmount, setPledgeAmount] = React.useState<number>(0)
  const [currentFunding, setCurrentFunding] = React.useState<number>(3200)
  const [pledgeCount, setPledgeCount] = React.useState<number>(15)
  const [isAfter, setIsAfter] = React.useState<boolean>(true)
  const currentProject = projects.filter((project:any)=> project._id === id)[0]
  
  const pledge = async () =>{
    if(pledgeAmount < currentProject.minimumValue){
      alert('You should pledge more than $'+currentProject.minimumValue)
      return
    }
    console.log(user)
    const response = await dispatch(pledgeProject({
      user_id: user?.id,
      project_id: id,
      amount: pledgeAmount
    }))

    alert(response.payload.message)
  }
  React.useEffect(()=>{
    dispatch(fetchPledgeByProjectID({
      id:id
    })).then((res)=>{
      console.log(res)
    })
    const now = moment(new Date()).utc()
    const endDate = moment(currentProject.endDate).utc()
    setIsAfter(endDate.isAfter(now))
    window.scrollTo({top: 0, behavior: 'smooth'})
  },[dispatch, currentProject.endDate, id])
  React.useEffect(()=>{
    let funding = 0
    let numberOfPledge = 0
    pledges?.map((pledge:any)=>{
      funding+=pledge.amount
      numberOfPledge++
      return pledge
    })
    setCurrentFunding(funding)
    setPledgeCount(numberOfPledge)
  },[pledges])
  return (
    <div className="pt-40 w-full px-16">
      <div className='lgflex justify-center pt-3 text-4xl font-bold relative px-3'>
        {currentProject.title} (${currentProject.funding})
        <span className='text-base font-medium text-blue-500 italic ml-3'>{currentProject.location}</span>
        <div className='lg:absolute text-base lg:right-0 top-[30px] font-medium pr-3'>
          {currentProject.startDate.replaceAll('-','/')} ~ {currentProject.endDate.replaceAll('-','/')}
        </div>
      </div>
      <div className='flex justify-between text-gray-500 mb-4 px-3'>
        <div>
          {currentProject.mainType}/{currentProject.customType}{currentProject.customType===""?"":"/"+currentProject.customType}
        </div>
        <div className='flex gap-3 items-center'>
          <div className={`${(currentProject.funding <= currentFunding || !isAfter)?'bg-green-500':'bg-blue-500'} px-2 rounded text-white text-sm h-[22px] flex items-center`}>{(currentProject.funding <= currentFunding || !isAfter)?'Done':'In progress'}</div>
          <div>Current funding: <span className='text-blue-500 font-bold text-lg italic'>${currentFunding}</span></div>
          <div>Number of Pledge: <span className='text-green-500 font-bold text-lg italic'>{pledgeCount}</span></div>
        </div>
      </div>
      <div className='w-full'>
        <img src={config.imageURL + currentProject.image} alt="currentProject" className='rounded-lg w-full aspect-video' />
      </div>
      <div className='mt-5 py-5 px-5 bg-white rounded-lg'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-xl mb-2'>Description</div>
          <a href={currentProject.video} target="_blank" rel="noreferrer" className='font-normal text-sm mb-2 bg-blue-500 hover:bg-green-500 cursor-pointer rounded px-2 text-white'>Watch Video</a>
        </div>
        <div>{currentProject.description}</div>
      </div>
      <div className='mt-5 py-5 px-5 bg-white rounded-lg'>
        <div className='font-bold text-xl mb-2'>Reward</div>
        <div>{currentProject.reward}</div>
      </div>
      <div className='mt-5 py-5 px-5 bg-white rounded-lg'>
        <div className='font-bold text-xl mb-2'>Story</div>
        <div>{currentProject.story}</div>
      </div>
      <div className='mt-5 py-5 px-5 bg-white rounded-lg'>
        <div className='font-bold text-xl mb-2'>Collaborators</div>
        <div>{currentProject.collaborators}</div>
      </div>
      {user && <div className={`mt-5 py-5 px-5 bg-white rounded-lg ${currentProject.funding > currentFunding?'':'mb-10'}`}>
        <div className='font-bold text-xl mb-2'>My pledge history about this project</div>
        <div>
          {pledges?.filter((item:any)=> item.user_id === user.id).length === 0 && <div className='italic text-gray-400'>No histories</div>}
          {pledges?.filter((item:any)=> item.user_id === user.id).map((pledge:any, index:number)=>{
            return <div key={pledge._id} className='w-full flex gap-5'>
              <div>{index+1}</div>
              <div>${pledge.amount}</div>
              <div>{pledge.createdAt.split('T')[0]+ ' ' + pledge.createdAt.split('T')[1].split('.')[0]}</div>
            </div>
          })}
        </div>
      </div>}
      {user && currentProject.funding > currentFunding && isAfter &&<div className='mt-5 mb-10 py-5 px-5 bg-rose-300 rounded-lg drop-shadow-lg'>
        <div className='font-bold text-xl mb-2 text-center'>
          Pledge <span className='text-base font-normal'>(Minimum pledge amount: {currentProject.minimumValue})</span>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='whitespace-nowrap font-bold'>Pledge amount:</div>
        <div className='w-full relative'>
        <input type='number' className='w-full pl-5 text-lg h-[40px] focus-visible:border-1 focus-visible:border-purple-500 focus-visible:outline-none w-full border border-purple-50 px-4' placeholder={'Minimum $'+currentProject.minimumValue} onChange={(e)=>setPledgeAmount(Number(e.target.value))} min={currentProject.minimumValue} />
        <div className='absolute top-2 left-2'>$</div>
        </div>
        </div>
        <div className='flex items-center justify-center mt-3'>
          <button className='bg-green-700 hover:bg-green-600 h-[48px] text-white px-10 rounded-lg' onClick={()=>pledge()}>
            Pledge
          </button>
        </div>
      </div>}
    </div>
  );
}

export default Projects;