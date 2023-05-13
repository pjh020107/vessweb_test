import Image from 'next/image'
import logo1 from '../public/logo1.png'
import logo2 from '../public/logo2.png'
import InstagramLogo from '../public/Instagram-Icon.png'
import {ClientFirst,ClientSecond} from './components/ClientComponents'
import {LoginBtn, LogoutBtn} from './components/LoginBtn'
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"

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

const HomeImage = async () => {
  let session = await getServerSession(authOptions)
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
            {session ? <LogoutBtn/>:<LoginBtn/>}
            {session ? <a href='/post' className='inline-block text-center w-[50px] mr-10 px-4 py-1 rounded-lg text-sm bg-gray-800/[0.8]' >📝</a>:null}
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
      <div className='flex flex-wrap items-center justify-center '>
        <Image src={logo1} height={150} className=' mr-10 transition-all ease-in-out duration-200 hover:-rotate-6' />
        <Image src={logo2} height={120} width={120} className='transition-all ease-in-out duration-200 hover:-rotate-6' />
      </div>
      <div className=' max-w-[700px] px-8 grow-0 mt-[20px] mb-[70px] text-center font-light break-keep'>
        서울대학교 사회공헌단 VESS는 Volunteering Engineers & Scientists of SNU의 약자로 2015도부터 활동을 시작한 
        <span className=' font-bold'> 공과대학 소속의 적정기술 동아리</span>입니다.
        <br /><br />
        VESS는 국내외 소외계층을 위한 적정기술 개발하고 사회 문제를 해결하기 위한 프로젝트를 진행합니다. 전공, 단과대와 무관하게 
        사회 문제에 관심이 많고, 소외계층을 기술적 방식으로 돕는 활동을 진행하고 싶은 사람 <span className=' font-semibold'>누구나 참여 가능합니다. </span>
        학기 말에는 프로젝트를 기반으로 다양한 공모전에 참여하며, 지금까지 
        SNU 사회공헌 PLUS+ 경진대회, 창의설계 온라인 경진대회 등 다양한 대회에서 우수한 성적을 거두었습니다.
        <br /><br />
        VESS가 추구하는 방향성은 아래 3가지로 정리할 수 있습니다.<br />
        <div className='flex items-center justify-center'>
          <div className=' max-w-[350px] text-left font-medium'>
          - 적정기술에 대한 올바른 이해와 실천<br />
          - 소외계층의 삶의 질 향상<br />
          - 정기적인 동아리 프로그램을 통한 부원 간 활발한 친목<br />
          </div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return(
    <section id='contact' className='flex flex-col justify-center items-center text-center bg-grey'>
      <h1 className='section_title' style={{marginTop:"30px"}}>Contact</h1>
      <span className="section_line" style={{marginBottom:"20px"}}>&nbsp;</span>
      <span className=' mb-4 font-light '>
        Address : Seoul National Univ. Building 36. Unit B114
      </span>
      <a href='https://www.instagram.com/p/ComAxiNJBCY/?igshid=YmMyMTA2M2Y='>
        <span className=' flex items-center mb-4 font-light '>
          <Image src={InstagramLogo} height={20} className=' mx-1 '/>
          Instagram : @snu_vess
        </span>
      </a>
      <h4 className=' mb-8 font-light'>Developed By PJH (7,8th semester)</h4>
    </section>
  )
}
