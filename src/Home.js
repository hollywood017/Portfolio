import React from 'react';

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Nicholas, a cybersecurity consultant and web developer. I specialize in the MERN and MEAN stack development and cybersecurity practices for modern web apps. Explore my work and connect with me to discuss exciting opportunites!</p>
            <h2>Main Attributes</h2>
            <ul className='list-unstyled'>
                <li>- Experienced in Cybersecuirty and Web Development.</li>
                <li>- Proficient in MERN and MEAN Stack and Agile Development Practices</li>
                <li>- Strong Analytical and Problem-Solving Skills</li>
            </ul>
            <h2>Elevator Pitch</h2>
            <audio controls className='mt-3'>
                <source src='/path-to-your-audio-file.mp4' type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};
export default Home;