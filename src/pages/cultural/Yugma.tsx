import EventPageLayout from "@/components/EventPageLayout";

const Yugma = () => {
  return (
    <EventPageLayout
      title="Yugma"
      subtitle="Duet Dance Competition"
      icon="💃"
      dates="9th February"
      fee="₹100 per participant"
      teamSize="2 dancers"
      themeColor="from-violet-500 to-fuchsia-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Performance",
          items: [
            "Time limit: 5 minutes",
            "Theme: Semi-classical",
            "Duet performance only",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Costumes and props allowed",
            "Music track to be submitted in advance",
            "Synchronization between partners is key",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Choreography & coordination",
            "Expression & classical elements",
            "Overall presentation",
          ],
        },
      ]}
    />
  );
};

export default Yugma;
