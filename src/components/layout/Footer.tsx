import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">NGTSAB</h3>
            <p className="text-sm text-primary-foreground/80">
              The National Gifted and Talented Student Advocacy Board empowers student voices to improve gifted education nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/national-gifted-and-talented-student-advocacy-board/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ngtsab" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:connect@ngtsab.org" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/about/people" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">The People</Link></li>
              <li><Link to="/about/mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">The Mission</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/documents" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Documents</Link></li>
              <li><Link to="/resources/teachers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">For Teachers</Link></li>
              <li><Link to="/resources/students" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">For Students</Link></li>
              <li><Link to="/resources/start-board" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Start a GT Board</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legislation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/legislation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Automatic Enrollment</Link></li>
              <li><Link to="/legislation/why" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Why Automatic Enrollment</Link></li>
              <li><Link to="/legislation/promote" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">How to Promote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} National Gifted and Talented Student Advocacy Board. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
