import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Funds1 from '../../../assets/images/Funds1.png'

const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Forward Funds</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        Access big-ticket backings from major mission-based institutions.
      </div>
      <div>
        <div className="flex justify-center w-full mt-3 relative">
          <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
          <img src={Funds1} alt="Funds1" className='w-full z-10' />
          <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
        </div>
        <div className='text-3xl lg:text-[32px] font-bold mt-10 text-center'>NeoTokyo photobook "L8r2020+1"</div>
        <div className='w-full flex justify-center mb-32'>
          <div className='w-full lg:w-4/5'>
            <div className='text-base font-normal mt-5'>
              <div>Forward Funders are foundations, nonprofits, and organizations that back Kickstarter campaigns related to their visions and missions around a more creative and equitable world. Each Forward Funder makes a public commitment and then backs projects just like anyone else—through single pledges that bring the works one step closer to reality.</div>
            </div>
            <div className='text-base font-normal mt-10'>
              For Creators<br />
              All projects launched on Kickstarter following our rules are eligible, and creators can nominate themselves for specific Forward Funds via this form—though applying does not guarantee funds. Our team also works with Forward Funder organizations to proactively curate live projects that line up with their missions.
            </div>
            <div className='text-base font-normal mt-10'>For Organizations<br />
              Forward Funders share in our belief in creative works as essential to a healthy and vibrant society. By working with Kickstarter to find projects that align with related missions, we create a bridge between institutions that champion creative projects and the creators bringing those projects to life. If your organization is interested in participating as a Forward Funder on Kickstarter, apply here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;