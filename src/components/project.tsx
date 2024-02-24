import config from '../config'
import BlueBar from '../assets/images/blueBar.svg'
import PurpleBar from '../assets/images/purpleBar.svg'
import Star from '../assets/images/star.svg'
import Mark from '../assets/images/mark.svg'
import Agree from '../assets/images/agree.svg'
import DisAgree from '../assets/images/disagree.svg'
import { useNavigate } from 'react-router-dom';
import {
    getUser,
} from '../redux/user/userSlice'
import { useAppSelector } from '../redux/hooks'
const Project = (props:any) => {
    const user = useAppSelector(getUser)
    const navigate = useNavigate()
    const goDetail = (id: string) => {
        navigate(id)
    }
    return (
        <div className='col-span-2 lg:col-span-1' key={props.project._id}>
            <div className="flex justify-center w-full mt-3 relative">
                {!props.featured && <div>
                    <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -left-[15px] -top-[15px]' />
                    <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[100px] absolute -right-[15px] -bottom-[15px]' />
                </div>    
                }
                {props.featured && <div>
                    <img src={BlueBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -left-[15px] lg:-left-[30px] -top-[15px] lg:-top-[30px]' />
                    <img src={PurpleBar} alt="ProjectImage" className='w-[100px] lg:w-[200px] absolute -right-[15px] lg:-right-[30px] -bottom-[15px] lg:-bottom-[30px]' />
                </div>    
                }
                <img src={config.imageURL + props.project.image} alt="Project1" className='w-full z-10 aspect-video' />
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
                    {user?.priority === 'Business' && <div className='flex items-center justify-center bg-white w-fit px-2 text-white font-medium h-[35px] rounded-lg bg-blue-700 hover:bg-blue-500 active:bg-blue-900 cursor-pointer'>
                        Partner
                    </div>}
                </div>
            </div>
            <div className='text-3xl lg:text-[32px] font-bold mt-5 cursor-pointer hover:text-[#54427a]' onClick={() => goDetail(props.project._id)}>{props.project.title}</div>
            <div className='text-base font-normal mt-3'>{props.project.description}</div>
        </div>
    )
}

export default Project