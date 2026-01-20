import EventPageLayout from "@/components/EventPageLayout";

const TableTennis = () => {
  return (
    <EventPageLayout
      title="TT Supreme"
      subtitle="Table Tennis Championship"
      icon="🏓"
      dates="5th – 8th February"
      fee="Singles: ₹100 | Doubles: ₹200"
      teamSize="Singles / Doubles"
      themeColor="from-orange-500 to-red-500"
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
          title: "Categories",
          items: [
            "Men's Singles",
            "Women's Singles",
            "Doubles (subject to participation)",
          ],
        },
        {
          title: "Match Format",
          items: [
            "Best of 3 sets",
            "11 points per set",
            "Rally point scoring",
          ],
        },
        {
          title: "Rules",
          items: [
            "Service changes every 2 points",
            "At 10–10 → win by 2 points",
            "Ends change after each set",
          ],
        },
        {
          title: "Equipment",
          items: [
            "Players bring own racquets",
            "Balls & tables provided",
          ],
        },
        {
          title: "Discipline",
          items: [
            "Misconduct → Disqualification",
            "Referee's decision final",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Report 10–15 minutes early",
            "Late arrival → walkover",
          ],
        },
      ]}
    />
  );
};

export default TableTennis;
