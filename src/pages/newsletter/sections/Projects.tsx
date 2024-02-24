import BlueBar from '../../../assets/images/blueBar.svg'
import PurpleBar from '../../../assets/images/purpleBar.svg'
import Star from '../../../assets/images/star.svg'
import Mark from '../../../assets/images/mark.svg'
import Agree from '../../../assets/images/agree.svg'
import DisAgree from '../../../assets/images/disagree.svg'
import Newsletter1 from '../../../assets/images/Newsletter1.png'
import Newsletter2 from '../../../assets/images/Newsletter2.png'
const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Newsletter</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
      Thousands of creative projects are coming to life on Kickstarter every <br /> day. We deliver the best ones straight to your inbox.
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter1} alt="Newsletter1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter2} alt="Newsletter2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter1} alt="Newsletter1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter2} alt="Newsletter2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter1} alt="Newsletter1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter2} alt="Newsletter2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter1} alt="Newsletter1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter2} alt="Newsletter2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-32'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter1} alt="Newsletter1" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="flex justify-center w-full mt-3 relative">
            <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
            <img src={Newsletter2} alt="Newsletter2" className='w-full z-10' />
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
          <div className='text-3xl lg:text-[32px] font-bold mt-5'>Projects We Love</div>
          <div className='text-base font-normal mt-3'>A weekly roundup of the best and brightest projects on Kickstarter, handpicked by our team.</div>
          <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;