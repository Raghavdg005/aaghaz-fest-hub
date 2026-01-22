import EventPageLayout from "@/components/EventPageLayout";

const Carrom = () => {
  return (
    <EventPageLayout
      title="Carrom"
      subtitle="Carrom Championship"
      icon="🎯"
      dates="5th – 8th February 2026"
      fee="₹100 per participant"
      teamSize="Singles"
      themeColor="from-amber-600 to-yellow-700"
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
            "Knockout tournament",
            "Singles event",
            "One-day event",
          ],
        },
        {
          title: "Rules",
          items: [
            "Standard carrom rules apply",
            "Queen cover mandatory",
            "Silence during play",
          ],
        },
      ]}
    />
  );
};

export default Carrom;
