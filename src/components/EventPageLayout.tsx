import { motion } from "framer-motion";
import { ArrowLeft, Phone, ExternalLink, Calendar, Users, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Contact {
  name: string;
  phone: string;
}

interface RuleSection {
  title: string;
  items: string[];
}

interface EventPageLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  dates: string;
  fee: string;
  teamSize?: string;
  venue?: string;
  themeColor: string; // Tailwind gradient classes
  bgPattern?: string;
  ruleSections: RuleSection[];
  contacts: Contact[];
  registrationLink: string;
  backLink: string;
  backLabel: string;
}

const EventPageLayout = ({
  title,
  subtitle,
  icon,
  dates,
  fee,
  teamSize,
  venue,
  themeColor,
  bgPattern,
  ruleSections,
  contacts,
  registrationLink,
  backLink,
  backLabel,
}: EventPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Themed Background Pattern */}
        <div className={`absolute inset-0 opacity-20 ${bgPattern || 'bg-animated'}`} />
        <div className={`absolute inset-0 bg-gradient-to-b ${themeColor} opacity-10`} />
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 left-10 text-6xl opacity-20 hidden lg:block"
        >
          {icon}
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-6xl opacity-20 hidden lg:block"
        >
          {icon}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-8xl sm:text-9xl block mb-6"
            >
              {icon}
            </motion.span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              {subtitle}
            </p>

            {/* Quick Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card px-6 py-3 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{dates}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card px-6 py-3 flex items-center gap-2"
              >
                <IndianRupee className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">{fee}</span>
              </motion.div>
              {teamSize && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card px-6 py-3 flex items-center gap-2"
                >
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{teamSize}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-center mb-12 text-neon"
          >
            Rules & Regulations
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {ruleSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 border border-white/10 hover:border-primary/30 transition-all`}
              >
                <h3 className="font-display text-xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${themeColor} flex items-center justify-center text-white text-sm font-bold`}>
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center border border-primary/20"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Contact Coordinators
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-all group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="font-medium text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <div className={`inline-block p-1 rounded-2xl bg-gradient-to-r ${themeColor}`}>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background rounded-xl hover:bg-transparent transition-all text-lg font-display font-bold"
            >
              <ExternalLink className="w-6 h-6" />
              Register Now
            </a>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            Click to open registration form
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPageLayout;
