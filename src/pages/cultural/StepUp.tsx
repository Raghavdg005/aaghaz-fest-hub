import EventPageLayout from "@/components/EventPageLayout";

const StepUp = () => {
  return (
    <EventPageLayout
      title="Step Up"
      subtitle="Solo Dance Competition"
      icon="💃"
      dates="9th February"
      fee="₹100"
      venue="Sanjeevani Hall"
      themeColor="from-pink-500 to-purple-600"
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
            "Time limit: 4 minutes",
            "Theme: Western/Freestyle",
            "Solo performance only",
          ],
        },
        {
          title: "Props & Music",
          items: [
            "Props allowed",
            "Music track to be submitted in advance",
            "Backup track recommended",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Choreography & creativity",
            "Expression & stage presence",
            "Synchronization with music",
          ],
        },
      ]}
    />
  );
};

export default StepUp;
