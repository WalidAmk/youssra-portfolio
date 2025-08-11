import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white w-full py-10 px-6">
      <h2 className="text-4xl md:text-6xl font-bold my-12 text-primary text-center">
        Contactez-moi
      </h2>
      <div className="space-y-4 text-gray-700 flex flex-col md:flex-row items-center md:justify-around"> 
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-600" size={20} />
          <a
            target="_blank"
            href="mailto:Youssra.1850farissi@gmail.com"
            className="hover:underline"
          >
            Youssra.1850farissi@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-green-600" size={20} />
          <a href="tel:0767344606" target="_blank" className="hover:underline">
            07 67 34 46 06
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Linkedin className="text-blue-700" size={20} />
          <a
            href="https://www.linkedin.com/in/farissi-youssra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Farissi Youssra
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
