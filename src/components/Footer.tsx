import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">IT Karrier Mentorálás</h3>
            <p className="text-muted-foreground text-sm">
              Segítünk szintet lépni a programozói karrierben.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kapcsolat</h4>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@itmentoring.hu" className="hover:text-primary transition-colors">
                info@itmentoring.hu
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Jogi információk</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Adatvédelem</a>
              <a href="#" className="hover:text-primary transition-colors">Impresszum</a>
              <a href="#" className="hover:text-primary transition-colors">Általános szerződési feltételek</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 IT Karrier Mentorálás. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
