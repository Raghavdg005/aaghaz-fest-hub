import EventPageLayout from "@/components/EventPageLayout";

const ArtAlive = () => {
  return (
    <EventPageLayout
      title="Art Alive"
      subtitle="Face Painting Competition"
      icon="🎭"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual (with model)"
      venue="LT-1 / LT-2, Academic Block"
      themeColor="from-purple-500 to-indigo-600"
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
            "Time: 9:00 AM – 10:30 AM",
            "Theme: To be announced one day prior",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 1 hour",
            "Participant must bring a model",
            "Only skin-safe, non-toxic paints allowed",
            "No pre-drawn designs",
            "Cleanliness must be maintained",
            "Final presentation before judges",
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

export default ArtAlive;
