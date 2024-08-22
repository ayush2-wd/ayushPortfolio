import React from 'react';
import '../styles/Projects.css';
import { travigo, sfms, formsync, weatherapi, todolist, foodrush } from '../projectsimports';
import ProjectCard from '../utils/ProjectCard';
import mongodb from '../../assets/skills/databases/mongodb.svg';
import ejs from '../../assets/skills/frameworks/ejs.svg';
import bootstrap from '../../assets/skills/frameworks/bootstrap.svg';
import css from '../../assets/skills/programminglanguages/css.svg';
import nodejs from '../../assets/skills/frameworks/nodejs.svg';
import expressjs from '../../assets/skills/frameworks/expressjs.svg';
import typescript from '../../assets/skills/programminglanguages/typescript.svg';
import react from '../../assets/skills/frameworks/react.svg';
import mysql from '../../assets/skills/databases/mysql.svg';
import ejs2 from '../../assets/skills/frameworks/ejs.svg';
import javascript from '../../assets/skills/programminglanguages/javascript.svg';
import TailwindCSS from '../../assets/skills/frameworks/tailwindcss.svg'

export default function Projects() {
    return (
        <div className='pageWrapper'>
            <h1 className='projectsPageTitle'>PROJECTS</h1>
            <div className='projectsWrapper'>
            <ProjectCard
                    image={foodrush}
                    projectTitle="FoodRush - Food Ordering Website"
                    techstack={[mongodb, react, nodejs, expressjs, TailwindCSS]}
                    deployed="https://food-rush-client.vercel.app/"
                    github="foodRush-client"
                    summary=" Built a food delivery app with menu items fetched from custom-crafted APIs using Express.js, stored in MongoDB Atlas, integrated RESTful APIs for meal data management, integrated user authentication with admin authorization for menu updates, and enabled Stripe payment integration for secure transactions, automatically calculating order totals in real-time."
                />
                <ProjectCard
                    image={travigo}
                    projectTitle="Travigo - Full-Stack Website"
                    techstack={[mongodb, ejs, bootstrap, css]}
                    deployed="https://travigo.onrender.com/"
                    github="travigo"
                    summary="Developed a travel website using MongoDB for listing management, EJS Mate, and Bootstrap for a responsive design. Integrated client-side and server-side validation, session management with Express Sessions and cookies, Passport for authentication and authorization, and error handling. Implemented MVC design, optimized routing with router.route, and integrated image upload with Multer and Cloudinary API. Utilized Mapbox API for dynamic map features and location visualization."
                />
                <ProjectCard
                    image={sfms}
                    projectTitle="SFMS - Full-Stack Website"
                    techstack={[nodejs, expressjs, typescript, react]}
                    github="simple-feedback-management-system"
                    summary="Built a feedback management system using NodeJs, ExpressJs, TypeScript, and ReactJs. Implemented RESTful APIs for feedback submission and retrieval, rate limiting, and data integrity with validation. Developed a responsive interface with React and CSS, integrated web workers for data fetching, and virtual scrolling for performance enhancement."
                />
                <ProjectCard
                    image={formsync}
                    projectTitle="FormSync Pro"
                    techstack={[nodejs, expressjs, mysql, react]}
                    github="form"
                    summary="Worked on Form Management System with React frontend and Node.js backend, integrating Google Sheets for data synchronization. Configured MySQL database with Sequelize ORM, defined models and migrations, and utilized xlsx library for real-time data processing from online Excel sheets."
                />
                {/* <ProjectCard
                    image={weatherapi}
                    projectTitle="Weather Api"
                    techstack={[nodejs, expressjs, ejs, react, css]}
                    github="weather-api"
                    summary="Built a responsive webpage providing comprehensive weather information based on user input. Frontend developed with EJS, CSS, and Bootstrap-components, backend handled by ExpressJs. Utilized a high-performance weather API for precise weather data."
                /> */}
                <ProjectCard
                    image={todolist}
                    projectTitle="TodoList"
                    techstack={[nodejs, expressjs, ejs2, javascript, css, bootstrap]}
                    github="To-Do-list"
                    summary="Developed a To-Do List web application with NodeJS, ExpressJS, EJS, JavaScript, CSS, and Bootstrap. Implemented task management, reminders, and productivity enhancements."
                />
            </div>
        </div>
    );
}
