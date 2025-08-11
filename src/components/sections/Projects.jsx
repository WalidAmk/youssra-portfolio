import React from 'react'
import content from "../../data/content.json";

const Projects = () => {
    const projects = content.projects.items;
    return (
        <div className='px-8 md:px-24 py-16 md:py-24 bg-primary'>
            <h1
                className="text-3xl md:text-6xl font-bold mb-12 text-secondary text-center"
            >{content.projects.title}</h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{proj.project}</h2>
                    <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Projects
