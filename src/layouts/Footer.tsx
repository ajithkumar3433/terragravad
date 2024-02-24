import PurpleRing from '../assets/images/purpleRing.svg'
import Time from '../assets/images/time.svg'
import DownArrow from '../assets/images/bluedown.svg'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import moment from 'moment-timezone'
const Footer = () => {
  const location = useLocation()
  const [date, setDate] = React.useState<string>('')
  React.useEffect(()=>{
    const intervalID = setInterval(()=>{
      setDate(moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return ()=> clearInterval(intervalID)
  })
  return (
    <div className="w-full bg-white px-5 lg:px-40 pt-5 relative">
      {/* <img src={BlueRing} alt="BlueRing" className='right-0 top-0 absolute' /> */}
      <img src={PurpleRing} alt="PurpleRing" className='left-0 bottom-0 absolute' />
      <div className='flex justify-center items-center relative py-3'>
        {/* <img src={Logo} alt="Logo" width="170px" /> */}
        <div className='text-4xl font-bold italic text-[#54427a]'>Terragrav</div>
      </div>
      <div className='hidden lg:flex justify-center mt-1'>
        <div className='hidden lg:flex justify-center mb-3'>
          <div className='text-base text-[#1C2E63] flex'>
            <Link to='/art'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/art' ? 'font-bold' : ''}`}>Arts</div>
            </Link>
            <Link to='/illustration'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/illustration' ? 'font-bold' : ''}`}>Illustration</div>
            </Link>
            <Link to='/techdesign'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/techdesign' ? 'font-bold' : ''}`}>Tech Design</div>
            </Link>
            <Link to='/film'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/film' ? 'font-bold' : ''}`}>Film</div>
            </Link>
            <Link to='/food'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/food' ? 'font-bold' : ''}`}>Food</div>
            </Link>
            <Link to='/game'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/game' ? 'font-bold' : ''}`}>Games</div>
            </Link>
            <Link to='/music'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/entertainment' ? 'font-bold' : ''}`}>Music</div>
            </Link>
            <Link to='/publication'>
              <div className={`px-2 hover:text-[#905794] cursor-pointer ${location.pathname === '/publication' ? 'font-bold' : ''}`}>Publishing</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-around gap-10 my-5'>
        <div className='col-span-4 lg:col-span-1'>
          <div className='text-base font-bold text-[#1E1E1E] mb-3'>ABOUT</div>
          <Link to='/aboutus'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname === '/aboutus' ? 'font-bold' : ''}`}>About us</div>
          </Link>
          {/* <Link to='/charter'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/charter'?'font-bold':''}`}>Our charter</div>
          </Link> */}
          {/* <Link to='/stats'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/stats'?'font-bold':''}`}>Stats</div>
          </Link> */}
          {/* <Link to='/press'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/press'?'font-bold':''}`}>Press</div>
          </Link> */}
          {/* <Link to='/jobs'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/jobs'?'font-bold':''}`}>Jobs</div>
          </Link> */}
        </div>
        <div className='col-span-4 lg:col-span-1'>
          <div className='text-base font-bold text-[#1E1E1E] mb-3'>SUPPORT</div>
          <Link to='/help'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname === '/help' ? 'font-bold' : ''}`}>Help Center</div>
          </Link>
          {/* <Link to='/rules'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/rules'?'font-bold':''}`}>Our Rules</div>
          </Link> */}
          {/* <Link to='/resources'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/resources'?'font-bold':''}`}>Creator Resources</div>
          </Link> */}
          {/* <Link to='/funds'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/funds'?'font-bold':''}`}>Forward Funds</div>
          </Link> */}
          {/* <Link to='/assets'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/assets'?'font-bold':''}`}>Brand assets</div>
          </Link> */}
        </div>
        <div className='col-span-4 lg:col-span-1'>
        <div className='text-base font-bold text-[#1E1E1E] mb-3'>Terms and Policy</div>
          <a href='https://app.termly.io/document/privacy-policy/e748b632-a281-4a5d-a35a-91b7ad384464' target='_blank' rel="noreferrer">
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/newsletter'?'font-bold':''}`}>Privacy Policy</div>
          </a>
          <a href='https://app.termly.io/document/terms-of-service/37a7f77a-a8d3-46ad-a4be-0606d812f27a' target='_blank' rel="noreferrer">
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer`}>Terms and Conditions</div>
          </a>
          <a href='https://app.termly.io/document/acceptable-use/fd93eaf4-c160-4d96-bb7e-9295760a0f98' target='_blank' rel="noreferrer">
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer`}>Acceptable Use Policy</div>
          </a>
        {/* <Link to='/magazine'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/magazine'?'font-bold':''}`}>Terragrav Magazine</div>
          </Link>
          <Link to='/independent'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/independent'?'font-bold':''}`}>The Creative Independent</div>
          </Link> */}
        {/* <Link to='/blog'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/blog'?'font-bold':''}`}>The Terragrav Blog</div>
          </Link> */}
        {/* <Link to='/mobile'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/mobile'?'font-bold':''}`}>Mobile apps</div>
          </Link> */}
        {/* <Link to='/research'>
            <div className={`text-base text-[#1E1E1E] mb-3 hover:text-[#905794] cursor-pointer ${location.pathname==='/research'?'font-bold':''}`}>Research</div>
          </Link> */}
        </div>
        <div className='col-span-4 lg:col-span-1'>
          <div className='text-base font-bold text-[#1E1E1E] mb-3'>CONTACT</div>
          {/* <div className='text-base font-normal text-[#1E1E1E] mb-5 flex items-center'>
            <img src={Phone} alt="Phone" className='mr-2' />
            123 456 789
          </div>
          <div className='text-base font-normal text-[#1E1E1E] mb-5 flex items-center'>
            <img src={Whatsapp} alt="Phone" className='mr-2' />
            Whatsapp
          </div>
          <div className='text-base font-normal text-[#1E1E1E] mb-5 flex items-center'>
            <img src={Email} alt="Phone" className='mr-2' />
            hola@Terragrav.com
          </div> */}
          <div className='text-base font-normal text-[#1E1E1E] mb-5 flex items-center'>
            <img src={Time} alt="Phone" className='mr-2' />
            {date}
          </div>
        </div>
      </div>
      <div className='bg-[#1E1E1E] w-full h-[1px] block opacity-20'>
      </div>
      <div className='mt-5 flex justify-center text-purple-700'>
        {/* <img src={Twitter} alt="Twitter" className='mr-5' />
        <img src={LinkedIn} alt="LinkedIn" className='mr-5' />
        <img src={FaceBook} alt="FaceBook" className='' /> */}
        <AiOutlineInstagram />
      </div>
      <div className='text-xs text-[#1E1E1E] opacity-70 text-center mt-3'> ©  2023 Terragrav</div>
      {/* <div className='text-xs text-[#1E1E1E] opacity-70 text-center mt-3'> Ronda Sant Pere 52, 08010 Barcelona, </div>
      <div className='text-xs text-[#1E1E1E] opacity-70 text-center mt-3'> Inscripción en el Registro Mercantil de Barcelona. Tomo 46606, Folio 37, Hoja 525271.</div>
      <div className='text-xs text-[#1E1E1E] opacity-70 text-left mt-8 grid grid-cols-2 gap-20 px-5 lg:px-20'>
        <div className='col-span-2 lg:col-span-1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t <br /><br />
          El funcionamiento de la plataforma es muy sencillo. Se debe completar la solicitud, ésta información se envía a las entidades financieras a tiempo real con el fin de que la herramienta compare, negocie y escanee las mejores ofertas. Una vez aceptada la propuesta, se ingresa el dinero directamente en la cuenta del cliente.
        </div>
        <div className='col-span-2 lg:col-span-1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t <br /><br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it tLorem Ipsum is simply dummy text of the printin
        </div>
      </div> */}
      <div className='mt-12 pb-12 text-xs text-[#1E1E1E] opacity-70 relative flex items-center justify-center w-full'>
        <div className='bg-white w-[159px] h-[44px] drop-shadow-md text-[#1C2E63] text-base rounded-full flex items-center justify-center absolute left-0 cursor-pointer'>
          English
          <img src={DownArrow} alt="DownArrow" className='right-5 absolute' />
        </div>
        <div>Lift no cobra comisiones de ningún tipo</div>
      </div>
    </div>
  )
}

export default Footer
