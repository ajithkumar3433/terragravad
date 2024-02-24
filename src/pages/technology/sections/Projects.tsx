import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  fetchProjects,
  getProjects,
  getTotalCount,
  getSearch
} from '../../../redux/project/projectSlice'
import Pagination from '@mui/material/Pagination'
import config from '../../../config'
import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Star from '../../../assets/images/star.svg'
import Mark from '../../../assets/images/mark.svg'
import Agree from '../../../assets/images/agree.svg'
import DisAgree from '../../../assets/images/disagree.svg'
import { useNavigate } from 'react-router-dom';

const projectsPerPage = [ 2, 4 ,10]
const Projects = () => {
  const navigate = useNavigate()
  const [type, setType] = React.useState<string>('')
  const dispatch = useAppDispatch()
  const totalCount = useAppSelector(getTotalCount)
  const projects = useAppSelector(getProjects)
  const searchWord = useAppSelector(getSearch)
  const [pageCount, setPageCount] = React.useState<number>(projectsPerPage[0])
  const [currentPage, setCurrentPage] = React.useState(1)
  
  const goDetail = (id:string) =>{
    navigate(id)
  }

  React.useEffect(() => {
    dispatch(fetchProjects({
      currentPage: currentPage,
      projectsPerPage: pageCount,
      mainType: 'Tech Design',
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

  return (
    <div className="pt-10 w-full ">
      <div className={`text-3xl lg:text-5xl font-bold text-center mt-3 mb-5 cursor-pointer ${type===''?'text-blue-900':''}`} onClick={()=>setType('')}>Tech Design</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        Explore innovative technology and advancements of tomorrow 
      </div>
      {/* <div className='hidden lg:flex justify-center mt-3 mb-20'>
        <div className='text-base text-[#1C2E63] flex'>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Comics'?'font-bold':''}`} onClick={()=>setType('Comics')}>Explore Comics</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Cartoon'?'font-bold':''}`} onClick={()=>setType('Cartoon')}>Explore Cartoon</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Fashion'?'font-bold':''}`} onClick={()=>setType('Fashion')}>Explore Fashion</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Concept Art'?'font-bold':''}`} onClick={()=>setType('Concept Art')}>Explore Concept Art</div>
            <div className={`px-2 hover:text-[#905794] cursor-pointer ${type==='Wood Art'?'font-bold':''}`} onClick={()=>setType('Wood Art')}>Explore Wood Art</div>
        </div>
      </div> */}
      <div className="pt-10 w-full mb-20">
        {projects && projects.length > 0 &&
          <div>
            <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-10">Featured Projects</div>
            <div>
              <div className="flex justify-center w-full mt-3 relative">
                <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
                <img src={config.imageURL + projects[0].image} alt="ProjectImage" className='w-full z-10 aspect-video' />
                <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
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
              <div className='text-3xl lg:text-[32px] font-bold mt-5 cursor-pointer hover:text-[#54427a]' onClick={()=>goDetail(projects[0]._id)}>{projects[0].title}</div>
              <div className='text-base font-normal mt-3'>{projects[0].description}</div>
              {/* <div className='text-base font-normal mt-3'>By Adam from Millo</div> */}
            </div>
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
                {/* <div className='text-base font-normal mt-3'>By Adam from Millo</div> */}
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
                count={Math.ceil((totalCount?totalCount:1)/pageCount)} 
                page={currentPage} 
                color="primary"
                onChange={(e,value)=>changeCurrentPage(value)}
              />
            </div>
          </div>
        }
        {projects && projects.length === 0 && <div className='flex justify-center italic font-bold text-xl text-gray-600'>No projects</div>}
        {/* <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project3} alt="Project3" className='w-full z-10' />
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
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[32px] font-bold'>Bring an RPG zine to life</div>
          <div className='text-base font-normal mt-3'>Our annual Zine Quest open call bestows creators with a valiant mission: Bring your RPG to life with maps, adventures, monsters, comics, articles, and interviews! Discover projects inspired by old-school tabletop RPGs, like early D&D.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Discover more</button>
        </div>
      </div> */}
        {/* <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project4} alt="Project1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Oleap Pilot: Open-ear Headphones with Best Call</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum  </div>
          <div className='text-base font-normal mt-3'>By Adam from Millo</div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project5} alt="Project2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Oleap Pilot: Open-ear Headphones with Best Call</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum </div>
          <div className='text-base font-normal mt-3'>By Adam from Millo</div>
        </div>
      </div> */}
        {/* <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project6} alt="Project6" className='w-full z-10' />
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
        </div>
        <div className='col-span-2 lg:col-span-1 mt-2'>
          <div className='text-3xl lg:text-[32px] font-bold'>Meet TECH G’s Community Advisory Council</div>
          <div className='text-base font-normal mt-3'>The TECH G Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Meet the Council</button>
        </div>
      </div> */}
        {/* <div className='relative flex justify-center mt-24'>
        <div className='text-3xl lg:text-[32px] font-bold mt-5 text-center'>Meet TECH G’s Community <br /> Advisory Council</div>
        <img src={DoubleBar} alt="DoubleBar" className='absolute opacity-20' />
      </div> */}
        {/* <div className='grid grid-cols-3 gap-10 mt-10 mb-40'>
        <div className='col-span-3 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={Project7} alt="Project1" className='w-full z-10' />
          </div>
          <div className='text-base font-normal mt-3'>The TECH G Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues</div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={Project8} alt="Project1" className='w-full z-10' />
          </div>
          <div className='text-base font-normal mt-3'>The TECH G Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues</div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={Project9} alt="Project1" className='w-full z-10' />
          </div>
          <div className='text-base font-normal mt-3'>The TECH G Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues</div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Projects;