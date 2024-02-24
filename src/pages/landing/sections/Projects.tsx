import React from 'react'
import {
  fetchProjects,
  getProjects
} from '../../../redux/project/projectSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import config from '../../../config'
import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Star from '../../../assets/images/star.svg'
import Mark from '../../../assets/images/mark.svg'
import Agree from '../../../assets/images/agree.svg'
import DisAgree from '../../../assets/images/disagree.svg'
import Project1 from '../../../assets/images/project1.png'
import Project2 from '../../../assets/images/project2.png'
import { useNavigate } from 'react-router-dom'


const Projects = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const projects = useAppSelector(getProjects)
  const goDetail = (id:string) =>{
    navigate(id)
  }
  React.useEffect(() => {
    dispatch(fetchProjects({
      currentPage: 1,
      projectsPerPage: 10,
      mainType: '',
      subType: '',
      customType: '',
      title: '',
      location: '',
      active: 'Yes'
    })).then((response: any) => {
      console.log(response.payload)
    })
  }, [])
  return (
    <div className="pt-10 w-full ">
      {projects && projects.length > 0 &&
        <div>
          <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-10">Featured Projects</div>
          <div>
            <div className="flex justify-center w-full mt-3 relative">
              <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
              <img src={config.imageURL + projects[0].image} alt="ProjectImage" className='w-full z-10' />
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
            <div className='text-base font-normal mt-3'>By Adam from Millo</div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project1} alt="Project1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Lord of Maps: Coffee Table Book with over 70 Maps</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum </div>
          <div className='text-base font-normal mt-3'>By Adam from Millo</div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Project2} alt="Project2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Lord of Maps: Coffee Table Book with over 70 Maps</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum </div>
          <div className='text-base font-normal mt-3'>By Adam from Millo</div>
        </div>
      </div>
        </div>
      }
      {projects.length === 0 && <div className='flex justify-center italic font-bold text-xl text-gray-600'>No projects</div>}
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
  );
}

export default Projects;