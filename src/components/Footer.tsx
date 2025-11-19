import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Code2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Career Code Coach
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Professzionális IT karriermentorálás junioroktól seniorig. Valódi
              projektek, személyre szabott fejlődés, garantált eredmények.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Gyors linkek</h4>
            <div className="flex flex-col gap-3 text-slate-400">
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300"
              >
                Szolgáltatások
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300"
              >
                Árak
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300"
              >
                Rólam
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300"
              >
                Kapcsolat
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Kapcsolat</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                <Mail className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@careercoach.hu" className="break-all">
                  info@careercoach.hu
                </a>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Válaszolok minden megkeresésre 24 órán belül.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2024 Career Code Coach. Minden jog fenntartva.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Adatvédelem
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Impresszum
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                ÁSZF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
    </footer>
  );
};

export default Footer;
