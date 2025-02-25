import './Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Lấy chiều cao của viewport
            const viewportHeight = window.innerHeight;
            // Kiểm tra vị trí scroll so với 2/3 trang
            const scrollTrigger = viewportHeight * 0.66;

            if (window.scrollY > scrollTrigger) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Đóng menu mobile sau khi click
        } else {
            console.warn(`Section with id "${sectionId}" not found`);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${hasScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    Shieng
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar; 