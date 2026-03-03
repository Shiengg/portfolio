import './Home.css';
import { useState, useEffect } from 'react';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['Developer', 'Software Engineer', 'Web Developer'];
    const currentText = texts[textIndex];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayTime = 2000; // Delay before deleting starts

    useEffect(() => {
        let timeout;

        if (!isDeleting && text !== currentText) {
            timeout = setTimeout(() => {
                setText(currentText.slice(0, text.length + 1));
            }, typingSpeed);
        } else if (isDeleting && text !== '') {
            timeout = setTimeout(() => {
                setText(currentText.slice(0, text.length - 1));
            }, deletingSpeed);
        } else if (!isDeleting && text === currentText) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayTime);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentText, texts.length]);

    return (
        <section id="home" className="home">
            <div className="home-container">
                <h1>Tran Nhat Tan</h1>
                <p>I'm <span className="typing-text">{text}</span></p>
                <div className="social-links">
                    <a
                        href="mailto:nhattanwork2004@gmail.com"
                        className="social-link"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="https://drive.google.com/file/d/19O-L7TNm8KRVYd6TGrzm3VHrW2SdnYnz/view?usp=sharing"
                        className="social-link social-link--resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home; 