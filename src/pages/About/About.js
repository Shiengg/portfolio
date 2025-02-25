import './About.css';
import { FaUserGraduate, FaCode, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="about-title">About.</h2>
                <div className="about-content">
                    <p>
                        My name is Nhat Tan, a third-year Information Technology student at the University of Information Technology, Ho Chi Minh City.
                        Passionate about technology.
                        I am constantly exploring new innovations in the field.
                        I have achieved a GPA of 8.24/10 while gaining hands-on experience in collaborating with teams and managing complex projects.
                    </p>

                    <div className="about-info">
                        <div className="info-column">
                            <div className="info-item">
                                <FaUserGraduate className="info-icon" />
                                <div className="info-text">
                                    <h4>Education</h4>
                                    <p>University of Information Technology</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaCode className="info-icon" />
                                <div className="info-text">
                                    <h4>Specialization</h4>
                                    <p>Web Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-column">
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div className="info-text">
                                    <h4>Location</h4>
                                    <p>Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaEnvelope className="info-icon" />
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <p>nhattanwork2004@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 