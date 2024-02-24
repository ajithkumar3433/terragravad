import Creator from './Creator'
import { IStats } from '../../../interfaces/interface'
const data:Array<IStats> = [
  {
    categories:'Arts',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Graphic Design',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Technology',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Videography',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Cuisine',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Game design',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Entertainment',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
  {
    categories:'Publication',
    launchedProjects: '98787',
    totalDollars:'$7465465',
    successfulDollars:'$7465465',
    unsuccessfulDollars:'$7465465',
    liveDollars:'$7465465',
    liveProjects:'5465',
    successRate:'75%'
  },
];
const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Stats</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel eget sapien <br /> varius pulvinar. Enim, amet est mauris tincidunt nulla.
      </div>
      <Creator />
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-32 mb-10">
      This page is automatically updated at least once a day with the raw data behind TECH G. Metrics include funding success rates, amount pledged, and the performance of successfully and unsuccessfully funded projects. Statistics are available for the site overall as well as each of the 15 project categories. Check out our blog for more on TECH G’s data.
      </div>
      <div className='w-full flex items-start mb-3'>
        <div className='text-lg font-bold basis-[20%]'>
          Categories
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Launched <br />Projects
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Total <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Successful <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Unsuccessful <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Live <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Live <br />Projects
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Success <br /> Rate
        </div> 
      </div>
      {data.map((item:IStats)=>{return <div className='w-full flex items-start mb-2'>
        <div className='text-lg basis-[20%]'>
          {item.categories}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.launchedProjects}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.totalDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.successfulDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.unsuccessfulDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.liveDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.liveProjects}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.successRate}
        </div> 
      </div>})}
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-32 mb-10">This page is automatically updated at least once a day with the raw data behind TECH G. Metrics include funding success rates, amount pledged, and the performance of successfully and unsuccessfully funded projects. Statistics are available for the site overall as well as each of the 15 project categories. Check out our blog for more on TECH G’s data.
      </div>
      <div className='w-full flex items-start mb-3'>
        <div className='text-lg font-bold basis-[20%]'>
          Categories
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Launched <br />Projects
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Total <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Successful <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Unsuccessful <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Live <br />Dollars
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Live <br />Projects
        </div>
        <div className='text-lg font-bold basis-[20%]'>
        Success <br /> Rate
        </div> 
      </div>
      {data.map((item:IStats)=>{return <div className='w-full flex items-start mb-2'>
        <div className='text-lg basis-[20%]'>
          {item.categories}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.launchedProjects}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.totalDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.successfulDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.unsuccessfulDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.liveDollars}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.liveProjects}
        </div>
        <div className='text-lg basis-[20%]'>
        {item.successRate}
        </div> 
      </div>})}
      <div className='mt-24'></div>
    </div>
  );
}

export default Projects;