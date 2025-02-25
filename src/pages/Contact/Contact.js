import { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import Modal from '../../components/Modal/Modal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleScheduleCall = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        // Xử lý submit form
        console.log('Form submitted');
        setIsModalOpen(false);
    };

    const contactMethods = [
        {
            icon: <FaCalendarAlt />,
            title: 'Schedule a Call',
            link: '#',
            onClick: handleScheduleCall
        },
        {
            icon: <FaGithub />,
            title: 'GitHub',
            link: 'https://github.com/Shiengg'
        },
        {
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/tann-tn/'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            link: 'mailto:nhattanwork2004@gmail.com'
        }
    ];

    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contact.</h2>
            <div className="contact-container">
                <div className="contact-links">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            onClick={method.onClick}
                            target={method.onClick ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            {method.icon}
                            <span>{method.title}</span>
                        </a>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </section>
    );
};

export default Contact; 