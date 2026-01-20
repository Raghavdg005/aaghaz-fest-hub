import EventPageLayout from "@/components/EventPageLayout";

const Badminton = () => {
  return (
    <EventPageLayout
      title="Shuttle"
      subtitle="Badminton Championship"
      icon="🏸"
      dates="5th – 8th February"
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
            "Initial rounds: Best of 3 (11 points)",
            "Finals: Best of 3 (21 points)",
          ],
        },
        {
          title: "Rules",
          items: [
            "Rally point system",
            "2-point lead required to win",
            "60-second break between sets",
          ],
        },
        {
          title: "Equipment",
          items: [
            "Players bring own racquets",
            "Shuttle provided by organizers",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Report 15 minutes early",
            "Late arrival may result in walkover",
          ],
        },
      ]}
    />
  );
};

export default Badminton;
