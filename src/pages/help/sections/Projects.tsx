import React from 'react'
import {
  registerSubmission
} from '../../../redux/project/projectSlice'
import {
  getUser
} from '../../../redux/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

const Projects = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const [firstName, setFirstname] = React.useState<string>('')
  const [lastName, setLastName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [country, setCountry] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const submitDescription = async () => {
    if (description === '' || firstName === '' || lastName === '' || email === '') {
      alert('Please fill out all fields')
      return
    }
    dispatch(registerSubmission({
      user_id: user?.id,
      firstName: firstName,
      lastName:lastName,
      email:email,
      country: country,
      description: description
    })).then((res) => {
      if (res.payload.success) {
        clearFields()
      }
      alert(res.payload.message)
    })
  }
  const clearFields = () => {
    setDescription('')
  }
  return (
    <div className="pt-0 w-full">
      <div className='text-3xl font-bold flex items-center justify-center my-5'>
        Help Center
      </div>
      <div className='mb-3'>
        <div className="text-xl font-semibold mb-2 ml-2">First name</div>
        <div className="">
          <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter first name" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
        </div>
      </div>
      <div className='mb-3'>
        <div className="text-xl font-semibold mb-2 ml-2">Last name</div>
        <div className="">
          <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div className='mb-3'>
        <div className="text-xl font-semibold mb-2 ml-2">Email</div>
        <div className="">
          <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className='mb-3'>
        <div className="text-xl font-semibold mb-2 ml-2">Country</div>
        <div className="">
        <div className="select-wrapper">
            <select name="" id="" className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={country} onChange={(e)=>setCountry(e.target.value)}>
              <option value={'United States'}>United States</option>
              <option value={'United Kingdom'}>United Kingdom</option>
              <option value={'Canada'}>Canada</option>
              <option value={'Germany'}>Germany</option>
              <option value={'Japan'}>Japan</option>
            </select>
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <div className="text-xl font-semibold mb-2 ml-2">Description</div>
        <textarea className='px-5 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500 py-2' placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      
      <div className='my-3 flex justify-end'>
        <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center" onClick={() => submitDescription()}>Submit</button>
      </div>
    </div>
  );
}

export default Projects;