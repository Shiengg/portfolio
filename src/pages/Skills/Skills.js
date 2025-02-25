import './Skills.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiRedux, SiPostman, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
        { name: 'ReactJS', icon: <FaReact />, color: '#61DAFB' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Bootstrap 5', icon: <FaBootstrap />, color: '#7952B3' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'RESTful API', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' }
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">Skills.</h2>
            <div className="skills-container">
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 