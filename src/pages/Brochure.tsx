import { motion } from "framer-motion";
import { FileText, Trophy, Palette, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Brochure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-animated opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-accent mb-6">
              <FileText className="w-4 h-4" />
              Official Documents
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-neon mb-4">
              Brochures
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download complete event details, rules, and schedules
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cultural Brochure */}
            <motion.a
              href="https://drive.google.com/file/d/1s9lue2ucQPJiG5WCD4PrGDd-281_JHt8/view"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-8 sm:p-12 border-neon text-center group cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
              >
                <Palette className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neon mb-4">
                Cultural Brochure
              </h2>

              <p className="text-muted-foreground mb-6">
                Complete guide to all cultural events, rules, and registrations
              </p>

              <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <ExternalLink className="w-4 h-4" />
                View & Download
              </span>
            </motion.a>

            {/* Sports Brochure */}
            <motion.a
              href="https://drive.google.com/file/d/1J7TlaT0xOUQBvM7-rytln7icJGvqq5hR/view"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-8 sm:p-12 border-neon-gold text-center group cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center"
              >
                <Trophy className="w-10 h-10 text-accent-foreground" />
              </motion.div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neon-gold mb-4">
                Sports Brochure
              </h2>

              <p className="text-muted-foreground mb-6">
                Complete guide to all sports events, fixtures, and team registrations
              </p>

              <span className="inline-flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                <ExternalLink className="w-4 h-4" />
                View & Download
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brochure;
