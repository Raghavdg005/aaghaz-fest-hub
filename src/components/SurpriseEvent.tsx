import { motion } from "framer-motion";
import { Sparkles, Gift } from "lucide-react";

const SurpriseEvent = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-animated" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
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
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <Gift className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-neon mb-4">
              SURPRISE EVENT
            </h2>
            
            <p className="text-xl sm:text-2xl text-accent font-display mb-4">
              11th February
            </p>
            
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg sm:text-xl text-muted-foreground italic"
            >
              "Expect the Unexpected!"
            </motion.p>

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
