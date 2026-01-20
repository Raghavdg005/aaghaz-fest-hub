import EventPageLayout from "@/components/EventPageLayout";

const Chess = () => {
  return (
    <EventPageLayout
      title="Pawn"
      subtitle="Chess Championship"
      icon="♟️"
      dates="5th – 8th February"
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
            "Team of 5 players",
            "Fixed board order",
            "All 5 boards play simultaneously",
          ],
        },
        {
          title: "Time Control",
          items: [
            "10+5 (Rapid format)",
            "10 minutes base time",
            "5 seconds increment per move",
          ],
        },
        {
          title: "Rules",
          items: [
            "FIDE rules apply",
            "No 50-move rule",
            "No threefold repetition claim",
            "No talking during match",
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
