import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
        <h1 className='heading'>My Projects</h1>
        <div className='projects'>
          <h2 className='pro-h2'>There are my some Projects.</h2>
          <p className='pro-p'>A diverse range of projects spanning web development and CLI tools. I specialize in building dynamic web applications with frameworks like React and Next.js, as well as developing practical CLI tools in TypeScript and Node.js to streamline workflows and solve everyday challenges.
          </p>
        </div>
        <div className='main'>
          <div className='card'>
            <Image src="/images/projects/tailwind-portfolio.png" alt='portfolio-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>Personal Portfolio(Tailwind-css)</h3>
            <p className='card-p'>A sleek personal portfolio built with Tailwind CSS, showcasing projects, skills, and achievements with a modern, responsive design.</p>
            <span><Link href="https://my-personal-portfolio-j52p.vercel.app/" className='link1'>Preview</Link></span>
          </div>
          <div className='card'>
            <Image src="/images/projects/juice-website-pic.jpeg" alt='juice-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>Juice Website</h3>
            <p className='card-p'>A vibrant juice website built with Next.js, featuring seamless navigation and a refreshing design.</p>
            <span><Link href="https://my-juice-website.vercel.app/" className='link1'>Preview</Link></span>
          </div>
          <div className='card'>
            <Image src="/images/projects/resume-builder.webp" alt='resume-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>Shareable Resume Builder</h3>
            <p className='card-p'>A shareable resume builder created with HTML, CSS, and JavaScript, enabling users to design and share professional resumes effortlessly.</p>
            <span><Link href="https://hakhaton-milestone5.vercel.app/" className='link1'>Preview</Link></span>
          </div>
          <div className='card'>
            <Image src="/images/projects/to-do-image.jpeg" alt='todo-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>CLI To-do List</h3>
            <p className='card-p'>A CLI-based to-do list built with TypeScript for efficient task management.</p>
            <span><Link href="https://github.com/SAFAGHULAM/TO-DO-LIST.git" className='link1'>Preview</Link></span>
          </div>
          <div className='card'>
            <Image src="/images/projects/calculator-img.webp" alt='portfolio-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>Simple Calculator</h3>
            <p className='card-p'>A CLI simple calculator built with TypeScript for quick and accurate computations.</p>
            <span><Link href="https://github.com/SAFAGHULAM/Simple-Calculator.git" className='link1'>Preview</Link></span>
          </div>
          <div className='card'>
            <Image src="/images/projects/currency-converter-img.png" alt='portfolio-img' width={200} height={200} className='img2' />
            <h3 className='card-h'>CLI Currency Converter</h3>
            <p className='card-p'>A CLI currency converter built with TypeScript for quick and accurate exchange rate calculations.</p>
            <span><Link href="https://github.com/SAFAGHULAM/CLI-Currency-Converter.git" className='link1'>Preview</Link></span>
          </div>
          
        </div>
    </div>
  )
}

export default Projects