import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BiCode, BiWorld, BiMobile } from 'react-icons/bi';

const Work = () => {
    const projects = [
        {
            title: 'Hotel Management',
            description: 'A comprehensive hotel management system built with modern technologies. Features include room booking, guest management, and administrative dashboard. The system provides an intuitive interface for hotel staff to manage daily operations efficiently.',
            technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
            github: 'https://github.com/Shiengg/SE347-HotelManagement.git',
        },
        {
            title: 'Last Mile Delivery',
            description: 'An effective last-mile delivery solution that helps optimize delivery routes and manage delivery staff. Includes delivery status updates, route display, and order status tracking. The app helps streamline the delivery process and improve customer satisfaction.',
            technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Here Maps API'],
            github: 'https://github.com/Shiengg/SE121_Last_mile_delivery.git',
        },
        {
            title: 'GoodGadget',
            description: 'A complete phone store management system that handles inventory, sales, and customer relationships. Features include product management, sales tracking, customer database, and detailed reporting. The system helps store owners efficiently manage their business operations.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Material-UI'],
            github: 'https://github.com/FiveM-UIT/OOD-SE100.P13-GoodGadget.git',
        }
    ];

    const services = [
        {
            icon: <BiCode />,
            title: 'Software Development',
            description: 'Building robust and scalable software solutions tailored to meet specific business needs and requirements.'
        },
        {
            icon: <BiWorld />,
            title: 'Web Development',
            description: 'Creating responsive and dynamic web applications using modern frameworks and technologies.'
        },
        {
            icon: <BiMobile />,
            title: 'Mobile Development',
            description: 'Developing cross-platform mobile applications that provide seamless user experience across devices.'
        }
    ];

    return (
        <section id="work" className="work">
            <h2 className="work-title">Projects.</h2>
            <div className="work-container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="services">
                <h2 className="services-title">Services</h2>
                <div className="services-container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work; 