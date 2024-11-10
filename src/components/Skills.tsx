import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-down">
            <h2 className='text-4xl md:text-5xl' >Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>
I am a chemistry student with a basic understanding of web development,Typescript and C++, focusing on HTML, CSS, and JavaScript. I'm learning frameworks like React and Tailwind CSS to build simple, visually appealing interfaces. In addition to my technical interests, I have a strong foundation in chemistry, with skills in laboratory techniques, analytical methods, and chemical safety protocols. I am eager to expand my knowledge in both fields to apply my skills effectively in academic and technical projects.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                <h2 data-aos="zoom-in-down">C++</h2>
                <h2 data-aos="zoom-in-down">Typescript</h2>
                <h2 data-aos="zoom-in-down">Analytical Method</h2>
            </div>

            <div className='space-y-2'>
                <h2 data-aos="zoom-in-down">Research Work</h2>
                <h2 data-aos="zoom-in-down">Titration</h2>
                <h2 data-aos="zoom-in-down">Node.js</h2>
            </div>
            </div>
        </div>
 </div>
</div>
 )
}

export default Skills
