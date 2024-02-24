import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  fetchProjects,
  getProjects,
  getTotalCount,
  getSearch
} from '../../../redux/project/projectSlice'
import Pagination from '@mui/material/Pagination'
import Project from '../../../components/project'

const projectsPerPage = [ 2, 4 ,10]
const Projects = () => {
  const [type, setType] = React.useState<string>('')
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
      mainType: 'Art',
      subType: type,
      customType: '',
      title: searchWord,
      location: '',
      active: 'Yes',
      period: ''
    })).then((response: any) => {
      console.log(response.payload)
    })
  }, [searchWord, currentPage, pageCount, type, dispatch])

  const changeCurrentPage = (value:number) =>{
    setCurrentPage(value)
  }
  const changePageCount = (value:number) =>{
    setPageCount(Number(value))
    setCurrentPage(1)
  }
  const changeType = (value:string) => {
    setType(value)
    setCurrentPage(1)
  }

  return (
    <div className="pt-10 w-full ">
      <div className={`text-3xl lg:text-5xl font-bold text-center mt-3 mb-5 cursor-pointer ${type===''?'text-blue-900':''}`} onClick={()=>setType('')}>Art</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        Explore Artists and their creative work
      </div>
      <div className='hidden lg:flex justify-center mt-3 mb-20'>
        <div className='text-base text-[#1C2E63] flex'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Theater'?'font-bold':''}`} onClick={()=>changeType('Theater')}>Explore Theater</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Dance'?'font-bold':''}`} onClick={()=>changeType('Dance')}>Explore Dance</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Photography'?'font-bold':''}`} onClick={()=>changeType('Photography')}>Explore Photography</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Sculpting'?'font-bold':''}`} onClick={()=>changeType('Sculpting')}>Explore Sculpting</div>
        </div>
      </div>
      <div className="pt-10 w-full mb-20">
        {projects && projects.length > 0 &&
          <div>
            <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-10">Featured Projects</div>
            <Project project={projects[0]} featured={true} />
            <div className='grid grid-cols-2 gap-10 mt-20'>
              {projects.map((project:any)=>{
                return <Project project={project} />
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