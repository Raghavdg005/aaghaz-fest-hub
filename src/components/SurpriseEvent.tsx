import { motion } from "framer-motion";
import { Sparkles, MapPin, Clock, Mic } from "lucide-react";
import mohitDudeja from "@/assets/mohit-dudeja.jpg";

const SurpriseEvent = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-animated" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px hsl(270 100% 65% / 0.3)",
                "0 0 60px hsl(270 100% 65% / 0.6)",
                "0 0 30px hsl(270 100% 65% / 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-card p-8 sm:p-12 border-neon relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-primary/30"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-neon mb-6">
              SPECIAL EVENT
            </h2>

            {/* Mohit Dudeja Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img
                src={mohitDudeja}
                alt="Mohit Dudeja - Stand Up Comedian"
                className="w-64 sm:w-80 mx-auto rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/20"
              />
            </motion.div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Mic className="w-6 h-6 text-accent" />
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-accent">
                MOHIT DUDEJA
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Stand Up Comedian
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-foreground/80">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm border border-accent/30">
                <Clock className="w-4 h-4 text-accent" />
                11th February • 2:30 PM
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm border border-accent/30">
                <MapPin className="w-4 h-4 text-accent" />
                Amphitheater
              </span>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="text-2xl"
                >
                  ✨
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurpriseEvent;
