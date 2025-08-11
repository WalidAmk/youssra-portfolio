import React from "react";
import content from "../../data/content.json";

import {
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaSalesforce,
  FaProjectDiagram,
  FaTrello,
  FaGithub,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaChartBar,
  FaCuttlefish,
  FaCode
} from "react-icons/fa";

const skillsData = {
  Langages: [
    "PL/SQL",
    "Python",
    "PHP",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "C/C++",
    "Ocaml",
    "React.Js"
  ],
  Outils_et_Framework: {
    Web_dev: [
      "Django",
      "Flask",
      "React.js",
      "FastAPI",
      "Flutterflow"
    ],
    Data_AI: [
      "Pandas",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "LLM",
      "AI & ML",
      "RAG",
      "CrewAI",
      "TFT",
      "Elasticsearch",
      "Talend data",
      "Excel",
      "MCP"
    ],
    DevOps_Others: [
      "Docker",
      "Jenkins",
      "Git",
      "Postman",
      "Brightbox",
      "Salesforce"
    ],
    Visualization: [
      "Power BI",
      "Streamlit",
      "Gradio"
    ]
  },
  Gestion_de_projets: [
    "Scrum",
    "Agile",
    "Merise",
    "UML",
    "Trello",
    "Ms project",
    "Github",
    "Taiga"
  ]
};

// A simple function to get icons for known tools/languages
function getIcon(name) {
  switch (name.toLowerCase()) {
    case "python":
      return <FaPython className="text-blue-500" />;
    case "java":
      return <FaJava className="text-red-600" />;
    case "php":
      return <FaPhp className="text-purple-700" />;
    case "html":
      return <FaHtml5 className="text-orange-600" />;
    case "css":
      return <FaCss3Alt className="text-blue-600" />;
    case "javascript":
      return <FaJs className="text-yellow-400" />;
    
    case "react.js":
      return <FaReact className="text-cyan-500" />;
    case "docker":
      return <FaDocker className="text-blue-700" />;
    case "git":
      return <FaGitAlt className="text-red-500" />;
    case "jenkins":
      return <FaJenkins className="text-red-600" />;
    case "salesforce":
      return <FaSalesforce className="text-blue-600" />;
    case "trello":
      return <FaTrello className="text-blue-700" />;
    case "github":
      return <FaGithub className="text-gray-700" />;
    case "scrum":
    case "agile":
      return <FaProjectDiagram className="text-green-600" />;
    case "pl/sql":
    case "ocaml":
      return <FaCode className="text-gray-800" />;
    case "c/c++":
      return <FaCuttlefish className="text-gray-400" />;
    case "pandas":
    case "tensorflow":
    case "pytorch":
    case "nlp":
    case "llm":
    case "ai & ml":
    case "rag":
    case "crewai":
    case "tft":
    case "elasticsearch":
    case "talend data":
    case "excel":
    case "mcp":
      return <FaDatabase className="text-green-700" />;
    case "postman":
    case "brightbox":
      return <FaCloud className="text-indigo-500" />;
    case "power bi":
    case "streamlit":
    case "gradio":
      return <FaChartBar className="text-yellow-600" />;
    default:
      return <FaCode className="text-gray-400" />; // fallback icon
  }
}

export default function Skills() {
  return (
    <div className="px-8 md:px-24 py-16 md:py-24 bg-primary">
      <h1 
        className="text-3xl md:text-6xl font-bold mb-4 text-secondary text-center"
      >{content.skills.title}</h1>
      <p
        className="text-xl text-white text-center mb-12"
      >{content.skills.description} </p>

      { /* Languages: */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-4">Langages :</h2>
        <div className="flex flex-wrap gap-4">
          {skillsData.Langages.map((lang) => (
            <div
              key={lang}
              className="flex bg-white items-center gap-2 border border-gray-300 rounded-md px-3 py-1"
            >
              {getIcon(lang)}
              <span>{lang}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outils et Framework */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-4">Outils et Framework :</h2>
        {Object.entries(skillsData.Outils_et_Framework).map(
          ([category, tools]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {category.replace(/_/g, " ")}
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex bg-white items-center gap-2 border border-gray-300 rounded-md px-3 py-1"
                  >
                    {getIcon(tool)}
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </section>

      {/* Gestion de projets */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-4">Gestion de projets :</h2>
        <div className="flex flex-wrap gap-4">
          {skillsData.Gestion_de_projets.map((tool) => (
            <div
              key={tool}
              className="bg-white flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1"
            >
              {getIcon(tool)}
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  
}
