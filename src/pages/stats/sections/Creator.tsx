import DownArrow from '../../../assets/images/downArrow.svg'
const Creator = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <div className="lg:flex gap-5">
          <div className="flex justify-center items-center w-[267px] h-[267px] rounded-full text-center bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63]  mb-3 lg:mb-0">
            <div className=''>
              <div className="text-white text-[32px] font-bold">226, 721</div>
              <div className="text-white text-base">Projects</div>
              <div className='flex justify-center mt-5 cursor-pointer'>
                <img src={DownArrow} alt="DownArrow" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[267px] h-[267px] rounded-full text-center bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63]  mb-3 lg:mb-0">
            <div className=''>
              <div className="text-white text-[32px] font-bold">$16M</div>
              <div className="text-white text-base">Pledges</div>
              <div className='flex justify-center mt-5 cursor-pointer'>
                <img src={DownArrow} alt="DownArrow" />
              </div>
            </div>
          </div> 
          <div className="flex justify-center items-center w-[267px] h-[267px] rounded-full text-center bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63]  mb-3 lg:mb-0">
            <div className=''>
              <div className="text-white text-[32px] font-bold">$10M</div>
              <div className="text-white text-base">Money Raised</div>
              <div className='flex justify-center mt-5 cursor-pointer'>
                <img src={DownArrow} alt="DownArrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;