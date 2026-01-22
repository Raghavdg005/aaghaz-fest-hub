import EventPageLayout from "@/components/EventPageLayout";

const Chess = () => {
  return (
    <EventPageLayout
      title="Chess"
      subtitle="Chess Championship"
      icon="♟️"
      dates="5th – 8th February 2026"
      fee="₹500 per team"
      teamSize="Team of 5 players"
      themeColor="from-slate-600 to-zinc-800"
      backLink="/sports"
      backLabel="Back to Sports"
      registrationLink="https://forms.gle/p4Vc7suxnNLh2TWd8"
      contacts={[
        { name: "Aadi Joshi", phone: "9625570511" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
        { name: "Harshit Trikha", phone: "7302665724" },
        { name: "Aaryan Gupta", phone: "9313060518" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Team event (5 players)",
            "10+5 time control (Rapid format)",
          ],
        },
        {
          title: "Rules",
          items: [
            "FIDE rules applicable",
            "No draw claims by repetition",
            "No outside communication allowed",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Electronic devices strictly prohibited",
            "Silence must be maintained",
            "Arbiter's decision is final",
          ],
        },
      ]}
    />
  );
};

export default Chess;
