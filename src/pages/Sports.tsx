import { motion } from "framer-motion";
import { Trophy, Phone, Calendar, Users, IndianRupee, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sportsEvents = [
  {
    name: "Football 7v7",
    icon: "⚽",
    date: "5–8 Feb",
    fee: "₹500/team",
    teamSize: "7 players + 4 substitutes",
    format: "Knockout Tournament",
    contacts: [
      { name: "Aadi Joshi", phone: "9625570511" },
      { name: "Aarshi Agrawal", phone: "8630428820" },
    ],
    rules: [
      "Two 15-minute halves with 5-minute break",
      "Standard 7-a-side rules apply",
      "Yellow card = 2-min suspension, Red = ejection",
      "Teams must report 30 mins before match",
    ],
  },
  {
    name: "Basketball",
    icon: "🏀",
    date: "6–9 Feb",
    fee: "₹400/team",
    teamSize: "5 players + 3 substitutes",
    format: "League + Knockout",
    contacts: [
      { name: "Priyanshu Bharti", phone: "8126271650" },
      { name: "Vedanshi Panwar", phone: "8791945816" },
    ],
    rules: [
      "4 quarters of 10 minutes each",
      "FIBA rules apply",
      "5 personal fouls = disqualification",
      "Team must have matching jerseys",
    ],
  },
  {
    name: "Table Tennis",
    icon: "🏓",
    date: "7–10 Feb",
    fee: "₹100 (Singles) | ₹200 (Doubles)",
    teamSize: "Singles / Doubles",
    format: "TT Supreme - Knockout",
    contacts: [
      { name: "Aadi Joshi", phone: "9625570511" },
      { name: "Aarshi Agrawal", phone: "8630428820" },
    ],
    rules: [
      "Best of 5 games (11 points each)",
      "Men / Women / Mixed Doubles categories",
      "Standard ITTF rules apply",
      "Players must bring own rackets",
    ],
  },
  {
    name: "Badminton",
    icon: "🏸",
    date: "8–11 Feb",
    fee: "₹100 (Singles) | ₹200 (Doubles)",
    teamSize: "Singles / Doubles",
    format: "Knockout",
    contacts: [
      { name: "Aadi Joshi", phone: "9625570511" },
      { name: "Aarshi Agrawal", phone: "8630428820" },
    ],
    rules: [
      "Best of 3 games (21 points each)",
      "BWF rules apply",
      "Shuttlecocks provided by organizers",
      "15-minute warm-up before matches",
    ],
  },
  {
    name: "Athletics",
    icon: "🏃",
    date: "5–6 Feb",
    fee: "₹50/event",
    teamSize: "Individual",
    format: "Track & Field Events",
    contacts: [
      { name: "Priyanshu Bharti", phone: "8126271650" },
    ],
    rules: [
      "100m, 200m, 400m, relay events",
      "Shot put, long jump, high jump",
      "Age verification required",
      "Proper athletic wear mandatory",
    ],
  },
  {
    name: "Chess",
    icon: "♟",
    date: "9–10 Feb",
    fee: "₹100",
    teamSize: "Individual",
    format: "Swiss System",
    contacts: [
      { name: "Vedanshi Panwar", phone: "8791945816" },
    ],
    rules: [
      "15+10 rapid format",
      "FIDE rules apply",
      "Touch-move rule enforced",
      "No electronic devices allowed",
    ],
  },
  {
    name: "Volleyball",
    icon: "🏐",
    date: "6–8 Feb",
    fee: "₹400/team",
    teamSize: "6 players + 2 substitutes",
    format: "Knockout",
    contacts: [
      { name: "Aadi Joshi", phone: "9625570511" },
    ],
    rules: [
      "Best of 3 sets (25 points each)",
      "Rally scoring system",
      "6 rotations per set",
      "Team uniforms required",
    ],
  },
  {
    name: "Carrom",
    icon: "🎯",
    date: "10–11 Feb",
    fee: "₹50 (Singles) | ₹100 (Doubles)",
    teamSize: "Singles / Doubles",
    format: "Knockout",
    contacts: [
      { name: "Vedanshi Panwar", phone: "8791945816" },
    ],
    rules: [
      "Best of 3 boards",
      "25 points per board",
      "ICF rules apply",
      "Powder provided by organizers",
    ],
  },
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
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 border border-accent/20 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{event.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-accent mb-2">
                      {event.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <IndianRupee className="w-4 h-4" /> {event.fee}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" /> {event.teamSize}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-primary mb-2 font-semibold">{event.format}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {event.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-muted-foreground mb-2">Contact:</p>
                  <div className="flex flex-wrap gap-4">
                    {event.contacts.map((contact) => (
                      <a
                        key={contact.phone}
                        href={`tel:${contact.phone}`}
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        {contact.name}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
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
