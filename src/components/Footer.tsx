import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 animate-fade-in">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <div>
              <span className="text-xl font-bold">MDESK</span>
              <p className="text-sm text-white/70">© 2025 MDESK. All rights reserved.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <a href="mailto:admin@admin.com" className="font-medium">
              admin@admin.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
