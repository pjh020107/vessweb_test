import Image from 'next/image'
import logo1 from '../public/logo1.png'
import logo2 from '../public/logo2.png'
import {ClientFirst,ClientSecond} from './components/ClientComponents'

export default function Home() {
  return (
    <div>
      <ClientFirst />
      <HomeImage />
      <About />
      <ClientSecond />
      <Contact />
    </div>
  )
}

const HomeImage = () => {
  return(
    <>
      <div>
        <section id="home" className=' w-full h-[600px] flex flex-col items-center justify-center'
        style={{backgroundImage:'url("/lowpoly.png")',
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
        }}>
          <h1 className={'pauta text-white text-8xl tracking-tight mb-2 font-extrabold'}>V E S S </h1>
          <h2 className={'pauta text-back font-light'}>Volunteering Engineers & Scientists of SNU</h2>
          <div className=' relative top-5'>
            <a href='/login' className=' inline-block text-center w-[93px] mr-10 px-4 py-1 font-mono rounded-lg text-sm font-thin text-stone-300 bg-gray-800/[0.8]'>LOG IN</a>
            <a href='https://forms.gle/pQXjzLaYChTiASxf9' className=' inline-block text-center w-[93px] px-4 py-1 rounded-lg font-mono text-sm font-thin text-stone-300 bg-gray-800/[0.8]'>SIGN IN</a>
          </div>
        </section>
      </div>
    </>
  )
}

const About = () => {
  return(
    <section id='about' className='flex flex-col justify-center items-center text-center'>
      <h1 className='section_title'>About Us</h1>
      <span className="section_line">&nbsp;</span>
      <div className='flex m-[30px] flex-wrap '>
        <Image src={logo1} height={150} className=' mr-10' />
        <Image src={logo2} height={120} width={120} />
      </div>
      <p className=' mb-[100px] text-centerf font-light'>
        서울대학교 사회공헌단 VESS는 뭐의 줄임말이며 몇년도부터 시작했고 뭐시기 뭐시기를 했으며
        <br></br>
        몇년도부터 시작한 우리는 
      </p>
    </section>
  )
}

const Contact = () => {
  return(
    <section id='contact' className='flex flex-col justify-center items-center text-center bg-grey'>
      <h1 className='section_title' style={{marginTop:"30px"}}>Contact</h1>
      <span className="section_line" style={{marginBottom:"20px"}}>&nbsp;</span>
      <span>
        Address : Seoul National Univ. Building 36. Unit B114
      </span>
      <a href='https://www.instagram.com/p/ComAxiNJBCY/?igshid=YmMyMTA2M2Y='>
        Instagram : @snu_vess
      </a>
      <h4 className=' mb-5'>Developed By PJH (7,8th semester)</h4>
    </section>
  )
}
