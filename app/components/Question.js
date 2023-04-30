'use client'

import { useState } from "react";
const Accordian = ({title,content}) => {
    const [temp,setTemp] = useState(false);
    return (
      <div className='w-[70%] mb-5 '>
        <button className=' font-[550] w-full min-h-[64px] py-5 rounded-md bg-sky-500/[0.25]
          text-left pl-[20px] pr-[50px] relative break-keep '
        onClick={()=>{setTemp(!temp)}}>
          {title}
          <span className=' w-0 h-0 border-t-[15px] border-r-[12px]
          border-l-[12px] border-b-[15px] border-t-gray-800/[0.8]
          border-l-transparent border-r-transparent border-b-transparent
          absolute right-4 bottom-[9px]'></span>
        </button>
        <p id="inner" className={` font-[340]  w-full text-center align-middle rounded-md
        transition-all ease-in-out duration-200 overflow-hidden break-keep
        ${temp ? ' p-10 bg-slate-300/[0.5] text-black h-auto':' text-white bg-white h-0 truncate '}`}>{content}</p>
      </div>
    )
  }
  const Question = () => {
    const question = [
      {
        q : "활동은 어떤 방식으로 진행되나요?",
        a : "신입 부원의 경우 필수 참석인 신입생 교육 3회를 진행한 뒤에 팀 프로젝트 활동을 시작합니다. \
        팀 프로젝트의 진행 상황 등을 격주마다 진행하는 총회를 통해 공유하고 피드백합니다.\
        이 외에도 해커톤, 홈커밍, 강연 등의 행사를 주기적으로 진행하고 있습니다."
      },
      {
        q : "공대 학생이 아니어도 지원할 수 있나요?",
        a : "네! VESS에서는 기술적인 지식이 없어도 활동이 가능한 프로젝트들이 존재합니다. \
        또한 많은 문과 계열 재학생들의 지원과 합격이 이루어지고 있습니다."
      },
      {
        q : "활동은 대면으로 진행되나요?",
        a : "네! 모든 총회 및 행사는 대면으로 진행됩니다. 대면 총회 및 행사 후에는 \
        희망 여부에 따라 회식을 진행하고 있으며 방학 중에는 VESS MT 등의 다양한 행사를 기획하고 있습니다!"
      },
      {
        q : "고학번도 지원해도 될까요?",
        a : "네! 성실히 의무 활동 기간(1년)동안 활동하신다면 전혀 상관없습니다. 프로젝트를 진행할 때 \
        경험이 많은 고학번은 VESS에게 필수적인 존재입니다. 지난 기수의 경우 18학번부터 22학번까지 다양한 부원들이 참여하여 많은 시너지 효과가 나타날 수 있었습니다."
      },
      {
        q : "리크루팅은 언제 진행되나요?",
        a : "연간 총 2회 진행하며 봄학기가 시작하는 3월에는 정규 기수 리크루팅, 가을학기가 시작하는 9월에 점오기(.5기) 리크루팅이 진행됩니다.\
        자세한 모집 방법은 리크루팅이 진행되는 시기에 인스타그램(@snu_vess)와 에브리타임의 게시글을 확인해주세요!"
      }
    ]
    return(
      <section id='question'  className='flex flex-col justify-center items-center text-center mb-[80px]'>
        <h1 className='section_title'>Q&A</h1>
        <span className=" w-[80px] section_line">&nbsp;</span>
        {question.map((item) => {
          return (<Accordian title = {item.q} content={item.a} />)
        })}
      </section>
    )
  }
export default Question;