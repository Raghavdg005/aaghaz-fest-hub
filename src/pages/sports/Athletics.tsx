import EventPageLayout from "@/components/EventPageLayout";

const Athletics = () => {
  return (
    <EventPageLayout
      title="Athletics"
      subtitle="Track & Field Events"
      icon="🏃"
      dates="8th February"
      fee="Individual: ₹100 | Relay/Tug of War: ₹500"
      teamSize="Individual / Team"
      themeColor="from-red-500 to-rose-600"
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
          title: "Track Events",
          items: [
            "100m Sprint",
            "200m Sprint",
            "400m Race",
            "800m Race (Men only)",
            "Relay Race",
          ],
        },
        {
          title: "Field Events",
          items: [
            "Shot Put",
            "Long Jump",
          ],
        },
        {
          title: "Team Events",
          items: [
            "Tug of War",
          ],
        },
        {
          title: "General Rules",
          items: [
            "Standard athletics rules apply",
            "False start → disqualification",
            "Best attempt counted for field events",
            "Proper athletic wear mandatory",
          ],
        },
      ]}
    />
  );
};

export default Athletics;
