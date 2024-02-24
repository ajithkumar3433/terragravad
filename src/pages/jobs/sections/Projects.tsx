import Jobs1 from '../../../assets/images/Jobs1.svg'

const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Jobs</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3">
        Careers that fuel creative work
      </div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        As a member of our impact-driven team, each of your contributions <br /> makes a visible difference. You'll collaborate with talented teammates in <br /> an environment that values your life outside of work
      </div>
      <div className='grid grid-cols-2 gap-10 mt-16'>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[24px] font-bold mt-5'>OPEN ROLES</div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-base font-normal mt-3'>
            <div className='mb-5'>We believe that art and creative expression are essential to a healthy and vibrant society. If you do too, we can’t wait to hear from you. </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-0'>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-3xl lg:text-[24px] font-bold mt-5'>
            All Roles<br />
            Community, Outreach & International<br />
            Engineering<br />
            Product & Design<br />
            Senior Product Marketing Manager<br />
            Engineering - General Job Application<br />
            Senior Product Designer<br />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className='text-base font-normal mt-3'>
            <ul className='list-disc list-inside'>
              <li className='mb-2'>Senior Product Marketing Manager</li>
              <li className='mb-2'>TEngineering - General Job Application
              </li>
              <li className='mb-2'>Senior Product Designer
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-xl font-bold text-center w-full mt-32 mb-12'>Benefit</div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Continuous Learning</div>
          <div className='text-base font-normal'>Curiosity is our compass. We welcome experimentation, failure, and the courage to try again. We invest in many kinds of trainings and workshops to make sure our team is always building new skills.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Community</div>
          <div className='text-base font-normal'>Join an Affinity Group like Black At Kickstarter, Parents, Azns, Queerstarter, or Gender Justice. Attend the many exciting social and cultural events available to Kickstarter employees. These include speaker series, product demos, concerts from teammates, pre-release film screenings, industry meetups, and more.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Social Contribution</div>
          <div className='text-base font-normal'>Every year TECH G donates five percent of our after-tax profit to organizations that fight systemic inequality and promote arts education. All full-time employees can nominate recipient organizations and apply to join the committee that ultimately directs our contributions.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Stipends</div>
          <div className='text-base font-normal'>We offer a yearly reimbursable stipend for Remote Working and Wellness.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Fully Virtual Work</div>
          <div className='text-base font-normal'>Work flexibly. All full-time employees can live and work anywhere we are  registered as an employer. See below for a list of current locations. We anticipate this list will continue to expand as we grow our distributed workforce. 
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <img src={Jobs1} alt="Jobs1" />
          <div className='text-xl font-bold my-3'>Benefits</div>
          <div className='text-base font-normal'>Among other benefits, we offer a three percent safe harbor 401K contribution, equity, world-class healthcare coverage, 16 annual paid vacation days, and 25 annual paid volunteer hours to all full-time employees.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1 mt-32'>
          <div className='text-xl font-bold my-3'>Our Fully <br />Virtual Team</div>
        </div>
        <div className='col-span-3 lg:col-span-2 lg:mt-32'>
          <div className='text-base font-normal'>We’re currently able to support employees based in the following US locations: CA, CT, FL, GA, MA, MD, NC, NJ, NY, OR, VA, and WA. We're also able to support employees in the United Kingdom and Canada (Ontario & British Columbia). If you live in—or are willing to move to—any of these locations, we look forward to your application! If there is a required or preferred location for an open role, it will be listed in the job description. </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;