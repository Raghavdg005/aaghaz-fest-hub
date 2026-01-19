import { motion } from "framer-motion";
import { Sparkles, Trophy, Palette, FileText, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AAGHAZ Festival"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-animated opacity-60" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-accent border border-accent/30">
            <Sparkles className="w-4 h-4" />
            Government Institute of Medical Sciences, Greater Noida
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl lg:text-9xl font-black mb-6"
        >
          <span className="text-neon">AAGHAZ</span>
          <span className="text-neon-gold block sm:inline sm:ml-4">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4"
        >
          From White Coats to Center Stage & Sports Arenas —
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto mb-8"
        >
          Because Medicos Heal with Skill, Express with Art & Compete with Spirit!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <p className="font-display text-xl sm:text-2xl text-accent mb-8">
            5th – 12th February 2026
          </p>
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/cultural" className="btn-neon flex items-center gap-2 text-sm">
            <Palette className="w-4 h-4" />
            Cultural
          </Link>
          <Link to="/sports" className="btn-gold flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4" />
            Sports
          </Link>
          <Link to="/brochure" className="btn-neon-outline flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4" />
            Brochure
          </Link>
          <a
            href="https://maps.app.goo.gl/BNw5VZFidbhWuPCU7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline flex items-center gap-2 text-sm"
          >
            <MapPin className="w-4 h-4" />
            Location
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
