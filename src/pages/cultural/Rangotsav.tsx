import EventPageLayout from "@/components/EventPageLayout";

const Rangotsav = () => {
  return (
    <EventPageLayout
      title="Rangotsav"
      subtitle="Rangoli Making Competition"
      icon="🎨"
      dates="9th February 2026"
      fee="₹100"
      teamSize="Maximum 4 members"
      venue="Foyer Area, Academic Block"
      themeColor="from-pink-500 to-rose-600"
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
            "Time: 10:00 AM – 12:00 PM",
            "Theme: To be announced on Instagram",
          ],
        },
        {
          title: "Rules",
          items: [
            "Team of maximum 4 members",
            "Time limit: 90 minutes",
            "No stencils, stickers, or artificial décor",
            "No spray paints or chemicals",
            "Colours provided by college",
            "Rangoli must be floor-based",
            "Plagiarism strictly prohibited",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default Rangotsav;
