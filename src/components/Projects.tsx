import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id: 0,
        title:'Countdown Timer',
        desc:'A Next.js and TypeScript powered website to track time with an interactive countdown feature.',
        img: '/project 1.jpg',
        tags:['React','Node','CSS','Typescript'],

    },
    {
        id:1,
        title:'Resume Builder',
        desc:'A Typescript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically .',
        img:'/project 2.jpg',
        tags:['TypeScript','HTML','CSS','Node'],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="zoom-in-down">
        <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
