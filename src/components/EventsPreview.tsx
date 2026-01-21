import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy,
  Palette,
  Music,
  Drama,
  Sparkles,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const sportsEvents = [
  { name: "Football 7v7", icon: "⚽" },
  { name: "Basketball", icon: "🏀" },
  { name: "Badminton", icon: "🏸" },
  { name: "Table Tennis", icon: "🏓" },
  { name: "Chess", icon: "♟" },
  { name: "Athletics", icon: "🏃" },
];

const culturalClubs = [
  { name: "AMEYA", type: "Dance", icon: Music, color: "from-pink-500 to-purple-500" },
  { name: "MERAKI", type: "Fine Arts", icon: Palette, color: "from-blue-500 to-cyan-500" },
  { name: "AAROHA", type: "Music", icon: Music, color: "from-green-500 to-emerald-500" },
  { name: "DRISHYAM", type: "Drama", icon: Drama, color: "from-orange-500 to-red-500" },
  { name: "SPANDAN", type: "Literary", icon: Sparkles, color: "from-violet-500 to-purple-500" },
  { name: "STELLAR", type: "Fashion", icon: Sparkles, color: "from-amber-500 to-yellow-500" },
];

const EventsPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Sports Zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-neon-gold">
                  Sports Zone
                </h2>
                <p className="text-muted-foreground">Compete. Conquer. Champion.</p>
              </div>
            </div>
            <Link
              to="/sports"
              className="btn-gold text-sm py-3 px-6 flex items-center gap-2"
            >
              View All Sports
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Link to="/sports" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportsEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center border border-accent/20 hover:border-accent/50 transition-all cursor-pointer group"
              >
                <span className="text-4xl mb-3 block group-hover:animate-bounce">
                  {event.icon}
                </span>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {event.name}
                </h3>
              </motion.div>
            ))}
          </Link>
        </motion.div>

        {/* Cultural Zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-neon">
                  Cultural Zone
                </h2>
                <p className="text-muted-foreground">Express. Create. Inspire.</p>
              </div>
            </div>
            <Link
              to="/cultural"
              className="btn-neon text-sm py-3 px-6 flex items-center gap-2"
            >
              Explore Clubs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Link to="/cultural" className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {culturalClubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 sm:p-8 relative overflow-hidden group cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${club.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <club.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{club.type}</p>
                </div>
                <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
