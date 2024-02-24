import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Research1 from '../../../assets/images/Research1.png'

const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Research </div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
      Thousands of creative projects are coming to life on Kickstarter every <br /> day. We deliver the best ones straight to your inbox.
      </div>
      <div>
        <div className="flex justify-center w-full mt-3 relative">
          <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
          <img src={Research1} alt="Publication1" className='w-full z-10' />
          <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
        </div>
        <div className='text-3xl lg:text-[32px] font-bold mt-5'>Help shape the future of TECH G</div>
        <div className='text-base font-normal mt-3'>Whether you're a creator, an experienced backer, a project browser, or completely new to Kickstarter—we'd love to hear about your experience.</div>
      </div>
      <div className='grid grid-cols-2 gap-10 my-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-xl font-bold mt-5'>
            How to get involved
          </div>
          <div className='text-3xl lg:text-xl font-bold mt-5'>
            1. Opt in
          </div>
          <div className='text-base font-normal mt-3'>Let us know you're interested by joining our research program.</div>
          <div className='text-3xl lg:text-xl font-bold mt-5'>
            2. Participate
          </div>
          <div className='text-base font-normal mt-3'>We'll invite you to choose a date and time if you fit our research criteria.</div>
          <div className='text-3xl lg:text-xl font-bold mt-5'>
            3. Get rewarded
          </div>
          <div className='text-base font-normal mt-3'>You'll receive a gift card and our gratitude for helping improve Kickstarter.</div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-base font-normal mt-3'>
          <div className='text-3xl lg:text-xl font-bold mt-5'>
            Let's get started
          </div>
          <div className='text-base font-normal mt-3'>Head to your Notifications page and select the email symbol under "Research"—if it's blue, that means you're opted in.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Visit Settings</button> 
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Projects;