import React from 'react';
import { Github, Linkedin, Award, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Lokesh Kumar Telagamalla</h3>
            <p className="text-muted-foreground">Building the future with code</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/tlokeshkumar1/"
              target="https://github.com/tlokeshkumar1/"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lokesh-kumar-telagamalla-18b986221/"
              target="https://www.linkedin.com/in/lokesh-kumar-telagamalla-18b986221/"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/Lokesh_535"
              target="https://x.com/Lokesh_535"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/lokeshkumartela1"
              target="https://www.hackerrank.com/profile/lokeshkumartela1"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Award className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lokesh Kumar Telagamalla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;