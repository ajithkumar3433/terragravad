import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  fetchProjects,
  getProjects,
  getTotalCount,
  getSearch
} from '../../../redux/project/projectSlice'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination'
import config from '../../../config'
import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Star from '../../../assets/images/star.svg'
import Mark from '../../../assets/images/mark.svg'
import Agree from '../../../assets/images/agree.svg'
import DisAgree from '../../../assets/images/disagree.svg'

const projectsPerPage = [ 2, 4 ,10]
const Projects = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const totalCount = useAppSelector(getTotalCount)
  const projects = useAppSelector(getProjects)
  const searchWord = useAppSelector(getSearch)
  const [pageCount, setPageCount] = React.useState<number>(projectsPerPage[0])
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    dispatch(fetchProjects({
      currentPage: currentPage,
      projectsPerPage: pageCount,
      mainType: '',
      subType: '',
      customType: '',
      title: searchWord,
      location: '',
      active: 'Yes',
      period: ''
    })).then((response: any) => {
      console.log(response.payload)
    })
  }, [searchWord, currentPage, pageCount, dispatch])

  const changeCurrentPage = (value:number) =>{
    setCurrentPage(value)
  }

  const changePageCount = (value:number) =>{
    setPageCount(Number(value))
    setCurrentPage(1)
  }
  const goDetail = (id:string) =>{
    navigate(id)
  }
  return (
    <div className="pt-0 w-full ">
      <div className="pt-10 w-full mb-20">
        {projects && projects.length > 0 &&
          <div>
            <div className='grid grid-cols-2 gap-10 mt-20'>
              {projects.map((project:any)=>{
                return <div className='col-span-2 lg:col-span-1' key={project._id}>
                <div className="flex justify-center w-full mt-3 relative">
                  <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
                  <img src={config.imageURL + project.image} alt="Project1" className='w-full z-10 aspect-video' />
                  <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -right-[15px] -bottom-[15px]' />
                  <div className='flex gap-4 absolute z-20 right-3 bottom-3'>
                    <div className='flex items-center justify-center bg-white w-[35px] h-[35px] hover: rounded-full cursor-pointer drop-shadow-md'>
                      <img src={Star} alt="Star" className='w-[25px]' />
                    </div>
                    <div className='flex items-center justify-center bg-white w-[35px] h-[35px] rounded-full cursor-pointer'>
                      <img src={Mark} alt="Star" className='w-[15px]' />
                    </div>
                    <div className='flex items-center justify-center bg-white w-[35px] h-[35px] rounded-full cursor-pointer'>
                      <img src={Agree} alt="Star" className='w-[20px]' />
                    </div>
                    <div className='flex items-center justify-center bg-white w-[35px] h-[35px] rounded-full cursor-pointer'>
                      <img src={DisAgree} alt="Star" className='w-[20px]' />
                    </div>
                  </div>
                </div>
                <div className='text-3xl lg:text-[32px] font-bold mt-5 cursor-pointer hover:text-[#54427a]' onClick={()=>goDetail(project._id)}>{project.title}</div>
                <div className='text-base font-normal mt-3'>{project.description}</div>
              </div>
              })}
            </div>
            <div className='flex items-center justify-between w-full mt-16'>
              <div className='flex items-center gap-2'>
                <div className='font-semibold whitespace-nowrap'>Projects per page: </div>
                <select name="" id="" className='px-1 text-lg h-[30px] focus-visible:border-1 focus-visible:border-gray-500 focus-visible:outline-none w-full border border-gray-200 w-[50px]' value={pageCount} onChange={(e)=>changePageCount(Number(e.target.value))}>
                  {projectsPerPage.map((item:number)=>{
                    return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <Pagination 
                count={Math.ceil(totalCount/pageCount)} 
                page={currentPage} 
                color="primary"
                onChange={(e,value)=>changeCurrentPage(value)}
              />
            </div>
          </div>
        }
        {projects && projects.length === 0 && <div className='flex justify-center italic font-bold text-xl text-gray-600'>No projects</div>}
      </div>
    </div>
  );
}

export default Projects;