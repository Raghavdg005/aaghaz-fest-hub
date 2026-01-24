import EventPageLayout from "@/components/EventPageLayout";

const Galleria = () => {
  return (
    <EventPageLayout
      title="Galleria"
      subtitle="Art Exhibition"
      icon="🖼️"
      dates="11th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="First Floor, Academic Block"
      themeColor="from-amber-500 to-orange-600"
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
            "Time: 10:00 AM – 2:00 PM",
            "Setup time: 1 hour",
            "Exhibition duration: 3 hours",
            "Two tables per team provided",
          ],
        },
        {
          title: "Rules",
          items: [
            "Open to all medical college students",
            "Artwork must be original",
            "Offensive content not allowed",
            "Organizers not responsible for loss or damage",
            "Judges' decision will be final",
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

export default Galleria;
