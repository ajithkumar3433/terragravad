import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  updateProfile,
  getUser
} from '../../../redux/user/userSlice'
import NoneAvatar from '../../../assets/images/assassin.png'
import config from '../../../config';

import { MdEdit } from 'react-icons/md'
const Projects = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const [phone, setPhone] = React.useState<string>('')
  const [address, setAddress] = React.useState<string>('')
  const [city, setCity] = React.useState<string>('')
  const [country, setCountry] = React.useState<string>('')
  const [isEditAvatar, setIsEditAvatar] = React.useState<boolean>(false)
  const [file, setFile] =  React.useState<any>(null)
  const [avatarURL, setAvatarURL] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const avatarRef = React.useRef(null)
  const showEditAvatar = () =>{
    setIsEditAvatar(true)
  }
  const hideEditAvatar = () =>{
    setIsEditAvatar(false)
  }

  const openDialog = ()=>{
    (avatarRef.current as any).click()
  }

  const changeFile = (files: FileList) => {
    const selectedFile = files[0];
    if (!selectedFile) {
      return;
    }
  
    if (selectedFile.size > 2 * 1024 * 1024) {
      setErrorMessage("The file exceeds the maximum file size of 2MB. Please choose a smaller file.");
      return;
    }
    setErrorMessage('');

    if (selectedFile) {
      compressImage(selectedFile)
        .then((compressedFile: File) => { // Add type annotation for compressedFile
          setFile(compressedFile);
          setAvatarURL(URL.createObjectURL(compressedFile));
        })
        .catch((error: Error) => { // Add type annotation for error
          console.error('Error compressing image: ', error);
          // Handle the error, e.g., display an error message to the user
        });
    }
  };
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const img = new Image();
        img.src = (event.target as any).result;
        img.onload = () => {
          const maxWidthOrHeight = 800; // Set your desired max width or height
          const scale = Math.min(maxWidthOrHeight / img.width, maxWidthOrHeight / img.height);
          const canvas = document.createElement('canvas');
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
  
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject('Error getting 2D context');
            return;
          }
  
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, { type: file.type });
                resolve(compressedFile);
              } else {
                reject('Error compressing image');
              }
            },
            file.type,
            0.1 // Adjust the compression quality as needed (0.1 is a fairly low quality)
          );
        };
  
        img.onerror = (error) => {
          reject(error);
        };
      };
  
      reader.readAsDataURL(file);
    });
  };
  
  const saveProfile = () =>{
    const formData = new FormData()
    formData.append('id', user?.id||'')
    formData.append('phone', phone)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('country', country)
    formData.append('file', file)
    dispatch(updateProfile(formData))
  }
  React.useEffect(()=>{
    if(user?.phone)setPhone(user?.phone as string)
    if(user?.address)setAddress(user?.address as string)
    if(user?.city)setCity(user?.city as string)
    if(user?.country)setCountry(user?.country as string)
    if(user?.avatar)setAvatarURL(config.imageURL+user?.avatar as string)
  }, [user])
  return (
    <div className="pt-0 w-full ">
      <div className="flex gap-5">
        <div className='mt-3 flex-none w-[200px] relative'>
          <div  onMouseEnter={()=>showEditAvatar()} onMouseLeave={()=>hideEditAvatar()}>
          <img src={avatarURL === ''? NoneAvatar:avatarURL} alt="Avatar" className='!w-[200px] h-[200px] rounded-full border-blue-900 border-4 object-cover' />
          {isEditAvatar &&<div className='bg-[#00000040] w-[200px] h-[200px] rounded-full absolute top-0 flex items-center justify-center text-gray-800 text-2xl'>
            <div className='w-[40px] h-[40px] bg-[#FFFFFF90] flex items-center justify-center rounded-lg cursor-pointer' onClick={()=>openDialog()}>
              <MdEdit />
            </div>
            <input type="file" ref={avatarRef} hidden onChange={(e)=>changeFile((e.target as any).files)} />
          </div>}
          </div>
        </div>
        <div className='w-full'>
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
          <div className='text-2xl font-medium mb-3'>{user?.name}</div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>Email:</span>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px] bg-gray-200"
              placeholder="Enther your email" value={user?.email} disabled />
          </div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>Priority:</span>
            <input type="text" id="priority"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px] bg-gray-200"
              placeholder="Enter your priority" value={user?.priority} disabled />
          </div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>Phone:</span>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px]"
              placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>Address:</span>
            <input type="text" id="email" disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px]"
              placeholder="Enter your address" value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>City:</span>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px]"
              placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)} />
          </div>
          <div className='flex items-center gap-2 w-full mb-2'>
            <span className='w-[80px]'>Country:</span>
            <input type="text" id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2 h-[40px]"
              placeholder="Enter your country" value={country} onChange={(e)=>setCountry(e.target.value)} />
          </div>
          <div className='flex justify-end mt-3'>
            <button className='bg-blue-700 hover:bg-blue-500 active:bg-blue-900 h-[40px] rounded-lg w-[120px] text-white' onClick={()=>saveProfile()}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;