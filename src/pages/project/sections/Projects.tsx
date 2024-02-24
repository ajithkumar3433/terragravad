import React from 'react'
import moment from 'moment'
import {
  registerProject
} from '../../../redux/project/projectSlice'
import {
  getUser
} from '../../../redux/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

const mainType = [
  {
    title: 'Art',
    subs: [
      'Theatre',
      'Dance',
      'Photography',
      'Sculpting'
    ]
  },
  {
    title: 'Illustration',
    subs: [
      'Comics',
      'Cartoon',
      'Fashion',
      'Concept art',
      'Wood art'
    ]
  },
  {
    title: 'Tech Design',
    subs: []
  },
  {
    title: 'Film',
    subs: [
      'Video',
      'Short films',
      'Animated films',
    ]
  },
  {
    title: 'Food',
    subs: []
  },
  {
    title: 'Games',
    subs: []
  },
  {
    title: 'Music',
    subs: []
  },
  {
    title: 'Publishing',
    subs: [
      'Journalism',
      'Book Publishing'
    ]
  },
]
const reviewProjects: Array<object> = [
  {
    title: "Basics or a response.",
    content: "Name your project, upload an image or video, and establish your campaign details."
  },
  {
    title: "Funding",
    content: "Build out a budget and calculate your financial goals."
  },
  {
    title: "Rewards",
    content: "Set your rewards and shipping costs."
  },
  {
    title: "Story",
    content: "Add a detailed project description and convey your risks and challenges."
  },
  {
    title: "People",
    content: "Edit your Kickstarter profile and add collaborators."
  },
  {
    title: "Payment",
    content: "Verify details and link a bank account.",
    detail: "This may take up to 3 business days to complete."
  },
]

const prepareProjects: Array<object> = [
  {
    title: "Project review",
    content: "We’ll check to make sure it follows our rules and guidelines.",
    detail: "Please allow 1-3 business days for a response."
  },
]

const launchProjects: Array<object> = [
  {
    title: "Promotion",
    content: "Generate a project URL and activate your pre-launch page."
  },
]

const supportProjects: Array<object> = [
  {
    title: "Creator Resources",
    content: "Learn about everything from shipping to communicating with backers."
  },
  {
    title: "Creator Questions",
    content: "Get more help with any step of the process."
  },
]
const Projects = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const imagesRef = React.useRef(null)
  const [imageFiles, setImageFiles] = React.useState<Array<any>>([])
  const [selectedMainType, setSelectedMainType] = React.useState<string>(mainType[0].title)
  const [selectedSubType, setSelectedSubType] = React.useState<string>(mainType[0].subs[0])
  const [customType, setCustomType] = React.useState<string>('')
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [funding, setFunding] = React.useState<number>(0)
  const [startDate, setStartDate] = React.useState<string>(moment().format('YYYY-MM-DD')) 
  const [endDate, setEndDate] = React.useState<string>(moment().add(1, 'M').format('YYYY-MM-DD')) 
  const [reward, setReward] = React.useState<string>('') 
  const [location, setLocation] = React.useState<string>('United States') 
  const [videoURL, setVideoURL] = React.useState<string>('') 
  const [collaborators, setCollaborators] = React.useState<string>('') 
  const [story, setStory] = React.useState<string>('') 
  const [minimum, setMinimum] = React.useState<number>(0) 
  const [imageURL, setImageURL] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const selectVideo = () => {
    (imagesRef.current as any).click()
  }
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
            0.7
          );
        };
  
        img.onerror = (error) => {
          reject(error);
        };
      };
  
      reader.readAsDataURL(file);
    });
  };
  const addImages = async (e: any) => {
    const files = e.target.files;

    const fileserror: FileList = e.target.files;
    const oversizedFiles = Array.from(fileserror).filter((file) => file.size > 2 * 1024 * 1024); // 2MB in bytes

    if (oversizedFiles.length > 0) {
      setErrorMessage("maximum file size of 2MB. Please choose smaller files.");
      return;
    }
    setErrorMessage("");
    const compressedImages = await Promise.all(
      Array.from(files).map(async (file) => {
        try {
          return await compressImage(file as File); // Cast 'file' to 'File'
        } catch (error) {
          console.error('Error compressing image: ', error);
          return file; // If an error occurs, use the original file
        }
      })
    );
    setImageFiles(compressedImages);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };
  const submitProject = async () =>{
    if(customType ==='' || title ==='' || description ==='' || reward ==='' || videoURL ==='' || collaborators ==='' || story ==='' || funding === 0){
      alert('Please fill out all fields.')
      return
    }
    console.log(selectedMainType, selectedSubType, customType, title, description, funding, startDate, endDate, reward, location, imageFiles, videoURL, collaborators, story, minimum)
    let formdata:FormData = new FormData()
    formdata.append('user_id', (user as any).id)
    formdata.append('mainType', selectedMainType)
    formdata.append('subType', selectedSubType)
    formdata.append('customType', customType)
    formdata.append('title', title)
    formdata.append('description', description)
    formdata.append('funding', funding.toString())
    formdata.append('startDate', startDate)
    formdata.append('endDate', endDate)
    formdata.append('reward', reward)
    formdata.append('location', location)
    formdata.append('image', imageFiles[0])
    formdata.append('video', videoURL)
    formdata.append('collaborators', collaborators)
    formdata.append('story', story)
    formdata.append('minimumValue', minimum.toString())
    
    const response = await dispatch(registerProject(formdata))
    console.log(response)
    if(response.payload.success){
      clearFields()
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
    alert(response.payload.message)

  } 
  const clearFields = () =>{
    setSelectedMainType(mainType[0].title)
    setSelectedSubType(mainType[0].subs[0])
    setCustomType('')
    setTitle('')
    setDescription('')
    setFunding(0)
    setStartDate(moment().format('YYYY-MM-DD'))
    setEndDate(moment().add(1, 'M').format('YYYY-MM-DD'))
    setReward('')
    setLocation('United States')
    setImageFiles([])
    setVideoURL('')
    setCollaborators('')
    setStory('')
    setMinimum(0)
  }
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">First, let’s get you set up.
      </div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        Select a primary category and subcategory for your new project.<br />
        These will help backers find your project, and you can change them later if you need to.
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-2 lg:col-span-1'>
          <div className="text-xl font-semibold mb-2 ml-2">Main Category</div>
          <div className="select-wrapper">
            <select name="" id="" className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={selectedMainType} onChange={(e)=>{setSelectedMainType(e.target.value); setSelectedSubType(mainType.filter((mainType:any)=>mainType.title === e.target.value)[0].subs[0]?mainType.filter((mainType:any)=>mainType.title === e.target.value)[0].subs[0]:'')}}>
              {mainType.map((type:any, index:number)=>{
                return <option value={type.title} key={'mainType_'+index}>{type.title}</option>
              })}
            </select>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className="text-xl font-semibold mb-2 ml-2">Sub Category</div>
          <div className="select-wrapper">
            <select name="" id="" className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={selectedSubType} onChange={(e)=>setSelectedSubType(e.target.value)}>
            {mainType.filter((mainType:any)=>mainType.title === selectedMainType)[0].subs.map((type:any, index:number)=>{
                return <option value={type} key={'subType_'+index}>{type}</option>
              })}
            </select>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Custom Category</div>
          <div className="">
            <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter custom category" value={customType} onChange={(e)=> setCustomType(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Title</div>
          <div className="">
            <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter project title" value={title} onChange={(e)=> setTitle(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Description</div>
          <div className="">
            <textarea className='px-5 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500 py-2' placeholder="Enter project title" value={description} onChange={(e)=> setDescription(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Total funding</div>
          <div className="relative">
            <input type='number' className='px-5 pl-7 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter total funding" min={0} value={funding} onChange={(e)=> setFunding(Number(e.target.value))} />
            <div className="absolute left-3 top-3 font-semibold text-xl">$</div>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Campaign period</div>
          <div className="relative flex items-center">
            <input type='date' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter total funding" min={0} value={startDate} onChange={(e)=> setStartDate(e.target.value)} />
            <div className="mx-3 font-semibold text-2xl">~</div>
            <input type='date' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter total funding" min={0} value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Reward</div>
          <div className="">
            <textarea className='px-5 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500 py-2' placeholder="Enter project title" value={reward} onChange={(e)=> setReward(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Location</div>
          <div className="select-wrapper">
            <select name="" id="" className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={location} onChange={(e)=> setLocation(e.target.value)}>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
        <div className=' col-span-2 lg:col-span-2'>
          <div className="mb-2 mt-4">
            <div className="text-xl font-semibold mb-2 ml-2">
              Images
            </div>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {imageFiles.map((image: any, index: number) => {
                return <div className="col-span-4 sm:col-span-4 md:col-span-4" key={'imageFile_' + index}>
                  <img src={imageURL} alt={'image_' + index} />
                </div>
              })}
            </div>
            <input type="file" hidden ref={imagesRef} onChange={(e) => addImages(e)} />
            <button className="bg-sky-500 hover:bg-sky-700 rounded-md px-2 py-2 text-white w-[150px]" onClick={() => selectVideo()}>
              Select images
            </button>
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Video URL</div>
          <div className="">
            <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter video url" value={videoURL} onChange={(e)=> setVideoURL(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Collaborators</div>
          <div className="">
            <input type='text' className='pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter collaborators" value={collaborators} onChange={(e)=> setCollaborators(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Story</div>
          <div className="">
            <textarea className='px-5 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500 py-2' placeholder="Enter your story"  value={story} onChange={(e)=> setStory(e.target.value)} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2'>
          <div className="text-xl font-semibold mb-2 ml-2">Minimum value</div>
          <div className="relative">
            <input type='number' className='px-5 pl-7 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' placeholder="Enter minimum value" min={0}  value={minimum} onChange={(e)=> setMinimum(Number(e.target.value))}/>
            <div className="absolute left-3 top-3 font-semibold text-xl">$</div>
          </div>
        </div>
      </div>
      <div className='my-8 flex justify-center'>
        <button className="my-5 bg-gradient-to-r from-[#1C2E63] to-[#905794] hover:from-[#905794] hover:to-[#1C2E63] rounded-full text-white text-xs font-medium font-sm w-1/2 h-[40px] w-[162px] text-center" onClick={()=>submitProject()}>Submit</button>
      </div>
      <div className='text-5xl font-bold text-center mt-20 mb-12'>
        Project overview
      </div>
      {reviewProjects.map((item: any, index:number) => {
        return <div className='w-full p-5 rounded-lg border border-[#263238] mb-12' key={'reviewProject_'+index}>
          <div className='text-2xl font-bold'>{item.title}</div>
          <div className='text-2xl font-normal'>{item.content}</div>
          {item.detail && <div className='text-2xl font-normal'>{item.detail}</div>}
        </div>
      })}
      <div className="text-base text-center mb-12">Submit your project for review</div>
      {prepareProjects.map((item: any, index:number) => {
        return <div className='w-full p-5 rounded-lg border border-[#263238] mb-12' key={'reviewProject_'+index}>
          <div className='text-2xl font-bold'>{item.title}</div>
          <div className='text-2xl font-normal'>{item.content}</div>
          {item.detail && <div className='text-2xl font-normal'>{item.detail}</div>}
        </div>
      })}
      <div className="text-base text-center font-bold mb-12">Prepare for launch</div>
      {launchProjects.map((item: any, index:number) => {
        return <div className='w-full p-5 rounded-lg border border-[#263238] mb-12' key={'launchProjects'+index}>
          <div className='text-2xl font-bold'>{item.title}</div>
          <div className='text-2xl font-normal'>{item.content}</div>
          {item.detail && <div className='text-2xl font-normal'>{item.detail}</div>}
        </div>
      })}
      <div className="text-base text-center font-bold mb-12">Launch!</div>
      <div className='text-5xl font-bold text-center mt-20 mb-12'>
        Support
      </div>
      <div className="grid grid-cols-2 gap-5 mb-20">
        {supportProjects.map((item: any, index:number) => {
          return <div className='w-full p-5 rounded-lg border border-[#263238] mb-12 col-span-2 lg:col-span-1' key={'supportProjects'+index}>
            <div className='text-2xl font-bold'>{item.title}</div>
            <div className='text-2xl font-normal'>{item.content}</div>
            {item.detail && <div className='text-2xl font-normal'>{item.detail}</div>}
          </div>
        })}
      </div>
    </div>
  );
}

export default Projects;
