import React from 'react';

const projects =[
    {
        title:'Digital Forensics Research Proposal',
        description: 'This project explored emerging trends and challenges in digital forensics, focusing on cloud computing and machine learning integration. The objectives included analyzing current methodologies, proposing innovative frameworks for digital evidence collection, and enhancing investigative processes. This assignment demonstrates my ability to evaluate complex problems and deliver actionable insights, a critical skill for cybersecurity roles. By leveraging advanced tools and methods, the project aligns with the growing demand for forensic expertise in combating cybercrime within cloud environments and IoT ecosystems.',
        link: '/projects/Digital_Forensics_Research_Proposal.docx',
    },
    {
        title:'Secure Software Development Plan for Greentech Engineering',
        description: 'This plan detailed the integration of security into every stage of the software development lifecycle, including conceptual design, coding, and testing. Key objectives included mitigating risks like input attacks, addressing vulnerabilities, and implementing DevSecOps methodologies. This project highlights my expertise in secure coding practices, threat modeling, and compliance with industry standards, showcasing my ability to develop resilient, secure software solutions crucial for modern cybersecurity and software engineering roles.',
        link: '/projects/Secure_Software_Development_Plan_for_Greentech_Engineering.docx',
    },
    {
        title:'Coding Project: Interactive Resume in HTML/CSS/JavaScript',
        description: 'This project involved redesigning a resume template to be modern, visually appealing, and interactive. Objectives included implementing a dark mode toggle, download functionality, and responsive design principles. Using HTML, CSS, and JavaScript, I demonstrated proficiency in front-end development and creating user-friendly interfaces. This project is relevant for showcasing web development expertise, critical for software engineering roles focused on delivering engaging user experiences.',
        link: '/projects/Coding_Project_Interactive_Resume.docx',
    },
    {
        title:'Enterprise Architecture for TechWave Innovations',
        description: 'This assignment outlined a comprehensive enterprise architecture plan for a custom-built PC and IT services company. It included designing scalable system architectures, integrating marketing strategies, and ensuring security and dependability. The project demonstrates my ability to align technical designs with business objectives, a vital skill for roles requiring enterprise-level system planning and implementation.',
        link: '/projects/Enterprise_Architecture_for_TechWave_Innovators.docx',
    },
    {
        title:'End of Design Phase Report for Offex Limited Corporation Website',
        description: 'As the Project Manager, I led the design phase of a corporate website for Offex Limited, focusing on user experience, stakeholder engagement, and strategic alignment with business goals. The report emphasized responsive design, accessibility, and Agile methodologies. This project showcases my project management capabilities, particularly in delivering user-centric IT solutions within tight schedules and budgets, aligning with key competencies in IT and software project management.',
        link: '/projects/End_of_Design_Phase_Report_for_Offex_Limited_Corporation_Website.docx',
    },
];

const Projects = () => {
    return (
        <div className='container mt-5'>
            <h2>Projects</h2>
            <div className='row'>
                {projects.map((project, index) =>(
                   <div className='col-md-4 mb-3' key={index}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{project.title}</h5>
                                <p className='card-text'>{project.description}</p>
                                <a href={project.link} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>
                                    View Project
                                </a>
                            </div>
                        </div>
                   </div> 
                ))}
            </div>
        </div>
    );
};
export default Projects;