import { motion } from "framer-motion";
import { Users, Crown } from "lucide-react";

const committee = [
  { name: "Abhishek Kumar Singh", role: "Organising Secretary", isLead: true },
  { name: "Priyanshu", role: "Co-Organising Secretary", isLead: true },
  { name: "Ashmit Khare", role: "Public Media Head", isLead: false },
  { name: "Kanisha Mirg", role: "Cultural Coordinator", isLead: false },
  { name: "Aamir Hamid", role: "Cultural Coordinator", isLead: false },
  { name: "Parthsarthi", role: "Academic Coordinator", isLead: false },
  { name: "Aadi Joshi", role: "Sports Coordinator", isLead: false },
  { name: "Aarshi Agrawal", role: "Sports Coordinator", isLead: false },
  { name: "Kunal Gola", role: "Logistics Head", isLead: false },
  { name: "Kushagra Saxena", role: "Management Head", isLead: false },
  { name: "Tanishka", role: "Management Head", isLead: false },
  { name: "Harshit Trikha", role: "Finance Head", isLead: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OrganisingCommittee = () => {
  const leads = committee.filter((m) => m.isLead);
  const members = committee.filter((m) => !m.isLead);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-animated opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            <Users className="w-4 h-4" />
            The Team Behind The Magic
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neon mb-4">
            Organising Committee
          </h2>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>

        {/* Lead Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {leads.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 sm:p-8 border-neon-gold min-w-[280px] text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                <Crown className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-accent mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-4 text-center border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrganisingCommittee;
