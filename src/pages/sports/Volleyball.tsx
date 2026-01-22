import EventPageLayout from "@/components/EventPageLayout";

const Volleyball = () => {
  return (
    <EventPageLayout
      title="Volleyball"
      subtitle="Volleyball Championship"
      icon="🏐"
      dates="5th – 8th February 2026"
      fee="₹500 per team"
      teamSize="6 on court (12 max)"
      themeColor="from-yellow-500 to-orange-500"
      backLink="/sports"
      backLabel="Back to Sports"
      registrationLink="https://forms.gle/p4Vc7suxnNLh2TWd8"
      contacts={[
        { name: "Aadi Joshi", phone: "9625570511" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
        { name: "Priyanshu Bharti", phone: "8126271650" },
        { name: "Vedanshi Panwar", phone: "8791945816" },
      ]}
      ruleSections={[
        {
          title: "Match Format",
          items: [
            "Best of 3 sets",
            "25 points per set",
            "Rally scoring system",
          ],
        },
        {
          title: "Team Composition",
          items: [
            "6 players on court",
            "Maximum 12 players per team",
            "Libero allowed",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Unsportsmanlike conduct → Disqualification",
            "Referee's decision is final",
          ],
        },
      ]}
    />
  );
};

export default Volleyball;
