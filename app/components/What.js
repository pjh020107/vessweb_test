'use client'

import { useState } from "react";
import { content } from "../../tailwind.config";
import Image from "next/image";
import Link from "next/link";

const ActivityDiv = ({name, summary, image, content,className=""}) => {
    return (
        <div className={`${className} mb-[25px] w-[200px] mx-4 rounded-xl flex flex-col items-center 
        transition-all ease-in-out duration-200 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:bg-neutral-200`}>
            <Image src={`/${image}`} width={65} height={65} className=" mt-5 mb-5 "/>
            <h2 className="font-semibold text-2xl">{name}</h2>
            <h4 className=" font-[350] text-sm mt-1">{summary}</h4>
            <p className=" w-[180px] h-[160px] mt-3 font-extralight text-sm break-keep">{content}</p>
        </div>
    )
}

const What = () => {
    const [activeTeam, setActiveTeam] = useState(0);
    const teamList = [ {
        name : '조약돌',
        summary : "시각 장애인을 위한 AI 약 정보 확인 제품 제작"
    },
    {
        name : '이지',
        summary : "식습관 개선 수저받침대와 연동 앱 제작"
    },
    {
        name : 'Handy',
        summary : "노약자 악력 보조 장갑 제작",
    },
    {
        name : '켜넥트',
        summary : "AAC(보안대체소통) 캠페인 진행",
    }
    ];
    const activity = [
        {
            name : "Team Project",
            summary : "적정기술 팀 프로젝트",
            image : "1.png",
            color : "",
            content : "4인의 팀원들이 하나의 팀을 이루어 \
                1년의 활동 기간 동안 적정기술 개발을 위해 프로젝트를 진행하며, \
                주기적인 총회를 통해 팀별 프로젝트를 공유하고 서로 피드백을 공유합니다."
        },
        {
            name : "HT & HC",
            summary : "Hackathon / HomeComing",
            image : "2.png",
            content : "12시간 동안 회의를 진행하며 팀원들 간 아이디어를 계속해서 공유하는 해커톤 행사와\
                    동아리 선배들과 함께하며 다양한 조언을 얻을 수 있는 홈커밍 행사를 진행합니다."
        },
        {
            name : "AT Lecture",
            summary : "중,고등학교 적정기술 강연",
            image : "3.png",
            content : "적정기술(Appropriate Technology) 강연은 적정기술 개념 전파와 관심 증대를 목적으로 진행하며 \
            현재까지 약 20개의 학교에서 강연을 진행하였습니다."
        },
        {
            name : "Social Acitity",
            summary : "MT / VF / 총회 뒷풀이",
            image : "4.png",
            content : "다양한 친목 활동을 통해 여러 부원들과 친해질 수 있는 기회를 제공합니다. \
            동아리 MT, VF(Vess Friends)를 통한 친목 자리,정기 총회 이후의 뒷풀이 등을 통해 친목을 다집니다."
        },
    ]
    const selector = (event) => {
        console.log(event.target.innerText);
        setActiveTeam(teamList.findIndex((item)=>{return item.name === event.target.innerText}));
        console.log(activeTeam);
    };
    return (
    <section id="what" className=" flex flex-col justify-center items-center text-center bg-grey">
        <h1 className="section_title">What We Do</h1>
        <span className="section_line">&nbsp;</span>
        <section className=" inline-flex w-full justify-center text-center mb-[20px] flex-wrap">
            <div className=" flex flex-wrap items-center justify-center">
                <ActivityDiv {...activity[0]}/>
                <ActivityDiv {...activity[1]}/>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <ActivityDiv {...activity[2]}/>
                <ActivityDiv {...activity[3]}/>
            </div>
        </section>
        <div className=" w-full justify-center">
            <div className="team_button flex items-center w-full justify-center">
                {teamList.map((item)=>{
                    return (<button 
                    className={
                        `w-[100px] h-[30px] text-center rounded-lg mx-[10px] ease-in-out duration-200
                        ${item===teamList[activeTeam]?"active w-[150px] bg-blue-950/[0.8] text-white":"bg-stone-400 hover:bg-slate-600"}`
                    }
                    onClick={selector}>{item.name}
                    </button>)})}
            </div>
            <div className=" p-20 h-[200px] ">
                    {teamList[activeTeam].summary}
            </div>
        </div>
        <div className=" w-full flex flex-row-reverse ">
            <Link href="https://www.notion.so/VESS-d7f751596ebb4b78b8244fde4cb3c0c2" 
            className=" font-extralight mr-[50px] mb-[30px] underline decoration-1 
            underline-offset-[4px] text-sm">
                    View More
            </ Link>
        </div>
    </section>)
}
export default What;