import { motion } from "framer-motion";
import { Trophy, Phone, Calendar, Users, IndianRupee, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sportsEvents = [
  { name: "7v7 Football", icon: "⚽", date: "5–8 Feb", fee: "₹500/team", format: "Knockout Tournament", slug: "football" },
  { name: "TT Supreme", icon: "🏓", date: "5–8 Feb", fee: "₹100/₹200", format: "Singles & Doubles", slug: "table-tennis" },
  { name: "Hoops", icon: "🏀", date: "5–8 Feb", fee: "₹500/team", format: "League + Knockout", slug: "basketball" },
  { name: "Shuttle", icon: "🏸", date: "5–8 Feb", fee: "₹100/₹200", format: "Knockout", slug: "badminton" },
  { name: "Athletics", icon: "🏃", date: "8 Feb", fee: "₹100/₹500", format: "Track & Field", slug: "athletics" },
  { name: "Pawn", icon: "♟️", date: "5–8 Feb", fee: "₹500/team", format: "Team Chess", slug: "chess" },
  { name: "Volley", icon: "🏐", date: "5–8 Feb", fee: "₹500/team", format: "Best of 3", slug: "volleyball" },
  { name: "Goti", icon: "🎯", date: "5–8 Feb", fee: "₹100", format: "Knockout Singles", slug: "carrom" },
];

const Sports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
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
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-accent mb-6">
              <Trophy className="w-4 h-4" />
              Compete. Conquer. Champion.
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-neon-gold mb-4">
              Sports Zone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of competition across 8+ exciting sports events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {sportsEvents.map((event, index) => (
              <Link
                key={event.name}
                to={`/sports/${event.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 sm:p-8 border border-accent/20 hover:border-accent/50 transition-all group h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{event.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-accent mb-2 group-hover:text-neon-gold transition-colors">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <IndianRupee className="w-4 h-4" /> {event.fee}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-primary mb-2 font-semibold">{event.format}</p>
                  <p className="text-sm text-muted-foreground">Click to view full rules & register →</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <a
            href="https://drive.google.com/file/d/1J7TlaT0xOUQBvM7-rytln7icJGvqq5hR/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Download Sports Brochure
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Sports;
