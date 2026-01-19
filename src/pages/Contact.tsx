import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
  {
    name: "Abhishek Kumar Singh",
    role: "Organising Secretary",
    phone: "9756950083",
    isLead: true,
  },
  {
    name: "Priyanshu",
    role: "Co-Organising Secretary",
    phone: "9318316865",
    isLead: true,
  },
  {
    name: "Aadi Joshi",
    role: "Sports Coordinator",
    phone: "9625570511",
    isLead: false,
  },
  {
    name: "Aarshi Agrawal",
    role: "Sports Coordinator",
    phone: "8630428820",
    isLead: false,
  },
  {
    name: "Kanisha Mirg",
    role: "Cultural Coordinator",
    phone: "",
    isLead: false,
  },
  {
    name: "Aamir Hamid",
    role: "Cultural Coordinator",
    phone: "",
    isLead: false,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
              <Phone className="w-4 h-4" />
              We're here to help
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-neon mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out to our organizing team for any queries
            </p>
          </motion.div>

          {/* Lead Contacts */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {contacts
              .filter((c) => c.isLead)
              .map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 border-neon text-center"
                >
                  <h3 className="font-display text-xl font-bold text-accent mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{contact.role}</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    {contact.phone}
                  </a>
                </motion.div>
              ))}
          </div>

          {/* Other Contacts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {contacts
              .filter((c) => !c.isLead)
              .map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                    {contact.name}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2">{contact.role}</p>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-primary text-xs hover:text-primary/80 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  )}
                </motion.div>
              ))}
          </div>

          {/* Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Map */}
              <div className="glass-card p-6 border border-white/10">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Venue Location
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4966!3d28.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzI3LjgiTiA3N8KwMjknNDcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GIMS Location"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/BNw5VZFidbhWuPCU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-outline w-full py-3 flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>

              {/* Social & Instagram */}
              <div className="glass-card p-6 border border-white/10">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest announcements and behind-the-scenes content!
                </p>
                <div className="aspect-square rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center mb-4">
                  <div className="text-center p-8">
                    <Instagram className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-display text-lg">@gims_aaghaz</p>
                    <p className="text-muted-foreground text-sm">Official AAGHAZ 2026</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/reel/DNdD0Vxz4E0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon w-full py-3 flex items-center justify-center gap-2 text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  Watch Promo Reel
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
