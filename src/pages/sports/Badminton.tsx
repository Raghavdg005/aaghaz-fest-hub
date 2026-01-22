import EventPageLayout from "@/components/EventPageLayout";

const Badminton = () => {
  return (
    <EventPageLayout
      title="Badminton"
      subtitle="Badminton Championship"
      icon="🏸"
      dates="5th – 8th February 2026"
      fee="Singles: ₹100 | Doubles: ₹200"
      teamSize="Singles / Doubles"
      themeColor="from-cyan-500 to-blue-600"
      backLink="/sports"
      backLabel="Back to Sports"
      registrationLink="https://forms.gle/p4Vc7suxnNLh2TWd8"
      contacts={[
        { name: "Aadi Joshi", phone: "9625570511" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
        { name: "Priyanshu Bharti", phone: "8126271650" },
        { name: "Aaryan Gupta", phone: "9313060518" },
      ]}
      ruleSections={[
        {
          title: "Categories",
          items: [
            "Men's Singles",
            "Women's Singles",
            "Men's Doubles",
            "Women's Doubles",
          ],
        },
        {
          title: "Match Format",
          items: [
            "Early rounds: 11 points per set",
            "Finals: 21 points per set",
            "Best of 3 sets",
          ],
        },
        {
          title: "Equipment",
          items: [
            "Players must bring own racquets",
            "Shuttle provided by organizers",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Late arrival → Walkover",
            "Misconduct → Disqualification",
            "Referee's decision is final",
          ],
        },
      ]}
    />
  );
};

export default Badminton;
