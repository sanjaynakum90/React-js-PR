const projects = [
    { title: 'Movie Explorer', desc: 'Search movies using OMDb API', link: '#' },
    { title: 'Weather Dashboard', desc: 'Live weather with OpenWeather API', link: '#' },
    { title: 'Country Info Finder', desc: 'Explore countries with REST API', link: '#' },
];

const Projects = () => (
    <div className="glass-card mb-5" id="projects">
        <h2>Projects</h2>
        <div className="row">
            {projects.map((proj, i) => (
                <div className="col-md-4 mb-3" key={i}>
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{proj.title}</h5>
                            <p className="card-text">{proj.desc}</p>
                            <a href={proj.link} className="btn btn-outline-primary">View</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;