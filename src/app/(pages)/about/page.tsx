import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const About = () => {
  return (
    <div>
        <h1 className='heading'>About Me</h1>
        <Image src="/images/about-pic.jpg" alt='img' width={200} height={200} className='img1'/>
        <p>I am Safa Ghulam Muhammad, a full-stack developer passionate about mastering web development and creating a bright
        future in the tech world. With a deep curiosity and a drive to expand my skills, I am constantly exploring new 
        technologies—from building responsive, multi-page websites to delving into the exciting world of artificial intelligence.
        Coding, learning new concepts, and pushing the boundaries of innovation are my favorite ways to spend time. My journey
        reflects my commitment to lifelong learning and my ambition to make a meaningful impact in the ever-evolving field of 
     development.
       </p>
       <div className='btn3'>
         <button className='bt2'><FaLinkedin className='icon'/></button>
         <button className='bt2'><FaGithub className='icon'/></button>
         <button className='bt2'><FaFacebook className='icon'/></button>
         <button className='bt2'><FaInstagram className='icon1'/></button>
         <button className='bt2'><FaYoutube className='icon2'/></button>
       </div>
       <div className='skill'>
            <div>
                <h1 className='heading'>My Skills</h1>
                <div>
                    <h2 className='skill-h2'>HTML</h2>
                    <div className='bar'></div>
                </div>
                <div>
                    <h2 className='skill-h2'>CSS</h2>
                    <div className='bar1'></div>
                </div>
                <div>
                    <h2 className='skill-h2'>JAVASCRIPT</h2>
                    <div className='bar2'></div>
                </div>
                <div>
                    <h2 className='skill-h2'>TYPESCRIPT</h2>
                    <div className='bar3'></div>
                </div>
                <div>
                    <h2 className='skill-h2'>NEXTJS</h2>
                    <div className='bar4'></div>
                </div>
                <div>
                    <h2 className='skill-h2'>FIGMA</h2>
                    <div className='bar5'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

