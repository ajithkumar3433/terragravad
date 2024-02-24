import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Publication1 from '../../../assets/images/Publication1.png'
import About1 from '../../../assets/images/About1.png'
import About2 from '../../../assets/images/About2.png'
import Publication4 from '../../../assets/images/Publication4.png'
import DoubleBar from '../../../assets/images/doubleBar.svg'
import Triangle from '../../../assets/images/triangle.svg'
const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">About Us</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien <br /> varius pulvinar. Enim, amet est mauris tincidunt nulla.
      </div>
      <div>
        <div className="flex justify-center w-full mt-3 relative">
          <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
          <img src={Publication1} alt="Publication1" className='w-full z-10' />
          <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
        </div>
        <div className='text-base font-normal mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada faucibus integer scelerisque id sit tortor sem nulla tincidunt. Purus lacus suspendisse habitant lacus lacus sed. Tempus urna, morbi malesuada vel amet nunc vitae sit. Eleifend aliquam id ac magna ornare. Massa duis integer vestibulum ut adipiscing orci, malesuada purus. Amet, amet eu in nibh nec magna.</div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={About1} alt="About1" className='w-full z-10' />
            <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -right-[15px] -bottom-[15px]' />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>What we do</div>
          <div className='text-base font-normal mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum <br /><br />
          </div>

        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
      <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>What we do</div>
          <div className='text-base font-bold mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. 
          </div>
          <div className='text-base font-normal mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum 
          </div>
          <div className='text-base font-bold mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. 
          </div>
          <div className='text-base font-normal mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum 
          </div>
          <div className='text-base font-bold mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. 
          </div>
          <div className='text-base font-normal mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium vulputate posuere amet ac rhoncus. Tempus, morbi enim tellus et feugiat elementum lacinia. Nunc integer elementum 
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={About2} alt="About2" className='w-full z-10' />
            <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -right-[15px] -bottom-[15px]' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32 mb-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={DoubleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
            <img src={Publication4} alt="Publication4" className='w-full z-10' />
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
    </div>
  );
}

export default Projects;