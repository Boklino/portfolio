import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {SiGmail} from "react-icons/si"
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from "next/legacy/image"
import Ezzat from "./ezza.png"
import Python from "./Python.png"
import JS from "./JS.png"
import Mobile from "./Mobile.png"
import Teaching from "./Teaching.png"
import Link from 'next/link'
import { useState } from 'react'



export default function Home() {
  const [darkMode,setDarkMode] = useState(true)
  console.log("dark",darkMode)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        
        <title>Ezzat's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className='min-h-screen'>
     
            <nav className=' py-10 mb-12 flex justify-between'>
              <h1 className=' text-l font-burtons t md:text-2xl dark:text-slate-300'>rathetsu</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl md:transition-all md:hover:rotate-45 md:hover:scale-125 dark:text-white " /></li>
                <li><a className=' text-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1  text-white rounded-md ml-8 transition-all hover:animate-pulse  dark:text-slate-100 ' href="https://github.com/Rathetsu/Rathetsu/blob/main/assets/resume/resume.pdf" target="_blank">Resume</a></li>
              </ul>
            </nav>
            <div className=' text-center p-10 '>
              <h2 className=' text-3xl  font-bold text-teal-500 py-2 md:text-6xl writer writer-text'>Hi, I'm Ahmed Ezzat.</h2>
              <h3 className=' text-lg py-2 md:text-3xl dark:text-slate-300'>A Software Engineer.</h3>
              <p className=' text-base text-gray-700 py-4 leading-6 md:text-xl max-w-xl mx-auto dark:text-slate-400'>Impassioned Software Engineer with more than three years of professional experience.</p>
            </div>
            <div className='flex justify-center gap-16 text-5xl py-3  text-gray-700 dark:text-slate-200 '>
          <a className='transition-all hover:scale-125' href="https://www.linkedin.com/in/ahmedezzatmuh/" target="_blank">  <AiFillLinkedin /> </a> 
          <a className='transition-all hover:scale-125' href="https://github.com/Rathetsu" target="_blank"><AiFillGithub /> </a> 
 
            </div>
            <div className='  relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96  transition-all hover:scale-105'>
              <Image src={Ezzat} layout="fill" alt="Picture containing the author of the portfolio"/>
            </div>
        </section>

        <section className='py-4 mt-8'>
          <div >
             <h3 className='py-1 text-2xl mt-4 md:text-3xl dark:text-slate-300'>Services I offer</h3>
             <p className="text-base text-gray-700 py-4 leading-6 md:text-lg dark:text-slate-300" >I have experience in <span className=' text-teal-600'> Mobile</span>  development, <span className=' text-teal-600'>Fullstack </span> web development, High-level <span className=' text-teal-600'>Problem solving</span> and teaching</p>
          </div>
          
          <div className='md:flex flex-row gap-15'>
            <div  className="text-center shadow-xl p-10 mt-20 rounded-2xl flex-1  mx-3 dark:bg-slate-100  transition-all hover:scale-105">
              <Image src={Python} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Problem Solving</h3>
              <p className="text-sm text-gray-700 py-4 leading-6">I do high-level Problem Solving using Python.</p>
            </div>
            <div  className="text-center shadow-lg p-10 mt-20 rounded-2xl flex-1  mx-3 dark:bg-slate-100  transition-all hover:scale-105">
              <Image src={Mobile} width={130} height={100}/>
              <h3 className=' text-lg whitespace-nowrap font-medium pt-8 pb-2'>Mobile Development</h3>
              <p className="text-sm text-gray-700 py-4 leading-6">I Worked as a mobile developer using React Native.</p>
            </div>
            <div  className="text-center  shadow-lg p-10 mt-20 rounded-2xl flex-1 mx-3 dark:bg-slate-100  transition-all hover:scale-105">
              <Image src={JS} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2 whitespace-nowrap'>Web Development</h3>
              <p className="text-sm text-gray-700 py-4 leading-6">I have experince in Fullstack development using MERN stack.</p>
            </div>
            <div  className="text-center shadow-lg p-10 mt-20 rounded-2xl flex-1 mx-3 dark:bg-slate-100  transition-all hover:scale-105">
              <Image  src={Teaching} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Teaching</h3>
              <p className="text-sm text-gray-700 py-4 leading-6">I Enjoy doing tutoring to help people fall in love with programming.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
