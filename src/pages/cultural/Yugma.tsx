import EventPageLayout from "@/components/EventPageLayout";

const Yugma = () => {
  return (
    <EventPageLayout
      title="Yugma"
      subtitle="Duet Dance Competition – Two Souls, One Rhythm"
      icon="💃"
      dates="9th February 2026"
      fee="₹100 per participant"
      teamSize="2 dancers"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-violet-500 to-fuchsia-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Sushant Bharti", phone: "9354075030" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 11:00 AM onwards",
            "Theme: Semi-Classical",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 5 minutes",
            "Props allowed",
            "Soundtrack submission mandatory",
            "Judges' decision is final",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID & BR Card",
            "Obscene content leads to disqualification",
          ],
        },
      ]}
    />
  );
};

export default Yugma;
