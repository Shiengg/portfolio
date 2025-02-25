import './Home.css';
import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'Developer';
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayTime = 2000; // Delay before deleting starts

    useEffect(() => {
        let timeout;

        if (!isDeleting && text !== fullText) {
            timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, typingSpeed);
        } else if (isDeleting && text !== '') {
            timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length - 1));
            }, deletingSpeed);
        } else if (!isDeleting && text === fullText) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayTime);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting]);

    return (
        <section id="home" className="home">
            <div className="home-container">
                <h1>Tran Nhat Tan</h1>
                <p>I'm <span className="typing-text">{text}</span></p>
                <div className="social-links">
                    <a
                        href="https://github.com/Shiengg"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tann-tn/"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />LinkedIn
                    </a>
                    <a
                        href="mailto:nhattanwork2004@gmail.com"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <HiDocumentText />Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home; 