import React from 'react';

const projects =[
    {
        title:'Project One',
        description: 'A brief description of project one.',
        link: 'https://github.com/username/project-one',
    },
    {
        title:'Project Two',
        description: 'A brief description of project two.',
        link: 'https://github.com/username/project-two',
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