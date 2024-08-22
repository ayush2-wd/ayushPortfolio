import React from "react";
import Skills from "../utils/Skills";
import "../styles/About.css";
import Experience from "../utils/Experience";
import aboutme from "../../assets/images/aboutme2.jpg";
import {
    programmingLanguages,
    frameworks,
    tools,
    databases,
    others,
} from "../skillsimports";

export default function About() {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" src={aboutme} alt="About me" />
                </div>
                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Ayush Keshari,</span>
                        <p className="aboutMe">
                            a 2025 Computer Science & Engineering graduate from KIIT,
                            Bhubaneshwar.
                            <br />
                            <br />
                            I daily use: <span>.java</span>,{" "}
                            <span>.js</span>, <span>.jsx</span>,{" "}
                            <span>.html</span>, <span>.css</span>. 
                            I have numerous Full Stack Development projects under my belt,
                            details of which you can find here -{" "}
                            <a href="https://github.com/ayush2-wd?tab=repositories">
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
            <div className="expWrapper">
                    <h1 className="heading">Experience</h1>
                    <Experience
                        company="GrapplTech"
                        years="July 2024 - August 2024"
                        title="Software Developer Intern"
                        summary={[
                            "Spearheaded the design and development of a dynamic Hero Section, incorporating creative freedom in logo design, color palette, and typography. Delivered a visually compelling and functional user interface that aligned with the project's aesthetic goals., boosting user interaction by 30% and site engagement by 20%",
                            "Applied responsive design principles, increasing mobile user engagement by 25%.",
                            " Consistently exceeded performance targets by implementing thorough quality checks and developing efficient solutions to complex problems.",
                            
                        ]}
                    />
                </div>
                <div className="expWrapper">
                    <Experience
                        company="ITJOBXS"
                        years="May 2023 - July 2023"
                        title="SDE Intern"
                        summary={[
                            "Designed and created a responsive webpage dedicated to a specific section of Desi QnA using HTML, CSS, JavaScript, and Bootstrap.",
                            "Executed user verification/authentication processes to enhance platform security and user data protection.",
                            "Addressed engineering challenges by developing algorithms to detect and remove fake accounts and posts, ensuring content authenticity.",
                            "Integrated Recaptcha with the website - Google Layer of Protection for websites.",
                        ]}
                    />
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="skillsWrapper">
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    />
                    <Skills
                        title="Databases"
                        images={databases}
                    />
                    <Skills
                        title="Frameworks"
                        images={frameworks}
                    />
                    <Skills
                        title="Others"
                        images={others}
                    />
                    <Skills
                        title="Tools"
                        images={tools}
                    />
                </div>
            </div>
        </div>
    );
}
