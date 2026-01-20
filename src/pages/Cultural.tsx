import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Calendar, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clubs = [
  {
    id: "ameya",
    name: "AMEYA",
    type: "Dance Club",
    icon: "💃",
    color: "from-pink-500 to-purple-500",
    events: [
      { name: "Step-Up", type: "Solo Dance", date: "9th Feb", fee: "₹100", slug: "step-up" },
      { name: "Yugma", type: "Duet Dance", date: "9th Feb", fee: "₹100/person", slug: "yugma" },
      { name: "Breakfree", type: "Group Dance", date: "10th Feb", fee: "₹100/person", slug: "breakfree" },
    ],
    contacts: [{ name: "Kanisha Mirg", phone: "Cultural Coordinator" }],
  },
  {
    id: "meraki",
    name: "MERAKI",
    type: "Fine Arts Club",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    events: [
      { name: "Rangotsav", type: "Rangoli Competition", date: "9th Feb", fee: "Free", slug: "rangotsav" },
      { name: "Art Alive", type: "Face Painting", date: "10th Feb", fee: "Free", slug: "art-alive" },
      { name: "Chromark", type: "On-Spot Drawing", date: "9th Feb", fee: "Free", slug: "chromark" },
      { name: "Sketch Sprint", type: "Relay Art", date: "10th Feb", fee: "Free", slug: "sketch-sprint" },
      { name: "Captured Creations", type: "Online Reel", date: "1-10th Feb", fee: "Free", slug: "captured-creations" },
      { name: "Galleria", type: "Art Exhibition", date: "11th Feb", fee: "Free", slug: "galleria" },
    ],
    contacts: [{ name: "Aamir Hamid", phone: "Cultural Coordinator" }],
  },
  {
    id: "aaroha",
    name: "AAROHA",
    type: "Music Club",
    icon: "🎵",
    color: "from-green-500 to-emerald-500",
    events: [
      { name: "Mic Drop", type: "Solo Singing", date: "10th Feb", fee: "₹100", slug: "mic-drop" },
      { name: "Synergy", type: "Group Singing", date: "9th Feb", fee: "₹100/person", slug: "synergy" },
      { name: "Soundscapes", type: "Instrumental Solo", date: "10th Feb", fee: "₹100", slug: "soundscapes" },
    ],
    contacts: [{ name: "Kanisha Mirg", phone: "Cultural Coordinator" }],
  },
  {
    id: "drishyam",
    name: "DRISHYAM",
    type: "Drama Club",
    icon: "🎭",
    color: "from-orange-500 to-red-500",
    events: [
      { name: "Plot Twist", type: "Short Film", date: "11th Feb", fee: "₹500/team", slug: "plot-twist" },
      { name: "Spotlight Tales", type: "Monologue/Mono Act", date: "10th Feb", fee: "₹100", slug: "spotlight-tales" },
    ],
    contacts: [{ name: "Aamir Hamid", phone: "Cultural Coordinator" }],
  },
  {
    id: "spandan",
    name: "SPANDAN",
    type: "Literary Club",
    icon: "📚",
    color: "from-violet-500 to-purple-500",
    events: [
      { name: "Cold War", type: "Debate", date: "10th Feb", fee: "₹100", slug: "cold-war" },
      { name: "Ha Ha Haveli", type: "Kavi Sammelan", date: "10th Feb", fee: "₹100", slug: "ha-ha-haveli" },
      { name: "No Notes No Mercy", type: "Declamation", date: "11th Feb", fee: "₹100", slug: "no-notes-no-mercy" },
      { name: "Visual Verse", type: "Online Poetry", date: "Result: 11th Feb", fee: "Free", slug: "visual-verse" },
    ],
    contacts: [{ name: "Parthsarthi", phone: "Academic Coordinator" }],
  },
  {
    id: "stellar",
    name: "STELLAR",
    type: "Fashion Club",
    icon: "👗",
    color: "from-amber-500 to-yellow-500",
    events: [
      { name: "AURA", type: "Fashion Show", date: "11th Feb", fee: "₹1000/team", slug: "aura" },
    ],
    contacts: [{ name: "Kanisha Mirg", phone: "Cultural Coordinator" }],
  },
];

const Cultural = () => {
  const [activeClub, setActiveClub] = useState(clubs[0].id);
  const selectedClub = clubs.find((c) => c.id === activeClub);

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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
              <Palette className="w-4 h-4" />
              Express. Create. Inspire.
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-neon mb-4">
              Cultural Zone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              6 clubs, 20+ events, unlimited creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Club Tabs */}
      <section className="py-8 sticky top-16 sm:top-20 z-40 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {clubs.map((club) => (
              <button
                key={club.id}
                onClick={() => setActiveClub(club.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeClub === club.id
                    ? "bg-primary text-primary-foreground"
                    : "glass-card hover:bg-white/10"
                }`}
              >
                <span>{club.icon}</span>
                <span className="font-display text-sm">{club.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Club Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            {selectedClub && (
              <motion.div
                key={selectedClub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Club Header */}
                <div className="text-center mb-12">
                  <span className="text-6xl mb-4 block">{selectedClub.icon}</span>
                  <h2 className="font-display text-4xl font-bold text-neon mb-2">
                    {selectedClub.name}
                  </h2>
                  <p className="text-muted-foreground">{selectedClub.type}</p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedClub.events.map((event, index) => (
                    <Link
                      key={event.name}
                      to={`/cultural/${event.slug}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card p-6 border border-white/10 hover:border-primary/50 transition-all relative overflow-hidden group h-full`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${selectedClub.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                        />

                        <div className="relative z-10">
                          <h3 className="font-display text-xl font-bold text-foreground mb-1">
                            {event.name}
                          </h3>
                          <p className="text-primary text-sm mb-4">{event.type}</p>

                          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span>{event.fee}</span>
                          </div>

                          <div className="flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">For queries:</p>
                  {selectedClub.contacts.map((contact) => (
                    <p key={contact.name} className="text-foreground">
                      {contact.name} - {contact.phone}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            href="https://drive.google.com/file/d/1s9lue2ucQPJiG5WCD4PrGDd-281_JHt8/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2 text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Download Cultural Brochure
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Cultural;
