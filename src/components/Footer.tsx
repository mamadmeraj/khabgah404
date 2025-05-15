
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-8">
      <div className="container flex flex-col items-center justify-center">
        <a 
          href="https://t.me/Khabgah404" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors border border-white/10 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10"
        >
          <span>t.me/Khabgah404</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-xs text-white/50 mt-4">
        𝓴𝓱𝓪𝓫𝓰𝓪𝓱ᔦꝊᔦ © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
