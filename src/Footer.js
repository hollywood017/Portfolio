import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-light text-center py-3 mt-5'>
            <p>
            © {new Date().getFullYear()} Nicholas Hoats | Follow me on {' '}
            <a href='https://www.linkedin.com/in/nicholas-hoats/' target='_blank' rel='noopener noreferrer'>
            LinkedIn
            </a>{' '}
            and {' '}
            <a href='https://github.com/hollywood017' target='_blank' rel='noopener noreferrer'>
            GitHub
            </a>
            </p>
        </footer>
    );
};
export default Footer;