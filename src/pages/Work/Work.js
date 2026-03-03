import './Work.css';
import { FaGithub } from 'react-icons/fa';

const Work = () => {
    const projects = [
        {
            title: 'MACha - Charity social network platform',
            description: 'A comprehensive charity social network platform that allows users to create, browse, and contribute to fundraising campaigns with transparency and real-time interaction.',
            technologies: ['NextJS', 'NodeJS', 'MongoDB', 'Express', 'Socket.io', 'Tailwind CSS', 'RabbitMQ', 'Redis',
                'Prometheus', 'Grafana', 'SEPAY'
            ],
            github: 'https://github.com/Shiengg/MACha.git',
        },
        {
            title: 'GearHot',
            description: 'An e-commerce platform for tech gadgets with customer shopping features and admin dashboard. Includes product catalog, shopping cart, order management, and multiple payment methods (COD/QR). Built with modern web technologies for optimal performance.',
            technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Shadcn/UI'],
            github: 'https://github.com/Shiengg/GearHot.git',
        },
        {
            title: 'GiaoHangChat',
            description: 'An effective last-mile delivery solution that helps optimize delivery routes and manage delivery staff. Includes delivery status updates, route display, and order status tracking. The app helps streamline the delivery process and improve customer satisfaction.',
            technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Here Maps API'],
            github: 'https://github.com/Shiengg/Last_mile_delivery.git',
        },
        {
            title: 'Hotel Management',
            description: 'A comprehensive hotel management system built with modern technologies. Features include room booking, guest management, and administrative dashboard. The system provides an intuitive interface for hotel staff to manage daily operations efficiently.',
            technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
            github: 'https://github.com/Shiengg/SE347-HotelManagement.git',
        },
        {
            title: 'GoodGadget',
            description: 'A complete phone store management system that handles inventory, sales, and customer relationships. Features include product management, sales tracking, customer database, and detailed reporting. The system helps store owners efficiently manage their business operations.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Material-UI'],
            github: 'https://github.com/FiveM-UIT/OOD-SE100.P13-GoodGadget.git',
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
        </section>
    );
};

export default Work; 