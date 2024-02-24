import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Star from '../../../assets/images/star.svg'
import Mark from '../../../assets/images/mark.svg'
import Agree from '../../../assets/images/agree.svg'
import DisAgree from '../../../assets/images/disagree.svg'
import Magazine1 from '../../../assets/images/Magazine1.png'
import Magazine2 from '../../../assets/images/Magazine2.png'
import Magazine3 from '../../../assets/images/Magazine3.png'
import Magazine4 from '../../../assets/images/Magazine4.png'
import Magazine5 from '../../../assets/images/Magazine5.png'
import DoubleBar from '../../../assets/images/doubleBar.svg'
import Triangle from '../../../assets/images/triangle.svg'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Magazine</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien <br /> varius pulvinar. Enim, amet est mauris tincidunt nulla. 
      </div> 
      <div className='hidden lg:flex justify-center mt-3 mb-20'>
        <div className='text-base text-[#1C2E63] flex'>
          <Link to='/art'>
            <div className='px-2 hover:text-[#905794] cursor-pointer'>Explore Food</div>
          </Link>
          <Link to='/art'>
            <div className='px-2 hover:text-[#905794] cursor-pointer'>Explore Variation</div>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-center w-full mt-3 relative">
          <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
          <img src={Magazine1} alt="Magazine1" className='w-full z-10' />
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
        <div className='text-3xl lg:text-[32px] font-bold mt-5'>NeoTokyo photobook "L8r2020+1"</div>
        <div className='text-base font-normal mt-3'>A Self-published cyberpunk NeoTokyo photobook from Japan.</div>
        <div className='text-base font-normal mt-3'>By Adam from Millo</div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine2} alt="Magazine2" className='w-full z-10' />
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
            <img src={Magazine2} alt="Magazine2" className='w-full z-10' />
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
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine2} alt="Magazine2" className='w-full z-10' />
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
            <img src={Magazine2} alt="Publication2" className='w-full z-10' />
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
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={DoubleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
            <img src={Magazine3} alt="Magazine3" className='w-full z-10' />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[32px] font-bold'>
            Discover new work and big ideas from established and emerging artists.
          </div>
          <div className='text-base font-normal mt-5'>Sign up to receive TECH G’s Arts newsletter.</div>
          <div className='relative flex items-center w-2/3'>
            <input type='text' placeholder='Your email here' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px] mt-5" name='firstname' />
            <img src={Triangle} alt="Triangle" className='absolute right-4' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine4} alt="Magazine4" className='w-full z-10' />
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
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine4} alt="Magazine4" className='w-full z-10' />
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
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine4} alt="Magazine4" className='w-full z-10' />
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
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Magazine4} alt="Magazine4" className='w-full z-10' />
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
      </div>


      <div className='relative flex justify-center mt-24'>
        <div className='text-3xl lg:text-[32px] font-bold mt-5 text-center'>Creators’ Spotlight</div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-20'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={DoubleBar} alt="DoubleBar" className='w-[100px] lg:w-[200px] absolute -left-[15px] -top-[15px] lg:-left-[30px] lg:-top-[30px]' />
            <img src={Magazine5} alt="Magazine5" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold'>How to guide on Navigating Tech G</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Read more</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-20'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={DoubleBar} alt="DoubleBar" className='w-[100px] lg:w-[200px] absolute -left-[15px] -top-[15px] lg:-left-[30px] lg:-top-[30px]' />
            <img src={Magazine5} alt="Magazine5" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold'>How to guide on Navigating Tech G</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Read more</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-20 mb-20'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={DoubleBar} alt="DoubleBar" className='w-[100px] lg:w-[200px] absolute -left-[15px] -top-[15px] lg:-left-[30px] lg:-top-[30px]' />
            <img src={Magazine5} alt="Magazine5" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold'>How to guide on Navigating Tech G</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien varius pulvinar. Enim, amet est mauris tincidunt nulla.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;