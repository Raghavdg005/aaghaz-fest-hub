import EventPageLayout from "@/components/EventPageLayout";

const SketchSprint = () => {
  return (
    <EventPageLayout
      title="Sketch Sprint"
      subtitle="Relay Art Competition"
      icon="✏️"
      dates="10th February 2026"
      fee="₹100 per participant"
      teamSize="Team of 3"
      venue="LT-1 / LT-2, Academic Block"
      themeColor="from-teal-500 to-emerald-600"
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
            "Time: 10:00 AM – 11:00 AM",
            "Theme: Announced on the spot",
          ],
        },
        {
          title: "Format",
          items: [
            "Time limit: 30 minutes",
            "Team of 3 participants",
            "Each team receives 3 sheets",
            "After every 2 minutes, sheets are exchanged",
            "Total 5 rounds (10 minutes per participant)",
            "Each team submits 3 artworks",
          ],
        },
        {
          title: "Judging",
          items: [
            "Judges' decision will be final",
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

export default SketchSprint;
