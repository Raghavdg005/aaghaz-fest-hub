import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-0 bg-animated opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neon mb-8">
            Get In Touch
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-12">
            <div className="glass-card p-6 border-neon min-w-[280px]">
              <h3 className="font-display text-lg font-bold text-accent mb-2">
                Abhishek Kumar Singh
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Organising Secretary</p>
              <a
                href="tel:9756950083"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                9756950083
              </a>
            </div>

            <div className="glass-card p-6 border-neon min-w-[280px]">
              <h3 className="font-display text-lg font-bold text-accent mb-2">
                Priyanshu
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Co-Organising Secretary</p>
              <a
                href="tel:9318316865"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                9318316865
              </a>
            </div>
          </div>

          {/* Location & Social */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/WUfCdMetgridUuCj7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-outline text-sm py-3 px-6 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              View Location
            </a>
            <a
              href="https://www.instagram.com/aaghaz.gims?igsh=bTBlbXdldjY5aTg3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-outline text-sm py-3 px-6 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="text-center sm:text-left">
            <p className="font-display text-foreground mb-1">
              Government Institute of Medical Sciences
            </p>
            <p>Greater Noida, Uttar Pradesh</p>
          </div>

          <div className="text-center">
            <p>© AAGHAZ 2026 • All Rights Reserved</p>
          </div>

          <div className="text-center sm:text-right">
            <p className="flex items-center gap-1 justify-center sm:justify-end">
              Designed with <Heart className="w-4 h-4 text-primary" /> by
            </p>
            <p className="text-foreground">~ Raghav Gupta (2025 Batch)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
