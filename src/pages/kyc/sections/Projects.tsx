import Attach from '../../../assets/images/Attach.svg'
import React from 'react'
const Projects = () => {
  const file = React.useRef(null);
  const clickFileHandler = () => {
    console.log('file');
    (file.current as any).click()
  }
  const handleFileChange = (event:any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  return (
    <div className="w-full ">
      <div className='text-2xl font-medium mb-4'>Customer Information</div>
      <div className='text-base font-medium mb-2'>Name</div>
      <input type='text' placeholder='Name' disabled className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" name='name' />
      <div className='text-base font-medium mb-2'>Date of Birth</div>
      <input type='date' placeholder='Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" disabled name='name' />

      <div className='text-2xl font-medium mb-4 mt-10'>ID information</div>
      <div className='text-base font-medium mb-2'>Issuing country</div>
      <div className="select-wrapper mb-[20px]">
            <select name="" id="" disabled className='pl-5 rounded-full text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500'>
              <option disabled selected>Issuing country</option>
              <option value="volvo">United State</option>
              <option value="saab">United Kingdom</option>
              <option value="opel">Canada</option>
              <option value="audi">Germany</option>
              <option value="audi">Japan</option>
            </select>
          </div>
      <div className='text-base font-medium mb-2'>ID type</div>
      <div className="select-wrapper mb-[20px]">
            <select name="" id="" disabled className='pl-5 rounded-full text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500'>
              <option disabled selected>ID type</option>
              <option value="volvo">National ID</option>
              <option value="saab">Passport</option>
              <option value="opel">Driver License</option>
            </select>
          </div>
      <div className='text-base font-medium mb-2'>ID number</div>
      <input type='text' disabled placeholder='ID number' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" name='name' />
      <div className='text-base font-medium mb-2'>Expiration Date, Attached files.</div>
      <input type='date' disabled placeholder='Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" name='name' />
      <input type="file" disabled hidden ref={file} onChange={handleFileChange} />
      <div className='text-base font-medium mb-2'>Attached files</div>
      <div className='relative'>
      <div  className="pl-14 cursor-pointer text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" onClick={clickFileHandler}></div>
      <img src={Attach} alt="Attach" className='absolute left-[20px] top-[15px] w-[25px]' />
      </div>

      <div className='text-2xl font-medium mb-4'>Keycode Verification</div>
      <div className='text-base font-medium mb-2'>Random number</div>
      <input type='text' disabled placeholder='Random number' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded-full border border-gray-500 mb-[20px]" name='name' value="546416494651684" />
      <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center" disabled>Verify</button>
    </div>
  );
}

export default Projects;