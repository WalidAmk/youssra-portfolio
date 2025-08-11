import React from 'react';
import content from "../../data/content.json";

const Experiences = () => {
    const experiences = content.experiences.items;
    return (
        <div className='px-8 md:px-24 py-24'>
                <h1 
                    className="text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-secondary text-center"
                >{content.experiences.title} </h1>
            
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {experiences.map((exp, index) => (
                    <li key={index} className="mb-10 ms-6 bg-secondaryLight p-6 rounded-lg relative">
                    {/* Timeline Icon */}
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg
                        className="w-2.5 h-2.5 text-blue-800 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>

                    {/* Title & Company */}
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                        {exp.title} chez <span className='underline'>{exp.company}</span>
                    </h3>

                    {/* Period */}
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                        {exp.period}
                    </time>

                    {/* Description */}
                    <p className="mb-2 text-base font-normal text-gray-500 ">
                        {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded "
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </li>
                ))}
                </ol>

        </div>
    )
}

export default Experiences
