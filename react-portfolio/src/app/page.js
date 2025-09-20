import {BsFillMoonStarsFill} from 'react-icons/bs'
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
import { FaPhp } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiCompassToolFill } from "react-icons/pi";



export default function Home() {
  return (
    <div className='bg-gradient-to-br from-teal-900 to-gray-800' >
      <main className='px-5 pb-24' >
        <section id='home' className="">
          <nav className='p-10 mb-12 flex justify-between' >
            <h1 className='italic text-2xl font-medium' >Wellcome</h1>
            <ul className='flex items-center' >
              <li className=''>
                <BsFillMoonStarsFill className=''/>
              </li>
              <li>
                <a className='bg-gradient-to-br from-teal-400 to-gray-800 text-white px-4 py-2 rounded-md ml-8' 
                  href="#" >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex flex-col text-center items-center min-h-screen ' >
            <h2 className='text-5xl py-2 text-teal-400 font-medium'> 
              Ismail El Abbassi
            </h2>
            <h3 className='text-2xl py-2'>Developer and computer science graduate</h3>
            <p className='text-md py-5 leading-8 text-gray-300 max-w-200' >
              I'm a versatile software developer with experience across systems programming, web applications. Proficient in languages like C, C++, PHP, SQL, and Javascript, I've tackled complex projects across multiple fields. 
              I thrive on solving challenging problems, collaborating in diverse teams, and continuously expanding my technical expertise.
              I have developed robust skills in software development, problem-solving, and collaborative projects. With a solid foundation in coding and software architecture
              I am passionate about blending technical expertise with creative vision, Eager to be innovative, efficient, impactful.
            </p>
            <div className=' flex justify-center gap-10 text-3xl'>
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillGithub/>
            </div>
          </div>
        </section>
        <section className='pt-40 min-h-screen' >
          <div className='bg-gradient-to-br to-gray-800  flex justify-center  fixed bottom-0 pb-5 left-0 right-0 px-20 flex-row gap-10' >
            <a href="#home" className='flex flex-col items-center text-teal  hover:scale-150 transition-all duration-500'>
              <IoMdHome className='size-10 lg:size-15' />
              <h1>Home</h1>
            </a>
            <a href="#skills" className='flex flex-col items-center text-teal  hover:scale-150 transition-all duration-500'>
              <PiCompassToolFill className='size-10 lg:size-15' />
              <h1>Skills</h1>
            </a>
            <a href="#projects" className='flex flex-col items-center text-teal hover:scale-150 transition-all duration-500'>
              <LiaProjectDiagramSolid className='size-10 lg:size-15' />
              <h1>Projects</h1>
            </a>
            <a href="#education"className='flex flex-col items-center text-teal  hover:scale-150 transition-all duration-500'>
              <IoSchoolSharp className='size-10 lg:size-15' />
              <h1>Education</h1>
            </a>
            <a href="#contacts" className='flex flex-col items-center text-teal  hover:scale-150 transition-all duration-500'>
              <FaTelegramPlane className='size-10 lg:size-15' />
              <h1>Contacts</h1>
            </a>
          </div>
        </section>
        <section id='skills' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <div>
            <h1 className='text-5xl text-teal-400'>Skills</h1>
          </div>
          <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 py-10'>
            <div className='flex flex-col items-center gap-1'>
              <h1>Docker</h1>
              <FaDocker size={40}/>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>Git </h1>
              <FaGitAlt size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>C++ </h1>
              <TbBrandCpp size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>C</h1>
              <FaC size={40}/>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>Javascript</h1>
              <IoLogoJavascript size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>React</h1>
              <FaReact size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>Nextjs</h1>
              <RiNextjsFill size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>Tailwind</h1>
              <RiTailwindCssFill size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>PHP</h1>
              <FaPhp size={40} />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>SQL</h1>
              <SiPostgresql size={40} />
            </div>
          </div>
        </section>
        <section id='projects' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <div>
            <h1 className='text-5xl text-teal-400'>Projects</h1>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10'>
            <div className='flex flex-col items-center gap-2 '>
              <h3>E-commerce Website</h3>
              <img src="/e-comerce.jpeg" alt="E-commerce Website" className='rounded-lg shadow-lg hover:scale-105 hover:translate-x-0 transition-all duration-500' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <h3>Portfolio Website</h3>
              <img src="portfolio.png" alt="Portfolio Website" className='rounded-lg shadow-lg hover:scale-105 hover:translate-x-0 transition-all duration-500' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <h3>Blog Platform</h3>
              <img src="blog.png" alt="Blog Platform" className='rounded-lg shadow-lg hover:scale-105 hover:translate-x-0 transition-all duration-500' />
            </div>
          </div>
        </section>
        <section id='education' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <div >
            <h1 className='text-5xl text-teal-400'>Education</h1>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-2 shadow-2xl p-10 rounded-xl gap-10 hover:scale-105 hover:translate-x-0 transition-all duration-500'>
            <h3 className='col-span-2 text-center' >1337 School 2023/2025</h3>
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
          <div className='grid grid-cols-2 shadow-2xl p-10 rounded-xl gap-10 hover:scale-105 hover:translate-x-0 transition-all duration-500'>
            <h3 className='col-span-2 text-center' >University Diploma 2018/2022</h3>
            <div className='flex justify-center' >
              <img src="zohr.png" className='lg:size-60 md:size-60 size-40' ></img>
            </div>
            <p className='text-xl text-gray-300 max-w-100' >
              General University Diploma in mathematics and computer science from the faculty of science of ouarzazate.
              The program covered a range of topics including programming, data structures, algorithms, databases, computer architecture, and software engineering.
            </p>
          </div>
        </section>
        <section id='contacts' className='flex flex-col gap-10 text-3xl items-center min-h-screen pt-20'>
          <div >
            <h1 className='text-5xl text-teal-400'>Contacts</h1>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-4xl w-full px-5'>
            <div className='flex flex-col gap-6 text-center'>
              <h3 className='text-2xl text-teal-400'>Get In Touch</h3>
              <p className='text-lg text-gray-300 leading-relaxed'>
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, 
                feel free to reach out!
              </p>
              <div className='flex flex-col gap-4 text-lg'>
                <div className='flex items-center justify-center gap-3'>
                  <AiFillGithub className='text-teal-400' size={30} />
                  <a href="https://github.com/ism417" className='text-gray-300 hover:text-teal-400 transition-colors'>
                    github.com/ism417
                  </a>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <AiFillLinkedin className='text-teal-400' size={30} />
                  <a href="https://www.linkedin.com/in/ismail-el-abbassi-653b40231/" className='text-gray-300 hover:text-teal-400 transition-colors'>
                    linkedin.com/in/ismail-el-abbassi
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='text-2xl text-teal-400 text-center'>Send a Message</h3>
              <form className='flex flex-col gap-4 text-sm'>
                <input 
                  type='text' 
                  placeholder='Your Name' 
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400'
                />
                <input 
                  type='email' 
                  placeholder='Your Email' 
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400'
                />
                <textarea 
                  placeholder='Your Message' 
                  rows='5'
                  className='p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none'
                ></textarea>
                <button 
                  className='bg-gradient-to-r from-teal-400 to-teal-600 text-white py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 text-lg font-medium'
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
  );
}
