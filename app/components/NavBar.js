'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { throttle } from "lodash"

const clickFunction = (e) => {
    e.preventDefault();
    let y_var = document.querySelector(e.target.hash).getBoundingClientRect().y;
    window.scrollTo({top:window.scrollY +y_var,behavior:"smooth"})
}

const CustomLink = ({href, title, pos, className=""}) => {
    
    return(
        <Link href={href} onClick={clickFunction} className={`${className} relative group  `}>
            {title}
            <span 
            className={`h-[3px] inline-block bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full  transition-all ease-in-out duration-[300ms]
            w-0`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, pos, className=""}) => {
    
    return(
        <Link href={href} onClick={clickFunction} className={`${className} relative group  py-4 text-light w-[150px]`}>
            {title}
        </Link>
    )
}

const scrollFunction = throttle(()=>{
    let flag = 1;
    let arr = ['home','about','what','question','contact'];
    for(let i = 4; i >=0; i--){
        //console.log(arr[i],document.querySelector(`#${arr[i]}`).getBoundingClientRect())
        if((window.pageYOffset > window.pageYOffset + document.querySelector(`#${arr[i]}`).getBoundingClientRect().top - window.innerHeight/2 || 
        document.querySelector(`#${arr[i]}`).getBoundingClientRect().bottom <= window.innerHeight ) && flag)
        {
            document.querySelector(`.${arr[i]} > span`).classList.remove('w-0')
            document.querySelector(`.${arr[i]} > span`).classList.remove('bg-light')
            document.querySelector(`.${arr[i]} `).classList.remove('text-light')
            document.querySelector(`.M${arr[i]} `).classList.remove('text-light')
            document.querySelector(`.${arr[i]} > span`).classList.add('w-full')
            document.querySelector(`.${arr[i]} > span`).classList.add('bg-dark')
            document.querySelector(`.${arr[i]}`).classList.add('text-dark')
            document.querySelector(`.M${arr[i]}`).classList.add('text-dark')
            flag = 0;
        }
        else{
            document.querySelector(`.${arr[i]} > span`).classList.remove('w-full')
            document.querySelector(`.${arr[i]} > span`).classList.remove('bg-dark')
            document.querySelector(`.${arr[i]} `).classList.remove('text-dark')
            document.querySelector(`.M${arr[i]} `).classList.remove('text-dark')
            document.querySelector(`.${arr[i]} > span`).classList.add('w-0')
            document.querySelector(`.${arr[i]} > span`).classList.add('bg-light')
            document.querySelector(`.${arr[i]} `).classList.add('text-light')
            document.querySelector(`.M${arr[i]} `).classList.add('text-light')
        }
    }
},300)

const NavBarForPC = ({className = ""}) => {
    return (
        <header className={`w-full py-4 font-medium fixed flex items-center justify-center bg-sky-600/[0.5] z-50 ${className}`}>
                <nav className="navbar w-[560px] flex justify-evenly">
                    <CustomLink href="/#home" title="Home" className="home" />
                    <CustomLink href="/#about" title="About Us" className="about"/>
                    <CustomLink href="/#what" title="What We Do" className="what"/>
                    <CustomLink href="/#question" title="Q&A" className="question"/>
                    <CustomLink href="/#contact" title="Contact" className="contact"/>
                </nav>
        </header>
    )
}

const NavBarForMobile = ({className = ""}) => {
    const [menuOn, setMenuOn] = useState(true);
    const MobileLinkClass = ""
    return (
        <header className={`w-full py-4 font-medium fixed flex z-50 ${className}`}> 
                <button className=" flex left-7 top-2 w-[50px] h-[40px] relative bg-gray-800/[0.8] rounded-lg" onClick={()=>{setMenuOn(!menuOn)}}>
                    <span className=" left-[10px] top-[18px] absolute w-[30px] h-[3px] bg-stone-300">
                        <span className="absolute w-[30px] h-[3px] bg-stone-300 -bottom-[8px] left-0" />
                        <span className="absolute w-[30px] h-[3px] bg-stone-300 bottom-[8px] left-0" />
                    </span>
                </button>
                <div className={` ${menuOn ? ' opacity-0 h-[0px]' : ' opacity-100 h-auto'} flex fixed top-[130px] left-[30px] w-[90%]
                transition-all ease-in-out duration-200 items-center justify-center bg-gray-800/[0.8]`} >
                    <nav className={`navbar w-[560px] flex flex-col justify-evenly ${menuOn ? ' hidden' : ''}`}>
                        <CustomMobileLink href="/#home" title="Home" className="Mhome" />
                        <CustomMobileLink href="/#about" title="About Us" className="Mabout"/>
                        <CustomMobileLink href="/#what" title="What We Do" className="Mwhat"/>
                        <CustomMobileLink href="/#question" title="Q&A" className="Mquestion"/>
                        <CustomMobileLink href="/#contact" title="Contact" className="Mcontact"/>
                    </nav>
                </div>
        </header>

    )
}

const NavBar = (initialMobile) => {
    let arr = ['home','about','what','question','contact'];
    let target
    
    useEffect(()=>{
        scrollFunction();
        window.addEventListener('scroll',scrollFunction)
        return () => {
            window.removeEventListener('scroll',scrollFunction)
        }
    },[])
    
    /*
    useEffect(()=>{
        
        for(let i=4;i>=0;i--){
            target = document.querySelector(`#${arr[i]}`)
            if(target){
                let observer = new IntersectionObserver((entries,observer)=>{
                    console.log(entries[0].boundingClientRect)
                    console.log(entries[0].intersectionRect.height, entries[0].isIntersecting,entries[0].target.id, window.innerHeight)
                    if(entries[0].isIntersecting && (entries[0].intersectionRect.height > window.innerHeight/2 || entries[0].boundingClientRect.height/2)){
                        if(before === null || before === undefined) before = 'home'
                        document.querySelector(`.${before} > span`).classList.remove('w-full')
                        document.querySelector(`.${before} > span`).classList.add('w-0')
                        document.querySelector(`.${arr[i]} > span`).classList.remove('w-0')
                        document.querySelector(`.${arr[i]} > span`).classList.add('w-full')
                        before = arr[i]
                    }
                },{threshold:[0.4,0.5,0.7]})
                observer.observe(target);
            };
        }
    },[])
    */
    /*
    useEffect(()=>{
        arr.map((item)=>{
            let y = window.pageYOffset + document.querySelector(`#${item}`).getBoundingClientRect().top;
            pos.push(y)
        })
        const scrollCheck = () => {
            let flag = 1;
            for(let index = 4; index>=0; index--){
                if(document.querySelector(`.${arr[index]}>span`).classList !== null)
                {
                    if(window.pageYOffset > pos[index] - window.innerHeight/2 && flag){
                        flag = 0;
                    }
                    else{
                    }

                }
            }
        }
        window.addEventListener('scroll',scrollCheck);
        scrollCheck();
        },[])
        */
    return (
        <>
            <NavBarForPC className="NavBarPC"/>
            <NavBarForMobile className="NavBarMobile"/>
        </>
    );
}
export default NavBar;