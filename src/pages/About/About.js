import './About.css';

const About = () => {
    const tags = [
        'Software Engineer',
        'Web Development',
    ];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-layout">
                    <div className="about-visual" aria-hidden="true">
                        <div className="about-card">
                            <div className="about-card__pin about-card__pin--tl" />
                            <div className="about-card__pin about-card__pin--tr" />
                            <div className="about-card__pin about-card__pin--bl" />
                            <div className="about-card__pin about-card__pin--br" />
                            <div className="about-card__inner">
                                <div className="about-avatar" aria-hidden="true">🧑🏻‍💻</div>
                            </div>
                        </div>
                        <div className="about-dot about-dot--pink" />
                        <div className="about-dot about-dot--yellow" />
                        <div className="about-dot about-dot--green" />
                        <div className="about-dot about-dot--blue" />
                    </div>

                    <div className="about-copy">
                        <h2 className="about-heading">
                            ABOUT <span>ME</span>
                        </h2>

                        <p className="about-description">
                            Software Engineer skilled in JavaScript with experience in system design, backend development, CI/CD pipelines, and real-time data systems using Docker, RabbitMQ, and Prometheus. Passionate about learning new technologies and collaborating to deliver scalable end-to-end solutions.
                        </p>

                        <div className="about-tags">
                            {tags.map((tag) => (
                                <span className="about-tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 
