'use client'

import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiCompassToolFill } from "react-icons/pi";
import { Inter, Space_Grotesk } from 'next/font/google'
import { useState } from 'react'
import { FloatingDock } from '@/components/ui/floating-dock';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from "motion/react";
import { HoverEffect } from '@/components/ui/card-hover-effect';
import GlassIcons from '@/components/GlassIcons';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

export default function Home() {

  const projects = [
    {
      title: 'Ping Pong game',
      link: 'https://ping-pong-free.vercel.app/',
      image: '/pingpong.png',
    },
    {
      title: 'Spinning wheel',
      link: 'https://spinning-wheel-free.vercel.app/',
      image: '/spinning.png',
    },
    {
      title: 'Todo list manager',
      link: 'https://my-todo-io-app.vercel.app/',
      image: '/todoapp.png',
    }
  ];

   const links = [
    {
      title: "Home",
      icon: (
        <IoMdHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <PiCompassToolFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <LiaProjectDiagramSolid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "education",
      icon: (
        <IoSchoolSharp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "contacts",
      icon: (
        <FaTelegramPlane className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contacts",
    },
  ];
  const items = [
    { icon: <FaDocker />, color: 'blue', label: 'Docker' },
    { icon: <FaGitAlt />, color: 'gray', label: 'Git' },
    { icon: <TbBrandCpp />, color: 'blue', label: 'C++' },
    { icon: <FaC />, color: 'indigo', label: 'C' },
    { icon: <IoLogoJavascript />, color: 'orange', label: 'Javascript' },
    { icon: <FaReact />, color: 'blue', label: 'React' },
    { icon: <RiNextjsFill />, color: 'gray', label: 'Nextjs' },
    { icon: <RiTailwindCssFill />, color: 'blue', label: 'TailwindCss' },
    { icon: <FaPython />, color: 'orange', label: 'Python' },
    { icon: <SiPostgresql />, color: 'orange', label: 'Sql' },
  ];
  return (
    <AuroraBackground>
    <div className='relative z-10' >
      <main className='px-5 pb-24' >
        <section id='home' className="">
          <nav className='p-10 mb-12 flex justify-between' >
            <h1 className='italic text-2xl font-medium text-purple-600' >Ismail El Abbassi</h1>
            <ul className='flex items-center' >
              <li>
                <a className='bg-gradient-to-br from-purple-600 to-gray-800 hover:to-purple-900 transition duration-700 ease-in-out text-white px-4 py-2 rounded-md ml-8' 
                  href="/eismail-cv.pdf"
                  download="eismail-cv.pdf" >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex flex-col text-center items-center min-h-screen ' >
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
            <h3 className='text-2xl py-2 text-white '>Developer and computer science graduate</h3>
            <p className='text-md py-5 leading-8 text-gray-300 max-w-200' >
              I'm a versatile software developer with experience across systems programming, web applications. Proficient in languages like C, C++, PHP, SQL, and Javascript, I've tackled complex projects across multiple fields. 
              I thrive on solving challenging problems, collaborating in diverse teams, and continuously expanding my technical expertise.
              I have developed robust skills in software development, problem-solving, and collaborative projects. With a solid foundation in coding and software architecture
              I am passionate about blending technical expertise with creative vision, Eager to be innovative, efficient, impactful.
            </p>
            <div className=' flex justify-center gap-10 text-3xl'>
              <a href='https://www.linkedin.com/in/ismail-el-abbassi-653b40231/' className='hover:bg-purple-600 transition duration-700 ease-in-out'>
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/ism417" className='hover:bg-purple-600 transition duration-700 ease-in-out rounded-2xl'>
                <AiFillGithub/>
              </a>
            </div>
            </motion.div>
          </div>
        </section>
       <section className='pt-40 min-h-screen' >
        <div className='z-50 bg-gradient-to-br to-gray-800 flex justify-center fixed bottom-0 pb-2 left-0 right-0 px-10 flex-row gap-6' >
            <FloatingDock
              items={links}
            />
        </div>
      </section>
        <section id='skills' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >

          <div>
            <h1 className='text-5xl text-white'>Skills</h1>
          </div>
          <div className=''>
            <GlassIcons items={items} className=" relative grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"/>
          </div>
          </motion.div>
        </section>
        <section id='projects' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20 overflow-x-hidden'>
              
          <div>
            <h1 className='text-5xl text-white'>Projects</h1>
          </div>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative  gap-4  px-4"
            >
              <div className=" mx-auto px-8">
                <HoverEffect items={projects} />
              </div>
          </motion.div>
        </section>
        <section id='education' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative flex flex-col items-center gap-4  px-4"
            >
          <div >
            <h1 className='text-5xl text-white'>Education</h1>
          </div>
          
          <div className='grid lg:grid-cols-2 sm:grid-cols-2 p-10 hover:bg-purple-600/30 rounded-xl gap-10 overflow-hidden hover:translate-x-0 transition-all duration-800'>
            <h3 className='col-span-2 text-center text-white' >1337 School 2023/2025</h3>
            <div className='flex justify-center' >
              <img src="1337.png" className='lg:size-60 md:size-60 size-40'></img>
            </div>
            <p className='text-xl text-gray-300 max-w-100' >
              As 1337 student, 1337 is the first to provide IT training in Morocco, completely free of charge,
              open and accessible to anyone between the ages of 18 and 30.
              No need for an IT degree, or of having undergone extensive IT training.
              The only criteria for admission in Treize, Trente-Sept is CREATIVITY.
            </p>
          </div>
          <div className='grid grid-cols-2  p-10 rounded-xl gap-10 hover:bg-purple-600/30 hover:translate-x-0 transition-all duration-800'>
            <h3 className='col-span-2 text-center text-white' >University Diploma 2018/2022</h3>
            <div className='flex justify-center' >
              <img src="zohr.png" className='lg:size-60 md:size-60 size-40' ></img>
            </div>
            <p className='text-xl text-gray-300 max-w-100' >
              General University Diploma in mathematics and computer science from the faculty of science of ouarzazate.
              The program covered a range of topics including programming, data structures, algorithms, databases, computer architecture, and software engineering.
            </p>
          </div>
          </motion.div>
        </section>
        <section id='contacts' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <div >
            <h1 className='text-5xl text-white'>Contacts</h1>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-4xl w-full px-5'>
            <div className='flex flex-col gap-6 text-center'>
              <h3 className='text-2xl text-white'>Get In Touch</h3>
              <p className='text-lg text-gray-300 leading-relaxed'>
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, 
                feel free to reach out!
              </p>
              <div className='flex flex-col gap-4 text-lg'>
                <div className='flex items-center justify-center gap-3'>
                  <AiFillGithub className='text-purple-600' size={30} />
                  <a href="https://github.com/ism417" className='text-gray-300 hover:text-purple-600 transition-colors'>
                    github.com/ism417
                  </a>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <AiFillLinkedin className='text-purple-600' size={30} />
                  <a href="https://www.linkedin.com/in/ismail-el-abbassi-653b40231/" className='text-gray-300 hover:text-purple-600 transition-colors'>
                    linkedin.com/in/ismail-el-abbassi
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='text-2xl text-purple-600 text-center'>Send a Message</h3>
              <form className='flex flex-col gap-4 text-sm'>
                <input 
                  type='text' 
                  placeholder='Your Name' 
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                <input 
                  type='email' 
                  placeholder='Your Email' 
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                <textarea 
                  placeholder='Your Message' 
                  rows='5'
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none'
                ></textarea>
                <button 
                  className='bg-linear-to-r from-purple-600 to-purple-900 text-white py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 text-lg font-medium'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='text-center text-lg text-gray-400 mt-10'>
            <p>© 2025 Ismail El Abbassi. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
    </AuroraBackground>
  );
}
