import EventPageLayout from "@/components/EventPageLayout";

const Chromark = () => {
  return (
    <EventPageLayout
      title="Chromark"
      subtitle="On-the-Spot Drawing Competition"
      icon="🖌️"
      dates="9th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="LT-1 / LT-2, Academic Block"
      themeColor="from-blue-500 to-cyan-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 1:00 PM – 3:00 PM",
            "Theme: Announced on the spot",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 1 hour",
            "Open media (any medium allowed)",
            "Participants must bring their own materials",
            "Sheets provided by college",
            "Artwork must be presented before judges",
            "Cleanliness must be maintained",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID & BR Card",
          ],
        },
      ]}
    />
  );
};

export default Chromark;
