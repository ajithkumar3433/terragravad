import GrayBar from '../../../assets/images/GrayBar.svg'
import Charter1 from '../../../assets/images/Charter1.png'
import DoubleBar from '../../../assets/images/doubleBar.svg'
import Triangle from '../../../assets/images/triangle.svg'
const Projects = () => {
  return (
    <div>
      <div className="pt-10 w-full px-5 lg:px-40">
        <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Our Charter</div>
        <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
          TECH G is a Benefit Corporation
        </div>
        <div>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={GrayBar} alt="GrayBar" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />

            <div className='text-base font-normal mt-32 mb-20'>
              TECH G’s mission is to help bring creative projects to life. We measure our success as a company by how well we achieve that mission, not by the size of our profits. That’s why we reincorporated TECH G as a Benefit Corporation in 2015.<br /><br />

              Benefit Corporations are for-profit companies that are obligated to consider the impact of their decisions on society, not only shareholders. Radically, positive impact on society becomes part of a Benefit Corporation’s legally defined goals. When a company becomes a Benefit Corporation, it can choose to make further commitments. In our new charter (shown below) we spell out our mission, our values, and the commitments we have made to pursue them.<br /><br />

              We will deliver a benefit statement annually that will measure the results of our efforts to promote these public benefits.
            </div>
            <img src={GrayBar} alt="GrayBar" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-16'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold mt-5'>TECH G’s mission is to help bring creative projects to life</div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-base font-normal mt-3'>
              <ul className='list-disc list-inside'>
                <li className='mb-5'>TECH G will create tools and resources that help people bring their creative projects to life, and that connect people around creative projects and the creative process.</li>
                <li className='mb-5'>TECH G will care for the health of its ecosystem and integrity of its systems.</li>
                <li className='mb-5'>TECH G will engage beyond its walls with the greater issues and conversations affecting artists and creators.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-16'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold mt-5'>TECH G supports a more creative and equitable world</div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-base font-normal mt-3'>
              <ul className='list-disc list-inside'>
                <li className='mb-5'>TECH G will never sell user data to third parties. It will zealously defend the privacy rights and personal data of the people who use its service, including in its dealings with government entities.</li>
                <li className='mb-5'>TECH G’s terms of use and privacy policies will be clear, fair, and transparent. TECH G will not cover every possible future contingency, or claim rights and powers just because it can or because doing so is industry standard.
                </li>
                <li className='mb-5'>TECH G will not lobby or campaign for public policies unless they align with its mission and values, regardless of possible economic benefits to the company.
                </li>
                <li className='mb-5'>TECH G will not use loopholes or other esoteric but legal tax management strategies to reduce its tax burden. TECH G will be transparent in reporting the percentage of taxes it pays and explaining the many factors that affect its tax calculation.
                </li>
                <li className='mb-5'>TECH G will seek to limit environmental impact. It will invest in green infrastructure, support green commuting methods, and factor environmental impact when choosing vendors. Additionally, TECH G will provide recommendations and resources that help creators make environmentally conscious decisions on tasks, like shipping and packaging, that are common to the use of its services.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-16'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold mt-5'>TECH G supports a more creative and equitable world</div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-base font-normal mt-3'>
              <ul className='list-disc list-inside'>
                <li className='mb-5'>TECH G will annually donate 5% of its after-tax profit towards arts and music education, and to organizations fighting to end systemic inequality as further defined in sections 4(c) and 5(c) below (the “5% pledge”).</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-16'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold mt-5'>TECH G is committed to the arts</div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-base font-normal mt-3'>
              <ul className='list-disc list-inside'>
                <li className='mb-5'>TECH G will always support, serve, and champion artists and creators, especially those working in less commercial areas.
                  .</li>
                <li className='mb-5'>TECH G will foster a supportive environment for employees to work on their own creative projects, including time off to pursue them.
                </li>
                <li className='mb-5'>Half of TECH G’s 5% pledge will be devoted to arts and music programs for children and young adults, with a primary focus on underserved communities in New York City. Funds will be distributed to 501(c)(3) organizations, public schools, or via programs developed by TECH G.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-16'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold mt-5'>TECH G is committed to fighting inequality</div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-base font-normal mt-3'>
              <ul className='list-disc list-inside'>
                <li className='mb-5'>TECH G will provide opportunities and paid time off for employees to provide professional mentorship and skills training to people from groups underrepresented in the worlds of art, business, or technology.
                </li>
                <li className='mb-5'>TECH G will report on team and leadership demographics, executive and CEO pay ratios, and programs and strategies employed to build a diverse, inclusive, and equitable organization.
                </li>
                <li className='mb-5'>
                  Half of TECH G’s 5% pledge will be devoted to organizations addressing systemic inequality. TECH G will primarily focus such contributions on 501(c)(3) organizations fighting to end prejudices against and increase opportunities for people of color, women, and LGBTQ individuals.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-gradient-to-r from-[#1C2E63] to-[#905794] flex justify-center items-center py-20 mt-20'>
        <div className='text-white text-center'>
          <div className='text-xl font-bold mb-12'>We will deliver a benefit statement annually that will measure <br /> the results of our efforts to promote these public benefits.</div>
          <div className='text-base'>Read our Benefit Statements for 2016, 2017, 2018, 2019, 2020, and 2021</div>
        </div>
      </div>
      <div className=" w-full px-5 lg:px-40">
        <div className='grid grid-cols-2 gap-10 mt-32 mb-32'>
          <div className='col-span-2 lg:col-span-1'>
            <div className="flex justify-center w-full mt-3 relative">
              <img src={DoubleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
              <img src={Charter1} alt="Charter1" className='w-full z-10' />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='text-3xl lg:text-[24px] font-bold'>
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
    </div>

  );
}

export default Projects;